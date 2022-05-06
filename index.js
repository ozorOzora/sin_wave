const yResolution = 30;
const xResolution = 60;
const screen = [];
let i = 0;

setInterval(() => {

    const row = Array(xResolution).fill(0).map((_, j) => {

        return j < (3*xResolution + Math.sin(i*Math.PI/180)*xResolution)/6 ? "X" : "-";

    }).join("");

    screen.push(row);

    while(screen.length > yResolution){

        screen.shift();
    }

    i = i + 16;

}, 30);

export { screen };