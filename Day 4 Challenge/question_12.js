//Program Written by [Muhammad Tayyab]
// 04-03-2024
/*
Question 12: Greetings: Use the array from Exercise 11. Instead of just printing each person’s name,
print a message to them. The message should be the same for each person, but personalized with their name.
*/
var personNam = ["Fahad", "Qasim", "Waris"];
for (var _i = 0, personNam_1 = personNam; _i < personNam_1.length; _i++) {
    var name_1 = personNam_1[_i];
    console.log("Hello ".concat(name_1, " you would like to learn Typescipt."));
}
