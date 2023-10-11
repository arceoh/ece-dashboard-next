import { Student } from "./Student";
import { Guardian } from "./Guardian";

export interface PaginatedSurveys {
  page: number;
  pages: number;
  surveys: Survey[];
}

export interface Survey {
  student: Student;
  guardian: Guardian;
  note?: string;
  _id: string;
  status: string;
}
