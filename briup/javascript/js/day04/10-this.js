function test(){

  console.log(this);


}

//test();

var obj = {
name:'zhangsan',
age:12,
sayName:function(){
  console.log(this.name);
}

};
obj.sayName();
















