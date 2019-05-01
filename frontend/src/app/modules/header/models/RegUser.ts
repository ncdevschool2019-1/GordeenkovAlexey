export class RegUser {
  firstName: string;
  lastName: string;
  userName: string;
  email: string;
  phone: string;
  password: string;


  constructor(firstName: string, lastName: string, userName: string, email: string, phone: string, password: string) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.userName = userName;
    this.email = email;
    this.phone = phone;
    this.password = password;
  }
}
