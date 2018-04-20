<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Document</title>
</head>
<body>
<?php include("navigation.php"); ?>
<div class="container">
<h1 align="center">Registration</h1>
<div class="card col-sm-12">
    <form name="register" id="register">
        <div class="row form-group">
            <label class="col-sm-4" for="firstname">First Name</label>
            <div class="col-sm-6">
                <input type="text" id="firstname" name="firstname" placeholder="First Name" class="form-control input-md">
            </div>
        </div>
        <div class="row form-group">
            <label class="col-sm-4" for="lastname">Last Name</label>
            <div class="col-sm-6">
                <input type="text" id="lastname" name="lastname" placeholder="Last Name" class="form-control input-md">
            </div>
        </div>
        <div class="row form-group">
            <label class="col-sm-4" for="usernamer"><span class="fa fa-user"></span> Username</label>
            <div class="col-sm-6">
                <input type="text" id="usernamer" name="usernamer" placeholder="Username" class="form-control input-md">
            </div>
        </div>
        <div class="row form-group">
            <label class="col-sm-4" for="Email"><span class="fa fa-envelope"></span> Email</label>
            <div class="col-sm-6">
                <input type="text" id="email" name="email" placeholder="Email" class="form-control input-md">
            </div>
        </div>
        <div class="row form-group">
            <label class="col-sm-4" for="password1"><span class="fa fa-lock"></span> Password</label>
            <div class="col-sm-6">
                <input type="text" id="password1" name="password1" placeholder="Password" class="form-control input-md">
            </div>
        </div>
        <div class="row form-group">
            <label class="col-sm-4" for="password2"><span class="fa fa-lock"></span> Confirm password</label>
            <div class="col-sm-6">
                <input type="text" id="password2" name="password2" placeholder="Retype password" class="form-control input-md">
            </div>
        </div>                               
        <div class="row form-group">
            <label class="col-sm-4" for="submit"></label>
            <div class="col-sm-8">
                <button id="registerbutton" name="registerbutton" class="btn btn-success">Register</button>
                <button id="reset" name="reset" class="btn btn-danger">Reset</button>
            </div>
        </div>          
    </form>
</div>
</div>
<script src = "http://ajax.aspnetcdn.com/ajax/jquery.validate/1.17.0/jquery.validate.min.js" > </script>
<script src="js/app/app-register.js"></script>

</body>
</html>





