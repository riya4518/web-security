import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css'; // Global styles (if any)
import App from './App';
import reportWebVitals from './reportWebVitals';
import DomXss from './components/DomXss';
import ReflectedXss from './components/ReflectedXss';
import StoredXss from './components/StoredXss';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/dom-xss" element={<DomXss />} />
        <Route path="/reflected-xss" element={<ReflectedXss />} />
        <Route path="/stored-xss" element={<StoredXss />} />
      </Routes>
    </Router>
  </React.StrictMode>
);

reportWebVitals();
