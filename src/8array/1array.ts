var city: string[]= ['noida', 'delhi', 'mumbai'];

var marks: number[]= [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

var mixed: (string | number)[]= ['noida', 10, 'delhi', 20, 'mumbai', 30, 40, 50, 60, 70, 80, 90, 100];

var any: any[]= ['noida', 10, 'delhi', 20, 'mumbai', 30, 40, 50, 60, 70, 80, 90, 100];  

var student: Array<string> = ['ram', 'shyam', 'mohan', 'sohan', 'gita', 'sita', 'geeta', 'rani', 'kiran', 'suman'];

var student1: Array<number> = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

var student2: Array<(string | number)> = ['ram', 10, 'shyam', 20, 'mohan', 30, 40, 50, 60, 70, 80, 90, 100];

var student3: Array<any> = ['ram', 10, 'shyam', 20, 'mohan', 30, 40, 50, 60, 70, 80, 90, 100];



//read array elements

var college: ReadonlyArray<string> = ['noida', 'delhi', 'mumbai', 'pune', 'banglore', 'chennai', 'kolkata', 'ahmedabad', 'jaipur', 'lucknow'];
// college.push('agra'); // error: Property 'push' does not exist on type 'readonly string[]'.