var emp = [1, "kkp", true];
var multi:[number, string, boolean, number] = [1, "kkp", true, 40];
multi.push(1); // valid
multi.push("kkp"); // valid

//also we can make it readonly
var emp1: readonly [number, string, boolean] = [1, "kkp", true];