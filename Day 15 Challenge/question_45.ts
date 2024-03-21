// Program written by [Muhammad Tayyab]
// Date:16-03-2024

/*
Question 45: Cars: Create detailed car objects with flexible properties.

Explain & TIP: Functions accepting a mix of fixed and arbitrary parameters let you create detailed and flexible objects. 
This is ideal for data with a few required fields and many optional fields.
*/

function make_car(manufacture: string, model: string, ...options: [string, any] []): object {
    let car: any = {
        manufacture: manufacture,
        model: model
    }
    
    options.forEach(([key, value]) =>  car[key] = value);
    
    return car;
    }
    
console.log(make_car("BMW", "M3", ["color", "white"], ["year", 2023]));
console.log(make_car("Toyota", "Corolla", ["color", "red"], ["year", 2020]));
console.log(make_car("Ford", "Fiesta", ["color", "blue"], ["sunroof", true]));


