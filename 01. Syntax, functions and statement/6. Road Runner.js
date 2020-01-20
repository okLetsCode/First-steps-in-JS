function solve(arr){

    let speedLimit = {
        motorway: 130,
        interstate: 90,
        city: 50,
        residential: 20
    }

    let currSpeed = arr[0];
    let area = arr[1];

    if(area === 'city'){
        let diff = currSpeed - speedLimit[area];
        if(diff <= 0){
            console.log("");
        }else if(diff <=20){
            console.log("speeding");
        }else if(diff <= 40){
            console.log("excessive speeding")
        }else{
            console.log("reckless driving")
        }  
    }
    if(area === 'motorway'){
        let diff = currSpeed - speedLimit[area];
        if(diff <= 0){
            console.log("");
        }else if(diff <=20){
            console.log("speeding");
        }else if(diff <= 40){
            console.log("excessive speeding")
        }else{
            console.log("reckless driving")
        }  
    }
    if(area === 'residential'){
        let diff = currSpeed - speedLimit[area];
        if(diff <= 0){
            console.log("");
        }else if(diff <=20){
            console.log("speeding");
        }else if(diff <= 40){
            console.log("excessive speeding")
        }else{
            console.log("reckless driving")
        }  
    }
    if(area === 'interstate'){
        let diff = currSpeed - speedLimit[area];
        if(diff <= 0){
            console.log("");
        }else if(diff <=20){
            console.log("speeding");
        }else if(diff <= 40){
            console.log("excessive speeding")
        }else{
            console.log("reckless driving")
        }  
    }
}




let test1 = [40, 'city'];
let test2 = [21, 'residential'];
let test3 = [120, 'interstate'];
let test4 = [200, 'motorway'];
solve(test1);
solve(test2);
solve(test3);
solve(test4);