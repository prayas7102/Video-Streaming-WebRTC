import { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { RoomContext } from '../Context/RoomContext';

const Room = () => {
    const { id } = useParams();
    const { ws } = useContext(RoomContext);

    useEffect(()=>{
        // console.log(id)
        ws.emit("join-room", id)
    },[id]);

    return (
        <div>

        </div>
    )
}

export default Room
