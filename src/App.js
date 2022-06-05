import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/Navbar';
import Upload from './routes/Upload';
import Profile from './routes/Profile';
import Home from './routes/Home';
import GlobalStyles from './styles/GlobalStyles';
import Welcome from './routes/Welcome';
import Error from './routes/Error';

function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="welcome" element={<Welcome />} />
        <Route path="upload" element={<Upload />} />
        <Route path="profile" element={<Profile />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
