import {createSlice} from "@reduxjs/toolkit";
import deleteElem from "../Scripts/deleteElem";

export const rolesSlice = createSlice({
  name: 'role',
  initialState: {
    roles: [],
  },
  reducers: {
    pushRole: (state, action) => {
      state.roles.push(action.payload);
    },
    deleteRole: (state, action) => {
      state.roles = deleteElem(action.payload, state.roles);
    },
    clearRoles: state =>  {
      state.roles = [];
    }
  }
});

export const {pushRole, deleteRole, clearRoles} = rolesSlice.actions

export default rolesSlice.reducer