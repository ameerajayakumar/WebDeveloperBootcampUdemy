console.log("Hello World!");

const password = prompt("Enter a password");
if (password.length >= 6) {
    if (password.indexOf(' ') === -1) {
        console.log("Valid Password!");
    }
    else {
        console.log("Space in password!");
    }
}
else {
    console.log("Password too short!");
}
