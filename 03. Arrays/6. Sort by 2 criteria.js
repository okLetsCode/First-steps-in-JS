function solve(input) {

    console.log([...input].sort((a, b) => {
        return a.length - b.length || a.localeCompare(b);
    })
        .join("\n"));
};

solve(
    [
        'alpha',
        'beta',
        'gamma'
    ]
)