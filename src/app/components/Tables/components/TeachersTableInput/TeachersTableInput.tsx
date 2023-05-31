import React, { FunctionComponent, useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import TableInput from "../TableInput/TableInput";
import { GetAllTeacherDepartmentsResponseType, UpdateTeacherDepartmentsRequestType } from "../../../../../types/TeacherType";
import { useDepartment } from "../../../../pages/Department/hooks/useDepartment";
import { useTeacherDepartments } from "../../../../pages/Teachers/hooks/useTeacherDepartments";
import { useFaculties } from "../../../../pages/Faculties/hooks/useFaculties";

//Components

import { ReactComponent as Trash } from "../../../../../assets/trash.svg";
import { ReactComponent as Edit } from "../../../../../assets/edit.svg";
import { ReactComponent as Save } from "../../../../../assets/save.svg";
import { FieldValues } from "react-hook-form";
import Button from "../../../Button";

type TeachersTableInputProps = {
  item: GetAllTeacherDepartmentsResponseType,
};

const TeachersTableInput: FunctionComponent<TeachersTableInputProps> = ({
  item,
}) => {
  const [isActive, setIsActive] = useState(false);

  const { departments } = useFaculties();
  const {
    getDepartmentNameByIdHandler,
    departmentName,
  } = useDepartment(item.departmentDTO?.id.toString());
  
  const {
    removeTeacherDepartmentsHandler,
    getTeacherNamePositionByIdHandler,
    teacherName,
    teacherPosition,
    teachers,
    register,
    handleSubmit,
    updateTeacherDepartmentHandler,
  } = useTeacherDepartments(item.teacherDTO?.id.toString());

  const handleUpdateClick = (data: UpdateTeacherDepartmentsRequestType | FieldValues) => {
    updateTeacherDepartmentHandler({...data, id: item.id, departmentId: item.departmentDTO?.id, teacherId: item.teacherDTO?.id});
    setIsActive(false); // Close the input and submit the form
  };

  // useEffect(() => {
  //   getDepartmentNameByIdHandler();
  //   console.log("getDepartmentNameByIdHandler - ", departmentName)
  //   getTeacherNamePositionByIdHandler();
  //   console.log("getTeacherNamePositionByIdHandler - ", teacherName)
  // }, []);
  
  return (
    <form 
      className="relative"
      onSubmit={handleSubmit(handleUpdateClick)}
    >
      <div className="flex border-b-[1px] border-l-[1px] border-black w-full ">
        <TableInput isBig isText name="fullname" value={item.teacherDTO?.fullName} isActive={isActive} register={register}/>
        <TableInput isBig isText name="name" value={item.departmentDTO?.name} isActive={isActive} register={register}/>
        <TableInput isBig isText name="position" value={item.teacherDTO?.position} isActive={isActive} register={register}/>
        <TableInput isBig name="budgetRate" value={item.budgetRate} isActive={isActive} register={register}/>
        <TableInput isBig name="extraRate" value={item.extraRate} isActive={isActive} register={register}/>
      </div>

      <div className={`absolute cursor-pointer bg-red -right-8 top-2`} onClick={() => removeTeacherDepartmentsHandler(item.id)}><Trash className="w-4 h-4"/></div>
      <div className={`${isActive? "hidden" : ""} absolute cursor-pointer -right-4 top-2`} onClick={() => setIsActive(!isActive)}><Edit className="w-4 h-4"/></div>
      <div className={`${isActive? "" : "hidden"} absolute cursor-pointer -right-4 top-2`}><Button><Save className="w-4 h-4"/></Button></div>
    </form>    
  );
};

export default TeachersTableInput;
