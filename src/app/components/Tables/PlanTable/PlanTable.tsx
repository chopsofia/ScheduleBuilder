import React, { FunctionComponent, useState } from "react";
import { NavLink } from "react-router-dom";
import TableInput from "../components/TableInput/TableInput";
import { GetAllPlansResponseType } from "../../../../types/PlanType";
import { usePlan } from "../../../pages/Plan/hooks/usePlan";
import Button from "../../Button/Button";
import PlanTableInput from "../components/PlanTableInput/PlanTableInput";
import AddPlan from "./AddPlan/AddPlan";

type PlanTableProps = {
  plans: GetAllPlansResponseType[],
  departmentId: string | undefined,
};
// justify-between items-center
const PlanTable: FunctionComponent<PlanTableProps> = ({
  plans,
  departmentId,
}) => {
  const [isAdd, setIsAdd] = useState(false);
  const {
  } = usePlan(departmentId);
  return (
    <div
      className={`flex flex-col`}
    >
      <div className="flex border-y-[1px] border-l-[1px] border-black w-full">
        <div className="flex items-center w-full justify-center border-r-[1px] border-black p-2 ">Предмет</div>
        {/* <div className="flex justify-center border-r-[1px] border-black p-2 min-w-[70px] ">Спец.</div> */}
        <div className="flex justify-center border-r-[1px] border-black p-2 min-w-[70px] ">Ф-т</div>
        <div className="flex justify-center border-r-[1px] border-black p-2 min-w-[70px] ">Курс</div>
        <div className="flex justify-center border-r-[1px] border-black p-2 min-w-[70px] ">Сем.</div>
        <div className="flex justify-center border-r-[1px] border-black p-2 min-w-[70px] ">Група</div>
        <div className="flex justify-center border-r-[1px] border-black p-2 min-w-[70px] ">Студ.</div>
        <div className="flex justify-center border-r-[1px] border-black p-2 min-w-[70px] ">Лекції</div>
        <div className="flex justify-center border-r-[1px] border-black p-2 min-w-[70px] ">Практ.</div>
        <div className="flex justify-center border-r-[1px] border-black p-2 min-w-[70px] ">Лабор.</div>
        <div className="flex justify-center border-r-[1px] border-black p-2 min-w-[70px] ">Іспити</div>
        <div className="flex justify-center border-r-[1px] border-black p-2 min-w-[70px] ">Заліки</div>
        {/* <div className="flex justify-center border-r-[1px] border-black p-2 min-w-[70px] ">Контр. р.</div> */}
        <div className="flex justify-center border-r-[1px] border-black p-2 min-w-[70px] ">Курс р.</div>
        <div className="flex justify-center border-r-[1px] border-black p-2 min-w-[70px] ">Дипл.</div>
        <div className="flex justify-center border-r-[1px] border-black p-2 min-w-[70px] ">Пр-ки</div>
        <div className="flex justify-center border-r-[1px] border-black p-2 min-w-[70px] ">Конс.</div>
        <div className="flex justify-center border-r-[1px] border-black p-2 min-w-[70px] ">Інакше</div>
        <div className="flex justify-center border-r-[1px] border-black p-2 min-w-[70px] ">Заоч.</div>
        <div className="flex justify-center border-r-[1px] border-black p-2 min-w-[70px] ">Всього</div>
      </div>
      {plans && plans.map((item) => 
        <PlanTableInput key={item.id} item={item} departmentId={departmentId}/>
      )}
      {!isAdd && <Button className="mt-8" onClick={()=>setIsAdd(true)} fill>Добавити</Button> }
      {isAdd &&
        <AddPlan departmentId={departmentId} setIsAdd={setIsAdd} />
      }      
    </div>
  );
};

export default PlanTable;
