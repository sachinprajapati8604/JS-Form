   
<?php include 'connect.php'; 

    $fname=$_POST['fname'];
    $lname=$_POST['lname'];
    $email=$_POST['email'];
    $mobile=$_POST['mobile'];
    $dob=$_POST['dob'];
    $pass=$_POST['pass'];

    $sql="INSERT INTO `js form`(`user_fname`, `user_lname`, `user_email`, `user_mobile`, `user_dob`, `user_pass`, `user_timestamp`) VALUES ('$fname','$lname','$email','$mobile','$dob','$pass',current_timestamp())";

    $data=mysqli_query($conn,$sql) or die("<b>Error:</b> Problem on  Insert<br/>" . mysqli_error($conn));

    if($data){
        echo "Details has been recorded";
    }
    else{
        echo "something went wrong";
    }
?>