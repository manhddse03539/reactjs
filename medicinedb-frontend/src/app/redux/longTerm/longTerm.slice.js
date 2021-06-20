import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  selectedId: 0,
  selectedList: [],
  message: '',
  error: null,
};

export const longTermSlice = createSlice({
  name: 'longTerm',
  initialState,
  reducers: {
    anElementAction: (state, actions) => {
      state.actionId = actions.payload.id;
      state.error = actions.payload.error;
    },
    multipleAction: (state, actions) => {
      state.selectedIds = actions.payload.selectedList;
      state.error = actions.payload.error;
    },
    deleteSuccess: (state, actions) => {
      state.error = null;
      state.message = actions.payload.message;
    },
    deleteFailed: (state, actions) => {
      state.error = actions.error;
    },
    editSuccess: (state, actions) => {
      state.error = null;
      state.message = actions.payload.message;
    },
    editFailed: (state, actions) => {
      state.error = actions.error;
    },
  },
});

export const { anElementAction, multipleAction, deleteSuccess, deleteFailed, editSuccess, editFailed } = longTermSlice.actions;

export const longTermDatas = (state) => state.longTerm;

export default longTermSlice.reducer;
