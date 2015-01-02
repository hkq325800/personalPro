	
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
		var temp;
		if(parseInt(temp1[0])>parseInt(temp2[0])){
			temp=array[1]+"~"+array[0];
		}else{
			temp=json.forecast.temp1;
		}
		$$(insert_id).innerHTML+="<a class = 'login-btn-grey' id = 'toSetCity' href = '#' onclick='showSetCityPanel();'>"+json.forecast.city+"</a>";
		$$(insert_id).innerHTML+=" 今日天气："+json.today.weatherStart;
		if(json.today.weatherStart!=json.today.weatherEnd){
			$$(insert_id).innerHTML+="转"+json.today.weatherEnd;
		}
		$$(insert_id).innerHTML+=" 气温："+json.today.tempMin+"℃~";
		$$(insert_id).innerHTML+=json.today.tempMax+"℃";
		$$(insert_id).innerHTML+=" 明日天气： "+json.forecast.weather1;
		$$(insert_id).innerHTML+=" 气温："+temp;
		$$(insert_id).innerHTML+=" 当前："+json.realtime.temp+"℃";
		$$(insert_id).innerHTML+=" pm2.5："+json.aqi.pm25;
	}
	function biliiframe(flag){
		if(flag){
			$$('bili_iframe').innerHTML="<div class=wrapper><Iframe class=iframe src='http://www.bilibili.com/' scrolling=no frameborder=0 seamless></Iframe></div>";
		}
		else return;
	}