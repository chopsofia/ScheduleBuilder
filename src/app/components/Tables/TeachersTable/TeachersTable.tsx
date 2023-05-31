import React, { FunctionComponent, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import TableInput from "../components/TableInput/TableInput";
import { GetAllTeacherDepartmentsResponseType } from "../../../../types/TeacherType";
import { useTeacherDepartments } from "../../../pages/Teachers/hooks/useTeacherDepartments";
import TeachersTableInput from "../components/TeachersTableInput/TeachersTableInput";
import AddTeacherDepartments from "./AddTeacherDepartments/AddTeacherDepartments";
import Button from "../../Button/Button";

type TeachersTableProps = {
  teacherDepartments: GetAllTeacherDepartmentsResponseType[],
};
// justify-between items-center
const TeachersTable: FunctionComponent<TeachersTableProps> = ({
  teacherDepartments,
}) => {
  const [isAdd, setIsAdd] = useState(false);
  const {
  } = useTeacherDepartments();

  // useEffect(() => {
  //   getAllTeacherDepartmentsHandler();
  // }, []);

  return (
    <div
      className={`flex flex-col`}
    >
      <div className="flex border-y-[1px] border-l-[1px] border-black w-full">
        <div className="flex border-r-[1px] border-black p-2 h-full w-full">Повне ім'я</div>
        <div className="flex border-r-[1px] border-black p-2 h-full w-full">Кафедра</div>
        <div className="flex border-r-[1px] border-black p-2 h-full w-full">Посада</div>
        <div className="flex border-r-[1px] border-black p-2 h-full w-full">Ставка</div>
        <div className="flex border-r-[1px] border-black p-2 h-full w-full">Додаткова ставка</div>
      </div>
      {teacherDepartments && teacherDepartments.map((item) => 
        <TeachersTableInput key={item.id} item={item} />
      )}
      {!isAdd && <Button className="mt-8" onClick={()=>setIsAdd(true)} fill>Добавити</Button> }
      {isAdd &&
        <AddTeacherDepartments setIsAdd={setIsAdd} />
      }
    </div>
  );
};

export default TeachersTable;
