import { Greeting } from "./Greeting";

export class GreetingService{

    private greeting: Greeting

    constructor(){
        this.greeting = new Greeting('Hello')
    }

    getGreeting(name: string){
        return name
    }
}