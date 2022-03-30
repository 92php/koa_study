
//es6中单例

// class Person{
//     static getInstance(){
//         if(!Person.instance){
//             Person.instance = new Person();
//         }
//         return Person.instance;
//     }
//     constructor(){
//         console.log("构造函数里面的方法");
//     }
//     find(){
//         console.log("查找数据库里面的方法"); 
//     }
// }

// var p1 = Person.getInstance();
// var p2 = Person.getInstance();

// var cache2 = Person.getInstance();
// cache2.find();





class Db {

    static getInstance(){   /*单例*/
        if(!Db.instance){
            Db.instance=new Db();
        }
        return Db.instance;
    }

    constructor(){
        console.log('实例化会触发构造函数');
        this.connect();
    }

    connect(){
        console.log('连接数据库');
    }
    find(){
        console.log('查询数据库');
    }
}

//var db1 = new Db();
//var db2 = new Db();

var myDb=Db.getInstance();
var myDb2=Db.getInstance();
var myDb3=Db.getInstance();
var myDb4=Db.getInstance();

myDb3.find();
myDb4.find();