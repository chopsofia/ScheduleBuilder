import React, { FunctionComponent, useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import TableInput from "../../components/TableInput/TableInput";
import { GetAllTeacherDepartmentsResponseType, GetAllTeacherResponseType, TeacherDepartmentType, TeacherType } from "../../../../../types/TeacherType";
import { useDepartment } from "../../../../pages/Department/hooks/useDepartment";
import { useTeacherDepartments } from "../../../../pages/Teachers/hooks/useTeacherDepartments";
import { useFaculties } from "../../../../pages/Faculties/hooks/useFaculties";
import { DepartmentType, UserGetAllDepartmentResponseType } from "../../../../../types/FacultiesType";
import Button from "../../../Button/Button";
import { FieldValues, SubmitHandler } from "react-hook-form";
import Select from "../../components/Select/Select";

//Components

type AddTeacherDepartmentsProps = {
  setIsAdd: Function,
};

const AddTeacherDepartments: FunctionComponent<AddTeacherDepartmentsProps> = ({
  setIsAdd,
}) => {
  // const [isActive, setIsActive] = useState(false);
  const [department, setDepartment] = useState<UserGetAllDepartmentResponseType>();
  const [teacher, setTeacher] = useState<GetAllTeacherResponseType>();

  const { 
    departments,
    getAllDepartmentHandler,
   } = useFaculties();
  const {
    getDepartmentNameByIdHandler,
    departmentName,
  } = useDepartment(department?.id.toString());
  
  const {
    addTeacherDepartmentsHandler,
    getAllTeachersHandler,
    getAllTeacherDepartmentsHandler,
    getTeacherNamePositionByIdHandler,
    teacherName,
    teacherPosition,
    teachers,
    register,
    handleSubmit,
  } = useTeacherDepartments(teacher?.id.toString());

  useEffect(() => {
    getAllTeachersHandler();
    getAllDepartmentHandler();
  }, []);

  useEffect(() => {
    getDepartmentNameByIdHandler();
    getTeacherNamePositionByIdHandler();
  }, [department, teacher]);
  
  const handleAddClick: SubmitHandler<TeacherDepartmentType | TeacherType | DepartmentType | FieldValues> = (data) => {
    addTeacherDepartmentsHandler(data);
    setIsAdd(false);
    getAllTeacherDepartmentsHandler()
  };
  return (
    <form className="relative" onSubmit={handleSubmit(handleAddClick)}>
      <div className="flex border-b-[1px] border-l-[1px] border-black w-full ">
        {/* <TableInput isBig name="fullname" value={teacherName} isActive={isActive} register={register}/>
        <TableInput isBig name="name" value={departmentName} isActive={isActive} register={register}/>
        <TableInput isBig name="position" value={teacherPosition} isActive={isActive} register={register}/> */}
        <div className="flex items-center border-r-[1px] border-black w-[60%] gap-2 p-2">
          <Select name="teacherId" options={teachers} register={register}/>
          <Select name="departmentId" isDepartment options={departments} register={register}/>
        </div>
        <TableInput isBig classNameInput="w-[20%]" name="budgetRate" isActive={true} register={register}/>
        <TableInput isBig classNameInput="w-[20%]"  name="extraRate" isActive={true} register={register}/>
      </div>
      <Button className="mt-8" fill>Добавити</Button>
    </form>    
  );
};

export default AddTeacherDepartments;
