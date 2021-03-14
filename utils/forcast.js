const request = require('request')

const forcast = (latitude , longtitude , callback ) => {
    const url = "http://api.weatherstack.com/current?access_key=3b9e7008e6a300e8c858985ad010e90d&query="+
      String(latitude) + "," + String(longtitude) + "&units=m";
    request({url ,json:true } , (error , {body}) => {
      if(error)
      {
        callback('There was an error with connecting to the weather stack API')
      }
      else if (body.error)
      {
        callback("Please Specify a valid place")
      }
      else
      {
        callback(undefined , body.current)
      }
      })
  }

  module.exports = forcast
