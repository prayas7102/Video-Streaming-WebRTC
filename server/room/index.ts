import { Socket } from "socket.io";
import { v4 as uuidV4 } from "uuid";

export const RoomHandler = (socket: Socket) => {
    socket.on("create-room", () => {
        const roomId = uuidV4();
        socket.join(roomId)
        socket.emit("room-created", { roomId });
        console.log("user created the room")
    });
    socket.on("join-room", (roomId: String ) => {
        console.log("user joined the room", roomId);
        // socket.join(roomId.roomId);
    });
};