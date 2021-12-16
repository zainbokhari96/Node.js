export default class User {
  constructor(name, designation) {
    this.name = name;
    this.designation = designation;
  }
}

export function printName(user) {
  console.log(`User Name is ${user.name}`);
}

export function printDesignation(user) {
  console.log(`User designation is ${user.designation}`);
}
