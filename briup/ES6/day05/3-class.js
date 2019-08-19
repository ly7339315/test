class Animal {
    constructor (name,age){
        this.name = name;
        this.age = age;
    }
    sayName(){
        console.log('sayName',this.name);
    }
    static say(){
        console.log('静态方法');
    }
}

Animal.staticAttr = '静态属性';

let animal = new Animal('xiaoxiao',1);
console.log(animal);
console.log(animal.name);
console.log(animal.age);
animal.sayName();
Animal.say();
console.log(Animal.staticAttr);