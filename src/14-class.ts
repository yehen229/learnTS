// 类 class

export {}

class Person {
    name: string
    age: number
    constructor(name: string, age: number) {
        this.name = name
        this.age = age
    }
    sayHi(msg: string): void {
        console.log(`Hi, ${this.name}`);
    }
}
