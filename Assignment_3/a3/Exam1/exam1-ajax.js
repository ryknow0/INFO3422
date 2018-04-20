/* 
In your exam1-ajax.js file, you should pass an anonymous function to the click 
method of the nbutton shown above in the HTML. In other words, the ajax method
of jQuery should be called when you click the nbutton. Make sure you put all 
this JavaScript code inside the following call to ready:

$(document).ready( function () {     

});

The NASA URL you should use in the AJAX call is the following:
url: 'https://api.nasa.gov/planetary/apod?api_key=tkfIqWNYP4rcT69VnKtpOlsMG8bhU3cG1xiuzwgp'

In the success attribute of the AJAX call, you should show some of the results 
returned from NASA  in an alert box, using the following code:
alert(result.explanation);
*/

$(document).ready(function(){
    $("#nbutton").click(function(){
        $.ajax({
            url: 'https://api.nasa.gov/planetary/apod?api_key=tkfIqWNYP4rcT69VnKtpOlsMG8bhU3cG1xiuzwgp',
            dataType:'json',
            success: function(result){
                alert(result.explanation);

            }
        })
    });
});