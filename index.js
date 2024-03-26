const express=require('express');
const app=express();

var cron = require('node-cron');

cron.schedule('*/1 * * * * *', () => {
  console.log('running a task every minute');
});





app.listen(3000,()=>{
console.log("Server started:::")
})


