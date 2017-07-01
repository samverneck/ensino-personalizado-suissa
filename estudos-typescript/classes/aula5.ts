// Parte One

/* class Customer {
    constructor (public name: string) {

    }
}

var c = new Customer ("Samuel"); */

// Parte two

/* class Customer {
    constructor (public name: string) {

    }

    test(): void{
        this.name;
    }
}

var c = new Customer ("Samuel"); */

// Parte three

/* class Customer {
    private _name: string;
    constructor (name: string) {
        this._name = name;

    }

    test() {
        this._name;
    }

}

var c = new Customer ("Samuel"); */

// Parte four

/* class Customer {
    private _name: string;
    constructor (public name: string) {
        this._name = name;
    }


}

var c = new Customer ("Samuel"); */

// Parte five

/* class Customer {
    private _name: string;
    //constructor (public name: string) {
    constructor (public myname: string) {
        this._name = name;
    }

    get name(): string {
        return this._name;
    }

    set name(newName: string) {
        this._name = newName;
    }
    
}

var c = new Customer ("Samuel");
c.name = ' ';
console.log(c.name); */

// Parte six

/* class Cust19omer {
    private _name: string;
    //constructor (public name: string) {
    constructor (public myname: string) {
        this._name = name;
    }

    get name(): string {
        return this._name;
    }

    set name(newName: string) {
        // encripta a senha
        this._name = newName;
    }
    
}

var c = new Customer ("Samuel");
c.name = ' ';
console.log(c.name); */

// // // // // // // // // // // // // // // // // // // // // // // // 

// Parte seven

/* class Customer {
    private _name:string;
    constructor (public name: string) {
        this._name = name;
    }

    register(age: number, document: string, teste?: number): string{ 
        return 'Cliente registrado com sucesso!';
    }
}

var c = new Customer ("Samuel");
c.register(19); */

// Parte eight

/* class Customer {
    private _name:string;
    constructor (public name: string) {
        this._name = name;
    }

    register(): void{ 
        return 'Cliente registrado com sucesso!';
    }
}

var c = new Customer ("Samuel");
c.register(); */
// Parte nine

/*class Person{
    constructor(public document: string) { }
}

class Company{
    constructor(public companyName: string) { }
}

class Customer extends Person {
    private _name:string;
    constructor (public name: string, public document: string) {
        super(document);
        this._name = name;
    }

    register(): void{ 

    }
}

var c = new Customer ('Samuel', '123456');
c.register(); */

// Parte ten

/*class Person{
    constructor(public document: string) { }
}

class Company{
    constructor(public companyName: string) { }
}

class Customer extends Person {
    
    static points: number = 0; // variavel estatica
    private _name: string;
    constructor (public name: string, public document: string) {
        super(document);
        this._name = name;
        Customer.points; // chamando ela
    }

    register(): void{ 

    }
}

var c = new Customer ('Samuel', '123456');
c.register();
Customer.points;*/

class Person{
    constructor(public document: string) { }
}

class Company{
    constructor(public companyName: string) { }
}

interface ICompany extends Company {
    register(): void;
}

class FoodCompany implements ICompany {
    constructor(public companyName: string) { }
    register(): void { }
}

class Customer extends Person {
    
    static points: number = 0; // variavel estatica
    private _name: string;
    constructor (public name: string, public document: string) {
        super(document);
        this._name = name;
        Customer.points; // chamando ela
    }

    register(): void{ 

    }
}

var comp = new FoodCompany('Salgadinhos');
var c = new Customer ('Samuel', '123456');
c.register();
Customer.points;

// TODAS AS AULAS COMPLETAS



