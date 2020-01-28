function solve(input) {
    let isMagic = true;
    let sumRows = 0;

    for (let i = 0; i < input.length; i++) {

        if (isMagic) {
            sumRows = input[i].reduce((a, b) => a + b);

            let sumCol = 0;

            for (let j = 0; j < input.length; j++) {
                firstCol += input[j][i];

                if (j === input.length - 1 && sumRows !== sumCol) {
                    isMagic = false;
                    break;
                }
            }
        }
    }
    console.log(isMagic);
}
solve(
    [[1, 0, 0],
    [0, 0, 1],
    [0, 1, 0]]
)