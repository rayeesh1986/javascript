// example 1 number define
let x: number = 10;
console.log(x);

// example 2 number define
function add(a: number, b: number) {
  return a + b;
}
add(10, 10);

// example 3 string define
let y: string = "10";
console.log(y);

// example 4 string define
function addData(a: string, b: string) {
  return a + b;
}
addData("10", "10");

// example 5 object define
// we can write blank object means {} or object
let obj: { name: string; email: string; mobile: number; age: number } = {
  name: "test name",
  email: "test@gmail.com",
  mobile: 8076230969,
  age: 36,
};
console.log(obj.name);

// example 6 object define
type objType = { name: string; email: string; mobile: number; age: number };
let obj1: objType = {
  name: "test name 1",
  email: "test@gmail.com",
  mobile: 8076230969,
  age: 36,
};
console.log(obj1.name);

// example 7 array type define
let arr1: string[] = ["array 1", "array 2", "array 3", "array 4", "array 5"];
let arr2: any[] = ["array 1", 2, true, "array 4", "array 5"];
let arr3: string[] | number[] = [8, 2];
let arr4: string[] | number[] = ["arr data 1", "arr data 2"];

// example 8 array tuple define
let arr5: [string, number?, string?, boolean?] = ["arr1"];
arr5.push(true);
arr5.push(5);
arr5.push("hello");

console.log(arr5);

// example 8 array type define
let arr6: any[] = [
  "array 1",
  5,
  true,
  "array 2",
  "array 3",
  "array 4",
  "array 5",
];
console.log(arr6);

// example 9 literal type define ye same value hi lete hai
let Data: "abc" | 123 = "abc";

// example 10 union
function combine(a: number | string, b: number | string) {
  if (typeof a === "number" && typeof b === "number") {
    return a + b;
  } else {
    return a.toString() + b.toString();
  }
}

console.log(combine(10, 10));

// example 11 type alias
type varType = string | number | undefined;

let a1: varType = 10;
let a2: varType = "10";
let a3: varType = undefined;

// example 12 function type, ek function jis type ki value return karta hai  wo us type ki value kahte hai use

function xyz(a: number, b: number): number {
  return a + b;
}
xyz(10, 20);

// example 13 void, jab ek function jab kuch bh return nahi karta viod kahlata hai

function collection() {
  console.log("hello");
}

collection();

// example 14 any ke case me
let dd: any;
dd = 10;
dd = "hello";

let aa: string;

aa = dd;
console.log(aa);

// example 14 unknown ke case me
let dd1: unknown;
dd1 = 10;
dd1 = "hello 1";

let aa1: string;
// aa1 return error because it will not assign in this case but any me error nahi aayegi
//aa1 = dd1;
//console.log(aa1);

if (typeof dd1 === "string") {
  aa1 = dd1;
}
