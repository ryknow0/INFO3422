//or $(document).ready(function() {});
//all validation rules are added as arguments as an argument inside validate
$(function() {
    //calls validate and runs it on everything with the id tag register
    var validator = $("#register").validate({
        //{} is the object passes as an argument for the validate function
        //commas appear between atributes
        //everythign passed as JSON
        
        rules: {
            firstname: {
                minlength:2, 
                required:true
            },
            lastname: {
                minlength:2, 
                required:true
            },
            email: {
                email:true, 
                required:true
            },
            username1: {
                minlength:3, 
                required:true
            },
            password1: { 
                minlength:5, 
                required:true
            },
            password2: {
                minlength:5, 
                required:true, 
                equalTo:"#password1"
            }
        },
        messages: {
            firstname: {
                minlength: "Name must be at least 2 characters", 
                required: "Please enter your first name"
            },
            lastname: {
                minlength: "Name must be at least 2 characters", 
                required: "Please enter your last name"
            },
            email: {
                email: "Please enter a valid email address",
                required: "Please enter an email address"
            },
            username1: {
                minlength: "Username must be at least 3 characters",
                required: "Please enter a username"
            },
            password1: {
                minlength: "Your password must be at lease 5 characters",
                required: "Please enter a password"
            },
            password2: {
                minlength: "Your password must be at least 5 characters",
                required: "Please enter a password",
                equalTo: "Passwords do not match"
            }
        },
        highlight: function(element){
            $(element).closest('.form-group').addClass('has-error');
        },
        unhighligh: function(element){
            $(element).closest('.form-group').removeClass('has-error');
        },
        submitHandler: function(form){
            form.submit();
        }
        
    });


});//