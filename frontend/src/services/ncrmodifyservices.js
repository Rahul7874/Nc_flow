import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios'

// post role data

export const PostNcrModify = createAsyncThunk('NCRModify/post',
  async (data) => {
    await axios.post('/api/postncrmodify', { data })
  })

  const initialState = {
    data: [],
    loading: true,
    success: false,
    singleData: [],
  }
  
  const NcrModifySlice = createSlice({
    name: 'NcrModifySlice',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder
    }
  })
  
  export const NcrModifySliceReducer = NcrModifySlice.reducer
  
  export const NcrModifySliceAction = NcrModifySlice.actions  