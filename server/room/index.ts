import { Socket } from "socket.io";
import { v4 as uuidV4 } from "uuid";

interface JoinRoom {
    roomId: string;
    peerId: string;
}

export const RoomHandler = (socket: Socket) => {
    let RoomMapping: Record<string, String[]> = {};

    const leaveRoom = ({ peerId, roomId }: JoinRoom) => {
        let RoomMappingArray: String[] = RoomMapping[roomId];
        console.log("user-disconnected")
        // RoomMappingArray=RoomMappingArray.filter((id) => { return id !== peerId });
        // RoomMapping[roomId] = RoomMappingArray;
        // socket.to(roomId).emit("user-disconnected", peerId);
    }

    socket.on("create-room", () => {
        const roomId: string = uuidV4();
        RoomMapping[roomId] = [];
        socket.emit("room-created", { roomId });
        console.log("user created the room")
    });

    socket.on("join-room", ({ roomId, peerId }: JoinRoom) => {
        if (RoomMapping[roomId]) {
            console.log("user joined the room", roomId);
            RoomMapping[roomId].push(peerId);
            socket.join(roomId);
            socket.emit("get-users", {
                roomId,
                participants: RoomMapping[roomId]
            });
        }

        socket.on("disconnect", () => {
            console.log("user left the room");
            leaveRoom({ roomId, peerId });
        });
    });
};