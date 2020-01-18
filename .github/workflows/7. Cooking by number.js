
function solve(arr){
    let number = arr[0];

   
    for(let i = 1; i < arr.length; i++){
        
        let command = arr[i];

        if(command === 'chop'){
            number /=2; 
        }else if(command === 'dice'){
            number = Math.sqrt(number);
        }else if(command === 'bake'){
            number *= 3;
        }else if(command === 'fillet'){
            number = number*0.8;
        }else if(command === 'spice'){
            number +=1;
        }
        
        console.log(number);
    }

}



//solve(['32', 'chop', 'chop', 'chop', 'chop', 'chop']);
solve(['9', 'dice', 'spice', 'chop', 'bake', 'fillet']);

