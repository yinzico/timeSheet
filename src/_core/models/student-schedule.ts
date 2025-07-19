import { IClass } from "./class";

export interface IStudentSchedule {
  data:{
    studentId:string,
  name:string,
  classes:IClass[]
  }

}
