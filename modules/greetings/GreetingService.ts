import { Greeting } from "./Greeting";

export class GreetingService{

    private greeting;
    constructor(public data: String){
        this.greeting = new Greeting(data, {})
    }

    getGreeting(name: string){
        return this.greeting.sayHello(name)
    }

}

