//wait to load javascript until page has completely loaded
//$(document).ready();//whatever is inside .ready() will be run when the document is done loading
$(document).ready(function(){//to keep varialbes from getting lumped into global namespace and makes them local
    //run jQuery selector
    //selects the id = nassbutton from the index.html page
    //then call the .click() event 
    //.click runs the annonymos function that calls ajax when the button is clicked
    $("#nasabutton").click(function(){
        //ajax calls need to be passes and object
        $.ajax({ //first{ signals the start of the object
            url:'https://api.nasa.gov/planetary/apod?api_key=tkfIqWNYP4rcT69VnKtpOlsMG8bhU3cG1xiuzwgp',//1st object atribute url is the key and the url of https:// is the value
            dataType:'json',
            success: function(result){//atribute value is actually a function that gets the result
                $("#apod-access-date").text(result.date);//uses jQuery to grab the image tag with the id of apod-access-date and will display the result
                $("#apod-image").attr("src", result.url);//updates the src attribute of the apod-image class and update it with teh url
                $("#apod-title").text(result.title);//gest the text from source
                $("#apod-explanation").text(result.explanation);//gets the explination text from the source
                //result.date etc.. refers to data in the json object that is returned from the url above
            },
            error: function(reason, ex){
                alert(reason);
            }
        });//end of ajax object
    });//end of nasa button click function
    $("#clearnasabutton").click(function(){
        $("#apod-access-date").text("");
        $("#apod-image").attr("src", "");
        $("apod-title").text("");
        $("#apod-explanation").text("");

    });
    $("#weatherbutton").click(function(){
        zipcode = $("#zip").val();//getzipcode as user input
        //API key Open Weather Map
        //4c604ce7c6e721e66cdbd9ad538dfaa3
        //API URL
        //api.openweathermap.org/data/2.5/weather?zip=20175,us&appid=4c604ce7c6e721e66cdbd9ad538dfaa3
        $.ajax({
            url:'https://api.openweathermap.org/data/2.5/weather?&APPID=4c604ce7c6e721e66cdbd9ad538dfaa3&zip='+ zipcode,
            dataType:'json',
            success: function(result){
                $("#city_name").text(result.name);
                $("#temperature").text(result.main.temp);
                $("#pressure").text(result.main.humidity);
                $("#humidity").text(result.main.humidity);
                $("wind_speed").text(result.wind.speed);
                $("weather").css("display","block");
            },
            error: function(reason, ex){
                alert(reason);
            }
        });
    });
    $("#clearweatherbutton").click(function(){
        $("#weather").css("display","none");
    });
});//end of main anonymous function