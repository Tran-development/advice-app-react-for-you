import React from 'react'
import ReactDOM from 'react-dom'
import {createRoot} from 'react-dom/client';

import App from './App'

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

// 👇️ if you use TypeScript, add non-null (!) assertion operator
// const root = createRoot(rootElement!);

root.render(
  <StrictMode>
    <App />
  </StrictMode>,
);