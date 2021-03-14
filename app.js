const request = require('request')
const express = require('express');
const app = express();
const geocode = require('./utils/geocode')
const forcast = require('./utils/forcast')
const path = require('path');
// const yargs = require('yargs')

app.use(express.static(path.join(__dirname , './public')));
app.set('view engine' , 'hbs');

// const address = process.argv[2]
// //console.log(address);
// if (address)
// {
//   geocode(address , (error , {latitiude , longtitude})=> {
//      if(error)  return console.log(error)

//      forcast (latitiude , longtitude , (error , {weather_descriptions , temperature})=>{
//        if(error)   return console.log(error)
//        console.log("The Weather is: " + weather_descriptions[0] + " The Temperature is : " + temperature)
//      })

//  })
// }
// else
// {
//   console.log("Please Provide an address")
// }
app.get('' , (req , res) => {
  res.render('index' , {type: "dynamic"});
})
app.listen(3000 , ()=>{
  console.log("Starting the server at port 3000!");
})

