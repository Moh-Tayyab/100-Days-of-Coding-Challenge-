// Program written by [Muhammad Tayyab]
// Date:14-03-2024
/*
Question 39: City Names: Formatting city-country pairs.

Explain & TIP: Returning formatted strings from functions can simplify data presentation.
This exercise practices string formatting and returning values from functions.
*/
function city_country(city, country) {
    return "".concat(city, ", ").concat(country);
}
console.log(city_country("Lahore", "Pakistan"));
console.log(city_country("Tokyo", "Japan"));
console.log(city_country("Paris", "France"));
/*
Output:
Lahore, Pakistan
Tokyo, Japan
*/
