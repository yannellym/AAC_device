/* eslint-disable no-alert */
import React, { useRef, useState } from 'react';

import { signup, login, logout, useAuth } from './firebaseConfig';
import Profile from './ProfileTest';

export default function App() {
  const [loading, setLoading] = useState(false);
  const currentUser = useAuth();

  const emailRef = useRef();
  const passwordRef = useRef();

  async function handleSignup() {
    setLoading(true);
    try {
      await signup(emailRef.current.value, passwordRef.current.value);
    } catch {
      alert('Error!');
    }
    setLoading(false);
  }

  async function handleLogin() {
    setLoading(true);
    try {
      await login(emailRef.current.value, passwordRef.current.value);
    } catch {
      alert('Error!');
    }
    setLoading(false);
  }

  async function handleLogout() {
    setLoading(true);
    try {
      await logout();
    } catch {
      alert('Error!');
    }
    setLoading(false);
  }

  return (
    <div id="main">

      <div>Currently logged in as: { currentUser?.email } </div>

      {!currentUser
        && (
        <>
          <div className="fields">
            <form>
              <input ref={emailRef} placeholder="Email" autoComplete="email" />
              <input ref={passwordRef} type="password" autoComplete="email" placeholder="Password" />
            </form>
          </div>

          <button type="button" disabled={loading} onClick={handleSignup}>Sign Up</button>
          <button type="button" disabled={loading} onClick={handleLogin}>Log In</button>
        </>
        )}

      {currentUser
        && (
        <>
          <Profile />
          <button type="button" disabled={loading || !currentUser} onClick={handleLogout}>Log Out</button>
        </>
        )}

    </div>
  );
}
