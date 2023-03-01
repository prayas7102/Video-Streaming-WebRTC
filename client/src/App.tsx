import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import SocketIO from 'socket.io-client'
import './App.css'

const ws = 'http://localhost:8080';

function App() {
  useEffect(() => {
    SocketIO(ws)
  }, [])
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1>
    </div>
  )
}

export default App
