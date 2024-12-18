import * as _ from 'lodash';
type User = {
  name: string;
  age: number;
};

function isAdult(user: User): boolean {
  return user.age >= 18;
}

export { User, isAdult };
