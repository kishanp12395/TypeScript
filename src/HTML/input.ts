function getInfo() {

    let name = document.getElementById("username") as HTMLInputElement;
    let userName: String = name.value;

    let email = document.getElementById("email") as HTMLInputElement;
    let userEmail: String = email.value;

    let age = document.getElementById("age") as HTMLInputElement;
    let userAge: String = age.value;
  console.log( userName, userEmail, userAge);
}