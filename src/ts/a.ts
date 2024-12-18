import { User, isAdult } from './b';
const justine: User = {
  name: 'Justine',
  age: 18,
};

const isJustineAnAdult: boolean = isAdult(justine);

console.log(isJustineAnAdult);

export default isJustineAnAdult;
