function solve(x, y){
    while(y != 0){
        let temp = y;
        y = x % y;
        x = temp;
    
    }
    console.log(x);

};

solve(15, 5);
