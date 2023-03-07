import { createContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Peer from "peerjs"
import SocketIO from 'socket.io-client'
import { v4 as uuidV4 } from "uuid";

const PORT = 'http://localhost:8080';

// client getting connected to server
// triggering io.on("connection" on server
const ws = SocketIO(PORT);

export const RoomContext = createContext<null | any>(null);

export const RoomProvider: React.FunctionComponent = ({ children }: { children: any }) => {

  const navigate = useNavigate();
  const [me, setMe] = useState<Peer>();

  interface Room {
    roomId: string;
    peerId: string;
  }

  const enterRoom = ({ roomId, peerId }: Room) => {
    console.log("roomId: ",roomId);
    navigate(`/room/${roomId}`);
  }

  const getUsers = ({participants}:{participants:string[]}) => {
    console.log("participants: ", participants)
  }

  useEffect(() => {
    const meId = uuidV4();
    const peerId = new Peer(meId);
    setMe(peerId);

    // when room-created is emitted from backend:
    ws.on("room-created", enterRoom);
    // when get-users is emitted from backend:
    ws.on("get-users", getUsers);

  }, []);

  return (
    <RoomContext.Provider value={{ ws, me }}>
      {children}
    </RoomContext.Provider>)
}