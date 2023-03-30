const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");
// import { playSound } from "../packages/AudioPkc";
import { getData, setData } from "../packages/StoragePkc";

const initialState = {
   allAudio: [],
   activeAudio: false,
   soundStatus: false
};

export const getStorage = createAsyncThunk("audio/getStorage", async (thunkAPI) => {
   return await getData("activeAudio");
});

export const audioSlice = createSlice({
   name: "audio",
   initialState,
   reducers: {
      setAllAudio: (state, action) => {
         state.allAudio = action.payload;
      },
      setActiveAudio: (state, action) => {
         state.activeAudio = action.payload;
         setData("activeAudio", action.payload)
         // playSound(action.payload.uri)
      },
      setSoundStatus: (state, action) => {
         state.soundStatus = action.payload
      }
   },
   extraReducers: (builder) => {
      builder.addCase(getStorage.pending, (state) => {});
      builder.addCase(getStorage.fulfilled, (state, action) => {
         state.activeAudio = action.payload;
      });
      builder.addCase(getStorage.rejected, (state, action) => {
         state.activeAudio = [];
      });
   },
});

// Action creators are generated for each case reducer function
export const { setAllAudio, setActiveAudio, setSoundStatus } = audioSlice.actions;

export default audioSlice.reducer;
