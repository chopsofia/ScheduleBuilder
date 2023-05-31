import React from "react";
import { NavLink } from "react-router-dom";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";

//Components
import Layout from "../../components/Layout/Layout";
import Paper from "../../components/Paper/Paper";
import useSignIn from "./hooks/useSignIn";

const SignIn = () => {
  const {
    register,
    handleSubmit,
    signInHandler,
    errors,
    backendErrors,
  } = useSignIn();
  
  return (
    <div className="flex flex-col h-screen px-40 justify-center ">
      <Paper childrenClassName="py-12 justify-center items-center">
        <form 
          onSubmit={handleSubmit(signInHandler)}
          className="flex flex-col w-9/12 items-center gap-8"
        >
          <div className="text-2xl font-bold">Вхід</div>
          <Input 
            label="Електронна пошта" 
            name="email"
            type="email"
            register={register}
          />
          <Input 
            label="Пароль" 
            name="password" 
            type="password"
            register={register}
          />
          <Button fill>Увійти</Button>
        </form>
      </Paper>
    </div>
  );
};

export default SignIn;
