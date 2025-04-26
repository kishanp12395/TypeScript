"use strict";
function getInfo() {
    let name = document.getElementById("username");
    let userName = name.value;
    let email = document.getElementById("email");
    let userEmail = email.value;
    let age = document.getElementById("age");
    let userAge = age.value;
    console.log(userName, userEmail, userAge);
}
