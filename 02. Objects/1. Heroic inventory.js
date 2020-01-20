function solve(arr) {

    let result = [];

    for (let i = 0; i < arr.length; i++) {
        let heroData = arr[i].split(" / ");

        let currentHeroName = heroData[0];
        let currentHeroLevel = Number(heroData[1]);
        let currentHeroItems = [];

        if (heroData.length > 2) {
            currentHeroItems = heroData[2].split(", ");
        }

        let heroes = {
            name: currentHeroName,
            level: currentHeroLevel,
            items: currentHeroItems
        };
        result.push(heroes);
    }

    console.log(JSON.stringify(result));
}

solve([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara']
)