// Затвердження типів в TypeScript
// Використовується для уточнення типів змінних, коли TypeScript не може
// автоматично визначити їх тип або коли потрібно змінити тип змінної.

const someValue: any = "this is a string";
const strLength: number = (<string>someValue).length;

console.log(strLength);

// Або можна використовувати синтаксис as
const anotherStrLength: number = (someValue as string).length;

console.log(anotherStrLength);

// ! non-null assertion
const someElement: HTMLElement | null = document.getElementById("myElement");

// Використання знаку "!" вказує TypeScript, що елемент не буде null або undefined
// Це може бути корисно, коли ви впевнені, що елемент існує, але TypeScript не може це визначити
someElement!.style.color = 'red';

someElement && (someElement.style.color = 'blue'); // Альтернативний спосіб з перевіркою на null