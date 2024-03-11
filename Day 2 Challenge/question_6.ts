// Program written by [Muhammad Tayyab]
// 03-03-2024

/*
Question 6: Stripping Names: Store a person’s name, and include some whitespace characters 
at the beginning and end of the name. Use "\t" (tab) and "\n" (new line) at least once. 
Print the name once, so the whitespace around the name is displayed. 
Then print the name after stripping the white spaces.
*/

let perName: string = "Muhammad Tayyab";

let stripping = perName.trim()

console.log(`NamewithWhiteSpece: \t${perName}\t\n` );

console.log(`stripping name: ${stripping}`); 
