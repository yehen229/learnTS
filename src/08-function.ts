// 函数类型
export { }

function func1(a: number, b?: number, c: number=10): string {
    return 'func1'
}

func1(100, 200)

func1(100)

func1(100,200,300)

//

const func2: (a:number,b:number) => string = function (a: number, b: number): string {
    return 'func2'
}
