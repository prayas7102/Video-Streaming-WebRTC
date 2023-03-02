import { createContext, useEffect } from 'react'
import SocketIO from 'socket.io-client'

const PORT = 'http://localhost:8080';
const ws = SocketIO(PORT);

export const RoomContext = createContext<null | any>(null);

export const RoomProvider: React.FunctionComponent = ({ children }) => {
  const enterRoom = ({ roomId }: { roomId: any }) => {
    console.log({ roomId })
  }
  useEffect(() => {
    // when room-created is emitted from backend:
    ws.on("room-created", enterRoom)
  })
  return (<RoomContext.Provider value={{ ws }}>{children}</RoomContext.Provider>)
}