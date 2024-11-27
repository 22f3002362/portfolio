import React from 'react';
import ReactDOM from 'react-dom/client'; // React 18 uses 'react-dom/client'
import App from './App';
import './index.css'; // Ensure this exists or remove if unnecessary

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
