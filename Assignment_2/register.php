<!DOCTYPE html>
<html lang="en">

<head>
    <title>Registration Page </title>
    <!-- copy php code from assignment doc in google drive edit line 10 and add your own initials in this is not a complete html doc need to add the pointers for bootstrap, popper and jquery add at top of page

- links the style sheet and adds references to jqurery, bootstrap and popper
- then add a link to our local style sheet (use the link:+tab shortcut)

- download bootstrap bygoing to getbootstrap.com
- you can use the CDN links directly from the bootstrap page to include in your code(part of the step above)

- copy of the css code for styles.css
-->

    <link rel="stylesheet" href="styles.css">
    <!-- meta tags for a bootstrap page-->
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
</head>

<body>
    <?php include("navigation.php"); ?>
    <div class="container">
        <h1 align="center">Registration</h1>
        <div class="card col-sm-12">
            <form  name="register" id="register"><!--selecting this form via jQuerty -->
                <!--divs will hold the rows for the form -->
                <div class="row form-group">
                    <!-- Set row to take up 4 columns scaled for smaller device-->
                    <!-- for="" links the label to the textbox-->
                    <label class="col-sm-4" for="firstname">First Name:</label>
                    <div>
                        <!-- firstname textbox for user input-->
                        <input type="text" id="firstname" name="firstname" placeholder="First Name" class="form-control input-md">
                    </div> 
                </div>
                <div class="row form-group">
                    <label class="col-sm-4" for="lastname"> Last Name:</label>
                    <div>
                        <input type="text" name="lastname" id="lastname" placeholder="Last Name" class="form-control input-md">
                    </div>
                </div>
                <div class="row form-group">
                    <label class="col-sm-4" for="email"><span class="fa fa-envelope"></span> Email:</label><!-- fa fa-envelope links the font awesome icons-->
                    <div>
                        <input type="text" name="email" id="email" placeholder="Email" class="form-control input-md">
                    </div> 
                </div>
                <div class="row form-group"> 
                    <label class="col-sm-4" for="username1"><span class="fa fa-user"></span> Username:</label>
                    <div>
                        <input type="text" name="username1" id="username1" placeholder="Username" class="form-control input-md">
                    </div>    
                </div>
                <div class="row form-group">
                    <label class="col-sm-4" for="password"><span class="fa fa-lock"></span> Password:</label>
                    <div>
                        <input type="text" name="password1" id="password1" placeholder="Enter Password" class="form-control input-md">
                    </div> 
                </div>
                <div class="row form-group"> 
                <label class="col-sm-4" for="password"><span class="fa fa-lock"></span> Confirm Password:</label>
                    <div>
                        <input type="text" name="password2" id="password2" placeholder="Confirm Password" class="form-control input-md">
                    </div>
                </div> 
                <div class="row form-group"> 
                </div>
                <!-- Submit and clear buttons -->
                <div class="row form-group"> 
                <label class="col-sm-4" for="submit"></label>
                    <div class="col-sm-8">
                        <button class="btn btn-success" id="registerbutton" name="registerbutton">Register</button>
                        <button class="btn btn-danger" id="reset" name="reset">Reset</button>
                    </div>
            </form>
        </div>
    </div>
    <script src = "http://ajax.aspnetcdn.com/ajax/jquery.validate/1.17.0/jquery.validate.min.js"> </script>
    <script src="js/app/app-register.js"> </script>
</body>

</html>