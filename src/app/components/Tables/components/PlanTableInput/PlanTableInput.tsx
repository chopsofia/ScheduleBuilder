import React, { FunctionComponent, useState } from "react";
import TableInput from "../TableInput/TableInput";

//Components

import { ReactComponent as Trash } from "../../../../../assets/trash.svg";
import { ReactComponent as Edit } from "../../../../../assets/edit.svg";
import { ReactComponent as Save } from "../../../../../assets/save.svg";
import { GetAllPlansResponseType, PlanType } from "../../../../../types/PlanType";
import { usePlan } from "../../../../pages/Plan/hooks/usePlan";
import { FieldValues } from "react-hook-form";
import Button from "../../../Button/Button";

type PlanTableInputProps = {
  item: GetAllPlansResponseType,
  departmentId: string | undefined,
};

const PlanTableInput: FunctionComponent<PlanTableInputProps> = ({
  item,
  departmentId,
}) => {
  const [isActive, setIsActive] = useState(false);
  const {
    register,
    removePlanHandler,
    handleSubmit,
    updatePlanHandler,
    setValue,
  } = usePlan(departmentId);

  const [isExtramural, setIsExtramural] = useState(false);

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const checked = e.target.checked;
    setIsExtramural(checked);
    setValue("isExtramural", checked);
  };
  
  const handleUpdateClick = (data: PlanType | FieldValues) => {
    updatePlanHandler({...data, id: item.id});
    setIsActive(false); // Close the input and submit the form
  };

  return (
    <form className="relative" onSubmit={handleSubmit(handleUpdateClick)}>
      <div className="flex border-b-[1px] border-l-[1px] border-black w-full ">
          <TableInput isText isBig name="subject" classNameInput="w-full" value={item.subject} isActive={isActive} register={register} />
          <TableInput inputClassName="px-0" isText classNameInput="min-w-[70px]" name="facultyAbbr" value={item.facultyAbbr} isActive={isActive} register={register} />
          <TableInput inputClassName="px-0" isText classNameInput="min-w-[70px]" name="course" value={item.course} isActive={isActive} register={register} />
          <TableInput inputClassName="px-0" classNameInput="min-w-[70px]" name="semester" value={item.semester} isActive={isActive} register={register} />
          <TableInput inputClassName="px-0" classNameInput="min-w-[70px]" name="groups" value={item.groups} isActive={isActive} register={register} />
          <TableInput inputClassName="px-0" classNameInput="min-w-[70px]" name="students" value={item.students} isActive={isActive} register={register} />
          <TableInput inputClassName="px-0" classNameInput="min-w-[70px]" name="lectures" value={item.lectures} isActive={isActive} register={register} />
          <TableInput inputClassName="px-0" classNameInput="min-w-[70px]" name="practicalClasses" value={item.practicalClasses} isActive={isActive} register={register} />
          <TableInput inputClassName="px-0" classNameInput="min-w-[70px]" name="laboratoryClasses" value={item.laboratoryClasses} isActive={isActive} register={register} />
          <TableInput inputClassName="px-0" classNameInput="min-w-[70px]" name="exams" value={item.exams} isActive={isActive} register={register} />
          <TableInput inputClassName="px-0" classNameInput="min-w-[70px]" name="passFailCourses" value={item.passFailCourses} isActive={isActive} register={register} />
          <TableInput inputClassName="px-0" classNameInput="min-w-[70px]" name="courseWorks" value={item.courseWorks} isActive={isActive} register={register} />
          <TableInput inputClassName="px-0" classNameInput="min-w-[70px]" name="diplomaWorks" value={item.diplomaWorks} isActive={isActive} register={register} />
          <TableInput inputClassName="px-0" classNameInput="min-w-[70px]" name="practices" value={item.practices} isActive={isActive} register={register} />
          <TableInput inputClassName="px-0" classNameInput="min-w-[70px]" name="consultations" value={item.consultations} isActive={isActive} register={register} />
          <TableInput inputClassName="px-0" classNameInput="min-w-[70px]" name="others" value={item.others} isActive={isActive} register={register} />
          <div className="flex justify-center border-r-[1px] border-black p-2 h-full min-w-[70px]">
            {isActive &&
              <input
                type="checkbox"
                name="isExtramural"
                checked={isExtramural}
                onChange={handleCheckboxChange}
              />
            }
            {!isActive && <div>{isExtramural? "Y" : "N"}</div> }
          </div>
          <div className="flex justify-center border-r-[1px] border-black p-2 h-full min-w-[70px]">
            {item.lectures + item.practicalClasses + item.laboratoryClasses + item.exams + item.passFailCourses + item.courseWorks + item.diplomaWorks + item.practices + item.consultations + item.others}
          </div>
      </div>

      <div className={`absolute cursor-pointer bg-red -right-8 top-2`} onClick={() => removePlanHandler(item.id)}><Trash className="w-4 h-4"/></div>
      <div className={`${isActive? "hidden" : ""} absolute cursor-pointer -right-4 top-2`} onClick={() => setIsActive(!isActive)}><Edit className="w-4 h-4"/></div>
      <div className={`${isActive? "" : "hidden"} absolute cursor-pointer -right-4 top-2`} ><Button><Save className="w-4 h-4"/></Button></div>
    </form>    
  );
};

export default PlanTableInput;
