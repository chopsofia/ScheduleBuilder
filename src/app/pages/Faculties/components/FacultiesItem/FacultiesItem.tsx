import React, { FunctionComponent, useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
 
// import { ReactComponent as Arrow } from "../../../assets/arrow.svg"; trash.svg  edit.svg save.svg
import { ReactComponent as Arrow } from "../../../../../assets/arrow.svg";
import { ReactComponent as Trash } from "../../../../../assets/trash.svg";
import { ReactComponent as Edit } from "../../../../../assets/edit.svg";
import { ReactComponent as Save } from "../../../../../assets/save.svg";

import { DepartmentType, FacultiesType, UserGetAllDepartmentResponseType, UserGetAllFacultiesResponseType } from "../../../../../types/FacultiesType";
import { useFaculties } from "../../hooks/useFaculties";
import Input from "../../../../components/Input/Input";
import Button from "../../../../components/Button/Button";
import { FieldValues } from "react-hook-form";
import DepartmentItem from "../DepartmentItem/DepartmentItem";

// gtp

type FacultiesItemProps = {
  faculties: UserGetAllFacultiesResponseType;
  departments: UserGetAllDepartmentResponseType[];
};

const FacultiesItem: FunctionComponent<FacultiesItemProps> = ({
  faculties,
  departments,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false); 
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const [isAdd, setIsAdd] = useState<boolean>(false);

  const {
    register,
    handleSubmit,
    errors,
    setValue,
    watch,
    backendErrors,
    getAllDepartmentHandler,
    addDepartmentHandler,
    removeDepartmentHandler,
    removeFacultiesHandler,
    updateDepartmentHandler,
    updateFacultiesHandler,
  } = useFaculties(faculties.id);


  const handleEditClick = (event: React.MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
    setIsEdit(!isEdit);
    setIsOpen(true);
  };
  const handleDeleteClick = (event: React.MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
    removeFacultiesHandler(faculties.id)
    // setIsEdit(!isEdit);
  };

  // const formRef = useRef<HTMLFormElement>(null);
  // const handleSaveFacultiesClick = (event: React.MouseEvent<HTMLDivElement>) => {
  //   event.stopPropagation();
  //   event.preventDefault();
  //   // Викликати метод submit на формі
  //   formRef.current?.submit();    
  //   setIsEdit(!isEdit);
  // };
  
  
  const handleInputClick = (event: React.MouseEvent<HTMLInputElement>) => {
    event.stopPropagation();
  };
  
  useEffect(() => {
    getAllDepartmentHandler();
  }, []);

  // useEffect(() => {
  //   getAllDepartmentHandler(faculties.id);
  // }, []);

  const handleAddClick = (data: FacultiesType | DepartmentType | FieldValues) => {
    addDepartmentHandler(data);
    setIsAdd(false); // Close the input and submit the form
  };

  const handleUpdateClick = (data: FacultiesType | DepartmentType | FieldValues) => {
    updateFacultiesHandler(data);
    setIsEdit(false); // Close the input and submit the form
  };

  const filteredDepartments = departments.filter((department) => department.facultyId === faculties.id);

  return (
    <div className={`${isOpen? "" : "hover:bg-white"} w-8/12`}>
      <div onClick={() => setIsOpen(!isOpen)} className="flex cursor-pointer justify-between mb-1">
        <div className="flex">
          <div className={`${isOpen? "flex" : "hidden"} items-center`}><Arrow className="h-4"/></div>
          <div className={`${!isEdit? "flex" : "hidden"}`}>
            {faculties?.name}
          </div>            
          <div onClick={handleInputClick} className={`${isEdit ? "flex" : "hidden"}`}>
            <form className="flex gap-2" onSubmit={handleSubmit(handleUpdateClick)}>
              <Input  
                type="text"
                name="name"
                value={faculties?.name}
                register={register}
              />
              <div className={`flex items-center cursor-pointer`} >
                <Button><Save className="w-4 h-4"/></Button>
              </div>
            </form>            
        </div>
        </div>
        <div className="flex gap-2">
          <div className={`${!isEdit? "flex" : "hidden"} items-center cursor-pointer`} onClick={handleEditClick}><Edit className="w-4 h-4"/></div>
          <div className={`flex items-center cursor-pointer`} onClick={handleDeleteClick}><Trash className="w-4 h-4"/></div>
        </div>
      </div>
      <div className={`${isOpen? "flex" : "hidden"} flex-col gap-2 bg-white p-2`}>
        {isOpen && filteredDepartments.map((listItem, index) => 
          <DepartmentItem key={listItem.id}  departments={listItem}/>
        )}
      {!isAdd && isEdit && <Button onClick={()=>setIsAdd(true)} fill>Добавити кафедру</Button> }
        {isAdd && isEdit &&
        <form
          className="flex flex-col gap-4"
          onSubmit={handleSubmit(handleAddClick)}
        >
          <Input 
            name="name"
            type="text"
            register={register}
          />
          <Button fill>Добавити</Button>
        </form>          
        }
      </div>
    </div>
  );
};

export default React.memo(FacultiesItem);