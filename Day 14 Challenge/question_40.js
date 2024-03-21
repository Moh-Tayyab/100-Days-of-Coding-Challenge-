// Program written by [Muhammad Tayyab]
// Date:15-03-2024
/*
Question 40: Album: Create objects for music albums.

Explain & TIP: Use functions to return objects. This exercise practices creating and manipulating objects,
and introducing optional function parameters.
*/
function make_albums(artist, title, track) {
    var album = { artist: artist, title: title };
    if (track) {
        album["track"] = track;
    }
    return album;
}
console.log(make_albums("Artist One", "Metallica"));
console.log(make_albums("Artist Two", "Metallica"));
console.log(make_albums("Artist Three", "Metallica", 3));
