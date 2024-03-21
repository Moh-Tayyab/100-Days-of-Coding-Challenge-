// Program written by [Muhammad Tayyab]
// Date:14-03-2024

/*
Question 37: Large Shirts: Default values in make_shirt().

Explain & TIP: Modify functions to have default parameters, simplifying calls for common use cases. 
This introduces default function parameters
*/

function make_shirt(shirt_size: string = "large", shirt_color: string = "black", message: string = "Coding is Life") {
    console.log(`Making a ${shirt_size} t-shirt color is ${shirt_color} with the message ${message} printed on it.`);
}

make_shirt();
make_shirt("medium", "baby pink");
make_shirt("small", "off white", "Dream Big Work Hard");

