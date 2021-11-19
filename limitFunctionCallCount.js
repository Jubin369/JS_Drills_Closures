function limitFunctionCallCount(cb, n) {
    let res=function(){
        let count=0;
        
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

