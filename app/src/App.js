import './assets/scss/index.scss';
import Navbar from './Layouts/Navbar';

import { useState, useEffect } from 'react';
import { io } from 'socket.io-client';
import Routes from './Router/Routes';
const socket = io.connect("http://192.168.1.14:8001", { transports: ['websocket']});



function App() {
  
  const [userConnection, setUserConnection] = useState(0);
  const [socketId, setSocketId] = useState("");
  
  useEffect(() => {
    socket.on("user connected", (userCount, socketId) => {
      console.log(userCount);
      setUserConnection(userCount);
      setSocketId(socketId);
    });
  }, []);
 
  return (
    <div className="App">
      <Navbar />
      <Routes />
    </div>
  );
}

export default App;
