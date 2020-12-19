import React, { useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  selectCurrentRecord,
  removeRecordFormList,
  updateRecordToNextSong
} from 'features/YouTube/youtubeRecordsSlice';
import YouTube from 'react-youtube';

export function YouTubePlayer() {
  const playerEl = useRef(null);
  const currentRecord = useSelector(selectCurrentRecord);
  const dispatch = useDispatch();

  useEffect(() => {
    if (currentRecord.videoId) {
      playerEl.current.getInternalPlayer().playVideo();
    }
  }, [currentRecord]);

  const handleStatusChanged = e => {
    if (e.data === 0) {
      playNextRecord();
    }
  };

  const playNextRecord = e => {
    dispatch(removeRecordFormList());
    dispatch(updateRecordToNextSong());
  }

  return (
    <div>
      <YouTube ref={playerEl}
        videoId={currentRecord.videoId}
        onStateChange={handleStatusChanged}
      />
    </div>
  );
}
