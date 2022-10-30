// Arrays
var customerNames = [];
customerNames.push('Same Smith');
customerNames.push('Tommy Guns');

for (i = 0; i < customerNames.length; i++){
    console.log(customerNames[i]);
}

for (name of customerNames){
    console.log(name)
}

// Functions

function myFunction(){
    for (let i = 0; i < 100;i++){
        console.log(i);
    }
}

myFunction();

function createFullName(firstName, lastName){
    console.log(firstName + ' ' + lastName);
}
createFullName('Tom', 'Sawyer');

function createFullName(firstName, lastName){
    return firstName + ' ' + lastName;
}

var fullName = createFullName('Tom', 'Sawyer');
console.log('Welcome' + fullName);

//Array Methods

let names = ['Sam', 'Tom', 'Eric', 'Sally', 'Nicholas'];
let lengths = names.map(function(element){
    return element.length;
});
console.log(lengths);

let sum = lengths.reduce(function(accumulator, currentValue){
    return accumulator + currentValue;
}, 10);

console.log(sum);

names.forEach(function(element){
    console.log(element);
});

let evens = names.filter(function(element){
    return element.length % 2 == 0;
});
console.log(evens);

let removedElement = names.splice(1, 1);
console.log(removedElement);

//Objects
var dvdPlayer = {
    height: 3,
    width: 18,
    depth: 12,
    weight: 7,
    color: 'Black',
    dvdName: 'Mulan',
    peintDVDName: function(){
        console.log(this.dvdNames);
    }
};

console.log(dvdPlayer.depth);
dvdPlayer.printDVDName();