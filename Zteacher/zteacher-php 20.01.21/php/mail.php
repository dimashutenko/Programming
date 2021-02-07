<?php
    // $host='localhost';
    // $user='root';
    // $password='';
    // $db='mydb'
    // $con=mysqli_connect($host,$user,$password,$db);
    // if($con)
    //     echo "successful connection"

    // $mysqli->query ("SET NAMES 'utf8'");

    // $success = $mysqli->query ("INSERT INTO `zteacher_test_table` (`name`,`email`) VALUES ('test_name','test_email')");

    // echo $success;

    // $mysqli->close ();

    $user_name = $_POST['user_name'];
    $products_arr = $_POST['products-select'];
    $products_str="";
    $user_email = $_POST['user_email'];
    $user_phone = $_POST['user_phone'];
    $user_telegram = $_POST['user_telegram'];
    $user_viber = $_POST['user_viber'];
    $user_whatsapp = $_POST['user_whatsapp'];

    // echo "name: ".$name.", email: ".$email;
    foreach ($products_arr as $key => $product) {
        $products_str .= $product;
        $products_str .= "  |  ";
    }
    // echo $products_str;





    // Import PHPMailer classes into the global namespace
    // These must be at the top of your script, not inside a function
    use PHPMailer\PHPMailer\PHPMailer;
    use PHPMailer\PHPMailer\SMTP;
    use PHPMailer\PHPMailer\Exception;

    // Load Composer's autoloader
    require 'vendor/autoload.php';

    // Instantiation and passing `true` enables exceptions
    $mail = new PHPMailer(true);

    try {
        //Server settings
        $mail->SMTPDebug = SMTP::DEBUG_SERVER;      // Enable verbose debug output
        $mail->isSMTP();                            // Send using SMTP
        $mail->Host       = 'smtp.gmail.com';     // Set the SMTP server to send through
        $mail->SMTPAuth   = true;                   // Enable SMTP authentication
        $mail->Username   = 'zteacher.developer@gmail.com';     // SMTP username
        $mail->Password   = 'Qwerty_123+D';               // SMTP password
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;         // Enable TLS encryption; `PHPMailer::ENCRYPTION_SMTPS` encouraged
        $mail->Port       = 587;                                    // TCP port to connect to, use 465 for `PHPMailer::ENCRYPTION_SMTPS` above

        //Recipients
        $mail->setFrom('zteacher.developer@gmail.com', 'Zteacher.com.ua');
        $mail->addAddress('dima.shutenko.official@gmail.com', '');     // Add a recipient



        $body = '<h3>Имя: '.$user_name.'</h3>';
        if($user_email)
            $body .= '<h3>Email: '.$user_email.'</h3>';
        if($user_phone)
            $body .= '<h3>Телефон: '.$user_phone.'</h3>';
        if($user_telegram)
            $body .= '<h3>Telegram: '.$user_telegram.'</h3>';
        if($user_viber)
            $body .= '<h3>Viber: '.$user_viber.'</h3>';
        if($user_whatsapp)
            $body .= '<h3>Whatsapp: '.$user_whatsapp.'</h3>';
        if(isset($_POST['user_write']) && $_POST['user_write'] == 'Yes'){
            $body .= '<p>Лучше писать нежели звонить</p>';
        }
        if($products_str)
            $body .= '<p><strong>Заинтерисован в: </strong>'.$products_str.'</p>';
        


        // Content
        $mail->isHTML(true);                                  // Set email format to HTML
        $mail->Subject = "New form entry on zteacher.com.ua";
        $mail->Body    = $body;
        $mail->AltBody = 'что-то пошло не так';

        $mail->send();
        echo 'Message has been sent';

    } catch (Exception $e) {
        echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
    }

    if(!$mail->send()) {
        return false;
    } else {
        return true;
    }

?>