<?php
	require_once 'session.php';
	require_once 'common.php';
	$province = trim($_POST['province']);
	$city = trim($_POST['city']);
	if(isset($_POST['county'])){
		$county = trim($_POST['county']);
		set_city($county);
	}
	else {
		$county='';
		set_city($city);
	}
	setcookie('cookie_city',current_city(), time()+3600);
	//echo ($cookie_city);
	//echo($HTTP_COOKIE_VARS['cookie_city']);
	//echo($_COOKIE['cookie_city']);

	redirect_to('./../');
?>