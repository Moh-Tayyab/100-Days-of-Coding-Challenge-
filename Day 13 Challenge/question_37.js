// Program written by [Muhammad Tayyab]
// Date:14-03-2024
/*
Question 37: Large Shirts: Default values in make_shirt().

Explain & TIP: Modify functions to have default parameters, simplifying calls for common use cases.
This introduces default function parameters
*/
function make_shirt(shirt_size, shirt_color, message) {
    if (shirt_size === void 0) { shirt_size = "large"; }
    if (shirt_color === void 0) { shirt_color = "black"; }
    if (message === void 0) { message = "Coding is Life"; }
    console.log("Making a ".concat(shirt_size, " t-shirt color is ").concat(shirt_color, " with the message ").concat(message, " printed on it."));
}
make_shirt();
make_shirt("medium");
make_shirt("small", "off white", "Dream Big Work Hard");
