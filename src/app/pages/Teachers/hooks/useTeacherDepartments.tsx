//useFaculties
import { useState } from "react";
import { FieldValues, useForm } from "react-hook-form";

//hooks
import { useTypedSelector } from "../../../../hooks/useTypedSelector";
import { useActions } from "../../../../hooks/useActions";

//api
import { useGetAllDepartmentMutation } from "../../../../store/api/faculties.api";
import { useAddTeacherDepartmentsMutation, useAddTeacherMutation, useGetAllTeacherDepartmentsMutation, useGetAllTeachersMutation, useRemoveTeacherDepartmentsMutation, useRemoveTeacherMutation, useUpdateTeacherDepartmentuseMutation } from "../../../../store/api/teacher.departments.api";


//types
import { BackEndErrorsType } from "../../../../types/GlobalType";
import { GetAllTeacherResponseType, TeacherType } from "../../../../types/TeacherType";

export const useTeacherDepartments = (
  teacherId? : string,
) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
    reset,
  } = useForm<TeacherType | FieldValues>();

  const { teacherDepartments, teachers } = useTypedSelector((state) => state.teacherDepartments);
  const { faculties, departments } = useTypedSelector((state) => state.faculties);
  const { setTeacherDepartments, setTeachers, setDepartments } = useActions();

  const [backendErrors, setBackendErrors] = useState<BackEndErrorsType | null>(
    null
  );
  
  const [teacherName, setTeacherName] = useState("");
  const [teacherPosition, setTeacherPosition] = useState("");
  // const [departmentName, setDepartmentName] = useState("");

  //api
  const [getAllTeachers] = useGetAllTeachersMutation();
  const [getAllTeacherDepartments] = useGetAllTeacherDepartmentsMutation();
  // const [addTeacher] = useAddTeacherMutation();
  const [addTeacherDepartments] = useAddTeacherDepartmentsMutation();
  const [removeTeacherDepartments] = useRemoveTeacherDepartmentsMutation();
  const [getAllDepartment] = useGetAllDepartmentMutation();
  const [updateTeacherDepartmentuse] = useUpdateTeacherDepartmentuseMutation();
  

  // const getAllTeachersByDepartmentIdHandler = async () => {
  //   try {
  //     const teachers = await getAllTeachersByDepartmentId(departmentId).unwrap();
  //     setTeachers(teachers);
  //     console.log("get teachers by departmentId", teachers);
  //   } catch (error) {}
  // };
  const getAllTeachersHandler = async () => {
    try {
      const teachers = await getAllTeachers(null).unwrap();
      setTeachers(teachers);
      console.log("get teachers ", teachers);
    } catch (error) {}
  };
  const getAllTeacherDepartmentsHandler = async () => {
    try {
      const teacherDepartments = await getAllTeacherDepartments(null).unwrap();
      setTeacherDepartments(teacherDepartments);
      console.log("get Teacher Departments ");
    } catch (error) {}
  };
  const addTeacherDepartmentsHandler = async (formData: any) => {
    reset();
    try {
      await addTeacherDepartments(formData).unwrap();
      console.log("set addTeacherDepartments {formData}", formData);
      getAllTeacherDepartmentsHandler();
      getAllTeachersHandler();
    } catch (error) {}
  };
  const removeTeacherDepartmentsHandler = async (id: number) => {
    try {
      await removeTeacherDepartments({ id }).unwrap();
      console.log("remove Teacher Departments, id: ", id);
      getAllTeacherDepartmentsHandler();
    } catch (error) {}
  };

const getAllDepartmentHandler = async () => {
  try {        
    const departments  = await getAllDepartment(null).unwrap();
    setDepartments(departments);
  } catch (error) {}
};

const updateTeacherDepartmentHandler = async (formData: any) => {
  reset();
  try {
      console.log("update Teacher Department ", formData);
      if(formData.id){
        await updateTeacherDepartmentuse({ id: formData.id, body: formData});
      }
      getAllTeacherDepartmentsHandler();
  } catch (error) {}
};


const getTeacherNamePositionByIdHandler = async () => {
  try {
    const teacher = await getAllTeachers(null).unwrap();
    if(teacherId){
    const foundTeacher= teacher.find((teacher: GetAllTeacherResponseType) => teacher.id.toString() === teacherId);
    if (foundTeacher) {
      setTeacherName(foundTeacher.fullName);
      setTeacherPosition(foundTeacher.position);
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
    teacherDepartments,
    teacherName,
    teacherPosition,
    departments,
    teachers,
    getAllDepartmentHandler,
    getAllTeachersHandler,
    getAllTeacherDepartmentsHandler,
    addTeacherDepartmentsHandler,
    removeTeacherDepartmentsHandler,

    getTeacherNamePositionByIdHandler,
    updateTeacherDepartmentHandler,

    // addTeacherHandler,
  };
};
