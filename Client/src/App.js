import React, { useEffect } from 'react';
import { RecordsList } from 'features/YouTube/RecordsList/RecordsList';
import { YouTubePlayer } from 'features/YouTube/Player/YoutubePlayer';
import socketIOClient from "socket.io-client";
import { SocketContext } from 'utils/SocketContext';
import styles from './App.module.scss';

function App() {
  const ENDPOINT = process.env.REACT_APP_API;
  let socket = socketIOClient(ENDPOINT);
  useEffect(() => {
    socket.on('connect', () => {
      socket.emit('getItems');
    });
    return () => socket.disconnect();
  }, []);

  return (
    <SocketContext.Provider value={socket}>
      <div className={styles.mainContainer}>
        <div className={styles.column}>
          <RecordsList />
        </div>
        <div className={styles.column}>
          <YouTubePlayer />
        </div>
      </div>
    </SocketContext.Provider>

  );
}

export default App;
