export class Attendee {
  
  private name: string;
  private lastName: string;
  private DOB: Date;
  private email: string;

  constructor(name: string, lastName: string, DOB: Date, email: string) {
    this.name = name;
    this.lastName = lastName;
    this.DOB = DOB;
    this.email = email;
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