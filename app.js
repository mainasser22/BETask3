const request = require("request")
const maindata = require("./maindata")

const country = process.argv[2]

maindata.geocode(country, (error, data) => {
    console.log("ERROR : ", error)
    console.log("DATA  : ", data)

    if (data) {
        maindata.forecast(data.latitude, data.longtitude, (error, data) => {
            console.log("ERROR : ", error)
            console.log("DATA  : ", data)
        })
    } else {
        console.log("Data Entered have An Error")
    }

}) 