import { useState, useEffect } from 'react'
import SocketIO from 'socket.io-client'
import JoinButton from './JoinButton';

const ws = 'http://localhost:8080';

function Home() {
  useEffect(() => {
    SocketIO(ws)
  }, [])
  const [count, setCount] = useState(0)

  return (
    <div className="flex items-center justify-center  ">
      <JoinButton/>
    </div>
  )
}

export default Home
