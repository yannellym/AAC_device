import { useEffect, useState } from 'react';
import uuid from 'react-uuid';

// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, updateProfile } from 'firebase/auth';
import { getDownloadURL, getStorage, ref, uploadBytes } from 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyB1s5iYhH5m9XNebIdEJEwkoVtvM8XuQa4',
  authDomain: 'polly-speech.firebaseapp.com',
  projectId: 'polly-speech',
  storageBucket: 'polly-speech.appspot.com',
  messagingSenderId: '275699629632',
  appId: '1:275699629632:web:a9c821ea13392fd7ea69a5',
  measurementId: 'G-4X3ELRGQZT',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
console.log(app);
const auth = getAuth();
const storage = getStorage();

export function signup(email, password) {
  return createUserWithEmailAndPassword(auth, email, password);
}

export function login(email, password) {
  return signInWithEmailAndPassword(auth, email, password);
}

export function logout() {
  return signOut(auth);
}

// Custom Hook
export function useAuth() {
  const [currentUser, setCurrentUser] = useState();

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => setCurrentUser(user));
    return unsub;
  }, []);

  return currentUser;
}

// Storage
export async function upload(file, currentUser, setLoading) {
  const fileRef = ref(storage, `/${currentUser.uid}/${currentUser.uid}${uuid()}.png`);

  setLoading(true);

  const snapshot = await uploadBytes(fileRef, file);
  console.log(snapshot);
  const photoURL = await getDownloadURL(fileRef);

  updateProfile(currentUser, { photoURL });

  setLoading(false);
  // eslint-disable-next-line no-alert
  alert('Uploaded file!');
}
