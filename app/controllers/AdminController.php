<?php

class AdminController extends BaseController {

	/*example*/
	/*public function show()
	{
		//return 'hello';
		//return Input::all();
		return JSON_encode(User::find(1), JSON_UNESCAPED_UNICODE);
	}
	public function haha(){
		return Tool::show();
	}*/
	/*public function ip2position(){
		$curl = curl_init('http://int.dpool.sina.com.cn/iplookup/iplookup.php?ip='.$ip); 
		curl_setopt($curl, CURLOPT_FAILONERROR, true); 
		curl_setopt($curl, CURLOPT_FOLLOWLOCATION, true); 
		curl_setopt($curl, CURLOPT_RETURNTRANSFER, true); 
		curl_setopt($curl, CURLOPT_SSL_VERIFYHOST, false); //
		curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, false); //
		$result = curl_exec($curl); 
        curl_close($curl);  
  		//var_dump( compact($result));
  		$response = array('status'=>$result);
		$response = json_encode($response);
		echo ($response);
  		//var_dump($result);
	}*/
	public function demo1(){
		return Input::get('tmp1');
	}
	public function demo2($tmp2){
		return ($tmp2);
	}
	public function showAll()
	{
		return JSON_encode(User::all(), JSON_UNESCAPED_UNICODE);
	}
	public function showWhere()
	{
		return JSON_encode(User::where('account','=','hkq325800')->take(10)->get(), JSON_UNESCAPED_UNICODE);
	}
	public function index(){
		return View::make('demo');
	}
	//localhost/demo/public/logIn?username=hkq325800&password=hkq93214
	public function logIn(){
		if(User::where('account','=',Input::get('username'))->where('password','=',Input::get('password'))->count()==1){//
			//设置session
			//Session::put('username', Input::get('username'));
			echo 'ok';
		}
		else if(User::where('account','=',Input::get('username'))->count()==0){
			echo '用户名不存在';
		}
		else{
			echo '密码不正确';
		}
	}
	public function signUp(){
		$user = new User;
		$user->account=Input::get('username');
		$user->password=Input::get('password');
		$user->save();
		$custom = new Custom;
		$custom->user_id=User::where('account','=',Input::get('username'))->lists('id')[0];
		$custom->isBiliframe=1;
		$custom->isWeibotop10=1;
		$custom->isWeather=1;
		$custom->save();
		//Session::put('username', Input::get('username'));
		echo 'ok';
	}
	public function getInfo(){
		$info="no";
		$flag=false;
		if(Input::get('username')){
			if(User::where('account','=',Input::get('username'))->count()==0){
				$flag=true;
			}
			else{
				$flag=false;
				$info="该用户已存在";
			}
		}
		if(Input::get('password')){
			$flag=true;
		}
		if(Input::get('captcha')){
			if(Input::get('captcha')==Session::get('captcha'))
				$flag=true;
			else{
				$flag=false;
				$info="验证码错误";
			}
		}
		if($flag)
			$info='ok';
		echo $info;
	}
	public function city2weather(){
		$cityid=Cityid::where('cityname','like','%'.Input::get('cityname'))->lists('cityid')[0];
		$result=file_get_contents('http://weatherapi.market.xiaomi.com/wtr-v2/weather?cityId='.$cityid);
		echo $result;
	}
	/*public function ip2position(){
		$ip=Input::get('ip');
		$result=file_get_contents('http://int.dpool.sina.com.cn/iplookup/iplookup.php?ip='.$ip);
        $arr=array();
        $arr=explode("	", $result);
		$arr[5]=iconv('GBK','UTF-8',$arr[5]);
  		echo $arr[5];
	}*/
	public function getWeibotop10(){
		//echo vget("http://www.bilibili.com/")
		$html=file_get_contents('http://s.weibo.com/top/summary');//拉取初始文件
		$inner='http://s.weibo.com';
		$result=substr($html,stripos($html,'<div class="search_newrec_box clearfix">'),stripos($html,'<!-- /pl_todayhot -->')-stripos($html,'<div class="search_newrec_box clearfix">')+strlen('<!-- /pl_todayhot -->'));//截取正确的部分
		//截取正确部分中需要的字节
		$result=str_replace('<span class="newpink">new!</span>','',$result);//清除new！
		$result."</div>";$result=str_replace(' ','',$result);
		//echo $result;
		$arrtmp=explode('<a',$result);
		$arrhref=array();
		$arrsearched=array();
		for($i=1;$i<11;$i++){
			$arrhref[$i]=$inner.substr($arrtmp[$i],stripos($arrtmp[$i],'"href=')+6,stripos($arrtmp[$i],'"searchcard')-6);
			$arrsearched[$i]=substr($arrtmp[$i],stripos($arrtmp[$i],'nologin">')+9,stripos($arrtmp[$i],'</a>')-stripos($arrtmp[$i],'nologin">')-9);
		}
		$arrres=array('href'=>$arrhref,'key'=>$arrsearched);
		$response = json_encode($arrres);
		echo $response;
	}
	public function getId(){
		$account=Input::get('account');
		$id=User::where('account','=',$account)->lists('id')[0];
		echo $id;
	}
	public function getCustom(){
		$id=Input::get('id');
		if($id!=0){
			$isBiliframe=Custom::where('user_id','=',$id)->lists('isBiliframe')[0];
			$isWeibotop10=Custom::where('user_id','=',$id)->lists('isWeibotop10')[0];
			$isWeather=Custom::where('user_id','=',$id)->lists('isWeather')[0];
		}
		else{
			$isBiliframe=1;
			$isWeibotop10=1;
			$isWeather=1;
		}
		$arr=array('isBiliframe'=>$isBiliframe,'isWeibotop10'=>$isWeibotop10,'isWeather'=>$isWeather);
		$response = json_encode($arr);
		echo $response;
	}
	public function saveCustom(){
		$id=Input::get('id');
		$isBiliframe=Input::get('a')?$isBiliframe=1:$isBiliframe=0;
		$isWeibotop10=Input::get('b')?$isWeibotop10=1:$isWeibotop10=0;
		$isWeather=Input::get('c')?$isWeather=1:$isWeather=0;
		$custom=Custom::where('user_id','=',$id)->find($id);
		$custom->isBiliframe=$isBiliframe;
		$custom->isWeibotop10=$isWeibotop10;
		$custom->isWeather=$isWeather;
		$custom->save();
		echo 'ok';
	}
	public function getCity(){
		$province=Input::get('province');
		$city=Cityid::where('cityname','like',$province.'%')->where('cityid','like','_______01')->lists('cityname');
		if($city==null){
			$city=Cityid::where('cityname','like',$province.'%')->lists('cityname');
		}
		foreach ($city as $key => $value) {
			if($value!=$province){
				$city[$key]=str_replace($province,'',$value);
			}
		}
		$arr=array('sum'=>$key+1,'city'=>$city);
		$response = json_encode($arr);
		echo $response;
	}
	public function getCounty(){
		$province=Input::get('province');
		$city=Input::get('city');
		$union=$province.$city;
		$county=Cityid::where('cityname','like',$union.'%')->lists('cityname');
		foreach ($county as $key => $value) {
			if($value!=$union){
				$county[$key]=str_replace($union,'',$value);
			}
			else{
				$county[$key]=$city;
			}
		}
		$arr=array('sum'=>$key+1,'county'=>$county);
		$response = json_encode($arr);
		echo $response;
	}
	public function getCaptcha(){
		//产生验证码图片
		$image = imageCreateTrueColor(100,30);//创建100*30像素的图片
		$bgColor = imagecolorallocate($image,250,250,250); //获取浅灰色的像素值
		imagefill($image,0,0,$bgColor);

		//绘制验证码
		$captchaContent = "";
		for($i = 0; $i < 4 ; $i++)
		{
		        $data = "abcdefghijkmnpqrstuvwxyzABCDEFGHIJKLMNPQRSTUVWXYZ23456789";
		        $fontSize = 13;
		        $fontContent = substr($data,rand(0,strlen($data))-1,1);
		        $captchaContent .= $fontContent;
		        $fontColor = imageColorAllocate($image,rand(0,160),rand(0,160),rand(0,160));
		        $x = rand(4,12) + $i*25;
		        $y = rand(6,10);
		        imagestring($image,$fontSize,$x,$y,$fontContent,$fontColor);
		}

		Session::put('captcha', strtolower($captchaContent)); 

		//绘制干扰点

		for($i = 0 ; $i <300 ; $i++)
		{
		    $pixelColor = imagecolorallocate($image,rand(20,190),rand(20,190),rand(20,190));
		        imagesetpixel($image,rand(1,199),rand(1,29),$pixelColor);
		}

		//绘制干扰线

		for($i = 0; $i < 3 ; $i++)
		{
		        $lineColor = imagecolorallocate($image,rand(80,220),rand(80,220),rand(80,220));
		        imageline($image,rand(1,199),rand(1,29),rand(1,199),rand(1,29),$lineColor);
		}
		//echo strtolower($captchaContent );
		header("content-type:image/png");
		imagepng($image);
		imagedestroy($image);
		}
	}
