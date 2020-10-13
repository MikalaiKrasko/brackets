module.exports = function check(str, bracketsConfig) {
    let leftArr=[];
    let rightArr = [];
    for(let i=0; i<bracketsConfig.length; i++){
      if(bracketsConfig[i] === '(' || bracketsConfig[i] === '[' || bracketsConfig[i] === "{"){
         leftArr.push(bracketsConfig[i]);
        }
        
        
        if(bracketsConfig[i] === ')'){
      
          rightArr.push("(");
        }else if(bracketsConfig[i] === '}'){
        
          rightArr.push("{");
        } else if(bracketsConfig[i] === ']'){
        
          rightArr.push("[");
        }
   }
  
   rightArr.reverse();
    
    if(leftArr.length<rightArr.length || leftArr.length>rightArr.length){
    return false;
    }
    
    for(let k=0; k<leftArr.length; k++) {
      if(leftArr[k] != rightArr[k]){
          return false;
        }
    }

    return true;
    }

