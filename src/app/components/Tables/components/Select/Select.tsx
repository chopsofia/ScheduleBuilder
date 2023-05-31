import React, { FunctionComponent, useState, memo } from "react";
import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";

//types


//assets
import { BackEndErrorType } from "../../../../../types/GlobalType";
import { GetAllTeacherResponseType } from "../../../../../types/TeacherType";
import { UserGetAllDepartmentResponseType } from "../../../../../types/FacultiesType";

type SelectProps = {
  label?: string;
  name: string;
  value?: number | string;
  placeholder?: string;
  className?: string;
  disabled?: boolean;
  options?:
    | UserGetAllDepartmentResponseType[]
    | GetAllTeacherResponseType[]
    | null;
  register: UseFormRegister<FieldValues>;
  errors?: FieldErrors | any;
  backendErrors?: BackEndErrorType;
  row?: boolean;
  inputClassName?: string;
  labelClassName?: string;
  isDepartment?: boolean;
};

const Select: FunctionComponent<SelectProps> = ({
  label,
  name,
  value,
  placeholder,
  className,
  disabled,
  options,
  register,
  errors,
  backendErrors,
  row,
  inputClassName,
  labelClassName,
  isDepartment,
}) => {
  const [isSelected, setIsSelected] = useState(false);

  return (
    <div
      className={`flex w-full ${
        row ? "md:flex-row flex-col items-center" : "flex-col"
      } ${className}`}
    >
      <label
        className={`text-gray-3 mb-0.5 w-full md:w-56 ${labelClassName}`}
        htmlFor={label}
      >
        {label}
      </label>
      <div className="w-full  relative">
        <select
          onClick={() => setIsSelected(true)}
          id={label}
          disabled={disabled}
          {...register(name)}
          className={`w-full text-black bg-opacity-2 rounded-xl py-3 px-4 outline-none
          hover:bg-opacity-6 focus:bg-opacity-2 
          disabled:bg-opacity-2 disabled:cursor-not-allowed
          appearance-none border
          ${isSelected ? "text-opacity-100" : "text-opacity-50"} 
          ${backendErrors || errors ? "border-red" : "border-transparent"}
          ${" " + inputClassName}
        `}
        >
          <option
            disabled
            selected={!value && true}
            value=""
            className="text-gray-300"
          >
            {placeholder}
          </option>
          {options?.map((option, index) => (
            <option
              key={index}
              value={option.id}
              selected={option.id == value}
            >
              {isDepartment? option.name : option.fullName}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default Select;
