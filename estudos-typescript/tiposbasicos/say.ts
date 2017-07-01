class Student {
    fullname: string;
    constructor(public firstName, public lastName) {
        this.fullname = firstName + ' ' + lastName;
    }
}

interface IPerson{
    firstName: string;
    lastName: string;
}

function say(person: IPerson) {
    return "Hello" + person;
}

// var user = {firstName: "Samuel", lastName: "Fonseca Verneck"};
var user = new Student("Samuel", "Fonseca Verneck");

console.log(say(user));