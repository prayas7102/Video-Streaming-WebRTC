import { createContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import SocketIO from 'socket.io-client'

const PORT = 'http://localhost:8080';

// client getting connected to server
const ws = SocketIO(PORT);

export const RoomContext = createContext<null | any>(null);

export const RoomProvider: React.FunctionComponent = ({ children }) => {
  
  const navigate = useNavigate();
  
  const enterRoom = ({ roomId }: { roomId: any }) => {
    console.log({ roomId });
    navigate(`/room/${roomId}`);
  }

  useEffect(() => {
    // when room-created is emitted from backend:
    ws.on("room-created", enterRoom);
  });

  return (<RoomContext.Provider value={{ ws }}>{children}</RoomContext.Provider>)
}