// 抽象类 abstract

export { }

//抽象类只能被继承
abstract class Animal {
    eat(food: string): void {
        console.log(`吃${food}`);
    }
    //抽象方法需要子类实现
    abstract run(distance: number): void
}

class Dog extends Animal {
    run(distance: number): void {
        console.log('琶行', distance);
    }
}

const d = new Dog()
d.eat('chi')
d.run(100)
