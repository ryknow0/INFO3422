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
        <div class="jumbotron">
            <h1>Computer History Museum</h1>
            <p> Welcome to the computer history museum that chronicles the role of historic companies such as Bolt, Baranick, and Neuman (BBN)
            and Universities such as MIT and Boston University in the development of computer technology.
             </p>
        </div>
    </div>
</body>
</html>