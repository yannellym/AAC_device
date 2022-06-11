import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './routes/Login';
import Upload from './routes/Upload';
import Profile from './routes/Profile';
import Home from './routes/Home';
import GlobalStyles from './styles/GlobalStyles';
import Error from './routes/Error';

function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="home" element={<Home />} />
        <Route path="upload" element={<Upload />} />
        <Route path="profile" element={<Profile />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
