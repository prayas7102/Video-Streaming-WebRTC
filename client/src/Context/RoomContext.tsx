import { createContext } from 'react'
import SocketIO from 'socket.io-client'

const WS = 'http://localhost:8080';
const ws = SocketIO(WS);

export const RoomContext = createContext<null | any>(null);

export const RoomProvider: React.FunctionComponent = ({ children }) => {
  return (<RoomContext.Provider value={{ ws }}>{children}</RoomContext.Provider>)
}