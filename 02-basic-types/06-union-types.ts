// Об'єднанні типи (Union Types) дозволяють змінній приймати значення різних типів.
// Це корисно, коли ви хочете, щоб змінна могла бути або певного типу, або іншого.

let result: string | number;

result = "Hello, TypeScript!"; // result може бути рядком
console.log(result);

result = 42; // Або result може бути числом
console.log(result);

// result = true; // Помилка: тип boolean не входить до об'єднання string | number
// console.log(result);

// Функція, яка приймає параметр з об'єднаним типом
function printValue(value: string | number) {
    console.log(`Result: ${value}`);
}

printValue("Привіт, світ!"); // Виклик з рядком
printValue(100); // Виклик з числом
// printValue(true); // Помилка: тип boolean не входить до об'єднання string | number
