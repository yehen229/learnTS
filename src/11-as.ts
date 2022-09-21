// 类型断言

export { }

const nums = [100, 110, 120]

const res = nums.find(i => i > 0)

// const square = res * res

const num1 = res as number

// const num2 = <number>res