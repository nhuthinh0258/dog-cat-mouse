function dog(){
    this.stomatch=[];
}

dog.prototype.eat=function(cat){
    this.stomatch.push(cat);
}