/*global chrome*/

import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';


const Popup = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    chrome.runtime.sendMessage({ action: 'injectIframe' });
  };

  return (
    <div style={{ width: '300px', padding: '10px' }}>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Popup;

ReactDOM.render(<Popup />, document.getElementById('popup-root'));
