import React, { useState } from 'react';
import '../styles/storedXss.css'; // Correct if file is named `storedXss.css`


const StoredXss = () => {
  const [input, setInput] = useState('');
  const [submittedInput, setSubmittedInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Set the submitted input
    setSubmittedInput(input);

    // For demonstration purposes only. Ensure to sanitize input in production.
  };

  return (
    <div className="stored-xss-container">
      <h2 className="stored-xss-h1">Stored XSS Demo</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="stored-input">
          Input:
          <input
            id="stored-input"
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="stored-xss-input"
            aria-describedby="stored-input-description"
          />
        </label>
        <button type="submit" className="stored-xss-button">Submit</button>
      </form>
      <p className="stored-xss-p">Submitted Input:</p>
      <div 
        className="stored-xss-output" 
        dangerouslySetInnerHTML={{ __html: submittedInput }} 
        aria-live="polite" // For accessibility
      />
      <iframe
        style={{ display: 'none' }}
        srcDoc={submittedInput}
        title="XSS Test"
        aria-hidden="true" // Hide from accessibility tools
      />
    </div>
  );
};

export default StoredXss;
