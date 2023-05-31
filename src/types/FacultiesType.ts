export type FacultiesType = {
  name: string;
};

export type DepartmentType = {
  name: string;
  facultyId?: number;
};

export type AddFacultiesRequestType = FacultiesType & {
    id: number;
};
export type AddDepartmentRequestType = DepartmentType & {
    id: number;
    facultyId: number;
};

export type RemoveRequestType = {
    id: number;
};

export type UserGetAllFacultiesResponseType = FacultiesType & {
    id: number;
};

export type UserGetAllDepartmentResponseType = DepartmentType & {
    id: number;
    facultyId: number;
    name?: string;
    fullName?: string;
};

export type UpdateFacultiesRequestType = {
    id: number;
    body: FacultiesType;
};

export type UpdateDepartmentRequestType = {
    id: number;
    facultyId: number;
    body: DepartmentType;
};
