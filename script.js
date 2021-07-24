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

const newFun = () => {
    console.log(Object.keys(obj));
}

//newFun()

const newerFun = () => {
    console.log(Object.entries(obj));
}

//newerFun()

const newObj = [

{
        firstName: "Juan",
        lastName: "Dog",
        birthDate: 1924,
        gender: "female"
},
{
        firstName: "Jane",
        lastName: "Doe",
        birthDate: 1925,
        gender: "female"
},
{
        firstName: "Jane",
        lastName: "Doe",
        birthDate: 1900,
        gender: "female"
}
];

const newNewFun = () => {
for(let i = 0; i < newObj.length; i++){
    //console.log(i);
    let bDay = newObj[i]
    //console.log(`Before the if ${bDay['birthDate']}`);
    //console.log(`Looking at birth dates: ${bDay['birthDate']}`);
    let birthday = bDay['birthDate']
    if (birthday % 2 !== 0) {
        console.log(`Odd birth year(s) ${bDay['birthDate']}`);
    }
}
}


newNewFun(newObj)