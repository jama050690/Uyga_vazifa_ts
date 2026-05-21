//Decoration class, method, property, parameter larni kucahytrib beradi!
const requiredFields: string[] = [];

function Required(target: any, propertyKey: string) {
  requiredFields.push(propertyKey);
}

class User {
  @Required
  name!: string;

  @Required
  email!: string;

  getUser() {
    return {
      name: this.name,
      email: this.email,
    };
  }
}

const user = new User();
user.name = "Alex";
console.log('user.name');


user.email = "email";
console.log(user.email);

function validation(obj: any): boolean {
  for (const field of requiredFields) {
    if (!obj[field]) {
      return false;
    }
  }
  return true;
}
