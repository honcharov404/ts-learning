// Типізація функцій в TypeScript
// Функції в TypeScript можуть мати типи параметрів і тип повернення
// Це дозволяє забезпечити безпеку типів і уникнути помилок під час виконання

function greet(name: string): string {
    return `Hello, ${name}!`;
}

console.log(greet("Alice")); // Коректний виклик функції
// console.log(greet(42)); // Помилка: аргумент типу number не відповідає параметру типу string

function logMessage(message: string): void {
    console.log(message);
}

logMessage("This is a log message."); // Коректний виклик функції
// logMessage(123); // Помилка: аргумент типу number не відповідає параметру типу string

function add(a: number, b: number): number {
    return a + b;
}

console.log(add(5, 10)); // Коректний виклик функції
// console.log(add("5", "10")); // Помилка: аргументи типу string не відповідають параметрам типу number

function createGreeting (name: string, greeting: string = 'Hello'): string {
    return `${greeting}, ${name}!`;
}

console.log(createGreeting("Bob")); // Використання значення за замовчуванням
console.log(createGreeting("Bob", "Hi")); // Використання власного значення
// console.log(createGreeting(42)); // Помилка: аргумент типу number не відповідає параметру типу string

function sumAll (...numbers: number[]): number {
    return numbers.reduce((acc, num) => acc + num, 0);
}

console.log(sumAll(1, 2, 3, 4, 5)); // Коректний виклик функції
// console.log(sumAll(1, "2", 3)); // Помилка: аргумент типу string не відповідає параметру типу number

const multiply = (a: number, b: number): number => a * b;

console.log(multiply(3, 4)); // Коректний виклик функції
// console.log(multiply("3", "4")); // Помилка: аргументи типу string не відповідають параметрам типу number