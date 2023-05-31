// teacher.departments.slice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { GetAllTeacherDepartmentsResponseType, GetAllTeacherResponseType } from "../../types/TeacherType";

//types

const teachersState: GetAllTeacherResponseType[] = [
  {
    id: 0,
    fullName: "",
    position: "",
  },
];
const teacherDepartmentsState: GetAllTeacherDepartmentsResponseType[] = [
  {
    id: 0,
    budgetRate: 0,
    extraRate: 0,
    teacherId: "",
    departmentId: "",
  },
];

const slice = createSlice({
  name: "teacherDepartments",
  initialState: {
    teachers: teachersState,
    teacherDepartments: teacherDepartmentsState,
  },
  reducers: {
    setTeachers: (
      state,
      action: PayloadAction<GetAllTeacherResponseType[]>
    ) => {
      state.teachers = action.payload;
    },
    setTeacherDepartments: (
        state,
        action: PayloadAction<GetAllTeacherDepartmentsResponseType[]>
      ) => {
        state.teacherDepartments = action.payload;
      },
  },
});

export const teacherDepartmentsActions = slice.actions;

export default slice.reducer;