function limitFunctionCallCount(cb, n,count) {
    let res=function(){
        
        while (count<n){
            count+=1;
            return (cb());
        }
        if (count>=n){
            return null;
        }
    };
    return res;
}
module.exports={limitFunctionCallCount};

