class Animal {
    constructor(name,age){
        this.name = name;
        this.age = age;
        console.log(this);
    }
    sayName(){
        console.log('Animal中的实例方法',this.name);
    }
    static animalSay(){
        console.log('Animal中的静态方法');
    }

}
Animal.animalAttr = 'Animal中的静态属性';
class Dog extends Animal{
    constructor(name,age,color){
        super(name,age);
        // this.name = name;
        this.color = color;
    }
}
let dog = new Dog('小小',1,'黑色');
console.log(dog);
dog.sayName();
Dog.animalSay();
console.log(Dog.animalAttr);
console.log(Dog.__proto__ === Animal);
console.log(Dog.__proto__ );
console.log(Dog.prototype.__proto__ === Animal.prototype);
console.log(Object.getPrototypeOf(Dog) === Animal);
console.log(Object.getPrototypeOf(Dog.prototype) === Animal.prototype);

