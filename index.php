<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
    
    <link rel="stylesheet" href="style.css">
</head>
<body>

    <div class="container">
        <div class="header">
            <h2>Registration Form</h2>
        </div>
        <form action="insertdata.php" id="form" class="form" method="POST">
            <div class="form-control">
                <label for="">First name<sup class="mystar">*</sup></label>
                <input type="text" name="fname" id="fname" placeholder="Enter your first name">
                <i class="fa fa-check-circle"></i>
                <i  class="fa fa-exclamation-circle"></i>
                <small class="error">Error </small>     
            </div>
            <div class="form-control">
                <label for="">Last name</label>
                <input type="text" name="lname" id="lname" placeholder="Enter your last name">
                <i class="fa fa-check-circle"></i>
                <i  class="fa fa-exclamation-circle"></i>
                <small class="error">Error </small>     
            </div>
            <div class="form-control">
                <label for="">Email<sup class="mystar">*</sup></label>
                <input type="email" name="email" id="email" placeholder="Enter your Email id">
                <i class="fa fa-check-circle"></i>
                <i  class="fa fa-exclamation-circle"></i>
                <small class="error">Error </small>     
            </div>
            <div class="form-control">
                <label for="">Phone<sup class="mystar">*</sup></label>
                <input type="number" name="mobile" id="phone" placeholder="Enter your 10 digit Phone number">
                <i class="fa fa-check-circle"></i>
                <i  class="fa fa-exclamation-circle"></i>
                <small class="error">Error </small>     
            </div>
            <div class="form-control">
                <label for="">Date of birth<sup class="mystar">*</sup></label>
                <input type="date" name="dob" id="dob" placeholder="Enter your date of birth">
                <i class="fa fa-check-circle"></i>
                <i  class="fa fa-exclamation-circle"></i>
                <small class="error">Error </small>     
            </div>
            <div class="form-control">
                <label for="">Password<sup class="mystar">*</sup></label>
                <input type="password" name="pass" id="pass" placeholder="Enter your password ">
                <i class="fa fa-check-circle"></i>
                <i  class="fa fa-exclamation-circle"></i>
                <small class="error">Error </small>     
            </div>
            <input type="submit" name="" value="Submit" class="btn" id="">
        </form>
    </div>
</body>
<script src="script.js"></script>
<script src="https://unpkg.com/sweetalert/dist/sweetalert.min.js"></script>
</html>