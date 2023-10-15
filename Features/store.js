import {configureStore} from "@reduxjs/toolkit";
import {rolesSlice} from "./rolesSlice";

export default configureStore({
  reducer: {
    roles: rolesSlice.reducer
  }
})