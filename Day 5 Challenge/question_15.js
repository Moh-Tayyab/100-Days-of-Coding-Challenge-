// Program written by [Muhammad Tayyab]
//  Date: 06-03-2024
/*
Question 15: Changing Guest List: One of your guests can't make it to the dinner, so you need to send out a new set
of invitations with a replacement guest.
*/
/*
Explain & TIP: Arrays are flexible. You can replace an item if someone can't make it, then loop through the list again
for new invitations.
*/
var guestList1 = ["Ahsan", "Rehan", "Zain"];
guestList1.forEach(function (guestList1) {
    console.log("".concat(guestList1, ", would you like to join me dinner?"));
});
var unableToAttend = "Danish";
console.log("".concat(unableToAttend, ", can't make it to dinner."));
var newGuest = "Babar";
guestList1[guestList1.indexOf(unableToAttend)] = newGuest;
guestList1.forEach(function (guestList1) {
    console.log("".concat(guestList1, ", would you like to join me dinner?"));
});
