function solve(input) {
    result = [];

    for (let i = 0; i < input.length; i++) {
        if (i === 0) {
            result.push(input[i]);
        }

        if (input[i] > result[result.length - 1]) {
            result.push(input[i])
        }
    }
    console.log(result.join("\n"));
}
solve(
    [
        1,
        3,
        8,
        4,
        10,
        12,
        3,
        2,
        24
    ]
)