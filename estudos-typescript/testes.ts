/*interface ISubscriber{
    isSubscriber: boolean
}*/

/// <reference path="ISubscriber.ts" />

module tsbr {
    interface IStudent {
    name: string;
    email: string;
    idade?: number;
    register(): void;
}

class Student implements IStudent, ISubscriber {
    // constructor(public name: string, public email: string, public age?: number, public isSubscriber: boolean) { }
    constructor(public name: string, public email: string, public isSubscriber: boolean, public age?: number) { }

    register(): void {
        console.log('Aluno cadastrado com sucesso!');
    }
}

function run(student: IStudent) {
    student.register();
}

//var student = {name: "Samuel" };
var student = new Student('Samuel', 'samuel@samuel.com', true, 19);
run(student);
}

/* interface IStudent {
    name: string;
    email: string;
    idade?: number;
    register(): void;
}

class Student implements IStudent, ISubscriber {
    // constructor(public name: string, public email: string, public age?: number, public isSubscriber: boolean) { }
    constructor(public name: string, public email: string, public isSubscriber: boolean, public age?: number) { }

    register(): void {
        console.log('Aluno cadastrado com sucesso!');
    }
}

function run(student: IStudent) {
    student.register();
}

//var student = {name: "Samuel" };
var student = new Student('Samuel', 'samuel@samuel.com', true, 19);
run(student);
*/
