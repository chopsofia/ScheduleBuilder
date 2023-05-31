import React, { FunctionComponent, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import Input from "../../../Input/Input";
import { TeacherType } from "../../../../../types/TeacherType";
import { FieldValues, UseFormRegister } from "react-hook-form";

//Components

type TableInputProps = {
  name: string,
  value?: string | number,
  isActive: boolean,
  classNameInput?: string,
  childrenClassName?: string,
  childrenIsActiveClassName?: string,
  isBig?: boolean,
  isText?: boolean,
  register: UseFormRegister<TeacherType | FieldValues>
  inputClassName?: string,
};

const TableInput: FunctionComponent<TableInputProps> = ({
 name,
 value,
 isActive,
 classNameInput,
 childrenClassName,
 childrenIsActiveClassName,
 isBig,
 isText,
 register,
 inputClassName,
}) => {
  const type = isText ? "text" : "number";
  return (
    <div className={`flex justify-center border-r-[1px] border-black p-1 h-full ${isBig? "w-[100%]" : "w-[40px]"} ${classNameInput} `}>
      {!isActive && <div className={`flex justify-center items-center ${isBig? "w-[100%] h-[40px]" : "w-[40px] h-[40px]"} ${childrenClassName}`}>{value}</div> }
      {isActive && 
        <div className={`flex justify-center ${isBig? "w-[100%]" : "w-[40px]"} ${childrenIsActiveClassName}`}>
          <Input 
            name={name}
            type={type}
            value={value}
            register={register}
            inputClassName={inputClassName}
            className={inputClassName}
          />
        </div> 
      }
    </div>
  );
};

export default TableInput;
