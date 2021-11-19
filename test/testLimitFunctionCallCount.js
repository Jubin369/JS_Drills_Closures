const count=require('../limitFunctionCallCount')
let n=7;
let ans=count.limitFunctionCallCount(function(val){
return 1;
},n);
console.log(ans());