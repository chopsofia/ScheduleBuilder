import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Button from "../../components/Button/Button";

//Components
import Layout from "../../components/Layout/Layout";
import TeachersTable from "../../components/Tables/TeachersTable/TeachersTable";
import { useTeacherDepartments } from "./hooks/useTeacherDepartments";
import Input from "../../components/Input/Input";
import { text } from "stream/consumers";
import { FieldValues } from "react-hook-form";
import { useDepartment } from "../Department/hooks/useDepartment";
import { TeacherType } from "../../../types/TeacherType";


const Teachers = () => {
  const [isActive, setIsActive] = useState(false);
  const {
    teacherDepartments,
    register,
    handleSubmit,
    getAllTeacherDepartmentsHandler,
  } = useTeacherDepartments();

  const {
    addTeacherHandler,
  } = useDepartment();

  useEffect(() => {
    getAllTeacherDepartmentsHandler();
  }, []);

  const handleAddClick = (data: TeacherType | FieldValues) => {
    addTeacherHandler(data);
    setIsActive(false); // Close the input and submit the form
  };

  return (
    <Layout>
      <div className="flex justify-between items-center w-full">
        <div className="flex text-2xl font-bold">
          Викладачі
        </div>
        <form className={`${isActive? "flex" : "hidden"} w-9/12 gap-2`} onSubmit={handleSubmit(handleAddClick)}>
          <Input 
            label="Повне ім'я"
            name="fullName"
            type="text"
            register={register}
          />
          <Input 
            label="Посада"
            name="position"
            type="text"
            register={register}
          />
          <Button className="flex w-4/12">Додати</Button>
        </form>
        <Button onClick={() => setIsActive(true)} className={`${isActive? "hidden" : "flex"} w-3/12 gap-2`}>Додати викдадача</Button>
      </div>
      <TeachersTable teacherDepartments={teacherDepartments} />    
    </Layout>
  );
};

export default Teachers;

