// 枚举 Enum

export { }

// enum PostStatus {
//     Draft = 0,
//     Unpublished = 1,
//     Published = 2
// }
// 如果加const 则不能使用PostStatus[0]索引器方式
enum PostStatus {
    Draft,
    Unpublished,
    Published
}

const post = {
    title: 'hello World',
    content: 'Typescript',
    status: PostStatus.Draft
}

