//useFaculties
import { useState } from "react";
import { FieldValues, useForm } from "react-hook-form";

//hooks
import { useTypedSelector } from "../../../../hooks/useTypedSelector";
import { useActions } from "../../../../hooks/useActions";

//api
import { useGetAllDepartmentMutation } from "../../../../store/api/faculties.api";
import { useAddTeacherMutation, useGetAllTeachersByDepartmentIdMutation, useRemoveTeacherMutation } from "../../../../store/api/teacher.departments.api";


//types
import { BackEndErrorsType } from "../../../../types/GlobalType";
import { TeacherType } from "../../../../types/TeacherType";
import { UserGetAllDepartmentResponseType } from "../../../../types/FacultiesType";

export const useDepartment = (
    departmentId? : string,
) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
    reset,
  } = useForm<TeacherType | FieldValues>();
  const { teachers, teacherDepartments } = useTypedSelector((state) => state.teacherDepartments);
  const { setTeachers, setTeacherDepartments } = useActions();

  const [backendErrors, setBackendErrors] = useState<BackEndErrorsType | null>(
    null
  );
  
  const [departmentName, setDepartmentName] = useState("");

  //api
  const [getAllTeachersByDepartmentId] = useGetAllTeachersByDepartmentIdMutation();
  const [addTeacher] = useAddTeacherMutation();
  const [removeTeacher] = useRemoveTeacherMutation();
  const [getAllDepartment] = useGetAllDepartmentMutation();
  

  const getAllTeachersByDepartmentIdHandler = async () => {
    try {
      const teachers = await getAllTeachersByDepartmentId({departmentId}.departmentId).unwrap();
      setTeachers(teachers);
    } catch (error) {}
  };
  const addTeacherHandler = async (formData: any) => {
    reset();
    try {
      await addTeacher(formData).unwrap();
      console.log("set addTeacher {formData}", formData);
      getAllTeachersByDepartmentIdHandler();
    } catch (error) {}
  };
  const removeTeacherHandler = async (id: number) => {
    try {
      await removeTeacher({ id }).unwrap();
      getAllTeachersByDepartmentIdHandler();
    } catch (error) {}
  };




// Треба провірити цю функцію \.\.\.\
  const getDepartmentNameByIdHandler = async () => {
    try {
      const department = await getAllDepartment(null).unwrap();
      if(departmentId){
        const foundDepartment = department.find((dept: UserGetAllDepartmentResponseType) => dept.id.toString() === departmentId);
        if (foundDepartment) {
          setDepartmentName(foundDepartment.name);
        }
      }
      
    } catch (error) {}
  };
  
  return {
    register,
    handleSubmit,
    errors,
    setValue,
    watch,
    backendErrors,
    teachers,
    teacherDepartments,
    departmentName,
    getAllTeachersByDepartmentIdHandler,
    addTeacherHandler,
    removeTeacherHandler,
    getDepartmentNameByIdHandler,
  };
};
