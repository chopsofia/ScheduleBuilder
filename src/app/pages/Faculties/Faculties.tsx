import React, { useEffect, useState } from "react";
// import { NavLink } from "react-router-dom";
import Button from "../../components/Button/Button";

//Components
import Layout from "../../components/Layout/Layout";
import FacultiesItem from "./components/FacultiesItem/FacultiesItem";
import { useFaculties } from "./hooks/useFaculties";
import Input from "../../components/Input/Input";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { DepartmentType, FacultiesType } from "../../../types/FacultiesType";

const Faculties = () => {
    const {
      register,
      handleSubmit,
      faculties,
      departments,
      addFacultiesHandler,
      getAllFacultiessHandler,
    } = useFaculties();

  const [isAdd, setIsAdd] = useState<boolean>(false);

  useEffect(() => {
    getAllFacultiessHandler();
  }, []);

  const handleAddClick: SubmitHandler<FacultiesType | DepartmentType | FieldValues> = (data) => {
    addFacultiesHandler(data);
    setIsAdd(false); // Close the input and submit the form
    getAllFacultiessHandler()
  };

    return (
    <Layout>
      <div className="flex justify-between text-2xl font-bold">
        Факультети
      </div>
      <div className="flex flex-col gap-4">
        {faculties?.length > 0 ? (
          faculties.map((item) => <FacultiesItem key={item.id} faculties={item} departments={departments}/>)
        ) : (
          <>Список порожній</>
        )}
        {!isAdd && <Button onClick={()=>setIsAdd(true)} fill>Добавити факультет</Button> }
        {isAdd && 
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
    </Layout>
  );
};

export default Faculties;
