// Program written by [Muhammad Tayyab]
// Date:12-03-2024
/*

Question 33: Ordinal Numbers: Display numbers with their ordinal suffixes.

Explain & TIP: Use a loop and an if-else chain to append the correct ordinal suffix to numbers. This introduces you to combining loops with conditional logic for formatting.

*/
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
numbers.forEach(function (number) {
    var suffix = "th";
    if (number == 1) {
        suffix = "st";
    }
    else if (number == 2) {
        suffix = "nd";
    }
    else if (number == 3) {
        suffix = "rd";
    }
    console.log(number + suffix);
});