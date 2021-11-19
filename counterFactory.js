function counterFactory(counter) {
    let increment=function(){
        return counter+1;
    }
    let decrement=function(){
        return counter-1;
    }
    let object={increment,decrement};
    return object;

}

module.exports={counterFactory};

