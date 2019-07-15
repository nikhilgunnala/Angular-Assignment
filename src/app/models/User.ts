import { Company } from './Company';
import { Address } from './Address';

export class User{
    public id:number;
    public name:string;
    public username:string;
    public email:string;
    public address:Address;
    public phone:string;
    public website:string;
    public company:Company;
    public hide:boolean = true;
}