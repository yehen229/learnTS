// 可选成员、只读成员、动态成员
export { }

interface Post {
    title: string
    content: string
    subtitle?: string //可选成员
    readonly summary?: string //只读，不可修改
}

const hello: Post = {
    title: 'hello',
    content: 'A ts',
    summary: 'A Js'
}

interface Cache {
    [key: string]: string
}

const cache: Cache = {}

cache.foo = 'a'
