"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoomHandler = void 0;
const uuid_1 = require("uuid");
const RoomHandler = (socket) => {
    socket.on("create-room", () => {
        const roomId = (0, uuid_1.v4)();
        socket.join(roomId);
        socket.emit("room-created", { roomId });
        console.log("user created the room");
    });
    socket.on("join-room", ({ roomId }) => {
        console.log("user joined the room", roomId);
        socket.join(roomId);
    });
};
exports.RoomHandler = RoomHandler;
