function cacheFunction(cb) {

        if (typeof cb === 'string'){
            cb = cb.split(' ');
        }
        let res = function(){
            let cache={};

            for (let i = 0;i < cb.length;i++){
                if (!cache.hasOwnProperty(cb[i])){
                     cache[cb[i]] = (cb[i]);    
                }
                else{
                    return cache;
                }
            }
            return cache;
    
        }
        return res;
    }
    module.exports = {cacheFunction}
    
