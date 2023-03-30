import { configureStore } from "@reduxjs/toolkit";
import audio from "./audioSlice";

export default configureStore({
   reducer: { audio },
});
