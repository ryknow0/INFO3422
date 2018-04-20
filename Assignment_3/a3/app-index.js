$(document).ready( function(){
    
    $("#nasabutton").click(function(){
        
        $.ajax({
            url:'https://api.nasa.gov/planetary/apod?api_key=tkfIqWNYP4rcT69VnKtpOlsMG8bhU3cG1xiuzwgp',
            dataType:'json',
            success: function(result){
                $("#apod-access-date").text(result.date);
                $("#apod-image").attr("src", result.url);
                $("#apod-title").text(result.title);
                $("#apod-explanation").text(result.explanation);
            },
            error:function(reason, ex){
               alert(reason);
            }
        });
    });
    
});