import React, { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import Button from "../../components/Button/Button";

//Components
import Layout from "../../components/Layout/Layout";
import { useDepartment } from "./hooks/useDepartment";
import Input from "../../components/Input/Input";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { TeacherType } from "../../../types/TeacherType";
import { useTeacherDepartments } from "../Teachers/hooks/useTeacherDepartments";

const Department = () => {
  const { department_id } = useParams();
  // const parsedDepartmentId = parseInt(department_id || "", 10); // Перетворення рядкового значення на число

  const {
    handleSubmit,
    register,
    teachers,
    teacherDepartments,
    departmentName,
    getAllTeachersByDepartmentIdHandler,
    addTeacherHandler,
    removeTeacherHandler,
    getDepartmentNameByIdHandler,
  } = useDepartment(department_id);
  const {
    getAllTeachersHandler,
  } = useTeacherDepartments(department_id)

  useEffect(() => {
    getAllTeachersByDepartmentIdHandler();
    getDepartmentNameByIdHandler();
    // getAllTeachersHandler();
  }, []);

  return (
    <Layout>
      <NavLink
        to={`/plan/${department_id}`}
        className="flex justify-between text-2xl font-bold cursor-pointer"
      >
        {departmentName}
      </NavLink>
      <div className="flex flex-col gap-4 cursor-pointer">
        {teachers?.length > 0 ? (
          teachers.map((item) =>
          <div className="flex justify-between">
            <NavLink
              key={item.id}
              to={`/personal_load/${department_id}/${item.id}`}
            >
              {item.fullName}
            </NavLink>
            <div></div>
          </div>
          )
        ) : (
          <>Список порожній</>
        )}
      </div>
    </Layout>
  );
};

export default Department;
