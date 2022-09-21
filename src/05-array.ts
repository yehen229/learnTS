// 数组array类型

const arr1: Array<number> = [1, 2, 3];

const arr2: number[] = [2, 3, 4];

function sum(...args: number[]) {
    return args.reduce((prev, current) => prev + current, 0)
}

sum(1, 2, 3)