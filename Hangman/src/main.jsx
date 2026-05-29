import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Home from './pages/homepage/homepage'

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <Home></Home>
  </StrictMode>,
)
