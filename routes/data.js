const express = require("express");
const router = express.Router();
const knex = require("../db/client");



router.get("/hello", (req, res)=>{
  res.send("Hello, Universe!")
});

router.get("/loyal-users:os:device", (req, res)=>{ 
     
    let device = req.query.device;
    let os = req.query.os;
    
    knex('datas')
      .count(`visitor`)
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
      .having(knex.raw('count(visitor) > 10'))
      .then(result => {
        let count = result.length;
        res.status(200).send({ count: count });
    });
   
  });

router.get("/unique-users:os:device", (req, res)=>{ 
     
    let device = req.query.device;
    let os = req.query.os;
    
    
      knex('datas')
      .countDistinct('visitor')
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
      .then(count => {
  
        res.status(200).send({ count: count });
    });
   
  });


module.exports = router;