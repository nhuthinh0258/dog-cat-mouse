var chalk=require('chalk');

function dog(name){
    this.name=name;
    this.stomatch=[];
;}

dog.prototype.eat=function(cat){
    this.stomatch.push(cat);
};

dog.prototype.sayHi=function(){
    console.log('Hello, My name is' + chalk.blue(this.name))
};

module.exports=dog;