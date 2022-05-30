import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/Navbar';
import Upload from './pages/Upload';
import Profile from './pages/Profile';
import Home from './pages/Home';
import GlobalStyles from './styles/GlobalStyles';

function App() {
  return (
    <Router>
      <div>
        <GlobalStyles />
        <NavBar />
        <Upload />
        <Routes>
          <Route exact path="/" component={Home} />
          <Route exact path="/upload" component={Upload} />
          <Route exact path="/profile" component={Profile} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
