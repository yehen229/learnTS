interface Person {
    firstName: string;
    lastName: string;
}

function greeter(person: Person) {
    return "Hello," + person.firstName + person.lastName
}

let user = {firstName: 'zhang', lastName: ' san'}

console.log(greeter(user));
