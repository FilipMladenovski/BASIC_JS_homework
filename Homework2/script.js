let bornYear = prompt('Enter a year:')
let year = parseInt(bornYear);
let zodiacYear = (year - 4) % 12;

if (zodiacYear === 0) {
    console.log(`Your chinese zodiac is : " Rat ".`);
}else if (zodiacYear === 1) {
    console.log(`Your chinese zodiac is : " Ox ".`);
}
else if (zodiacYear === 2) {
    console.log(`Your chinese zodiac is : " Tiger ".`);
}
else if (zodiacYear === 3) {
    console.log(`Your chinese zodiac is : " Rabbit ".`);
}
else if (zodiacYear === 4) {
    console.log(`Your chinese zodiac is : " Dragon ".`);
}
else if (zodiacYear === 5) {
    console.log(`Your chinese zodiac is : " Snake ".`);
}
else if (zodiacYear === 6) {
    console.log(`Your chinese zodiac is : " Horse ".`);
}
else if (zodiacYear === 7) {
    console.log(`Your chinese zodiac is : " Goat ".`);
}
else if (zodiacYear === 8) {
    console.log(`Your chinese zodiac is : " Monkey ".`);
}
else if (zodiacYear === 9) {
    console.log(`Your chinese zodiac is : " Rooster ".`);
}
else if (zodiacYear === 10) {
    console.log(`Your chinese zodiac is : " Dog ".`);
}
else if (zodiacYear === 11) {
    console.log(`Your chinese zodiac is : " Pig ".`);
}
else {
    console.log(`Please enter a year !!!`);
}
