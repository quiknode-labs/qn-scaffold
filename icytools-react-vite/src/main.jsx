import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Apollo from './client';
import './index.css';

ReactDOM.createRoot(
  document.getElementById('root')
).render(
  <React.StrictMode>
    <Apollo>
      <App />
    </Apollo>
  </React.StrictMode>
)