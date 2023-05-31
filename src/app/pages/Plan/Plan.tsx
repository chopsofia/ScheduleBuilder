import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

//Components
import Layout from "../../components/Layout/Layout";
import PlanTable from "../../components/Tables/PlanTable/PlanTable";
import { usePlan } from "./hooks/usePlan";
import { useDepartment } from "../Department/hooks/useDepartment";

const Plan = () => {
  const { department_id } = useParams();
  const {
    plans,
    getAllPlansHandler,
  } = usePlan(department_id);
  const {
    getDepartmentNameByIdHandler,
    departmentName,
  } = useDepartment(department_id);
  
  useEffect(() => {
    getAllPlansHandler();
    getDepartmentNameByIdHandler()
  }, []);

  return (
    <Layout>
      <div className="flex justify-between w-full">
        <div className="flex text-2xl font-bold">
          Факультет: {departmentName}
        </div>
      </div>
      <PlanTable plans={plans} departmentId={department_id}/>
    </Layout>
  );
};

export default Plan;
