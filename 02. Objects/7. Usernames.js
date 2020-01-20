function solve(input) {

    names = {};

    for(name of input){

        if(!names.hasOwnProperty(name)){
            names[name] = "";
        }
    }
    let namesArr = Object.keys(names);
    result = namesArr.sort( (a, b) => a.length - b.length || a.localeCompare(b));
    
    for(let name of namesArr){
        console.log(`${name}`)
    }
}

solve(
    [
        'Ashton',
        'Kutcher',
        'Ariel',
        'Lilly',
        'Keyden',
        'Aizen',
        'Billy',
        'Braston'
    ]

)