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