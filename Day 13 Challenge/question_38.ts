// Program written by [Muhammad Tayyab]
// Date:14-03-2024

/*
Question 38: Cities: Describing cities with a function.

Explain & TIP: Use functions with default parameters to handle cases where certain data might not change often. 
This helps in making your code more flexible.
*/

function describe_city(city: string, country: string = "Pakistan") {
    console.log(`${city} is in ${country}.`);
}

describe_city("Islamabad");
describe_city("Lahore");
describe_city("Karachhi");
describe_city("Tokyo", "Japan");