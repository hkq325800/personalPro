<?php
	session_start();
	

 	function is_login(){
		return isset($_SESSION['account'])&&isset($_SESSION['userid']); 
	}

	function logout(){
		set_user(null,null);	
	}

	function current_account(){
		if (is_login()) {
			return ($_SESSION['account']);
		}
	}

	function current_userid(){
		if (is_login()) {
			return ($_SESSION['userid']);
		}
	}

	function current_city(){
		if(isset($_SESSION['city'])){
			return ($_SESSION['city']);
		}else{
			return '0';
		}
	}

	function set_city($city){
		$_SESSION['city']=$city;
	}

	function set_user($userid,$account){
		$_SESSION['userid']=$userid;
		$_SESSION['account']=$account;
	}

	//require_once '../inc/db.php';
	//require_once '../inc/common.php';
	//require_once $_SERVER['DOCUMENT_ROOT'] . '/course/inc/db.php' ;
	//require_once $_SERVER['DOCUMENT_ROOT'] . '/course/inc/common.php' ;
	/*
	function has_notice(){
		return isset($_SESSION['notice']); 
	}

	function get_notice(){
		return $_SESSION['notice']; 
	}

	function set_notice($notice){
		$_SESSION['notice'] = $notice;
	}

	function clean_notice(){
		unset($_SESSION['notice']); 
	}*/
	/*function login($name,$pwd,$remember_me=false){		
		$user = load_user($name);
		if( $user && encrypt_password($pwd) == $user->user_password ){
			$_SESSION['user'] =  $user->user_name;
			if($remember_me){
				$expire_time =  7*24*3600*100 ;
				session_set_cookie_params($expireTime);
			}
			set_notice("欢迎您：{$name} 来到本站!");
			return $user;			
		}else{
			set_notice("用户名或密码错误");
			return false;
		}
	}	 */ 
	/*
	define("saltkey", 'nigoule');
	function encrypt_password($pass){
		md5( $pass.saltkey,false );
	}*/

	/*function load_user($id_or_name){//返回查询结果数组
		
		$where = "user_name = :name";

		global $db;
		$sql = "select * from users where " . $where  ;
		$query = $db->prepare($sql);
		$query->bindParam(':name',$id_or_name);
		$query->execute();
		$user = $query->fetchObject();
		return $user;		
	}*/

	function authenticate_user(){
		if(!is_login()){
			redirect_to('/sessions/new.php');
		}

	}



?>