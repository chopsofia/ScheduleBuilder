import { createSlice, PayloadAction } from "@reduxjs/toolkit";

//types
import { UserGetAllDepartmentResponseType, UserGetAllFacultiesResponseType } from "../../types/FacultiesType";

const initialState: UserGetAllFacultiesResponseType[] = [
  {
    id: 0,
    name: "",
  },
];
const departmentsState: UserGetAllDepartmentResponseType[] = [
  {
    id: 0,
    name: "",
    facultyId: 0,
  },
];

const slice = createSlice({
  name: "faculties",
  initialState: {
    faculties: initialState,
    departments: departmentsState,
  },
  reducers: {
    setFaculties: (
      state,
      action: PayloadAction<UserGetAllFacultiesResponseType[]>
    ) => {
      state.faculties = action.payload;
    },
    setDepartments: (
        state,
        action: PayloadAction<UserGetAllDepartmentResponseType[]>
      ) => {
        state.departments = action.payload;
      },
  },
});

export const facultiesActions = slice.actions;

export default slice.reducer;