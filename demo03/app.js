
//async 是让方法变成异步


//普通方法
// function getData(){
//     return "这是一个数据";
// }
// console.log(getData());

// async function getData(){
//     return "这是一个数据";
// }
// console.log(getData());
// var p=getData();
// p.then((data)=>{
//     console.log(data);
// })


// async function getData(){
//      return "这是一个数据";
//  }
// async function test(){
//     var d=await getData();
//     console.log(d);
// } 
// test();

//await 阻塞功能，把异步改成一个同步
// async function getData(){
//     console.log(2);
//     return "这是一个数据";
// }
// async function test(){
//     console.log(1);
//     var d=await getData();
//     console.log(d);

//     console.log(3);
// }
// test();  //1 2 3


// async 定义的方法返回是 Promise对象
function getData(){

    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            var username="zhansan";
            resolve(username);
        },1000)
    })
}
async function test(){
    var data=await getData();
    console.log(data);
}
test();




