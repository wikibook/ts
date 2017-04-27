function ambiguity2(num){
    if(typeof num !== "number"){
        num = Number(num);
    }    
    return num+1000;
}

var result2=ambiguity2("1000");
console.log(typeof result2, result2);