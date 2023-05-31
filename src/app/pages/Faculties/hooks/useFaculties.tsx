import { FieldValues, useForm } from "react-hook-form";

//hooks
import { useTypedSelector } from "../../../../hooks/useTypedSelector";
import { useActions } from "../../../../hooks/useActions";

//api
import { useAddDepartmentMutation, useAddFacultiesMutation, useGetAllDepartmentByFacultyIdMutation, useGetAllDepartmentMutation, useGetAllFacultiessMutation, useRemoveDepartmentMutation, useRemoveFacultiesMutation, useUpdateDepartmentMutation, useUpdateFacultiesMutation } from "../../../../store/api/faculties.api";


//types
import { DepartmentType, FacultiesType, UpdateDepartmentRequestType, UpdateFacultiesRequestType } from "../../../../types/FacultiesType";
import { BackEndErrorsType } from "../../../../types/GlobalType";
import { useState } from "react";

export const useFaculties = (
  facultyId? : number,
) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
    reset,
  } = useForm<FacultiesType | DepartmentType | FieldValues>();

  const { faculties, departments } = useTypedSelector((state) => state.faculties);
  const { setDepartments, setFaculties } = useActions();

  const [backendErrors, setBackendErrors] = useState<BackEndErrorsType | null>(
    null
  );

  //api
  const [getAllFacultiess] = useGetAllFacultiessMutation();
  const [addFaculties] = useAddFacultiesMutation();
  const [removeFaculties] = useRemoveFacultiesMutation();
  const [updateFaculties] = useUpdateFacultiesMutation();
  
  const [getAllDepartmentByFacultyId] = useGetAllDepartmentByFacultyIdMutation();
  const [getAllDepartment] = useGetAllDepartmentMutation();
  const [addDepartment] = useAddDepartmentMutation();
  const [removeDepartment] = useRemoveDepartmentMutation();
  const [updateDepartment] = useUpdateDepartmentMutation();


  const getAllFacultiessHandler = async () => {
    try {
      const faculties = await getAllFacultiess(null).unwrap();
      setFaculties(faculties);
      console.log("get faculties", faculties);
    } catch (error) {}
  };
  const addFacultiesHandler = async (formData: any) => {
    reset();
    try {
      await addFaculties(formData).unwrap();
      console.log("set faculties {formData}", formData);
      getAllFacultiessHandler();
    } catch (error) {}
  };
  const removeFacultiesHandler = async (id: number) => {
    try {
      await removeFaculties({ id }).unwrap();
      console.log("remove faculties, id: ", id);
      getAllFacultiessHandler();
    } catch (error) {}
  };
  const updateFacultiesHandler = async (formData: any) => {
    reset();
    try {
      // await updateFaculties({...data, id: facultyId}).unwrap();
      if(facultyId){
        await updateFaculties({ id: facultyId, body: {...formData, id: facultyId} });
      }
      await getAllFacultiessHandler();
    } catch (error) {}
  };

  const getAllDepartmentByFacultyIdHandler = async () => {
    try {        
        const departments  = await getAllDepartmentByFacultyId({facultyId}).unwrap();
        setDepartments(departments );
        console.log(`get Departments by id:`, facultyId, departments );
    } catch (error) {}
  };
  const getAllDepartmentHandler = async () => {
    try {        
        const departments  = await getAllDepartment(null).unwrap();
        setDepartments(departments);
        console.log(`get Departments:`, departments );
    } catch (error) {}
  };
  const addDepartmentHandler = async (formData: any) => {
    reset();
    try {
        await addDepartment({...formData, facultyId: facultyId }).unwrap();
        console.log("set Department {formData}", formData);
        getAllDepartmentHandler();
    } catch (error) {}
  };
  const removeDepartmentHandler = async (id: number) => {
    try {
        await removeDepartment({ id }).unwrap();
        console.log("remove Department, id: ", id);
        getAllDepartmentHandler();
    } catch (error) {}
  };
  const updateDepartmentHandler = async (formData: any) => {
    reset();
    try {
        // await updateDepartment({...formData,  facultyId: facultyId}).unwrap();
        console.log("update Department ", formData);
        if(formData.id){
          // await updateDepartment({ id: formData.id, body: {...formData, id: formData.id, facultyId: facultyId } });
          await updateDepartment({ id: formData.id, body: formData});
        }
        getAllDepartmentHandler();
    } catch (error) {}
  };
  


  return {
    register,
    handleSubmit,
    errors,
    setValue,
    watch,
    backendErrors,
    getAllFacultiessHandler,
    addFacultiesHandler,
    removeFacultiesHandler,
    updateFacultiesHandler,
    getAllDepartmentHandler,
    addDepartmentHandler,
    removeDepartmentHandler,
    updateDepartmentHandler,
    getAllDepartmentByFacultyIdHandler,
    faculties,
    departments,
  };
};
