const count=require('../limitFunctionCallCount')
let n=3,countVal=0;

let ans=count.limitFunctionCallCount(function(val){
return 1;
},n,countVal++);

console.log(ans());

ans=count.limitFunctionCallCount(function(val){
return 1;
},n,countVal++);

console.log(ans());

ans=count.limitFunctionCallCount(function(val){
return 1;
},n,countVal++);

console.log(ans());

ans=count.limitFunctionCallCount(function(val){
return 1;
},n,countVal++);

console.log(ans());