//useFaculties
import { useState } from "react";
import { FieldValues, useForm } from "react-hook-form";

//hooks
import { useTypedSelector } from "../../../../hooks/useTypedSelector";
import { useActions } from "../../../../hooks/useActions";

//api
import { useAddPersonalLoadMutation, useGetAllPersonalLoadMutation, useRemovePersonalLoadMutation, useUpdatePersonalLoadMutation } from "../../../../store/api/personal.load.api";

//types
import { BackEndErrorsType } from "../../../../types/GlobalType";
import { PersonalLoadType } from "../../../../types/PersonalLoadType";

const academicYearId = "40288184886b39a701886b3a49640001";

export const usePersonalLoad = (
    departmentId? : string | undefined,
    teacherId? : string | undefined,
) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
    reset,
  } = useForm<PersonalLoadType | FieldValues>();

  const { personalLoads } = useTypedSelector((state) => state.personalLoad);
  const { setPersonalLoad } = useActions();

  const [backendErrors, setBackendErrors] = useState<BackEndErrorsType | null>(
    null
  );
  
  const [departmentName, setDepartmentName] = useState("");

  //api
  const [getAllPersonalLoad] = useGetAllPersonalLoadMutation();
  const [addPersonalLoad] = useAddPersonalLoadMutation();
  const [removePersonalLoad] = useRemovePersonalLoadMutation();
  const [updatePersonalLoad] = useUpdatePersonalLoadMutation();
  

  const getAllPersonalLoadHandler = async () => {
    try {
      console.log("GET usePersonalLoad )_( ");
      const personalLoads = await getAllPersonalLoad({departmentId: departmentId, teacherId: teacherId}).unwrap();
      setPersonalLoad(personalLoads);
      console.log("get AllpersonalLoad by departmentId", personalLoads);
    } catch (error) {}
  };
  const addPersonalLoadHandler = async (formData: any) => {
    reset();
    try {
      console.log("set addpersonalLoad {formData}", formData);
      await addPersonalLoad({...formData, departmentId: departmentId, teacherId: teacherId, academicYearId : academicYearId }).unwrap();
      getAllPersonalLoadHandler();
    } catch (error) {}
  };
  const removePersonalLoadHandler = async (id: number) => {
    try {
      await removePersonalLoad({ id }).unwrap();
      getAllPersonalLoadHandler();
    } catch (error) {}
  };
//   const updateFacultiesHandler = async (data: any) => {
//     // reset();
//     try {
//       await updateFaculties({...data, id: facultyId}).unwrap();
//       console.log("update faculties, id: ", data);
//       await getAllFacultiessHandler();
//     } catch (error) {}
//   };

const updatePersonalLoadHandler = async (formData: any) => {
  reset();
  try {
    console.log("updatePersonalLoadHandler ", formData);
    console.log("formData.id", formData.id )
      if(formData.id){
        // await updateDepartment({ id: formData.id, body: {...formData, id: formData.id, facultyId: facultyId } });
        await updatePersonalLoad({ id: formData.id, body: {...formData, departmentId: departmentId, academicYearId : academicYearId }});
      }
      getAllPersonalLoadHandler();
  } catch (error) {}
};

  
  


  return {
    register,
    handleSubmit,
    errors,
    setValue,
    watch,
    backendErrors,
    personalLoads,

    getAllPersonalLoadHandler,
    addPersonalLoadHandler,
    removePersonalLoadHandler,
    updatePersonalLoadHandler,
  };
};
