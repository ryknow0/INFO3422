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
<!-- Start with the design for smaller screens-->
<!-- need to add the other form fields -->
<body>
    <?php include("navigation.php"); ?>
    <div class="container">
        <div class="h1">Order Computer History Photos</div>
            <!--Row 1 -->
            <div class="form-group col-sm-12">
                <div class="row">
                    <label class="control-label col-sm-3 required" for="item">Item Number </label>
                    <div class="col-sm-3">
                        <input type="text" class="form-control" id="item" placeholder="Enter item">
                    </div>
                    <label class="control-label col-sm-3 required" for="qty">Quantity</label>
                    <div class="col-sm-3">
                        <input type="text" class="form-control" id="qty" placeholder="Enter quantity">
                    </div>
                </div>             
            </div>
            <!--Row 2 -->
            <div class="form-group col-sm-12">
                <div class="row">
                    <label class="control-label col-sm-3 required" for="item">Item Number </label>
                    <div class="col-sm-3">
                        <input type="text" class="form-control" id="item" placeholder="Enter item">
                    </div>
                    <label class="control-label col-sm-3 required" for="qty">Quantity</label>
                    <div class="col-sm-3">
                        <input type="text" class="form-control" id="qty" placeholder="Enter quantity">
                    </div>
                </div>             
            </div>
            <!--Row 3 -->
            <div class="form-group col-sm-12">
                <div class="row">
                    <label class="control-label col-sm-3 required" for="item">Item Number </label>
                    <div class="col-sm-3">
                        <input type="text" class="form-control" id="item" placeholder="Enter item">
                    </div>
                    <label class="control-label col-sm-3 required" for="qty">Quantity</label>
                    <div class="col-sm-3">
                        <input type="text" class="form-control" id="qty" placeholder="Enter quantity">
                    </div>
                </div>             
            </div>
        <div class="row">
            <label class="control-label col-sm-9 required"></label>
            <div class="col-sm-3">
                <button class="btn-block btn-success">Submit</button>
            </div>
        </div>                                        
    </div>

</body>
</html>