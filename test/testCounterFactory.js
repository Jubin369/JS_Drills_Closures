var counter=2;
const countVal = require('../counterFactory');

console.log(counter);
let res = countVal.counterFactory(counter);
res1 = res.increment();
res2 = res.decrement();

console.log(res1,res2);