// Plan

export type PlanType = {
    subject: string;
    facultyAbbr: string;
    course: string;
    semester: number;
    groups: number;
    students: number;
    lectures: number;
    practicalClasses: number;
    laboratoryClasses: number;
    exams: number;
    passFailCourses: number;
    courseWorks: number;
    diplomaWorks: number;
    practices: number;
    consultations: number;
    others: number;
    isExtramural: boolean;
};

export type AddPlanType = PlanType & {
    id: number;
};

export type GetAllPlansResponseType = PlanType & {
    id: number;
    academicYearId?: string;
    facultyId?: string;
};

export type UpdatePlanRequestType = {
    id: number;
    academicYearId?: string;
    facultyId?: string;
    body: PlanType;
};

export type RemoveRequestType = {
    id: number;
};