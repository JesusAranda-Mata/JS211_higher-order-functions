let i = 0;

const fun = () => {
while(i <= 1000){
    console.log(i);
    i++
    }
}
//fun()

const obj = {
    firstName: "Jane",
    lastName: "Doe",
    birthDate: "Jan 5, 1925",
    gender: "female"
}

//logs the the key names but not the value.
const newFun = () => {
    console.log(Object.keys(obj));
}

//newFun()

//logs the keys and its values as one array.
const newerFun = () => {
    console.log(Object.entries(obj));
}

newerFun(obj)

const people = [

{
        firstName: "Juan",
        lastName: "Dog",
        birthDate: 1924,
        gender: "male"
},
{
        firstName: "Jane",
        lastName: "Doe",
        birthDate: 1925,
        gender: "female"
},
{
        firstName: "Flor",
        lastName: "Doe",
        birthDate: 1980,
        gender: "female"
}
];

const newNewFun = () => {
for(let i = 0; i < people.length; i++){
    //console.log(i);
    let bDay = people[i]
    //console.log(`Before the if ${bDay['birthDate']}`);
    //console.log(`Looking at birth dates: ${bDay['birthDate']}`);
    let birthday = bDay['birthDate']
    //console.log(birthday);
    if (birthday % 2 !== 0) {
        console.log(`Odd birth year(s) ${bDay['birthDate']}`);
        //return true
    }
}
}


newNewFun(people);

let newPeople = people.map(function(element, index){
    //prints the values of the keys
    //console.log(`The information ${Object.values(element)}`);
    //prints the keys
    //console.log(`The information ${Object.keys(element)}`);
    //prints the keys and its values as one array
    console.log(`The information ${Object.entries(element)}`);
})

let malePerson = people.filter(function(element, index){
    if(element.gender == "male"){
    console.log("Male(s) in  people: " + element["firstName"])
    console.log(element);
    return true
    } 
})

let year = people.filter(function(element, index){
    if(element["birthDate"] < 1990){
    console.log("Person born before 1990: " + element["birthDate"] + " " + element["firstName"]);
    return true
    }
})

/*------------

I don't understand what are we supposed to do with this?

Pt. 2 - From Scratch .find() & .findIndex()
Whiteboard
Code plan
Pseudo code
JavaScript code in a Repl.it for both functions
Turn in URL of Repl.it
----------------*/

//Uses the exact same code as reduce produces the same results

let males = people.find(function(element, index){
    if(element.gender == "male"){
    console.log("Found males: " + element["firstName"])
    console.log(element);
    return true
    } 
})

let malePosition = people.findIndex(function(element, index){
    if(element.gender == "male"){
    console.log("Found position of male: " + element["firstName"])
    console.log(element);
    return true
    } 
})