export class Speaker {

    private id: number;
    private name: string;
    private lastName: string;
    private DOB: Date;
    private email: string;
  
    constructor(id: number, name: string, lastName: string, DOB: Date, email: string) {
      this.id = id;
      this.name = name;
      this.lastName = lastName;
      this.DOB = DOB;
      this.email = email;
    }
  
    public getId() : Number{
      return this.id;
    }
    public getName() : string {
      return this.name;
    }
    public getLName() : string {
      return this.lastName;
    }
    public getDOB() : Date {
      return this.DOB;
    }
    public getEmail() : string {
      return this.email;
    }
  }