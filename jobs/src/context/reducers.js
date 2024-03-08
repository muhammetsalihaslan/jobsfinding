import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  favoriteJobs: [],
};

const favoriteSlice = createSlice({
  name: 'favorite',
  initialState,
  reducers: {
    addFavorite(state, action) {
      state.favoriteJobs.push(action.payload);
    },
    removeJob(state, action) {
      const jobToRemove = action.payload;
      state.favoriteJobs = state.favoriteJobs.filter(
        job => job.id !== jobToRemove.id,
      );
    },
  },
});

export const {addFavorite, removeJob} = favoriteSlice.actions;
export default favoriteSlice.reducer;
