console.log('Wazaaaaappp!');
let name = 'John';
const value=1.23 
console.log(name);
//string 
const message = 'heya';
const text = new String('hola!')//string object
//object 
let person={
    name:'John',
    age:21
};
console.log(person);
//dot notation 
console.log(person.age);

//array
let array=['name','age'];
console.log(array.length);

//function
function hello(name){
    console.log('Hey ' + name)
}
hello('Midge');

function square(num){
    return num*num;
}
console.log(square(3));
//if-else
let hour=19;
if (hour>=6 && hour<12)
    console.log('Good morning');
else if  (hour>=12 && hour<18)
    console.log('Good Afternoon');
else
    console.log('Good Evening');   

//array map
const colors=["red","blue","green"];
//const items= colors.map(color => '<li>' + color + '</li>');
const items= colors.map(color => `'<li>'${color}'</li>'`);
console.log(items);

//spread operator
const first={name : 'joshh'};
const second={job:'teacher'};
const combined = {...first, age:40, ...second};
console.log(combined);

//class

class People{
    constructor(name){
        this.name=name;
    }
    walk(){
        console.log('walk');
    }
}
const peep=new People('KS');
console.log(peep);

//nested destruction
//with nested object 
const userDetails = {
    id:12,
    name:'Bob',
    education : {
        degree:'Masters'
    }
    
};
const {education: {degree} = {}} =userDetails;
console.log(degree);

//nested object missing 
const user = {
    id:12,
    name:'Bob',
    
};
const {education: {school:{names = 'IISJ'} = {}} = {}} =user;
console.log(names);

//array destructing
let thing = ["Table", "Chair", "Fan"];
let [a, b, c] = thing;
console.log(a);

//Object.keys()
const userSalary = {
	basic:1231,
	pay:10000,
};
console.log(Object.keys(userSalary));
// to check if the key exists:
const basicExists = Object.keys(userSalary).includes("basic");
console.log(basicExists);
//to get the values of the keys 
const values = Object.keys(userSalary).map((key) => userSalary[key]);
console.log(values)
//instead we can use Object.values()
const values1 = Object.values(userSalary);
console.log(values1);
//multiple values in object
const monthlyTotal = {
    food: 400,
    rent: 1700,
    insurance: 550,
    internet: 49,
    phone: 95,
  };
const total = Object.values(monthlyTotal).reduce((acc,expense) => acc+expense,0
);
console.log(total);

const users2 = {
    "1": {
      name: "John",
      age: 29,
    },
    "2": {
      name: "Jane",
      age: 42,
    },
    "3": {
      name: "Fred",
      age: 17,
    },
  };

  const usersOver20 = Object.entries(users2).reduce((acc, [id, user]) => {
    if (user.age > 20) {
      acc.push({ ...user, id });
    }
    return acc;
  }, []);
  console.log(usersOver20);