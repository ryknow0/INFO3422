<!DOCTYPE html>
<!-- Link to css -->
<link rel="styelsheet" href="styel.css">
<!-- GLYPHY icon set-->
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.3/css/bootstrap.min.css" integrity="sha384-Zug+QiDoJOrZ5t4lssLdxGhVrurbmBWopoEl+M6BdEfwnCJZtKxi1KgxUyJq13dy" crossorigin="anonymous">
<!-- Bootstrap CDN -->
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
<script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
<!-- delet fixed top -->
<nav class="navbar navbar-expand-sm bg-dark navbar-dark fixed-top">
<!-- Brand/logo -->
<a class="navbar-brand" href="index.php">DMM Computer History Museum</a>
<!-- Links -->
<ul class="navbar-nav">
<li class="nav-item">
<a class="nav-link" href="museum.php">Museum Photos</a>
</li>
<li class="nav-item">
<a class="nav-link" href="order.php">Order Photos</a>
</li>
</ul>
<ul class="navbar-nav ml-auto">
<li class="nav-item dropdown">
<a href="#" class="nav-link dropdown-toggle" data-toggle="dropdown">
<span class="fa fa-user"></span> Sign In
</a>
<div class="dropdown-menu dropdown-menu-right form-login stop-propagation" role="menu">
<div id="login-error">Incorrect username or password!</div>
<div class="form-group">
<label for="username"> <span class="fa fa-user"></span> Username</label>
<input type="text" class="form-control" id="username" name="username" placeholder="Enter username" />
</div>
<div class="form-group">
<label for="password"><span class="fa fa-lock"></span> Password</label>
<input type="password" class="form-control" id="thepassword" name="thepassword" placeholder="Password" />
<input type="checkbox" /> Stay logged in?
</div>
<button id="submitbutton" name="submitbutton" type="button" class="btn btn-success btn-block">
<span class="fa fa-ok"></span>Submit</button>
</div>
</li>
<li class="nav-item">
<a href="#" class="nav-link">
<span class="fa fa-plus-sign"></span> Register
</a>
</li>
</ul>
</nav>
