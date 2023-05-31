import { createApi } from "@reduxjs/toolkit/query/react";
import { FieldValues } from "react-hook-form";
import { FacultiesType, UpdateFacultiesRequestType } from "../../types/FacultiesType";
import { baseQuery } from "../baseQuery";
import { MessageResponseType } from "../../types/GlobalType";
import { AddDepartmentRequestType, AddFacultiesRequestType, RemoveRequestType } from "../../types/FacultiesType";
// faculties.slice.ts

export const facultiesApi = createApi({
  reducerPath: "userfacultiesApi",
  baseQuery,
  refetchOnMountOrArgChange: true,
  endpoints: (builder) => ({
    getAllFacultiess: builder.mutation({
      query: () => ({
        url: "/faculties",
        method: "GET",
      }),
    }),
    
    addFaculties: builder.mutation<MessageResponseType, AddFacultiesRequestType>({
      query: (body) => ({
        url: "/faculties",
        method: "POST",
        body,
      }),
    }),

    removeFaculties: builder.mutation<
      MessageResponseType,
      RemoveRequestType
    >({
      query: ({ id }) => ({
        url: `/faculties/${id}`,
        method: "DELETE",
      }),
    }),
    updateFaculties: builder.mutation<
        MessageResponseType,
        UpdateFacultiesRequestType
    >({
        query: ({id, body}) => ({
        url: `/faculties/${id}`,
        method: "PUT",
        body,
        }),
    }),

    // Department
    getAllDepartment: builder.mutation({
      query: () => ({
        url: `/departments`,
        method: "GET",
      }),
    }),
    getAllDepartmentByFacultyId: builder.mutation({
      query: ({facultyId}) => ({
        url: `/departments/faculties/${facultyId}`,
        method: "GET",
      }),
    }),
    addDepartment: builder.mutation<
      MessageResponseType,
      AddDepartmentRequestType
    >({
      query: (body) => ({
        url: "/departments",
        method: "POST",
        body,
      }),
    }),
    removeDepartment: builder.mutation<
      MessageResponseType,
      RemoveRequestType
    >({
      query: ({ id }) => ({
        url: `/departments/${id}`,
        method: "DELETE",
      }),
    }),
    updateDepartment: builder.mutation<
        MessageResponseType,
        UpdateFacultiesRequestType
    >({
        query: ({ id, body }) => ({
        url: `/departments/${id}`,
        method: "PUT",
        body,
    }),
}),
  }),
});

export const {
  useGetAllFacultiessMutation,
  useAddFacultiesMutation,
  useRemoveFacultiesMutation,
  useUpdateFacultiesMutation,
//Mutation,
  useGetAllDepartmentByFacultyIdMutation,
  useGetAllDepartmentMutation,
  useAddDepartmentMutation,
  useRemoveDepartmentMutation,
  useUpdateDepartmentMutation,
} = facultiesApi;
