function solve(input) {
    let commands = {
        counter: 1,
        add: (arr, num) => [...arr, num],
        remove: (arr) =>[...arr.slice(0,arr.length-1)]
    }

    let result = input.reduce((acc, curr) => {
        acc = commands[curr](acc, commands.counter);
        commands.counter++;
        return acc;
    }, [])

    console.log(result.length === 0 ? "Empty" : result.join("\n"))
}
solve(
    [
        'add',
        'add',
        'remove',
        'add',
        'add'
    ]
)