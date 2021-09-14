export class User {
  name: String;
  city: String;
  email: String;
  phone: String;
  address: String;
  postal: String;

  constructor(
    name: String,
    city: String,
    phone: String,
    address: String,
    postal: String,
    email: String
  ) {
    this.name = name;
    this.city = city;
    this.phone = phone;
    this.address = address;
    this.email = email;
    this.postal = postal;
  }
}
