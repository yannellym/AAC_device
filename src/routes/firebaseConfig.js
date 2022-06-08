// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

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
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

const provider = new GoogleAuthProvider();

export const signInWithGoogle = () => {
  signInWithPopup(auth, provider)
    .then((res) => {
      const name = res.user.displayName;
      const { email } = res.user;
      const profilePic = res.user.photoURL;
      localStorage.setItem('name', name);
      localStorage.setItem('email', email);
      localStorage.setItem('profilePic', profilePic);
      window.location = 'home';
    })
    .catch((error) => {
      console.log(error);
    });
};

export const googleSignOut = () => {
  auth.signOut()
    .then(() => {
      console.log('Signout Succesfull');
      window.location = '/';
    }, (error) => {
      console.log('Signout Failed', error);
    });
};
