const obj='test call word run test again';
const cache=require('../cacheFunction');
let res=cache.cacheFunction(obj);
let ans =res();
console.log(ans);
