// Program written by [Muhammad Tayyab]
// 03-03-2024

/*
Question 5: Famous Quote 2: Repeat Exercise 1, but this time store the famous person’s name in a variable 
called famous_person. Then compose your message and store it in a new variable called message. Print your message.
*/

/*
Explain & TIP: First, save the author's name in a variable. Next, create your quote message in another variable. 
Then, show it. This teaches you to organize and use your data with variables.
*/

let author_name: string = "George Bernard Shaw";

let quote: string = "Progress is impossible without change, and those wo cannot change their minds cannot change anything";

let message = `${author_name} once said, ${quote}`;

console.log(message);