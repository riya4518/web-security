import React, { useState } from 'react';
import '../styles/ReflectedXss.css';

const ReflectedXss = () => {
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Enhanced script detection
    if (/<script\b[^>]*>([\s\S]*?)<\/script>/gi.test(input)) {
      alert('Script detected!'); // Show alert for demo purposes
    }

    // Update the URL to reflect the input (for demonstration purposes)
    window.history.replaceState(null, '', `?input=${encodeURIComponent(input)}`);
  };

  return (
    <div className="reflected-xss-container">
      <h1 className="reflected-xss-h1">Reflected XSS</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="xss-input">
          Input:
          <input
            id="xss-input"
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="reflected-xss-input"
            aria-describedby="xss-description"
          />
        </label>
        <button type="submit" className="reflected-xss-button">Submit</button>
      </form>
      <p className="reflected-xss-p">Output:</p>
      <div 
        className="reflected-xss-output" 
        dangerouslySetInnerHTML={{ __html: input }} 
        aria-live="polite" // Accessibility improvement
      />
    </div>
  );
};

export default ReflectedXss;
