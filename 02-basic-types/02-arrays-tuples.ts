// Arrays
const numbersArr: number[] = [1, 2, 3, 4, 5];
const namesArr: string[] = ["Alice", "Bob", "Charlie"];

// Tuples (кортежі)
const personTuple: [string, number] = ["Alice", 30];
const coordinatesTuple: [number, number] = [10.5, 20.3];
const coordinates3DTuple: [number, number, number] = [10.5, 20.3, 30.1];

// Mixed array
const mixedArr: (string | number)[] = ["Alice", 30, "Bob", 25];
const mixedArr2: (string | number)[] = ["Alice", "Bob", 30, 25];
const mixedArr3: (string | number)[] = [30, 25, "Alice", "Bob", ];

console.log("Numbers Array:", numbersArr);
console.log("Names Array:", namesArr);
console.log("Person Tuple:", personTuple);
console.log("Coordinates Tuple:", coordinatesTuple);
console.log("3D Coordinates Tuple:", coordinates3DTuple);
console.log("Mixed Array 1:", mixedArr);
console.log("Mixed Array 2:", mixedArr2);
console.log("Mixed Array 3:", mixedArr3);