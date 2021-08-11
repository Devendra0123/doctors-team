import {createSlice,createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

export const fetchNews = createAsyncThunk('news/fetchNews', async () => {
  const response = await axios.get("http://localhost:5000/news");
  return response;
});

const newsSlice = createSlice({
  name:"news",
  initialState:{
    news: [],
    status: 'idle',
    error: null
  },
  reducers:{
    latestNews:(state)=>state
  },
  extraReducers: {
    [fetchNews.pending]: (state, action) => {
      state.status = 'loading'
    },
    [fetchNews.fulfilled]: (state, action) => {
      state.status = 'succeeded'
      // Add any fetched posts to the array
     state.news = action.payload.data;
    },
    [fetchNews.rejected]: (state, action) => {
      state.status = 'failed'
      state.error = action.error.message
    }
  }
});

export const {latestNews} = newsSlice.actions;
export default newsSlice.reducer;