function solve(input) {
    let delimiter = input.pop();
    let result = input.join(delimiter);
    console.log(result);
}

solve(
    [
        'One',
        'Two',
        'Three',
        'Four',
        'Five',
        '-'
    ]
)