function solve(steps, footPrint, speedKm) {

    let distanceMeters = steps * footPrint;
    let speedMetersPerSec = (speedKm / 3.6);
    let numberOfBreaks = Math.floor(distanceMeters / 500);
    let totalTime = (distanceMeters / speedMetersPerSec);

    let hours = totalTime / 3600;
    let totalHours = Math.floor(hours);
    let minutes = (hours * 60 + numberOfBreaks);
    let totalMinutes = Math.floor(minutes);
    let sec = Math.ceil(60 * (minutes % Math.floor(minutes)));

    if (totalHours > 10) {
        if (totalMinutes < 10) {
            console.log(`${totalHours}:0${totalMinutes}:${sec}`)
        } else {
            console.log(`${totalHours}:${totalMinutes}:${sec}`)
        }
    } else {
        if (totalMinutes < 10) {
            console.log(`0${totalHours}:0${totalMinutes}:${sec}`)
        } else {
            console.log(`0${totalHours}:${totalMinutes}:${sec}`)
        }
    }

}
solve(4000, 0.60, 5);
solve(2564, 0.70, 5.5);