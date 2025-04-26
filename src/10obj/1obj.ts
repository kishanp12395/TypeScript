// var userObj : {
//     name: string,
//     age: number,
//     isActive: boolean,
// } = {
//     name: "kkp",
//     age: 30,
//     isActive: true,
// }

// userObj.company = 'oracle'; 

//so to do this we have another method

var userObj : {
       [key: string]: string | number | boolean | undefined,
    } = {
        name: "kkp",
        age: 30,
        isActive: true,
    }

userObj.company = 'oracle'; // valid
userObj.age = 40; // valid
userObj.isActive = false; // valid
userObj.isActive = 1; // valid



// type Address = {
//     street: string;
//     city: string;
//     country: string;
//   };
  
//   type User = {
//     id: number;
//     name: string;
//     address: Address; // nested object
//   };
  
//   const user: User = {
//     id: 1,
//     name: "John Doe",
//     address: {
//       street: "123 Main St",
//       city: "New York",
//       country: "USA"
//     }
//   };
  