<?php
	require_once 'session.php';
	require_once 'common.php';
	$account = trim($_POST['username']);//$_SERVER['DOCUMENT_ROOT']
	$id=file_get_contents('http://localhost/personalPro/public/getId?account='.$account);
	//$id=file_get_contents('./getId?account='.$account);
	if(isset($_COOKIE['cookie_city'])){
		set_city($_COOKIE['cookie_city']);
	}
	set_user($id,$account);
	//echo current_account().current_userid();
	redirect_to('./../');
?>