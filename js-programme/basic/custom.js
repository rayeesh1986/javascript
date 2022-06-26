

var p = [
    {
        firstName: "John 1",
        lastName: "Doe",
        age: 50,
        eyeColor: "blue",
    },

    {
        firstName: "John 2",
        lastName: "Doe",
        age: 50,
        eyeColor: "blue",
    },

    {
        firstName: "John 3",
        lastName: "Doe",
        age: 50,
        eyeColor: "blue",
    },

    {
        firstName: "John 4",
        lastName: "Doe",
        age: 55,
        eyeColor: "blue",
    }

];


var a = [1, 2, 3, 4, 5]



var rr = ""
for (var i = 0; i < p.length; i++) {
    rr += `<p>${p[i].firstName} </p>`;
}

document.getElementById('demo').innerHTML = rr;
