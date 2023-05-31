// teacher.departments.api.ts
import { createApi } from "@reduxjs/toolkit/query/react";
import { FieldValues } from "react-hook-form";
import { baseQuery } from "../baseQuery";
import { MessageResponseType } from "../../types/GlobalType";
import { AddPlanType, RemoveRequestType, UpdatePlanRequestType } from "../../types/PlanType";

const academicYearId = "40288184886b39a701886b3a49640001";

export const plansApi = createApi({
  reducerPath: "plansApi",
  baseQuery,
  refetchOnMountOrArgChange: true,
  endpoints: (builder) => ({
    getAllPlans: builder.mutation({
        query: (departmentId) => ({
          url: `/plans/departments/${departmentId}/academic-years/${academicYearId}`,
          method: "GET",
        }),
    }), 
    // getAllTeachersByDepartmentId: builder.mutation({
    //     query: ({departmentId}) => ({
    //       url: `/teachers/departments/${departmentId}`,
    //       method: "GET",
    //     }),
    // }),
    addPlan: builder.mutation<
        MessageResponseType,
        AddPlanType
    >({
        query: (body) => ({
        url: "/plans",
        method: "POST",
        body,
        }),
    }),
    removePlan: builder.mutation<
      MessageResponseType,
      RemoveRequestType
    >({
      query: ({ id }) => ({
        url: `/plans/${id}`,
        method: "DELETE",
      }),
    }),

    updatePlan: builder.mutation<
        MessageResponseType,
        UpdatePlanRequestType
    >({
      query: ({ id, body }) => ({
        url: `/plans/${id}`,
        method: "PUT",
        body,
      }),
    }),
  }),
});

export const {
    // useGetAllTeachersByDepartmentIdMutation,
    useGetAllPlansMutation,
    useAddPlanMutation,
    useRemovePlanMutation,
    useUpdatePlanMutation,
    // useMutation,
    // useMutation,
    // useMutation,
    // useMutation,

} = plansApi;
