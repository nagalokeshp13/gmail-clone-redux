import { createSlice } from '@reduxjs/toolkit';

export const sidebarSlice = createSlice({
  name: 'sidebar',
  initialState: {
    sidebar: null,
    inbox: true,
    emailCount: 0,
  },
  reducers: {
    toggleInboxSent: (state) => {
      state.inbox = !state.inbox;
    },
    setEmailCount: (state, action) => {
      state.emailCount = action.payload;
    },
  },
});

export const { toggleInboxSent, setEmailCount } = sidebarSlice.actions;

export const selectInbox = (state) => state.sidebar.inbox;
export const selectEmailCount = (state) => state.sidebar.emailCount;

export default sidebarSlice.reducer;
