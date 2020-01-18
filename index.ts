console.log('hello from typescript')

export const sum: number = 2 + 2;

function greet(greeting: string): string {
    return `${greeting}, john`;
}

function greetOptional(greeting?: string) {
    return `${greeting}, john`;
}

function greetWrong1(greeting: string) {
    return 1;
}

function greetWrong2(greeting: string):string {
    // return 1; // <- error
    return greeting;
}

function greet2(greeting:string, name:string): string {
    return `${greeting}, ${name}`;
}

function greet3(greeting:string, name:string = 'luis'): string {
    return `${greeting}, ${name}`;
}

function greet4(options: { greeting:string, name:string }) {
    return `${options.greeting}, ${options.name}`;
}

function greet5({ greeting, name }:{ greeting:string, name:string }) {
    return `${greeting}, ${name}`;
}

function greet6({ greeting, name = 'john' }:{ greeting:string, name?:string }) {
    return `${greeting}, ${name}`;
}

type Salutation =  { greeting:string, name?:string };

function greet7({ greeting, name = 'john' }:Salutation) {
    return `${greeting}, ${name}`;
}

greet('hello');
greetOptional();
// greet2('hello'); // <- error
greet2('hello', 'john');
greet3('hello', 'john');
greet4({ greeting: 'hello', name: 'john' });
greet5({ greeting: 'hello', name: 'john' });
// greet5({ greeting: 'hello' }); // <- error
greet6({ greeting: 'hello' });
greet7({ greeting: 'hello' });

const message1:number = greetWrong1('hello');
// const message1:string = greetWrong1('hello'); // <- error
const message2 = greetWrong2('hello');

const input = document.getElementById('input') as HTMLInputElement
// const input: HTMLInputElement = document.getElementById('input') // <- error
// const input2 = document.getElementById('input') // <- error

if (input) {
    input.autofocus = true 
    // input2.autofocus = true // <- error: without casting, the HTMLElement has no autofocus
    
    input.addEventListener('input', e => {
        const i = e.currentTarget as HTMLInputElement
        console.log(i.value)
        // console.log(e.currentTarget.value) // <- error
    })
}
