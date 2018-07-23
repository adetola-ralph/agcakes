<?php

require_once("PHPMailer/PHPMailerAutoload.php");

$jsonData = $_GET['jsonData'];
//print_r($jsonData);
$jsonArray = json_decode($jsonData, true);
//print_r($jsonArray);

//PHPMailer Object
$mail = new PHPMailer;

//From email address and name
$mail->From = $jsonArray['1'];
$mail->FromName = $jsonArray['0'];

//To address and name
$mail->addAddress("abundantgrace@agcakes.com.ng", "AGCakes Enquiries");

$mail->Subject = $jsonArray['2'];
$mail->Body = $jsonArray['3'];


if(!$mail->send()) 
{
    echo "Mailer Error: " . $mail->ErrorInfo;
} 
else 
{
    echo "Message has been sent successfully";
}

/*$to = "abundantgrace@agcakes.com.ng";
$subject = $jsonArray['2'];
$message = $jsonArray['3']." \r\n\r\n".$jsonArray['0'];
$headers = "From: ".$jsonArray['1'] ;
echo ($to." ".$subject." ".$message." ".$headers);
mail($to,$subject,$message,$headers);

/*if($result==false)
{
	return "message didn't send";
}
else
{
	return "Message was succesful";
}*/



?>