// Program written by [Muhammad Tayyab]
// Date:16-03-2024
/*
Question 43: Unchanged Magicians: Preserve the original magician names while creating a new "great" list.

Explain & TIP: Creating a copy of an array before modifying it allows you to maintain the original data.
This exercise demonstrates array copying and manipulation.
*/
function make_greet(magicians) {
    var greatMagicians = magicians.slice(); // Create a copy of the original array
    for (var i = 0; i < greatMagicians.length; i++) {
        greatMagicians[i] = greatMagicians[i] + ' the Great';
    }
    return greatMagicians;
}
var originalMagicians = ["Ali", "Fahad", "Sameer"];
var greatMagicians = make_greet(originalMagicians);
console.log("Original Magicians:", originalMagicians);
console.log("Great Magicians:", greatMagicians);
/*
function displayMagicians(magicians: string[]) {
    magicians.forEach(magician => {
        console.log(magician)
    });
}

let magicians: string[] = ["Alice", "David", "Chris"];

function make_great(magicians: string[]): string[] {
    let greatMagicians: string[] = [];
    magicians.forEach(magician => {
        greatMagicians.push(magician + " the Great");
    });
    return greatMagicians;
}

let greatMagicians = make_great(magicians.slice()); // Creates a new modified array
console.log("Original magicians:");
displayMagicians(magicians); // Shows original names
console.log("Great magicians:");
displayMagicians(greatMagicians); // Shows modified names
*/
