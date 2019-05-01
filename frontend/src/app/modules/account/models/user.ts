export class User {
  id: number;
  firstName: string;
  lastName: string;
  userName: string;
  email: string;
  phone: string;
  role: string;


  constructor(id: number, firstName: string, lastName: string, userName: string, email: string, phone: string, role: string) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.userName = userName;
    this.email = email;
    this.phone = phone;
    this.role = role;
  }
}
