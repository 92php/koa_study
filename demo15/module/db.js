
var MongoClient = require('mongodb').MongoClient;

var Config=require('./config.js');

class Db{


    static getInstance(){  

        if(!Db.instance){
            Db.instance=new Db();
        }
        return  Db.instance;
    }

    constructor(){

        this.dbClient=''; 
        this.connect();   //实例化的时候连接数据库

    }

    connect(){ 
      let _that=this;
      return new Promise((resolve,reject)=>{
          if(!_that.dbClient){         
              MongoClient.connect(Config.dbUrl,{useUnifiedTopology:true},(err,client)=>{

                  if(err){
                      reject(err)

                  }else{

                      _that.dbClient=client.db(Config.dbName);
                      resolve(_that.dbClient)
                  }
              })

          }else{
              resolve(_that.dbClient);

          }


      })

    }

    find(collectionName,json){

       return new Promise((resolve,reject)=>{

           this.connect().then((db)=>{

               var result=db.collection(collectionName).find(json);

               result.toArray(function(err,docs){

                   if(err){
                       reject(err);
                       return;
                   }
                   resolve(docs);
               })

           })
       })
    }
    update(){

    }
    insert(){


    }
}


module.exports=Db.getInstance();
