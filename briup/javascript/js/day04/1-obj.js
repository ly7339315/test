var car = new Object();
console.log(typeof car);
 car.name = '宝马';
 car.price = 500000;
 car.model = 'full';
 car.myfun = function(){
    var a = 3,b = 5;
    var c;
    c = a * b;
console.log(c);
   return c;
}
console.log(car);
console.log(typeof car.myfun);
console.log(car.myfun);
console.log(car.myfun());
car.myfun();

var obj = {
   name:'李四',
   age:22,
   sayHi:function(){
    var a = 29;
    return a;
}
};

console.log(obj);
console.log(obj.sayHi());
console.log(obj.name);
console.log(obj.age);
console.log(obj.aa);
console.log(obj.name,obj.age);










