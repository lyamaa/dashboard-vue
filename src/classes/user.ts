import {Role} from '@/classes/role'

export class User {
    id: number;
    username: string;
    email: string;
    role: Role;
    permissions: string[];


    constructor(id:number=0, username:string="", email:string="", role:Role = new Role(), permissions: string[]= []){
        this.id = id
        this.username = username
        this.email = email
        this.role = role
        this.permissions = permissions

    }
}