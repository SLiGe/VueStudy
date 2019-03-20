var obj = {
    foo:'bar',
    isButtonDisabled:true,
    message:'我是最棒的'
};
//Object.freeze(obj);
      new Vue({
          el:"#app-1",
          data:obj     
      })

var data = {a:1}
var vm = new Vue({
    el:"#example",
    data:data
})

vm.$data == data;
vm.$el == document.getElementById('example');
//$watch是一个实例方法
vm.$watch('a',function(newValue,oldValue){

})