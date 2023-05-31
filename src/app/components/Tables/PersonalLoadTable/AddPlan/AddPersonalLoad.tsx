import React, { FunctionComponent } from "react";
import TableInput from "../../components/TableInput/TableInput";
import Button from "../../../Button/Button";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { PlanType } from "../../../../../types/PlanType";
import { usePersonalLoad } from "../../../../pages/PersonalLoad/hooks/usePersonalLoad";

//Components

type AddPersonalLoadProps = {
  setIsAdd: Function,
  departmentId: string | undefined,
  teacherId: string | undefined,
};

const AddPersonalLoad: FunctionComponent<AddPersonalLoadProps> = ({
  setIsAdd,
  departmentId,
  teacherId,
}) => {
  // const [isActive, setIsActive] = useState(false);
  // console.log("=-=-=--=AddPersonalLoad department_id -----------------=", departmentId)
  // console.log("=-=--==-=AddPersonalLoad teacherId ----------------------=", teacherId)
  const {
    getAllPersonalLoadHandler,
    addPersonalLoadHandler,
    register,
    handleSubmit,
  } = usePersonalLoad(departmentId, teacherId);
  
  const handleAddClick: SubmitHandler<PlanType | FieldValues> = (data) => {
    addPersonalLoadHandler(data);
    setIsAdd(false);
    getAllPersonalLoadHandler()
  };

  return (
    <form className="relative" onSubmit={handleSubmit(handleAddClick)}>
      <div className="flex border-b-[1px] border-l-[1px] border-black w-full ">
        <div className="flex items-center justify-center border-r-[1px] border-black p-3 w-[40px]"> № </div>
        <TableInput isText inputClassName="px-0" isBig name="subject" isActive={true} register={register} />
        <TableInput isText inputClassName="px-0" name="facultyAbbr" isActive={true} register={register} />
        <TableInput inputClassName="px-0" name="semester" isActive={true} register={register} />
        <TableInput inputClassName="px-0" name="course" isActive={true} register={register} />
        <TableInput inputClassName="px-0" name="students" isActive={true} register={register} />
        <TableInput inputClassName="px-0" name="lectures" isActive={true} register={register} />
        <TableInput inputClassName="px-0" name="lecturesExtramural" isActive={true} register={register} />
        <TableInput inputClassName="px-0" name="practicalClasses" isActive={true} register={register} />
        <TableInput inputClassName="px-0" name="practicalClassesExtramural" isActive={true} register={register} />
        <TableInput inputClassName="px-0" name="laboratoryClasses" isActive={true} register={register} />
        <TableInput inputClassName="px-0" name="laboratoryClassesExtramural" isActive={true} register={register} />
        <TableInput inputClassName="px-0" name="consultations" isActive={true} register={register} />
        <TableInput inputClassName="px-0" name="consultationsExtramural" isActive={true} register={register} />
        <TableInput inputClassName="px-0" name="exams" isActive={true} register={register} />
        <TableInput inputClassName="px-0" name="examsExtramural" isActive={true} register={register} />
        <TableInput inputClassName="px-0" name="passFailCourses" isActive={true} register={register} />
        <TableInput inputClassName="px-0" name="passFailCoursesExtramural" isActive={true} register={register} />
        <TableInput inputClassName="px-0" name="controlWorks" isActive={true} register={register} />
        <TableInput inputClassName="px-0" name="courseWorks" isActive={true} register={register} />
        <TableInput inputClassName="px-0" name="diplomaWorks" isActive={true} register={register} />
        <TableInput inputClassName="px-0" name="pedagogicPractices" isActive={true} register={register} />
        <TableInput inputClassName="px-0" name="studyPractices" isActive={true} register={register} />
        <TableInput inputClassName="px-0" name="industrialPractices" isActive={true} register={register} />
        <TableInput inputClassName="px-0" name="deks" isActive={true} register={register} />
        <TableInput inputClassName="px-0" name="postgrad" isActive={true} register={register} />
        <TableInput inputClassName="px-0" name="others" isActive={true} register={register} />
      </div>
      <Button className="mt-8" fill>Добавити</Button>
    </form>    
  );
};

export default AddPersonalLoad;
