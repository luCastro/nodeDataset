
const fs = require('fs')
const csv = require('fast-csv');
const knex = require("./db/client");

// var HashTable = require('hashtable');

// var hashtable = new HashTable();


// let counter = 0;


// const stream = fs.createReadStream('data.csv')

// let csvStream = csv.fromPath("data.csv", 
//     { headers: true }).on('data', data =>{

//         csvStream.pause();
//             if(counter >209 & counter<410){

//             knex
//                 .insert({
//                 date_time: data.dateTime,
//                 visitor: data.visitor,
//                 os: data.os,
//                 device: data.device
//                 })
//                 .into("datas")
//                 .returning("*")
//                 .then(([data]) => {
//                 console.log("Datas insert result:", data);    
//              });
//             }
//             counter++;

//        csvStream.resume();

//     }).on('end', ()=>{
//         console.log('finished')
//     });


    //   knex('datas')
    // .countDistinct('visitor')
    // .where((builder)=>
    //   builder.whereIn('os', req.query.os).whereIn('device',req.query.device)
    // )
    // .then(count => {
    //   res.status(200).send({ count: count });
    // });


    


    // let test = function () {

    //  let os = [];
    //  let device = [];

    //     knex('datas')
    //     .countDistinct('visitor')
    //     .where((builder)=>{
    //             builder.whereIn('os', [1]).whereIn('device',[2])
    //     }).then(count=> {
    //         console.log(count)
    //     });
    // }

    // test();


// stream.pipe(streamCsv);

// for(let i = 0; i < data.length; i++){

//     if (!hashtable.has(data[i][0])){
//         hashtable.put(data[i][0], {dateTime: data[i][1], os: data[i][2], device: data[i][3]});
//     }
// }

// console.log(hashtable.has(data[0][0]));
 

// =# select column_name, data_type from information_schema.columns
// -# where table_name = 'config';



    // let csvStream = csv.fromPath("data.csv", { headers: true })
    // .on("data", function(record){
    //     csvStream.pause();


    // var str = [];
    // // var res = str.split(",");
    // // console.log(res);

    // console.log(isEmpty(str));
    


let testando = function(){
     
    let device;
    let os;
    
      knex('datas')
      .count('visitor')
      .where((builder)=>{
        if(device != null & os != null){
        builder.whereIn('os', os.split(',')).whereIn('device', device.split(','));
        }
        else if(device == null & os != null){
        builder.whereIn('os', os.split(','));
        }
        else if(os == null & device != null){
        builder.whereIn('device', device.split(','));
        }
      })
      .groupBy('visitor')
      .having('visitor', '>', 10)
      .then(queryResult => {
        
        let count = queryResult;
  
        console.log(count);
    });
   
  };

  testando();