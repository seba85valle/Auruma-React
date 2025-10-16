import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'   // 👈 agregar
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter basename={import.meta.env.BASE_URL}>  
    <App />
  </BrowserRouter>
)
