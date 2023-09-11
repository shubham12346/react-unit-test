import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getDataList } from "./dataApi";
type dataArrytype = {
    id: number;
    title: string;
    description: string;
  };

let initialState = {
    datalist :[] as dataArrytype[],
    loading:false
}

export const getListData = createAsyncThunk('listData',async()=>{
   const response = await getDataList();
    return response;
})

export const dataSlice = createSlice({
    name :'listData',
    initialState,
    reducers:{} ,
    extraReducers(builder) {
        builder.addCase(getListData.pending ,(state)=>{
            state.loading= true;
        }).addCase(getListData.fulfilled,(state ,action: PayloadAction<any>)=>{
            state.datalist = action.payload;
        }).addCase(getListData.rejected ,(state, {error})=>{
            state.loading=false;

        })
    },
})


export const dataSliceReducer  = dataSlice.reducer;
