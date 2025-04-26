const greet = (name: string): string => {
    return `Hello, ${name}!`;
  };
  
  console.log(greet("World"));
  
let userName: string = "John Doe";
let userAge: number = 30;
let isActive: boolean = true;
let userRoles: string[] = ["admin", "editor", "viewer"];
let userDetails: { name: string; age: number; isActive: boolean } = {
    name: "John Doe",
    age: 30,
    isActive: true,
  };
  
  let userInfo: (string | number)[] = ["John Doe", 30, "admin"];
  
  function add(a: number, b: number): number {
    return a + b;
  }
  
  console.log(add(5, 10));
  
  interface User {
    name: string;
    age: number;
    isActive: boolean;
  }
  
  const user: User = {
    name: "Jane Doe",
    age: 25,
    isActive: true,
  };
  
  console.log(user.name); // Output: Jane Doe


