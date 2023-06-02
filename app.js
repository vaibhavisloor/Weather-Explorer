const express = require('express');
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended:true}));
const https = require('https');

app.listen(process.env.PORT || 3000,function(req,res){
    console.log("Server Active");
});

app.use(express.static("public"));

app.get("/",function(req,res)
{
    res.sendFile(__dirname + "/index.html");
});

app.post("/",function(req,res)
{
    var place = req.body.cityName;
    const link = "https://api.openweathermap.org/data/2.5/weather?q="+place+"&units=metric&appid=79646ec844ec274c1f41068322a2a55a";
    https.get(link,function(response)
    {
        console.log(response.statusCode);

        response.on("data",function(data)
        {
            const weatherData = JSON.parse(data);
            const iconid = (weatherData.weather[0].icon);
            const iconlink = "https://openweathermap.org/img/wn/"+iconid+"@2x.png";
            console.log(weatherData.main.temp);
            console.log(weatherData.weather[0].description);

            res.write("<h1>The temperature is " + weatherData.weather[0].main + "</h1>\n");
            res.write("<h1>The temperature in " + weatherData.name +" is " + weatherData.main.temp + " degrees celsius</h1>\n");
            res.write("<img src=" + iconlink + ">");
            console.log(iconlink);
            res.send();
        });

    });
});
