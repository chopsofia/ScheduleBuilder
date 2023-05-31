// teacher.departments.api.ts
import { createApi } from "@reduxjs/toolkit/query/react";
import { FieldValues } from "react-hook-form";
import { baseQuery } from "../baseQuery";
import { MessageResponseType } from "../../types/GlobalType";
import { AddPlanType, RemoveRequestType } from "../../types/PlanType";
import { UpdatePersonalLoadsRequestType } from "../../types/PersonalLoadType";

const academicYearId = "40288184886b39a701886b3a49640001";

export const personalLoadApi = createApi({
  reducerPath: "personalLoadApi",
  baseQuery,
  refetchOnMountOrArgChange: true,
  endpoints: (builder) => ({
    getAllPersonalLoad: builder.mutation({
        query: ({departmentId, teacherId}) => ({
          url: `/teachers-loads/departments/${departmentId}/teachers/${teacherId}/academicYears/${academicYearId}`,
          method: "GET",
        }),
    }), 
    // getAllTeachersByDepartmentId: builder.mutation({
    //     query: ({departmentId}) => ({
    //       url: `/teachers/departments/${departmentId}`,
    //       method: "GET",
    //     }),
    // }),
    addPersonalLoad: builder.mutation<
        MessageResponseType,
        AddPlanType
    >({
        query: (body) => ({
        url: "/teachers-loads",
        method: "POST",
        body,
        }),
    }),
    removePersonalLoad: builder.mutation<
      MessageResponseType,
      RemoveRequestType
    >({
      query: ({ id }) => ({
        url: `/teachers-loads/${id}`,
        method: "DELETE",
      }),
    }),

    updatePersonalLoad: builder.mutation<
    MessageResponseType,
    UpdatePersonalLoadsRequestType
    >({
      query: ({ id, body }) => ({
        url: `/teachers-loads/${id}`,
        method: "PUT",
        body,
      }),
    }),
  }),
});

export const {
    // useGetAllTeachersByDepartmentIdMutation,
    useGetAllPersonalLoadMutation,
    useAddPersonalLoadMutation,
    useRemovePersonalLoadMutation,
    useUpdatePersonalLoadMutation,
    // useMutation,
    // useMutation,
    // useMutation,
    // useMutation,

} = personalLoadApi;
