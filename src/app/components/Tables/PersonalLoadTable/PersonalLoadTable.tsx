import React, { FunctionComponent, useState } from "react";
import { GetAllPersonalLoadsResponseType } from "../../../../types/PersonalLoadType";
import { usePersonalLoad } from "../../../pages/PersonalLoad/hooks/usePersonalLoad";
import Button from "../../Button/Button";
import PersonalLoadTableInput from "../components/PersonalLoadTableInput/PersonalLoadTableInput";
import AddPersonalLoad from "./AddPlan/AddPersonalLoad";

type PersonalLoadTableProps = {
  personalLoads: GetAllPersonalLoadsResponseType[],
  departmentId? : string | undefined,
  teacherId? : string | undefined,
};
// justify-between items-center
const PersonalLoadTable: FunctionComponent<PersonalLoadTableProps> = ({
  personalLoads,
  departmentId,
  teacherId,
}) => {
  const [isAdd, setIsAdd] = useState(false);
  const {
  } = usePersonalLoad(departmentId, teacherId);
  return (
    <div
      className={`flex flex-col`}
    >
      <div className="flex border-y-[1px] border-l-[1px] border-black w-full">
        <div className="flex items-center justify-center border-r-[1px] border-black p-3 w-[40px]"> № </div>
        <div className="flex items-center w-full justify-center border-r-[1px] border-black p-2 ">Дисципліни</div>

        <div className="flex justify-center border-r-[1px] border-black p-2 w-10 [writing-mode:vertical-rl]">Факультет</div>
        <div className="flex justify-center border-r-[1px] border-black p-2 w-10 [writing-mode:vertical-rl]">Семестр</div>
        <div className="flex justify-center border-r-[1px] border-black p-2 w-10 [writing-mode:vertical-rl]">Курс</div>
        <div className="flex justify-center border-r-[1px] border-black p-2 w-10 [writing-mode:vertical-rl]">К-ть студентів</div>
        
        <div className="">
          <div className="flex border-r-[1px]  border-b-[1px] border-black p-2 w-20 ">Лекції</div>
          <div className="flex h-[120px]">
            <div className="justify-center text-center border-r-[1px] border-black p-2 w-10 [writing-mode:vertical-rl]"> Денне </div>
            <div className="justify-center text-center border-r-[1px] border-black p-2 w-10 [writing-mode:vertical-rl]"> Заочне </div>
          </div>
        </div>
        <div className="">
          <div className="flex border-r-[1px]  border-b-[1px] border-black p-2 w-20 ">Практ.</div>
          <div className="flex h-[120px]">
            <div className="justify-center text-center border-r-[1px] border-black p-2 w-10 [writing-mode:vertical-rl]"> Денне </div>
            <div className="justify-center text-center border-r-[1px] border-black p-2 w-10 [writing-mode:vertical-rl]"> Заочне </div>
          </div>
        </div>
        <div className="">
          <div className="flex border-r-[1px]  border-b-[1px] border-black p-2 w-20 ">Лабор.</div>
          <div className="flex h-[120px]">
            <div className="justify-center text-center border-r-[1px] border-black p-2 w-10 [writing-mode:vertical-rl]"> Денне </div>
            <div className="justify-center text-center border-r-[1px] border-black p-2 w-10 [writing-mode:vertical-rl]"> Заочне </div>
          </div>
        </div>
        <div className="">
          <div className="flex border-r-[1px]  border-b-[1px] border-black p-2 w-20 ">Конс.</div>
          <div className="flex h-[120px]">
            <div className="justify-center text-center border-r-[1px] border-black p-2 w-10 [writing-mode:vertical-rl]"> Денне </div>
            <div className="justify-center text-center border-r-[1px] border-black p-2 w-10 [writing-mode:vertical-rl]"> Заочне </div>
          </div>
        </div>
        <div className="">
          <div className="flex border-r-[1px]  border-b-[1px] border-black p-2 w-20 ">Іспити</div>
          <div className="flex h-[120px]">
            <div className="justify-center text-center border-r-[1px] border-black p-2 w-10 [writing-mode:vertical-rl]"> Денне </div>
            <div className="justify-center text-center border-r-[1px] border-black p-2 w-10 [writing-mode:vertical-rl]"> Заочне </div>
          </div>
        </div>
        <div className="">
          <div className="flex border-r-[1px]  border-b-[1px] border-black p-2 w-20 ">Заліки</div>
          <div className="flex h-[120px]">
            <div className="justify-center text-center border-r-[1px] border-black p-2 w-10 [writing-mode:vertical-rl]"> Денне </div>
            <div className="justify-center text-center border-r-[1px] border-black p-2 w-10 [writing-mode:vertical-rl]"> Заочне </div>
          </div>
        </div>
        <div className="flex justify-center border-r-[1px] border-black p-2 w-10 [writing-mode:vertical-rl]">Контр. роботи</div>
        <div className="flex justify-center border-r-[1px] border-black p-2 w-10 [writing-mode:vertical-rl]">Курсові роботи</div>
        <div className="flex justify-center border-r-[1px] border-black p-2 w-10 [writing-mode:vertical-rl]">Дипломні роботи</div>
        <div className="flex justify-center border-r-[1px] border-black p-2 w-10 [writing-mode:vertical-rl]">Педпрактика</div>
        <div className="flex justify-center border-r-[1px] border-black p-2 w-10 [writing-mode:vertical-rl]">Учобова практика</div>
        <div className="flex justify-center border-r-[1px] border-black p-2 w-10 [writing-mode:vertical-rl]">Виробн. практика</div>
        <div className="flex justify-center border-r-[1px] border-black p-2 w-10 [writing-mode:vertical-rl]">ДЕК</div>
        <div className="flex justify-center border-r-[1px] border-black p-2 w-10 [writing-mode:vertical-rl]">Заняття з асп.</div>
        <div className="flex justify-center border-r-[1px] border-black p-2 w-10 [writing-mode:vertical-rl]">Інакше</div>
      </div>
      {personalLoads && personalLoads.map((item, index) => 
        <PersonalLoadTableInput key={item.id} index={index} item={item} departmentId={departmentId}  teacherId={teacherId}/>
      )}
      {!isAdd && <Button className="mt-8" onClick={()=>setIsAdd(true)} fill>Добавити</Button> }
      {isAdd &&
        <AddPersonalLoad departmentId={departmentId} teacherId={teacherId} setIsAdd={setIsAdd} />
      } 



      {/* {data && data.map((item, index) => 
        
      )} */}
      
    </div>
  );
};

export default PersonalLoadTable;
