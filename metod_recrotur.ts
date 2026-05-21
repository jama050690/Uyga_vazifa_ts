const requiredFields: string[] = [];

function Log(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
  const originalMethod = descriptor.value;

  descriptor.value = function (...args: any[]) {
    console.log(`[LOG] ${propertyKey} methon running`);

    const result = originalMethod.apply(this, args);

    console.log(`[LOG] ${propertyKey} methon result: ${result}`);

    return result;
  };

  return descriptor;
}

class UserService {
  @Log
  getUserById(id: string): string {
    return `User #${id}`;
  }

  @Log
  deleteUser(id: string) {
    return `User deleted by id: #${id}`;
  }
}

const user = new UserService();
user.getUserById('123');
user.deleteUser('34');