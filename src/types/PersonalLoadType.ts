// PersonalLoadType
export type PersonalLoadType = {
    subject: string;
    facultyAbbr: string;
    semester: number;
    course: number;
    students: number;
    lectures: number;
    practicalClasses: number;
    laboratoryClasses: number;
    exams: number;
    passFailCourses: number;
    lecturesExtramural: number;
    practicalClassesExtramural: number;
    laboratoryClassesExtramural: number;
    examsExtramural: number;
    passFailCoursesExtramural: number;
    controlWorks: number;
    courseWorks: number;
    diplomaWorks: number;
    pedagogicPractices: number;
    studyPractices: number;
    industrialPractices: number;
    deks: number;
    postgrad: number;
    consultations: number;
    consultationsExtramural: number;
    others: number;
};

export type AddPersonalLoadType = PersonalLoadType & {
    id: number;
};

export type GetAllPersonalLoadsResponseType = PersonalLoadType & {
    id: number;
};

export type UpdatePersonalLoadsRequestType = {
    id: number;
    body: PersonalLoadType;
};

export type RemoveRequestType = {
    id: number;
};