var a ={
    b:3,
}; //被代理或被劫持
Object.defineProperty(a,"b",{
    set:function(newValue){
        // b=newValue;
        // a.d.push({"newValue":newValue})
        console.log(`以前的值是${this.value}`);
        this.value = newValue;
        console.log(`新的值是${this.value}`)
    },
    get:function(){
        console.log("nqdwdz");

    }
});
console.log(a.d);
