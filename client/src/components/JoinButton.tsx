import { useContext } from 'react'
import { RoomContext } from '../Context/RoomContext'

const JoinButton: React.FC = () => {
    const { ws } = useContext(RoomContext)
    const joinRoom = () => {
        ws.emit("join-room")
    }
    return (
        <button 
        onClick={joinRoom}
        className="bg-rose-400 py-2 px-8 rounded-lg text-xl hover:bg-rose-600 text-white">
            Start New Meeting
        </button>
    )
}

export default JoinButton
