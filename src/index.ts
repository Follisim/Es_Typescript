
interface Person {
    first: string;
    last: string;
    age: number;
    [key: string]: any
}

const person: Person = {
    first: 'Todd',
    last: 'Smith',
    age: 27,
    ciao: "ciao" //viene considerata come any 
}

const person2: Person = {
    first: 'John',
    last: 'Doe',
    age: 30
}

const person3: Person = {
    first: 'John',
    last: 'Doe',
    age: 30,
    fullName: function() {
        return this.first + ' ' + this.last;
    }

}



function pow(x: number, y: number): string {
    return Math.pow(x, y).toString();
}

let fullName = person3.fullName.bind(person2);
console.log(fullName());
console.log(pow(5, 10));



const arr: number[] = []
arr.push(1)
arr.push(2)