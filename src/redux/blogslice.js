import { createSlice } from "@reduxjs/toolkit";

const blogSlice = createSlice({
  name: "blog",
  initialState: [
    {
      id: 1,
      title:"DEVENDRA",
      content:"He is a very creative fullstack web developer.He was studying in KIST medical college,but decided to drop out of coolege to understand the true meaning of life."
    }
  ],
  reducers: {
    blogAdded: (state, action) => {
      state.push(action.payload);
    }
  }
});

export const { blogAdded } = blogSlice.actions;
export default blogSlice.reducer;
