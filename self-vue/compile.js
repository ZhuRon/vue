
function Compile(el,vm){    
    this.vm = vm;
    this.el = document.querySelector(el);
    this.fragment = null;
    this.init();
}
Compile.prototype = {
    init(){
        // 接管我们的模板去编译，显示的不是html，只是模板，从头开始处理模板
        this.fragment = this.nodeToFragment(this.el);
        this.compileElement(this.fragment);
        this.el.appendChild(this.fragment);
    },
    compileElement(el){
        var childNodes =el.childNodes;
        [].slice.call(childNodes).forEach((node) => {
            var reg =/\{\{(.*)\}\}/;
            var text =node.textContent;
            if(this.isElementNode(node)){
                this.compile(node);
            }else if(this.isTextNode(node,reg.exec(text)[1])){
                this.compileText(node,reg.exec(text)[1]);
            } 
            //递归
           if(node.childNodes && node.childNodes.length){
               this.compileElement(node);
           }
        });
    },
    isElementNode(node){
        return node.nodeType ==1;
    },
    isTextNode(node){
        return node.nodeType ==2;
    },
    compile(node){

    },
    compileText(node,exp){
        var initText =this.vm[exp];
        this.updateText(node,initText);
    },
    updateText(node,value){
        node.textContent = typeof value === 'undefined'?'':value
    },
    nodeToFragment:function(el){
        var fragment =document.createDocumentFragment()
        // 新拷贝一份，将模板进行html的编译，将相应的data的值的模板占位符给替换掉，最后将它替换el.innerHTML
        // 文档碎片不会留下任何痕迹
        var child = el.firstChild;
        while (child){
            fragment.appendChild(child);
            child = el.firstChild;
        }
        return fragment;
    }
}