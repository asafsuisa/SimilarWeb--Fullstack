import { configureStore } from '@reduxjs/toolkit';
import youtubeRecordsSlice from 'features/YouTube/youtubeRecordsSlice';

export default configureStore({
  reducer: {
    youtubeRecords: youtubeRecordsSlice,
  },
});
