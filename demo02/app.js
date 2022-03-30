
/**
//let 和 var一样 是一个块作用域
let a = 123;
if(true){
    let b = 234;
    var c = 456;
}
console.log(a);
//console.log(b);
console.log(c);
 */

/**
 //const 是一个块作用域 定义常量
 const PI=3.1415;
 PI=3
 //console.log(PI); 
 */


// var name = "zhangsan";
// var age = 20;
// console.log(name+"的年龄是"+age)
// console.log(`${name}的年龄是${age}`)

//方法的简写 属性的简写
var name="zhansan";
// var app={
//     name:name
// }
// var app={
//     name,
//     run:function(){
//         console.log('run');
//     },
//     run1(){
//         console.log(`${this.name}在跑步`); 
//     }
// }
// console.log(app.name);
// app.run();
// app.run1();


//箭头函数
// setTimeout(function(){
//     console.log('执行');
// },1000)
// setTimeout(()=>{
//     console.log('执行1');
// },1000)

//回调函数

/**
//在一个方法里面封装了一个异步
function getData(){
    //
    setTimeout(function(){
        var name="zhang";
        return name;
    },1000)
}
//外部获取异步方法里面的数据 name 
var d=getData();
console.log(d);
 */

// function getData(callback){
//     setTimeout(function(){
//         var name="zhangsan";
//        callback(name);
//     },1000);
// }
// getData((data)=>{
//     console.log(data);
// })


//Promise获取异步数据
//resolve 成功的回调函数
//reject 失败的回调函数
// var p= new Promise(function(resolve,reject){

//     setTimeout(function(){
//         var name="zhansan";
//         resolve(name);

//     },1000)
// })
// p.then((data)=>{
//     console.log(data);
// })

function getData(resolve,reject){
    setTimeout(function(){
        var name="zhangsan";
        resolve(name);
    },1000)
}

var p = new Promise(getData);
p.then((data)=>{
    console.log(data);
})





























