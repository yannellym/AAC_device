import React from 'react';
import { signInWithGoogle } from '../routes/firebaseConfig';

function GoogleButton() {
  return (
    <div>
      <button type="submit" onClick={signInWithGoogle}>
        Click me
      </button>
    </div>
  );
}

export default GoogleButton;
