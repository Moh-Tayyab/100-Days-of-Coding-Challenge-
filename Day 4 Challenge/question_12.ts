// Program Written by [Muhammad Tayyab]
// Date: 04-03-2024

/*
Question 12: Greetings: Use the array from Exercise 11. Instead of just printing each person’s name, 
print a message to them. The message should be the same for each person, but personalized with their name.
*/

let personNam: string[] = ["Fahad", "Qasim", "Waris"]

for (let name of personNam ) {
    console.log(`Hello ${name} you would like to learn Typescipt.`)
}