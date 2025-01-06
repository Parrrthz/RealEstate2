import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Auth0Provider } from "@auth0/auth0-react"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Auth0Provider
    domain="dev-mb1spz8pskzwxfg6.us.auth0.com"
    clientId="hhZ8NjqjbhLql717ncDzFuhfXD5SK3Ig"
    authorizationParams={{
      redirect_uri:"http://localhost:5173"
    }}
    audience="http://localhost:8000"
    >
    <App />
    </Auth0Provider>
  </StrictMode>,
)





// npm i @mantine/core @mantine/dates @mantine/form @mantine/hooks