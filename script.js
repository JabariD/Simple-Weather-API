var city = "Washington D.C."


$.getJSON("http://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial&APPID=2bb930dcd6a209c3048a37004c1534d6", function(data) {
    console.log(data);

    var icon = "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png";

    var temp = Math.floor(data.main.temp);
    var weather = data.weather[0].main;

    $('.icon').attr('src', icon);
    $('.weather').append(weather);
    $('.temp').append(temp);

});