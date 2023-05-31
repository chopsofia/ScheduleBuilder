import React, { FunctionComponent, useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
 
// import { ReactComponent as Arrow } from "../../../assets/arrow.svg"; trash.svg  edit.svg save.svg
import { ReactComponent as Arrow } from "../../../../../assets/arrow.svg";
import { ReactComponent as Trash } from "../../../../../assets/trash.svg";
import { ReactComponent as Edit } from "../../../../../assets/edit.svg";
import { ReactComponent as Save } from "../../../../../assets/save.svg";

import {  DepartmentType, UserGetAllDepartmentResponseType } from "../../../../../types/FacultiesType";
import { useFaculties } from "../../hooks/useFaculties";
import Input from "../../../../components/Input/Input";
import Button from "../../../../components/Button/Button";
import { FieldValues } from "react-hook-form";

// gtp

type DepartmentItemProps = {
  departments: UserGetAllDepartmentResponseType;
};

const DepartmentItem: FunctionComponent<DepartmentItemProps> = ({
  departments,
}) => {
  const [isEdit, setIsEdit] = useState<boolean>(false);

  const {
    handleSubmit,
    register,
    removeDepartmentHandler,
    updateDepartmentHandler,
  } = useFaculties();

  const handleUpdateClick = (data: DepartmentType | FieldValues) => {
    updateDepartmentHandler({...data, id: departments.id, facultyId: departments.facultyId});
    setIsEdit(false); // Close the input and submit the form
  };

  const handleEditClick = (event: React.MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
    setIsEdit(!isEdit);
  };

  return (
    <div className="flex justify-between">
        <div className={`${!isEdit? "flex" : "hidden"}`}>
            <NavLink to={`${departments.id}`} className={``}> {departments.name}</NavLink>
        </div>            
        <form className={`${isEdit ? "flex" : "hidden"}`} onSubmit={handleSubmit(handleUpdateClick)}>
            <Input  
            type="text"
            name={`name`}
            value={departments.name}
            register={register}
            />
            <div className={`flex items-center cursor-pointer`}>
              <Button><Save className="w-4 h-4"/></Button>
            </div>
        </form>
        <div className="flex gap-2">
            <div className={`${!isEdit? "flex" : "hidden"} items-center cursor-pointer`} onClick={handleEditClick}><Edit className="w-4 h-4"/></div>
            <div className={`flex items-center cursor-pointer`} onClick={() => removeDepartmentHandler(departments.id)}><Trash className="w-4 h-4"/></div>
        </div>
    </div>
  );
};

export default React.memo(DepartmentItem);