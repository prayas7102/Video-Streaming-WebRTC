"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoomHandler = void 0;
const uuid_1 = require("uuid");
const RoomHandler = (socket) => {
    let RoomMapping = {};
    const leaveRoom = ({ peerId, roomId }) => {
        let RoomMappingArray = RoomMapping[roomId];
        console.log("user-disconnected");
        // RoomMappingArray=RoomMappingArray.filter((id) => { return id !== peerId });
        // RoomMapping[roomId] = RoomMappingArray;
        // socket.to(roomId).emit("user-disconnected", peerId);
    };
    socket.on("create-room", () => {
        const roomId = (0, uuid_1.v4)();
        RoomMapping[roomId] = [];
        socket.emit("room-created", { roomId });
        console.log("user created the room");
    });
    socket.on("join-room", ({ roomId, peerId }) => {
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
exports.RoomHandler = RoomHandler;
