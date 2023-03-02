import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { RoomProvider } from './Context/RoomContext'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css'
import Home from './components/Home';
import Room from './components/Room';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <RoomProvider>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/room/:id' element={<Room/>}/>
        </Routes>
        {/* <App /> */}
      </RoomProvider>
    </BrowserRouter>

  </React.StrictMode>,
)
