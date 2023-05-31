import { useDispatch } from "react-redux";
import { bindActionCreators } from "@reduxjs/toolkit";
import { authActions } from "../store/slices/auth.slice";
import { facultiesActions } from "../store/slices/faculties.slice";
import { teacherDepartmentsActions } from "../store/slices/teacher.departments.slice";
import { plansActions } from "../store/slices/plans.slice";
import { personalLoadActions } from "../store/slices/personal.load.slice";

// import { Actions } from "./../store/slices/.slice";

const allActions = {
  ...authActions,
  ...facultiesActions,
  ...teacherDepartmentsActions,
  ...plansActions,
  ...personalLoadActions,
};

export const useActions = () => {
  const dispatch = useDispatch();

  return bindActionCreators(allActions, dispatch); 
};
