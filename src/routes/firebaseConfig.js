// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

const firebaseConfig = {
 
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
      console.log(name);
      console.log(email);
      console.log(profilePic);
      localStorage.setItem('name', name);
      localStorage.setItem('email', email);
      localStorage.setItem('profilePic', profilePic);
    })
    .catch((error) => {
      console.log(error);
    });
};
