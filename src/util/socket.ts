import { io } from 'socket.io-client';

const socket = io('https://server-last-82k6.onrender.com', {
  transports: ['websocket'],
  auth: {
    token: localStorage.getItem('accessToken'), 
  },
});

export default socket;