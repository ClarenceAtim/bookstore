import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categories: [],
};

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    getCategoryStatus: (state) => {
      // This reducer always returns "Under construction"
      state.categories = ['Under construction'];
    },
  },
});

export const { getCategoryStatus } = categoriesSlice.actions;
export default categoriesSlice.reducer;
