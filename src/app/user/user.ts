export class User {
  constructor(public firstName: string, public lastName: string, public id?: number,public action?:string) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.id = id;
    this.action = action
  }
}
