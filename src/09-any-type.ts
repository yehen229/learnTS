// any

export { }

function stringify(value: any) {
    return JSON.stringify(value)
}

stringify('string')

let foo: any = 'string'

foo = 100

//any 类型不受检测