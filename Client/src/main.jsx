import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { GoogleOAuthProvider } from '@react-oauth/google'
import SmoothScroll from "./components/SmoothScroll.jsx";
import './index.css'
import App from './App.jsx'
import "lenis/dist/lenis.css";

createRoot(document.getElementById('root')).render(
  <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID}>
   <StrictMode>
  <BrowserRouter>
    <App />
  </BrowserRouter>
</StrictMode>
</GoogleOAuthProvider>
)
 
      