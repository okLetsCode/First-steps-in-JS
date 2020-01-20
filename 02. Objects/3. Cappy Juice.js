function solve(arr) {
    let juices = {}
    let bottles = {};

    for (let i = 0; i < arr.length; i++) {
        let juiceTypeArr = arr[i].split(" => ");
        let name = juiceTypeArr[0];
        let quantity = Number(juiceTypeArr[1]);

        if (!juices.hasOwnProperty(name)) {
            juices[name] = 0;
        }

        juices[name] += quantity;
        let currentQuantity = juices[name];

        if (currentQuantity >= 1000) {
            bottles[name] = Math.trunc(currentQuantity / 1000);
        }
    }

    let keys = Object.keys(bottles);

    for (let name of keys) {
        let quantity = bottles[name];
        console.log(`${name} => ${quantity}`)
    }
}


solve(
    [
        'Kiwi => 234',
        'Pear => 2345',
        'Watermelon => 3456',
        'Kiwi => 4567',
        'Pear => 5678',
        'Watermelon => 6789'
    ]

)