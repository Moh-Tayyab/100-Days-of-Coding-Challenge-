//Program written by [Muhammad Tayyab]
// Date:08-03-2024

/*
Question 21: Think of something you could store in a TypeScript Object. Write a program that creates Objects containing 
these items.

Explain & TIP: Objects in TypeScript can store various related data about a single entity. Think of an object as a 
container for characteristics of something, like a book or a car.
*/

let book: {
  title: string;
  author: string;
  publisher: string;
  pages: number;
  price: number;
};

book = {
  title: "Rich Dad Poor Dad",
  author: "Robert T. Kiyosaki",
  publisher: "Plata Publishing",
  pages: 336,
  price: 15.99,
};

console.log(
  `\nBook Information: \nTitle: ${book.title}\nAuthor: ${book.author}\nPublisher: ${book.publisher}\nPages: ${book.pages}\nPrice: $${book.price}`
);
