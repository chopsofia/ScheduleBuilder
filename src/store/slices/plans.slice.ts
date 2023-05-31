// import axios from "axios";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { GetAllPlansResponseType, PlanType } from "../../types/PlanType";

const initialState: GetAllPlansResponseType[] = [
  {
    id: 0,
    subject: "",
    facultyAbbr: "",
    course: "",
    semester: 0,
    groups: 0,
    students: 0,
    lectures: 0,
    practicalClasses: 0,
    laboratoryClasses: 0,
    exams: 0,
    passFailCourses: 0,
    courseWorks: 0,
    diplomaWorks: 0,
    practices: 0,
    consultations: 0,
    others: 0,
    isExtramural: false,
  }
];

const slice = createSlice({
  name: "plans",
  initialState: {
    plans: initialState,
  },
  reducers: {
    setPlans: (
        state,
        action: PayloadAction<GetAllPlansResponseType[]>
      ) => {
        state.plans = action.payload;
      },
  },
});

export const plansActions = slice.actions;

export default slice.reducer;
