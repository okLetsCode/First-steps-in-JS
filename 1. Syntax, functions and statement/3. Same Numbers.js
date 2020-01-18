function solve(x){

    let digitsAsString = x.toString().split('');
    let realDigits = digitsAsString.map(Number);
  
    let sum = realDigits.reduce((acc, curr) => acc + curr );

    let isSame = true;

    for (let index = 0; index < realDigits.length-1; index++) {
        
        if(realDigits[index] != realDigits[index+1]){
            isSame = false;
            break;
        }
    }

    console.log(isSame);
    console.log(sum)
};

 solve(2222222);