function solve(fruit, grams, price) {
    let weightInKg = (grams / 1000);
    let totalPrice = (weightInKg * price);

    console.log(`I need $${totalPrice.toFixed(2)} to buy ${weightInKg.toFixed(2)} kilograms ${fruit}.`);
}

solve('apple', 1563, 2.35);