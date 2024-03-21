// Program written by [Muhammad Tayyab]
// Date:12-03-2024

/*
Question 32: Checking Usernames: Ensure uniqueness in usernames.

Explain & TIP: Checking for uniqueness is crucial in user management. Use loops and conditionals to 
handle case-insensitive comparisons.
*/

let current_user: string[] = ["admin", "user1", "user2", "user3"];

let new_user: string[] = ["Faahad", "Admin", "Faizan", "Ali", "Hamza"];

new_user.forEach(newUser => {
    if (current_user.some(currentUser => currentUser.toLowerCase() === newUser.toLowerCase())) {
        console.log(`${newUser}, will need to enter new username.`);
    } else {
        console.log(`${newUser} is available`);
    }
});
