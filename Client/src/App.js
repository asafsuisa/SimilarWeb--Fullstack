import React, { useEffect } from 'react';
import { RecordsList } from 'features/YouTube/RecordsList/RecordsList';
import { YouTubePlayer } from 'features/YouTube/Player/YoutubePlayer';
import { socket, SocketContext } from 'utils/SocketContext';
import styles from './App.module.scss';

function App() {

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
