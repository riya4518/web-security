import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import DomXss from './components/DomXss';
import StoredXss from './components/StoredXss';
import ReflectedXss from './components/ReflectedXss';
import Home from './components/home'; // Ensure the path and filename are correct
import './App.css'; // Ensure this path is correct

function App() {
  return (
    <Router>
      <div className="app-container">
        <main className="app-main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dom-xss" element={<DomXss />} />
            <Route path="/stored-xss" element={<StoredXss />} />
            <Route path="/reflected-xss" element={<ReflectedXss />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
