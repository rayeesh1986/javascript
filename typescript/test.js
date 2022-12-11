// example 1 number define
var x = 10;
console.log(x);
// example 2 number define
function add(a, b) {
    return a + b;
}
add(10, 10);
// example 3 string define
var y = "10";
console.log(y);
// example 4 string define
function addData(a, b) {
    return a + b;
}
addData("10", "10");
// example 5 object define
// we can write blank object means {} or object
var obj = {
    name: "test name",
    email: "test@gmail.com",
    mobile: 8076230969,
    age: 36
};
console.log(obj.name);
var obj1 = {
    name: "test name 1",
    email: "test@gmail.com",
    mobile: 8076230969,
    age: 36
};
console.log(obj1.name);
// example 7 array type define
var arr1 = ["array 1", "array 2", "array 3", "array 4", "array 5"];
var arr2 = ["array 1", 2, true, "array 4", "array 5"];
var arr3 = [8, 2];
var arr4 = ["arr data 1", "arr data 2"];
// example 8 array tuple define
var arr5 = ["arr1"];
arr5.push(true);
arr5.push(5);
arr5.push("hello");
console.log(arr5);
// example 8 array type define
var arr6 = [
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
var Data = "abc";
// example 10 union
function combine(a, b) {
    if (typeof a === "number" && typeof b === "number") {
        return a + b;
    }
    else {
        return a.toString() + b.toString();
    }
}
console.log(combine(10, 10));
var a1 = 10;
var a2 = "10";
var a3 = undefined;
// example 12 function type, ek function jis type ki value return karta hai  wo us type ki value kahte hai use
function xyz(a, b) {
    return a + b;
}
xyz(10, 20);
// example 13 void, jab ek function jab kuch bh return nahi karta viod kahlata hai
function collection() {
    console.log("hello");
}
collection();
// example 14 any ke case me
var dd;
dd = 10;
dd = "hello";
var aa = "Hi ";
console.log(aa + dd);
// example 14 unknown ke case me
var dd1;
dd1 = 10;
dd1 = "hello 1";
var aa1 = "Hi 1 ";
console.log(aa1 + dd1);
