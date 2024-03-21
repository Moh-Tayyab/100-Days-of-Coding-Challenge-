// Program written by [Muhammad Tayyab]
// Date:11-03-2024

/*
Question 30: Hello Admin: Greet users differently, especially 'admin'.

Explain & TIP: Loop through usernames to personalize greetings. This introduces looping and conditional
logic together.
*/

let userNames: string[] = ['Admin', 'Imran Ali', 'Ameen Alam', 'Hina Naseer']

userNames.forEach(userNames => {
    if (userNames === 'Admin') {
        console.log("Hello Admin, would you like to see report.")
    } else {
        console.log(`Hello ${userNames}, thank you for logging again`)
    }
});