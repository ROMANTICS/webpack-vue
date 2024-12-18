import _ from 'lodash';
export default function component(arr) {
  const element = document.createElement('div');

  // Lodash, now imported by this script
  element.innerHTML = _.join(arr, '</br>');
  return element;
}
