//useFaculties
import { useState } from "react";
import { FieldValues, useForm } from "react-hook-form";

//hooks
import { useTypedSelector } from "../../../../hooks/useTypedSelector";
import { useActions } from "../../../../hooks/useActions";

//api
import { useAddPlanMutation, useGetAllPlansMutation, useRemovePlanMutation, useUpdatePlanMutation } from "../../../../store/api/plans.api";

//types
import { BackEndErrorsType } from "../../../../types/GlobalType";
import { PlanType } from "../../../../types/PlanType";

const academicYearId = "40288184886b39a701886b3a49640001";

export const usePlan = (
    departmentId? : string,
) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
    reset,
  } = useForm<PlanType | FieldValues>();

  const { plans } = useTypedSelector((state) => state.plans);
  const { setPlans } = useActions();

  const [backendErrors, setBackendErrors] = useState<BackEndErrorsType | null>(
    null
  );
  
  const [departmentName, setDepartmentName] = useState("");

  //api
  const [getAllPlans] = useGetAllPlansMutation();
  const [addPlan] = useAddPlanMutation();
  const [removePlan] = useRemovePlanMutation();
  const [updatePlan] = useUpdatePlanMutation();
  

  const getAllPlansHandler = async () => {
    try {
      const plans = await getAllPlans(departmentId).unwrap();
      setPlans(plans);
      console.log("get AllPlansHandler by departmentId", plans);
    } catch (error) {}
  };
  const addPlanHandler = async (formData: any) => {
    reset();
    try {
      console.log("set addPlan {formData}", formData);
      await addPlan({...formData, departmentId: departmentId, academicYearId : academicYearId }).unwrap();
      console.log("set addPlan {formData}", formData);
      getAllPlansHandler();
    } catch (error) {}
  };
  const removePlanHandler = async (id: number) => {
    try {
      await removePlan({ id }).unwrap();
      console.log("remove removePlan, id: ", id);
      getAllPlansHandler();
    } catch (error) {}
  };
  const updatePlanHandler = async (formData: any) => {
    reset();
    try {
      console.log("updatePlanHandler ", formData);
      console.log("formData.id", formData.id )
        if(formData.id){
          // await updateDepartment({ id: formData.id, body: {...formData, id: formData.id, facultyId: facultyId } });
          await updatePlan({ id: formData.id, body: {...formData, departmentId: departmentId, academicYearId : academicYearId }});
        }
        getAllPlansHandler();
    } catch (error) {}
  };

  
  


  return {
    register,
    handleSubmit,
    errors,
    setValue,
    watch,
    backendErrors,
    plans,

    getAllPlansHandler,
    addPlanHandler,
    removePlanHandler,
    updatePlanHandler,
  };
};
