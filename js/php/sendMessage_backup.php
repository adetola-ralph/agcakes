<?php

$jsonData = $_GET['jsonData'];

//print_r($jsonData);

$jsonArray = json_decode($jsonData, true);

//print_r($jsonArray);

$to = "abundantgrace@agcakes.com.ng";
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