import React, { useState } from 'react';
import '../styles/DomXss.css';

function DomXss() {
  const [input, setInput] = useState('');
  const [submittedInput, setSubmittedInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedInput(input); // Store the input to display it

    // Enhanced script detection
    if (/<script\b[^>]*>([\s\S]*?)<\/script>/gi.test(input)) {
      alert('Script detected!'); // Show alert for demo purposes
    }
  };

  return (
    <div className="dom-xss-container">
      <h1 className="dom-xss-h1">DOM-based XSS</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="xss-input">
          Input:
          <input
            id="xss-input"
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="dom-xss-input"
            aria-describedby="xss-description"
          />
        </label>
        <button type="submit" className="dom-xss-button">Submit</button>
      </form>
      <p className="dom-xss-p">Output:</p>
      <div 
        className="dom-xss-output" 
        dangerouslySetInnerHTML={{ __html: submittedInput }} 
        aria-live="polite" // Accessibility improvement
      />
    </div>
  );
}

export default DomXss;
