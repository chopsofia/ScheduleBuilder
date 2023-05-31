import { combineReducers } from "@reduxjs/toolkit";
import { authApi } from "./api/auth.api";
import authSlice from "./slices/auth.slice";
import { facultiesApi } from "./api/faculties.api";
import facultiesSlice from "./slices/faculties.slice";
import { teacherDepartmentsApi } from "./api/teacher.departments.api";
import teacherDepartmentsSlice from "./slices/teacher.departments.slice";
import { plansApi } from "./api/plans.api";
import plansSlice from "./slices/plans.slice";
import { personalLoadApi } from "./api/personal.load.api";
import personalLoadSlice from "./slices/personal.load.slice";

const apiReducers = {
  [authApi.reducerPath]: authApi.reducer,
  [facultiesApi.reducerPath]: facultiesApi.reducer,
  [teacherDepartmentsApi.reducerPath]: teacherDepartmentsApi.reducer,
  [plansApi.reducerPath]: plansApi.reducer, 
  [personalLoadApi.reducerPath]: personalLoadApi.reducer,
};

const sliceReducers = {
  auth: authSlice,
  faculties : facultiesSlice,
  teacherDepartments : teacherDepartmentsSlice,
  plans : plansSlice,
  personalLoad : personalLoadSlice,
};

export const reducers = combineReducers({
  ...apiReducers,
  ...sliceReducers,
});
