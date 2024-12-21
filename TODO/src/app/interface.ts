export interface Interface {
    taskName:string,
    creationDate?:Date,
    dueDate:Date,
    lastUpdateDate:Date,
    id?:number,
    status?:string,
    toggleState:boolean;
}
export interface User{
    id?:number,
    name:string,
    password:string
}
