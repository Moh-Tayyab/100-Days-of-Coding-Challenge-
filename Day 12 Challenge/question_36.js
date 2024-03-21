// Program written by [Muhammad Tayyab]
// Date:13-03-2024
/*
Question 36: T-Shirt: Create a function for customizing t-shirts.

Explain & TIP: Writing a function that accepts parameters allows you to reuse code efficiently.
This introduces you to function parameters and printing dynamic content based on those parameters.
*/
function make_shirt(size, message) {
    console.log("Making a ".concat(size, " t-shirt with the message \"").concat(message, "\" printed on it."));
}
make_shirt("Medium", "I Love Only Money Color.");
