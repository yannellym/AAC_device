import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/Navbar';
import Login from './routes/Login';
import Signup from './routes/Signup';
import Upload from './routes/Upload';
import Profile from './routes/Profile';
import Home from './routes/Home';
import GlobalStyles from './styles/GlobalStyles';
import Error from './routes/Error';

function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <NavBar />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="welcome" element={<Home />} />
        <Route path="upload" element={<Upload />} />
        <Route path="profile" element={<Profile />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
