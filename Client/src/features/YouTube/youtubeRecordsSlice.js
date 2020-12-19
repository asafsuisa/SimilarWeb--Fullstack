import { createSlice } from '@reduxjs/toolkit';

export const youtubeRecordsSlice = createSlice({
  name: 'youtubeRecords',
  initialState: {
    currentRecord: {},
    youtubeRecordsList: []
  },
  reducers: {
    updateRecordToNextSong: (state) => {
      if (state.youtubeRecordsList.length > 0) {
        state.currentRecord = state.youtubeRecordsList[0];
      }
    },
    addRecord: (state, action) => {
      state.youtubeRecordsList.push(action.payload);
      if (state.youtubeRecordsList.length === 1) {
        state.currentRecord = state.youtubeRecordsList[0];
      }
    },
    removeRecordFormList: (state) => {
      state.youtubeRecordsList.shift();
    },
    setInitalRecordsList: (state, action) => {
      state.youtubeRecordsList = action.payload;
    },
  },
});

export const { addRecord, updateRecordToNextSong, removeRecordFormList, setInitalRecordsList } = youtubeRecordsSlice.actions;

export const selectCurrentRecord = state => state.youtubeRecords.currentRecord;

export const selectRecordsList = state => state.youtubeRecords.youtubeRecordsList;

export default youtubeRecordsSlice.reducer;
