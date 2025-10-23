export class Greeting{

    constructor(public message: String, public obj: Object){}

    sayHello(name: String){
        return `${name}  ${this.message}`
    }

}

