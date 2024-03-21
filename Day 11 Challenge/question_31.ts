// Program written by [Muhammad Tayyab]
// Date:10-03-2024

/*
Question 31: No Users: Ensure your user list isn’t empty.

Explain & TIP: Before greeting users, check if there are any. This teaches you to handle empty arrays.
*/


let users: string[] =[]

if (users.length === 0) {
    console.log("No users, We need to find some users!")
}else{
    console.log(` ${users.join(", ")}`)
}