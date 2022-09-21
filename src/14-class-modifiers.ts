// 访问修饰符

export { }

class Person {
    name: string
    private age: number
    protected gender: boolean

    constructor(name: string, age: number) {
        this.name = name
        this.age = age
        this.gender = true
    }

    sayHi(msg: string): void {
        console.log((`I am ${this.name},${msg}`));
        console.log(this.age);
    }
}

class Student extends Person {
    constructor(name: string, age: number) {
        super(name, age)
        console.log(this.gender);
        
    }
}

const tom = new Person('tom', 19)
console.log(tom.name);
// console.log(tom.age);
// console.log(tom.gender);

