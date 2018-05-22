var cities = [];

var renderCities = function(){
    $('.get-city-weather').empty();
    for (i =0; i< cities.length; i++) {
        $('.get-city-weather').append('<div>' + '<h3>' + cities[i].name + '</h3>'+ '<p>' + cities[i].weather + '</p>' +'</div>');
    };
    };

    $('.post-city').on('click', function () {
        addBeer($('.city-input').val());
        renderCities();   
    });

var addCity = function(name, weather){
        var cityInfo = {
            name: name,
            weather: weather
        };
        cities.push(cityInfo);
        }

$.get({
    url:"http://api.openweathermap.org/data/2.5/weather?q="+city+"d703871f861842b79c60988ccf3b17ec",
    success: function (data) {
        return (data);
    }		
    }
);