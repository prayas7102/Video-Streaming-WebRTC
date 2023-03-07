import { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { RoomContext } from '../Context/RoomContext';

const Room = () => {
    const { id } = useParams();
    const { ws, me } = useContext(RoomContext);

    useEffect(() => {
        ws.emit("join-room", { roomId: id, peerId: me })
    }, [id, ws, me]);

    return (
        <div>

        </div>
    )
}

export default Room
