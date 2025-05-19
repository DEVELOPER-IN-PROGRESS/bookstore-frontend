import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { GoogleOAuthProvider } from '@react-oauth/google';
import ContextShare from './context/contextShare.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <GoogleOAuthProvider clientId='773063117569-dedv76ogfo1hehd6kpccpifqbs6867av.apps.googleusercontent.com'>
      <ContextShare>
         <App />
      </ContextShare>
      </GoogleOAuthProvider>
    </BrowserRouter>
  </StrictMode>
)
