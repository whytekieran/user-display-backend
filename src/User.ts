import { Company } from './Company';

export class User {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    gender: string;
    company: Company;

    constructor(id: number, firstName: string, lastName: string, email: string, gender: string, company: Company) {
      this.id = id;
      this.firstName = firstName;
      this.lastName = lastName;
      this.email = email;
      this.gender = gender;
      this.company = company;
    }
  }
