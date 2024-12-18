import txt from './txt/txt.txt';
const txt1 = require('./txt/txt.txt');
import a from './component/a';
const b = require('./component/b');
import b1 from './component/b';
const a1 = require('./component/a');
import component from './component/component.js';
import './index.css';
import datacsv from './csv/data.csv';
import dataxml from './xml/data.xml';

document.body.appendChild(
  component([
    'Hello',
    'webpack',
    txt,
    txt1.default,
    a.a,
    b.b,
    a1.__esModule,
    a1.default.a,
    b1.b,
    JSON.stringify(datacsv),
    JSON.stringify(dataxml),
  ])
);
console.log('---------------');
console.log(datacsv);
console.log(dataxml);
console.log('---------------');
