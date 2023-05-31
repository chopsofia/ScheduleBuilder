import { UserGetAllDepartmentResponseType } from "./FacultiesType";

export type TeacherType = {
    fullName: string;
    position: string;
};

export type TeacherDepartmentType = {
    budgetRate: number;
    extraRate: number;
    teacherId: string;
    departmentId: string;
};

export type AddTeacherType = TeacherType & {
    id: number;
};

export type AddTeacherDepartmentsType = TeacherDepartmentType & {
    id: number;
};


export type GetAllTeacherResponseType = TeacherType & {
    id: number;
    name?: string;
    fullName?: string;
};

export type GetAllTeacherDepartmentsResponseType = TeacherDepartmentType & {
    id: number;
    teacherDTO?: GetAllTeacherResponseType;
    departmentDTO?: UserGetAllDepartmentResponseType;
};

export type UpdateTeacherDepartmentsRequestType = {
    id: number;
    teacherDTO?: GetAllTeacherResponseType;
    departmentDTO?: UserGetAllDepartmentResponseType;
    body: TeacherDepartmentType;
};

export type RemoveRequestType = {
    id: number;
};