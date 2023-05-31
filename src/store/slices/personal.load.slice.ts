// import axios from "axios";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { GetAllPersonalLoadsResponseType } from "../../types/PersonalLoadType";

const initialState: GetAllPersonalLoadsResponseType[] = [
  {
    id: 0,
    subject: "",
    facultyAbbr: "",
    semester: 0,
    course: 0,
    students: 0,
    lectures: 0,
    practicalClasses: 0,
    laboratoryClasses: 0,
    exams: 0,
    passFailCourses: 0,
    lecturesExtramural: 0,
    practicalClassesExtramural: 0,
    laboratoryClassesExtramural: 0,
    examsExtramural: 0,
    passFailCoursesExtramural: 0,
    controlWorks: 0,
    courseWorks: 0,
    diplomaWorks: 0,
    pedagogicPractices: 0,
    studyPractices: 0,
    industrialPractices: 0,
    deks: 0,
    postgrad: 0,
    consultations: 0,
    consultationsExtramural: 0,
    others: 0,
  }
];

const slice = createSlice({
  name: "personalLoads",
  initialState: {
    personalLoads: initialState,
  },
  reducers: {
    setPersonalLoad: (
        state,
        action: PayloadAction<GetAllPersonalLoadsResponseType[]>
      ) => {
        state.personalLoads = action.payload;
      },
  },
});

export const personalLoadActions = slice.actions;

export default slice.reducer;
