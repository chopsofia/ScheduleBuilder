import React, { FunctionComponent, useState } from "react";
import TableInput from "../TableInput/TableInput";

//Components

import { ReactComponent as Trash } from "../../../../../assets/trash.svg";
import { ReactComponent as Edit } from "../../../../../assets/edit.svg";
import { ReactComponent as Save } from "../../../../../assets/save.svg";
import { GetAllPersonalLoadsResponseType, PersonalLoadType } from "../../../../../types/PersonalLoadType";
import { usePersonalLoad } from "../../../../pages/PersonalLoad/hooks/usePersonalLoad";
import { FieldValues } from "react-hook-form";
import Button from "../../../Button/Button";

type PersonalLoadTableInputProps = {
  item: GetAllPersonalLoadsResponseType,
  departmentId: string | undefined,
  teacherId: string | undefined,
  index: number;
};

const PersonalLoadTableInput: FunctionComponent<PersonalLoadTableInputProps> = ({
  item,
  departmentId,
  teacherId,
  index,
}) => {
  const [isActive, setIsActive] = useState(false);
  const {
    register,
    removePersonalLoadHandler,
    updatePersonalLoadHandler,
    handleSubmit,
  } = usePersonalLoad(departmentId, teacherId);
  
  const handleUpdateClick = (data: PersonalLoadType | FieldValues) => {
    updatePersonalLoadHandler({...data, id: item.id, teacherId: teacherId, departmentId: departmentId});
    setIsActive(false); // Close the input and submit the form
  };
  console.log("=-=-=-=PersonalLoadTableInput departmentId -----------------=", departmentId)
  console.log("=-=-=-=PersonalLoadTableInput teacherId ----------------------=", teacherId)
  
  return (
    <form className="relative" onSubmit={handleSubmit(handleUpdateClick)}>
      <div className="flex border-b-[1px] border-l-[1px] border-black w-full ">
        <div className="flex items-center justify-center border-r-[1px] border-black p-3 w-[78px]"> {index + 1} </div>
        <TableInput isText inputClassName="px-0" isBig name="subject" value={item.subject} isActive={isActive} register={register} />
        <TableInput isText inputClassName="px-0" name="facultyAbbr" value={item.facultyAbbr} isActive={isActive} register={register} />
        <TableInput inputClassName="px-0" name="semester" value={item.semester} isActive={isActive} register={register} />
        <TableInput inputClassName="px-0" name="course" value={item.course} isActive={isActive} register={register} />
        <TableInput inputClassName="px-0" name="students" value={item.students} isActive={isActive} register={register} />
        <TableInput inputClassName="px-0" name="lectures" value={item.lectures} isActive={isActive} register={register} />
        <TableInput inputClassName="px-0" name="lecturesExtramural" value={item.lecturesExtramural} isActive={isActive} register={register} />
        <TableInput inputClassName="px-0" name="practicalClasses" value={item.practicalClasses} isActive={isActive} register={register} />
        <TableInput inputClassName="px-0" name="practicalClassesExtramural" value={item.practicalClassesExtramural} isActive={isActive} register={register} />
        <TableInput inputClassName="px-0" name="laboratoryClasses" value={item.laboratoryClasses} isActive={isActive} register={register} />
        <TableInput inputClassName="px-0" name="laboratoryClassesExtramural" value={item.laboratoryClassesExtramural} isActive={isActive} register={register} />
        <TableInput inputClassName="px-0" name="consultations" value={item.consultations} isActive={isActive} register={register} />
        <TableInput inputClassName="px-0" name="consultationsExtramural" value={item.consultationsExtramural} isActive={isActive} register={register} />
        <TableInput inputClassName="px-0" name="exams" value={item.exams} isActive={isActive} register={register} />
        <TableInput inputClassName="px-0" name="examsExtramural" value={item.examsExtramural} isActive={isActive} register={register} />
        <TableInput inputClassName="px-0" name="passFailCourses" value={item.passFailCourses} isActive={isActive} register={register} />
        <TableInput inputClassName="px-0" name="passFailCoursesExtramural" value={item.passFailCoursesExtramural} isActive={isActive} register={register} />
        <TableInput inputClassName="px-0" name="controlWorks" value={item.controlWorks} isActive={isActive} register={register} />
        <TableInput inputClassName="px-0" name="courseWorks" value={item.courseWorks} isActive={isActive} register={register} />
        <TableInput inputClassName="px-0" name="diplomaWorks" value={item.diplomaWorks} isActive={isActive} register={register} />
        <TableInput inputClassName="px-0" name="pedagogicPractices" value={item.pedagogicPractices} isActive={isActive} register={register} />
        <TableInput inputClassName="px-0" name="studyPractices" value={item.studyPractices} isActive={isActive} register={register} />
        <TableInput inputClassName="px-0" name="industrialPractices" value={item.industrialPractices} isActive={isActive} register={register} />
        <TableInput inputClassName="px-0" name="deks" value={item.deks} isActive={isActive} register={register} />
        <TableInput inputClassName="px-0" name="postgrad" value={item.postgrad} isActive={isActive} register={register} />
        <TableInput inputClassName="px-0" name="others" value={item.others} isActive={isActive} register={register} />
        </div>

      <div className={`absolute cursor-pointer bg-red -right-8 top-2`} onClick={() => removePersonalLoadHandler(item.id)}><Trash className="w-4 h-4"/></div>
      <div className={`${isActive? "hidden" : ""} absolute cursor-pointer -right-4 top-2`} onClick={() => setIsActive(!isActive)}><Edit className="w-4 h-4"/></div>
      <div className={`${isActive? "" : "hidden"} absolute cursor-pointer -right-4 top-2`} ><Button><Save className="w-4 h-4"/></Button></div>
    </form>    
  );
};

export default PersonalLoadTableInput;
