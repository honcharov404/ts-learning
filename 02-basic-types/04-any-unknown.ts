// any
const anyValue: any = 'this is a string';
const anyValueLength: number = anyValue.length; // This line will not cause an error because `any` can be anything, including a string
// const _anyValueLength: number = anyValue.map((item: any) => item.length); // This line will cause an error because `map` is not a method on a string

console.log(anyValueLength);
// console.log(_anyValueLength);

// unknown
let value: unknown;

value = 42;
value = 'this is a string';
value = true;


if (typeof value === 'string') {
  console.log(value.toUpperCase()); // This is safe because we checked the type
}
if (typeof value === 'number') {
  console.log(value.toFixed(2)); // This is safe because we checked the type
}
if (typeof value === 'boolean') {
  console.log(value ? 'true' : 'false'); // This is safe because we checked the type
}