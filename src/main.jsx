// ============================================================
// ENTRY POINT — src/main.jsx
//
// This is the first file React executes. It mounts the entire
// application into the #root <div> in index.html.
//
// HashRouter is used instead of BrowserRouter because GitHub Pages
// does not support server-side routing. HashRouter keeps the route
// in the URL hash (e.g. /#/about) which works without a server.
// ============================================================

import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import App from './App';
import './index.css';  // global styles + Tailwind

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* HashRouter wraps the whole app so any component can use
        useNavigate / useLocation / Link from react-router-dom */}
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>,
);
