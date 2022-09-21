// class interface

export { }

interface Eat {
    eat(food: string): void
}

interface Run {
    run(distance: number): void
}

class Person implements Eat,Run {
    eat(food: string): void {
        console.log(`优雅进食: ${food}`);
    }
    
    run(distance: number): void {
        console.log(`跑步: ${distance}`);
        
    }
}

class Animal implements Eat,Run {
    eat(food: string): void {
        console.log(`大吃: ${food}`);
    }
    run(distance: number) {
        console.log(`爬行: ${distance}`);
        
    }
}
