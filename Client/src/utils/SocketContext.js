import React from 'react';
import socketIOClient from "socket.io-client";
const ENDPOINT = process.env.REACT_APP_API;

export const socket = socketIOClient(ENDPOINT);
export const SocketContext = React.createContext(socket);