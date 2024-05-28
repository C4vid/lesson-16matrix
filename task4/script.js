let x = 5, y = 10, z =10;
let largest;

if (x >= y && x >= z) {
    largest = x;
    
} else if (y >= x && y >= z) {
    largest = y;
} else {
    largest = z;
}

console.log(largest);