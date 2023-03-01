import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { RoomProvider } from './Context/RoomContext'
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RoomProvider>
      <App />
    </RoomProvider>
  </React.StrictMode>,
)
