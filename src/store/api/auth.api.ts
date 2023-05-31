import { createApi } from "@reduxjs/toolkit/query/react";
import { FieldValues } from "react-hook-form";
import { AuthType, SignInRequestType} from "../../types/AuthType";
import { baseQuery } from "../baseQuery";

//types

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery,
  endpoints: (builder) => ({
    signIn: builder.mutation<AuthType, SignInRequestType | FieldValues>({
      query: (credentials) => ({
        url: "/auth/authentication",
        method: "POST",
        body: credentials,
      }),
    }),
  }),
});

export const {
  useSignInMutation,
} = authApi;
