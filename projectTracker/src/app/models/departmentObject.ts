import { Department } from "./department";

export class DepartmentObject implements Department {

    /*
    addDepartment component'inde aşağıdaki gibi bir kullanım daha doğru olduğundan bu class 
                   gereksiz oldu.
    department:Department = {} as Department;
    */

    constructor(public id: number, public name: string) {

    }

}