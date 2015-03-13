	
	window.onload = function(){
		getcustom();
	    $$("toLogIn").onclick = function(){
	        showLoginPanel();
	    }
	    $$("toSignUp").onclick = function(){
	        showSignUpPanel();
	    }
	    $$("toCustom").onclick = function(){
	    	showCustomPanel();
	    }
	}
	window.onresize = function(){
		if (browser.versions.mobile == true || browser.versions.ios == true || browser.versions.android == true){

		}
		else{
		   location.reload();
	    }
	}
	function weibotop10(flag){
		if(flag){
			var url="./getWeibotop10";
			var xmlhttp=createXMLHttp();
			xmlhttp.open("GET",url,true);
			xmlhttp.send();
			xmlhttp.onreadystatechange=function(){
				//alert(xmlhttp.readyState+"\n"+xmlhttp.status+"\n"+xmlhttp.responseText);
				if (xmlhttp.readyState==4 && xmlhttp.status==200)
				{
					var weibotop10=xmlhttp.responseText;
					json2html_weibotop10(weibotop10);
				}
			}
		}
		else return;
	}
	function json2html_weibotop10(json){
		$$('top_tag').innerHTML+="新浪实时热搜榜";
		json=eval("("+json+")");
		for(var i=1;i<11;i++){
			$$('top'+i.toString()).innerHTML="<a href='"+json.href[i]+"' target=_blank style='padding:0px'>"+i+"."+json.key[i]+"</a>";
			//$$('top'+i.toString()).innerHTML=;
		}
	}
	function weather(flag,city){
		if(flag){
			if(thiscity!="0"){city=thiscity;}
			var url="./city2weather?cityname="+city;
			var xmlhttp=createXMLHttp();
			xmlhttp.open("GET",url,true);
			xmlhttp.send();
			xmlhttp.onreadystatechange=function(){
				if (xmlhttp.readyState==4 && xmlhttp.status==200)
				{
					var weather=xmlhttp.responseText;
					json2html_weather(weather,'weather');
				}
				//alert(xmlhttp.readyState+"\n"+xmlhttp.status+"\n"+xmlhttp.responseText);
			}
			//alert(xmlhttp);
		}
		else return;
	}
	function json2html_weather(json,insert_id){
		$$(insert_id).innerHTML='';
		json=eval("("+json+")");
		var array=json.forecast.temp1.split("~");
		var temp1=array[0].split("℃");
		var temp2=array[1].split("℃");
		var tempToday,tempTomorrow;
		if(parseInt(temp1[0])>parseInt(temp2[0])){
			tempToday=array[1]+"~"+array[0];
		}else{
			tempToday=json.forecast.temp1;
		}
		array=json.forecast.temp2.split("~");
		temp1=array[0].split("℃");temp2=array[1].split("℃");
		if(parseInt(temp1[0])>parseInt(temp2[0])){
			tempTomorrow=array[1]+"~"+array[0];
		}else{
			tempTomorrow=json.forecast.temp2;
		}
		$$(insert_id).innerHTML+="<a class = 'login-btn-grey' id = 'toSetCity' href = '#' onclick='showSetCityPanel();'>"+json.forecast.city+"</a>";
		$$(insert_id).innerHTML+="| 当前："+json.realtime.temp+"℃ |";
		$$(insert_id).innerHTML+=" 空气质量(AQI)："+json.aqi.aqi;
		$$(insert_id).innerHTML+=" | 今日天气："+json.forecast.weather1+" ";
		$$(insert_id).innerHTML+=tempToday;
		$$(insert_id).innerHTML+=" | 明日天气："+json.forecast.weather2+" ";
		$$(insert_id).innerHTML+=tempTomorrow;
	}
	function biliiframe(flag){
		if(flag){
			$$('bili_iframe').innerHTML="<div class=wrapper><Iframe class=iframe src='http://www.bilibili.com/' scrolling=no frameborder=0 seamless></Iframe></div>";
		}
		else return;
	}
	//选择上传文件是调用的函数
/*function readAsDataURL(f){
	//var result=$$('result');
	//var file=$$('Files').files[0];
	//检测浏览器是否支持FileReader对象
	if(typeof FileReader == 'undefined'){
		alert("检测到您的浏览器不支持FIleReader对象！");
	}
	if(!/image\/\w+/.test(file.type)){
		alert('请确保文件为图像类型');
		return false;
	}
	var strHTML="";
	for(var intI=0;intI<f.length;intI++){
		var tmpFile=f[intI];
		var reader=new FileReader();
		reader.readAsDataURL(tmpFile);
		reader.onload=function(e){
			var result=$$('result');
			result.innerHTML='<img src="'+this.result+'" alt=""/>'
		}
	}
}*/