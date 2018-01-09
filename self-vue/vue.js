function Vue(options){
    this.data = options.data||{};
    this.methods = options.methods||{};
    Object.keys(this.data).forEach(key=>{
        this.proxyKeys(key);
    });

    // console.log(Object.keys(this.data).forEach(key => {
    //   this.proxyKeys(key);  
    // }))
    // options.created.call(this);
    new Compile(options.el,this);
    options.mounted.call(this);
    
}
Vue.prototype = {
    proxyKeys(key){
        var self = this;
        Object.defineProperty(this,key,
            {enumerable:false,configurable:true,get:function getter(){
                console.log(`您在获取${key}`);
                return self.data[key];
                        },
                        set:function setter (newVal){
                            console.log(`您设置了${key}值为${newVal}`)
                            self.data[key]= newVal;
                        }
                    });
    }
}