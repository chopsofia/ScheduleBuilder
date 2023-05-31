import React, { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import Button from "../../components/Button/Button";

//Components
import Layout from "../../components/Layout/Layout";
import PersonalLoadTable from "../../components/Tables/PersonalLoadTable/PersonalLoadTable";
import { usePersonalLoad } from "./hooks/usePersonalLoad";
import { useDepartment } from "../Department/hooks/useDepartment";
import { useTeacherDepartments } from "../Teachers/hooks/useTeacherDepartments";


const PersonalLoad = () => {
  const { department_id, teacher_id } = useParams();
  const {
    getAllPersonalLoadHandler,
    personalLoads,
  } = usePersonalLoad(department_id, teacher_id);
  const {
    getDepartmentNameByIdHandler,
    departmentName,
  } = useDepartment(department_id);
  const {
    getTeacherNamePositionByIdHandler,
    getAllTeachersHandler,
    getAllDepartmentHandler,
    teacherName,
  } = useTeacherDepartments(teacher_id);

  useEffect(() => {
    getAllPersonalLoadHandler();
    getAllTeachersHandler();
    getAllDepartmentHandler();
    getDepartmentNameByIdHandler();
    getTeacherNamePositionByIdHandler();
  }, []);

  return (
    <Layout>
      <div className="flex justify-between w-full">
        <div className="flex text-2xl font-bold">
          {departmentName}, {teacherName}
        </div>
      </div>
      <PersonalLoadTable personalLoads={personalLoads} departmentId={department_id} teacherId={teacher_id}/>
    </Layout>
  );
};

export default PersonalLoad;
