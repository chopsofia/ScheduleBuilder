// teacher.departments.api.ts
import { createApi } from "@reduxjs/toolkit/query/react";
import { FieldValues } from "react-hook-form";
import { baseQuery } from "../baseQuery";
import { MessageResponseType } from "../../types/GlobalType";
import { AddTeacherDepartmentsType, AddTeacherType, RemoveRequestType, UpdateTeacherDepartmentsRequestType } from "../../types/TeacherType";

export const teacherDepartmentsApi = createApi({
  reducerPath: "teacherDepartmentsApi",
  baseQuery,
  refetchOnMountOrArgChange: true,
  endpoints: (builder) => ({
    getAllTeachers: builder.mutation({
        query: () => ({
          url: "/teachers",
          method: "GET",
        }),
    }), 
    getAllTeachersByDepartmentId: builder.mutation({
        query: (departmentId) => ({
          url: `/teachers/departments/${departmentId}`,
          method: "GET",
        }),
    }),
    addTeacher: builder.mutation<
        MessageResponseType,
        AddTeacherType
    >({
        query: (body) => ({
        url: "/teachers",
        method: "POST",
        body,
        }),
    }),
    removeTeacher: builder.mutation<
      MessageResponseType,
      RemoveRequestType
    >({
      query: ({ id }) => ({
        url: `/teachers/${id}`,
        method: "DELETE",
      }),
    }),
    
    //teacher-departments

    getAllTeacherDepartments: builder.mutation({
        query: () => ({
          url: `/teacher-departments`,
          method: "GET",
        }),
    }), 
    addTeacherDepartments: builder.mutation<
        MessageResponseType,
        AddTeacherDepartmentsType
    >({
        query: (body) => ({
        url: "/teacher-departments",
        method: "POST",
        body,
        }),
    }),
    removeTeacherDepartments: builder.mutation<
      MessageResponseType,
      RemoveRequestType
    >({
      query: ({ id }) => ({
        url: `/teacher-departments/${id}`,
        method: "DELETE",
      }),
    }),
    updateTeacherDepartmentuse: builder.mutation<
    MessageResponseType,
    UpdateTeacherDepartmentsRequestType
    >({
      query: ({ id, body }) => ({
        url: `/teacher-departments/${id}`,
        method: "PUT",
        body,
      }),
    }),
    
  }),
});

export const {
    useGetAllTeachersMutation,
    useGetAllTeachersByDepartmentIdMutation,
    useAddTeacherMutation,
    useRemoveTeacherMutation,

    useGetAllTeacherDepartmentsMutation,
    useAddTeacherDepartmentsMutation,
    useRemoveTeacherDepartmentsMutation,
    useUpdateTeacherDepartmentuseMutation,
    // useMutation,
    // useMutation,
    // useMutation,
    // useMutation,

} = teacherDepartmentsApi;
