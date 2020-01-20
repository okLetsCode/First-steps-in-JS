function solve(input) {

    let brands = {};

    for (let line of input) {
        let [brand, model, quantity] = line.split(" | ");
        quantity = Number(quantity);

        if (!brands.hasOwnProperty(brand)) {

            brands[brand] = {};
        }

        let models = brands[brand];

        if (!models.hasOwnProperty(model)) {
            models[model] = quantity;
        } else {
            models[model] += quantity;
        }
    }

    let brandsArr = Object.keys(brands);

    for (let brand of brandsArr) {
        console.log(brand);

        let models = brands[brand];
        modelsArr = Object.keys(models);

        for(let model of modelsArr){
            console.log(`###${model} -> ${models[model]}`)
        }
    }
}

solve(
    [
        'Audi | Q7 | 1000',
        'Audi | Q6 | 100',
        'BMW | X5 | 1000',
        'BMW | X6 | 100',
        'Citroen | C4 | 123',
        'Volga | GAZ-24 | 1000000',
        'Lada | Niva | 1000000',
        'Lada | Jigula | 1000000',
        'Citroen | C4 | 22',
        'Citroen | C5 | 10'
    ]
);