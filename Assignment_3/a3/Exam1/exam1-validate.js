/*You are to create an exam1-validate.js file that implements three validation rules (2 rules on cname and 1 rule on ccomment). The required rules are as follows:

The input cname should have a minlength:2 and required:true
The input ccomment should be required:true

The required error messages are as follows:
The messages for cname should be the following:  minlength:"At least 2 chars",required:"At least 2 chars"
The message for ccomment should be the following: required:"You can think of something!"*/

$(function(){
    var validator = $("#commentForm").validate({
        rules:{
            cname: {
                minlegnth:2,
                required:true
            },
            ccomment: {
                required:true
            }


        },
        messages:{
            cname: {
                minlength: "At least 2 chars",
                required: "At least 2 chars"
            },
            ccomment: {
                required: "You can think of something!"
            }

        }


    });

});