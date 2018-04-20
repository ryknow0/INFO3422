<!DOCTYPE html>
<html lang="en">
    <head>
        <title>Main Page </title>
<!-- copy php code from assignment doc in google drive edit line 10 and add your own initials in this is not a complete html doc need to add the pointers for bootstrap, popper and jquery add at top of page

- links the style sheet and adds references to jqurery, bootstrap and popper
- then add a link to our local style sheet (use the link:+tab shortcut)

- download bootstrap bygoing to getbootstrap.com
- you can use the CDN links directly from the bootstrap page to include in your code(part of the step above)

- copy of the css code for styles.css
-->

<link rel="stylesheet" href="style.css">
<!-- meta tags for a bootstrap page-->
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1">
</head>

<body>
    <?php include("navigation.php"); ?>
    <div class="container">
        <h1>Image Gallery</h1>
        <h1>Image Gallery</h1>
        <!-- Div to setup row copy to create 4 rows-->
        <!-- Row 1 -->
        <div class="row">
            <div class="col-md-4"> 
                <a href="computerphotos\1970sComputer.jpg">
                <img class="thumbnail" src="computerphotos\1970sComputer.jpg" width="150" height="150" /></a></div>
            <div class="col-md-4">
                <a href="computerphotos\1972hp35.jpg">
                <img class="thumbnail" src="computerphotos\1972hp35.jpg" width="150" height="150" /></a>
            </div>
            <div class="col-md-4">
                <a href="computerphotos\1977Apple.jpg">
                <img class="thumbnail" src="computerphotos\1977Apple.jpg" width="150" height="150" /></a>
            </div>
        </div>
        <!-- Row 2 -->
        <div class="row">
            <div class="col-md-4"> 
                <a href="computerphotos\1979Atari.jpg">
                <img class="thumbnail" src="computerphotos\1979Atari.jpg" width="150" height="150" /></a></div>
            <div class="col-md-4">
                <a href="computerphotos\1982Commodore64.jpg">
                <img class="thumbnail" src="computerphotos\1982Commodore64.jpg" width="150" height="150" /></a>
            </div>
            <div class="col-md-4">
                <a href="computerphotos\ibmpc.jpg">
                <img class="thumbnail" src="computerphotos\ibmpc.jpg" width="150" height="150" /></a>
            </div>
        </div>
        <!-- Row 3 -->
        <div class="row">
            <div class="col-md-4"> 
                <a href="computerphotos\1991Linus.jpg">
                <img class="thumbnail" src="computerphotos\1991Linus.jpg" width="150" height="150" /></a></div>
            <div class="col-md-4">
                <a href="computerphotos\1993Mosaic.jpg">
                <img class="thumbnail" src="computerphotos\1993Mosaic.jpg" width="150" height="150" /></a>
            </div>
            <div class="col-md-4">
                <a href="computerphotos\1994Yahoo.jpg">
                <img class="thumbnail" src="computerphotos\1994Yahoo.jpg" width="150" height="150" /></a>
            </div>
        </div>
    </div>
</body>
</html>