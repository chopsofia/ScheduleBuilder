import { useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { SignErrorsType, SignInRequestType } from "../../../../types/AuthType";
import { useActions } from "../../../../hooks/useActions";
import { useSignInMutation } from "../../../../store/api/auth.api";

//types

const useSignIn = () => {
  const navigate = useNavigate();
  const [backendErrors, setBackendErrors] = useState<SignErrorsType | null>(
    null
  );
  
  const { setCredentials } = useActions();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<SignInRequestType | FieldValues>();

  const [signIn] = useSignInMutation();

  const signInHandler = async (formData: SignInRequestType | FieldValues) => {
    try {
      const authData = await signIn(formData).unwrap();
      console.log("authData : ", authData)
      navigate("/");
      setCredentials(authData);
    } catch (error: any) {
      setBackendErrors(error.data);
    }
  };


  return {
    register,
    handleSubmit,
    errors,
    setValue,
    signInHandler,
    backendErrors,
  };
};

export default useSignIn;
