import React, { FunctionComponent, useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import TableInput from "../../components/TableInput/TableInput";
import { GetAllTeacherDepartmentsResponseType, TeacherDepartmentType, TeacherType } from "../../../../../types/TeacherType";
import { DepartmentType, UserGetAllDepartmentResponseType } from "../../../../../types/FacultiesType";
import Button from "../../../Button/Button";
import { FieldValues, SubmitHandler } from "react-hook-form";
import Select from "../../components/Select/Select";
import { usePlan } from "../../../../pages/Plan/hooks/usePlan";
import { PlanType } from "../../../../../types/PlanType";

//Components

type AddPlanProps = {
  setIsAdd: Function,
  departmentId: string | undefined;
};

const AddPlan: FunctionComponent<AddPlanProps> = ({
  setIsAdd,
  departmentId,
}) => {
  // const [isActive, setIsActive] = useState(false);
  console.log("AddPlan department_id --=", departmentId)
  const {
    getAllPlansHandler,
    addPlanHandler,
    register,
    handleSubmit,
    setValue,
  } = usePlan(departmentId);
  const [isExtramural, setIsExtramural] = useState(false);

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const checked = e.target.checked;
    setIsExtramural(checked);
    setValue("isExtramural", checked);
  };
  
  const handleAddClick: SubmitHandler<PlanType | FieldValues> = (data) => {
    data.isExtramural = isExtramural;
    addPlanHandler(data);
    setIsAdd(false);
    getAllPlansHandler()
  };
  

  return (
    <form className="relative" onSubmit={handleSubmit(handleAddClick)}>
      <div className="flex border-b-[1px] border-l-[1px] border-black w-full ">
        <TableInput isText isBig name="subject" classNameInput="w-full" isActive={true} register={register} />
        <TableInput inputClassName="px-0" isText classNameInput="min-w-[70px]" name="facultyAbbr" isActive={true} register={register} />
        <TableInput inputClassName="px-0" isText classNameInput="min-w-[70px]" name="course" isActive={true} register={register} />
        <TableInput inputClassName="px-0" classNameInput="min-w-[70px]" name="semester" isActive={true} register={register} />
        <TableInput inputClassName="px-0" classNameInput="min-w-[70px]" name="groups" isActive={true} register={register} />
        <TableInput inputClassName="px-0" classNameInput="min-w-[70px]" name="students" isActive={true} register={register} />
        <TableInput inputClassName="px-0" classNameInput="min-w-[70px]" name="lectures" isActive={true} register={register} />
        <TableInput inputClassName="px-0" classNameInput="min-w-[70px]" name="practicalClasses" isActive={true} register={register} />
        <TableInput inputClassName="px-0" classNameInput="min-w-[70px]" name="laboratoryClasses" isActive={true} register={register} />
        <TableInput inputClassName="px-0" classNameInput="min-w-[70px]" name="exams" isActive={true} register={register} />
        <TableInput inputClassName="px-0" classNameInput="min-w-[70px]" name="passFailCourses" isActive={true} register={register} />
        <TableInput inputClassName="px-0" classNameInput="min-w-[70px]" name="courseWorks" isActive={true} register={register} />
        <TableInput inputClassName="px-0" classNameInput="min-w-[70px]" name="diplomaWorks" isActive={true} register={register} />
        <TableInput inputClassName="px-0" classNameInput="min-w-[70px]" name="practices" isActive={true} register={register} />
        <TableInput inputClassName="px-0" classNameInput="min-w-[70px]" name="consultations" isActive={true} register={register} />
        <TableInput inputClassName="px-0" classNameInput="min-w-[70px]" name="others" isActive={true} register={register} />
        <div className="flex justify-center border-r-[1px] border-black p-2 h-full min-w-[70px]">
          <input
            type="checkbox"
            name="isExtramural"
            checked={isExtramural}
            onChange={handleCheckboxChange}
          />
        </div>
        <div className="flex items-center border-r-[1px] border-black p-2 h-full min-w-[70px]">
          Sum
        </div>
      </div>
      <Button className="mt-8" fill>Добавити</Button>
    </form>    
  );
};

export default AddPlan;
