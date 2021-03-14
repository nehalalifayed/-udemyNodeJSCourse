const request = require('request');


const geocode = (address , callback) => {
    const url = "https://api.mapbox.com/geocoding/v5/mapbox.places/" + encodeURIComponent(address) +
      ".json?access_token=pk.eyJ1IjoibmVoYWxhbGkiLCJhIjoiY2tpNGxrY3VyMWxncDJxbXNvbDEwZzh3eSJ9.7n-jQTuPMQRY767WhA1_dw&limit=1";
    request({url, json: true} , (error , {body}) => {
      if(error)
      {
        callback("unable to fetch the location from the API , Please check your internet connectivity")
      }
      else if (body.features.length == 0)
      {
        callback("Couldn't find a match for the specified location")
      }
      else{
        const long =  body.features[0].center[0]
        const lat =  body.features[0].center[1]
        callback(undefined , {longtitude:long , latitiude:lat})
      }
    })
  }


  module.exports = geocode
