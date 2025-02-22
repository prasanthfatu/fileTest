interface Greeting {
    message: string,
    timestamp: Date
}

function greet(name: string): Greeting {
    return{
        message: `Hello, ${name}!`,
        timestamp: new Date()
    }
}

const userName: string = "Developer";
console.log(greet(userName));
