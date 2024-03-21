// Program written by [Muhammad Tayyab]
// Date:12-03-2024
/*
Question 32: Checking Usernames: Ensure uniqueness in usernames.

Explain & TIP: Checking for uniqueness is crucial in user management. Use loops and conditionals to
handle case-insensitive comparisons.
*/
var current_user = ["admin", "user1", "user2", "user3"];
var new_user = ["Faahad", "Admin", "Faizan", "Ali", "Hamza"];
new_user.forEach(function (newUser) {
    if (current_user.some(function (currentUser) { return currentUser.toLowerCase() === newUser.toLowerCase(); })) {
        console.log("".concat(newUser, ", will need to enter new username."));
    }
    else {
        console.log("".concat(newUser, " is available"));
    }
});
/*
let current_users: string[] = ["user1", "admin", "user3", "user4", "user5"];
let new_users: string[] = ["User1", "User6", "user7", "admin", "User9"];

new_users.forEach(newUser => {
    if (current_users.some(currentUser => currentUser.toLowerCase() === newUser.toLowerCase())) {
        console.log(`${newUser} will need to enter a new username.`);
    } else {
        console.log(`${newUser} is available.`);
    }
});
*/ 
