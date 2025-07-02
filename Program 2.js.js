
function generateOddSeries(a) {
    let series = [];
    for (let i = 0; i < a; i++) {
        series.push(2 * i + 1);
    }
    return series.join(", ");
}

const a = parseInt(prompt("Enter a positive integer (a): "));
if (!isNaN(a) && a > 0) {
    console.log(generateOddSeries(a));
} else {
    console.log("Please enter a valid positive integer.");
}