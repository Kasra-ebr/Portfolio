import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)


// Build command:
// npm run build
// Build output:
// dist
// Root directory:
// .
// Build comments:
// Enabled