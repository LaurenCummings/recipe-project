import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import GlobalState from './contexts/GlobalContext.jsx';
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <StrictMode>
      <GlobalState>
        <App /> 
      </GlobalState>
    </StrictMode>
  </BrowserRouter>
)
