import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

import "bootstrap/dist/css"
import "bootstrap/dist/js/bootstrap.min.js"
import "@fortawesome/fortawesome-free/css/all.css"
import "bootstrap-icons/front/bootstrap-icons.css"

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
