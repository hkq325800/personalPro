var browser = {
    versions: function () {
        var u = navigator.userAgent, app = navigator.appVersion;
        return {//移动终端浏览器版本信息
            trident: u.indexOf('Trident') > -1, //IE内核
            presto: u.indexOf('Presto') > -1, //opera内核
            webKit: u.indexOf('AppleWebKit') > -1, //苹果、谷歌内核
            gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') == -1, //火狐内核
            mobile: !!u.match(/AppleWebKit.*Mobile.*/) || !!u.match(/AppleWebKit/), //是否为移动终端
            ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios终端
            android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1, //android终端或者uc浏览器
            iPhone: u.indexOf('iPhone') > -1 || u.indexOf('Mac') > -1, //是否为iPhone或者QQHD浏览器
            iPad: u.indexOf('iPad') > -1, //是否iPad
            webApp: u.indexOf('Safari') == -1 //是否web应该程序，没有头部与底部
        };
    } (),
    language: (navigator.browserLanguage || navigator.language).toLowerCase()
}

var infoTrue = "<i class = 'icon-ok color-green'></i>";
var infoFalse = ["<i class = 'icon-remove color-red'><div class = 'warning-info-show'>","</div></i>"];
var verify = ["username","password","captcha"];
var isAllOk = [false,false,false];
var flagArr=[];var isBiliframe,isWeibotop10,isWeather;
function getcustom(){
    var xmlhttp = createXMLHttp();
    xmlhttp.open("GET","./getCustom?id="+userid,true);
    xmlhttp.send();
    xmlhttp.onreadystatechange=function(){
        if (xmlhttp.readyState==4 && xmlhttp.status==200){
            flagArr=judgecustom(xmlhttp.responseText);
            biliiframe(flagArr[0]);
            weibotop10(flagArr[1]);
            weather(flagArr[2],mycity);
        }
    }
}
function judgecustom(text){
    json=eval("("+text+")");
    var arr=[];
    var a=json.isBiliframe;
    var b=json.isWeibotop10;
    var c=json.isWeather;
    a==1?isBiliframe=true:isBiliframe=false;
    b==1?isWeibotop10=true:isWeibotop10=false;
    c==1?isWeather=true:isWeather=false;
    arr[0]=isBiliframe;
    arr[1]=isWeibotop10;
    arr[2]=isWeather;
    return arr;
}
function createXMLHttp(){
    var xmlhttp;
    if (window.XMLHttpRequest){// code for IE7+, Firefox, Chrome, Opera, Safari
       xmlhttp=new XMLHttpRequest();
    }
    else{// code for IE6, IE5
       xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
    }
    return xmlhttp;
}
//增加遮罩层
function addMask(){
    var oMask = document.createElement('div');
    oMask.id = "mask";
    var sHeight = document.documentElement.scrollHeight;
    var sWidth = document.documentElement.scrollWidth;
    oMask.style.width = sWidth + "px";
    oMask.style.height = sHeight*2 + "px";
    document.body.appendChild(oMask);
    return oMask;
}
function showLoginPanel(){
    var msk = addMask();
    var ologin = document.createElement('div');
    ologin.id = "login-panel-container";
    ologin.innerHTML =  "<form method = 'POST' action = './php/login.php' id = 'logIn' autocomplete='off' onkeydown='if(window.event.keyCode==13){ submitLogIn();}'><div class = 'login-panel-container' >"+
                "<input id = 'username' name = 'username' type='text' class='login-username' placeholder = 'UserName'/>"+
                "<input id = 'password' name = 'password' type='password' class='login-username' placeholder = 'Password'/>"+
                "<div id = 'warninginfo'class = 'warning-info'></div>"+
                "<a id = 'logInBtn' class = 'submit-btn' href = 'javascript:submitLogIn();'>Log In</a></div></form>";
    var lWidth = document.documentElement.scrollWidth;
    var lHeight = document.documentElement.scrollHeight;
    mleft = (lWidth - 400)/2 + "px";
    ologin.style.left = mleft;
    ologin.style.top = "100px";
    document.body.appendChild(ologin);
    mask.onclick = function(){
        document.body.removeChild(mask);
        document.body.removeChild(ologin);
    }
}
function showSignUpPanel(){
    var msk = addMask();
    var oSignUp = document.createElement('div');
    oSignUp.id = "login-panel-container";
    oSignUp.innerHTML =  "<form method = 'POST' id = 'signUp' action = './php/login.php' autocomplete='off' onkeydown='if(window.event.keyCode==13){ submitSignUp();}'><div class = 'login-panel-container'>"+
                "<input id = 'username' name = 'username' type='text' class='login-username' placeholder = 'UserName' "+
	    "onkeyup = 'getInfo(this,0)' onblur = 'getInfo(this,0)'/>"+
	    "<div class = 'warning-container' id = 'warning0'></div>"+
                "<input id = 'password' name = 'password' type='password' class='login-username' placeholder = 'Password'"+
	    "onkeyup = 'getInfo(this,1)' onblur = 'getInfo(this,1)'/>"+
	    "<div class = 'warning-container' id = 'warning1'></div>"+
	    "<input id = 'captcha' name = 'captcha' class = 'captcha' placeholder = 'Captcha'"+
	    "onkeyup = 'getInfo(this,2)' onblur = 'getInfo(this,2)'/>"+
	    "<img  class = 'capimg' src = './getCaptcha?r=rand()' onclick = 'changeCaptcha(this)'/>"+
	    "<div class = 'warning-container' id = 'warning2'></div>"+
                "<a id = 'signInBtn' class = 'submit-btn' href = 'javascript:submitSignUp();'>Sign Up</a></div></form>";
    var lWidth = document.documentElement.scrollWidth;
    var lHeight = document.documentElement.scrollHeight;
    mleft = (lWidth - 400)/2 + "px";
    oSignUp.style.left = mleft;
    oSignUp.style.top = "100px";
    document.body.appendChild(oSignUp);
    mask.onclick = function(){
        document.body.removeChild(mask);
        document.body.removeChild(oSignUp);            
    }
}
function showCustomPanel(){
    var msk = addMask();
    var oset = document.createElement('div');
    var check = ['checked','checked','checked'];
    if(!isBiliframe)check[0]='';
    if(!isWeibotop10)check[1]='';
    if(!isWeather)check[2]='';
    oset.id = "setting-panel-container";
    oset.innerHTML =  "<form action = '' id = 'Custom' autocomplete='off' onkeydown='if(window.event.keyCode==13){ saveCustom();}'><div class = 'login-panel-container'>"+
                "<input id = 'isBiliframe' name = 'isBiliframe' type='checkbox' class='' value = 'isBiliframe' "+check[0]+"/>新番放送表"+
                "<input id = 'isWeibotop10' name= 'isWeibotop10' type='checkbox' class='' value = 'isWeibotop10' "+check[1]+"/>微博热搜榜"+
                "<input id = 'isWeather' name = 'isWeather' type='checkbox' value = 'isWeather' "+check[2]+"/>天气预报"+
                "<a id = 'CustomBtn' class = 'submit-btn' href = 'javascript:saveCustom();'>Save</a></div></form>";
    var lWidth = document.documentElement.scrollWidth;
    var lHeight = document.documentElement.scrollHeight;
    mleft = (lWidth - 400)/2 + "px";
    oset.style.left = mleft;
    oset.style.top = "100px";
    document.body.appendChild(oset);
    mask.onclick = function(){
        document.body.removeChild(mask);
        document.body.removeChild(oset);
    }
}
function showSetCityPanel(){
	var msk = addMask();
    var oset = document.createElement('div');
    oset.id = "setting-panel-container";
    oset.innerHTML =  "<form method = 'POST' action = './php/setcity.php' id = 'SetCity' autocomplete='off' onkeydown='if(window.event.keyCode==13){ saveSetCity();}'><div class = 'login-panel-container'>"+
    			"选择城市："+
    			"<div class='cityselect'>"+
    			"<select id='province' name='province' onChange='getcity();'>"+
    			"<option>北京</option>"+
    			"<option>上海</option>"+
    			"<option>天津</option>"+
    			"<option>重庆</option>"+
    			"<option>黑龙江</option>"+
    			"<option>吉林</option>"+
    			"<option>辽宁</option>"+
    			"<option>内蒙古</option>"+
    			"<option>河北</option>"+
    			"<option>山西</option>"+
    			"<option>陕西</option>"+
    			"<option>山东</option>"+
    			"<option>新疆</option>"+
    			"<option>西藏</option>"+
    			"<option>青海</option>"+
    			"<option>甘肃</option>"+
    			"<option>宁夏</option>"+
    			"<option>河南</option>"+
    			"<option>江苏</option>"+
    			"<option>湖北</option>"+
    			"<option>浙江</option>"+
    			"<option>安徽</option>"+
    			"<option>福建</option>"+
    			"<option>江西</option>"+
    			"<option>湖南</option>"+
    			"<option>贵州</option>"+
    			"<option>海南</option>"+
    			"<option>香港</option>"+
    			"<option>澳门</option>"+
    			"<option>台湾</option>"+
    			"</select>"+
    			"<select id='city' name='city' onChange='getcounty();'></select>"+
    			"<select id='county' name='county'></select>"+
    			"</div>"+
                "<a id = 'SetCityBtn' class = 'submit-btn' href = 'javascript:saveSetCity();'>Save</a></div></form>";
    var lWidth = document.documentElement.scrollWidth;
    var lHeight = document.documentElement.scrollHeight;
    mleft = (lWidth - 400)/2 + "px";
    oset.style.left = mleft;
    oset.style.top = "100px";
    document.body.appendChild(oset);
    mask.onclick = function(){
        document.body.removeChild(mask);
        document.body.removeChild(oset);
    }
    getcity();
}
function getcity(){
	//使二次变更省份能getcounty
	$$('county').innerHTML='';
	var xmlhttp = createXMLHttp();
    xmlhttp.open("GET","./getCity?province="+$$('province').value,true);
    xmlhttp.send();
    xmlhttp.onreadystatechange=function(){
        if (xmlhttp.readyState==4 && xmlhttp.status==200){
            json2html_city(xmlhttp.responseText,'city');
			getcounty();
        }
	}
}
function getcounty(){
	$$('county').display="block";
	var xmlhttp = createXMLHttp();
    xmlhttp.open("GET","./getCounty?province="+$$('province').value+"&city="+$$('city').value,true);
    xmlhttp.send();
    xmlhttp.onreadystatechange=function(){
        if (xmlhttp.readyState==4 && xmlhttp.status==200){
            json2html_county(xmlhttp.responseText,'county')
        }
        else if(xmlhttp.readyState==4 && xmlhttp.status==500){
        	$$('county').display="none";
        }
	}
}
function json2html_city(json,insert_id){
		json=eval("("+json+")");
		var sum=json.sum;
		$$(insert_id).innerHTML='';
		for(var i=0;i<sum;i++){
			$$(insert_id).innerHTML+="<option>"+json.city[i]+"</option>";
		}
}
function json2html_county(json,insert_id){
		json=eval("("+json+")");
		var sum=json.sum;
		$$(insert_id).innerHTML='';
		if(sum!=1){
			for(var i=0;i<sum;i++){
				$$(insert_id).innerHTML+="<option>"+json.county[i]+"</option>";
			}
		}
}
function changeCaptcha(img){
	img.src="./getCaptcha?r="+Math.random();
}
//判断注册信息是否正确
function getInfo(input,index)
{
	var inputStr = input.value;
	var xmlhttp = createXMLHttp();
    xmlhttp.open("GET","./getInfo?"+verify[index]+"="+inputStr,true);
    xmlhttp.send();
    xmlhttp.onreadystatechange=function(){
        if (xmlhttp.readyState==4 && xmlhttp.status==200){
            var info=xmlhttp.responseText;
    		if(info == "ok"){
    			isAllOk[index] = true;
    			$$("warning"+index).innerHTML = infoTrue;
    		}
    		else{
    			isAllOk[index] = false;
    			$$("warning"+index).innerHTML = infoFalse [0]+ info +infoFalse[1];
    		}
        }
	}
}
//判断注册表单是否完成
function isAllTrue(){
    if(isAllOk[1] && isAllOk[2] && isAllOk[0])
       return  true;
    return false;
}
//表单提交
function submitSignUp()
{
	if(isAllTrue()){
		var username = $$("username").value;
        var password = $.md5($$("password").value+"nigoule");
        var xmlhttp = createXMLHttp();
        xmlhttp.open("GET","./signUp?username="+username+"&password="+password,true);
        xmlhttp.send();
        xmlhttp.onreadystatechange=function(){
            //alert(xmlhttp.readyState+xmlhttp.status+xmlhttp.responseText);
            if (xmlhttp.readyState==4 && xmlhttp.status==200){
                var info=xmlhttp.responseText;
                if(info == "ok")
                {
                    $$("signUp").submit();
                }
                else
                {
                    $$("warninginfo").innerHTML = info;
                }
            }
        }
	}
}
//登录判断
function submitLogIn()
{
    /*$$("login").submit();*/
	var username = $$("username").value;
    var password = $.md5($$("password").value+"nigoule");
	var xmlhttp = createXMLHttp();
    xmlhttp.open("GET","./logIn?username="+username+"&password="+password,true);
    xmlhttp.send();
    xmlhttp.onreadystatechange=function(){
        if (xmlhttp.readyState==4 && xmlhttp.status==200){
            var info=xmlhttp.responseText;
    		if(info == "ok")
    		{
                $$('logIn').submit();
    		}
    		else
    		{
    			$$("warninginfo").innerHTML = info;
    		}
        }
	}
}
function saveCustom(){
    var check=[];
    $$('isBiliframe').checked?isBiliframe=true:isBiliframe=false;
    $$('isWeibotop10').checked?isWeibotop10=true:isWeibotop10=false;
    $$('isWeather').checked?isWeather=true:isWeather=false;
    isBiliframe?a=1:a=0;
    isWeibotop10?b=1:b=0;
    isWeather?c=1:c=0;
    var xmlhttp = createXMLHttp();
    xmlhttp.open("GET","./saveCustom?id="+userid+"&a="+a+"&b="+b+"&c="+c,true);
    xmlhttp.send();
    xmlhttp.onreadystatechange=function(){
        if (xmlhttp.readyState==4 && xmlhttp.status==200){
            var info=xmlhttp.responseText;
            if(info == "ok")
            {
                $$('Custom').submit();
            }
            else
            {
                $$("warninginfo").innerHTML = info;
            }
        }
    }
}
function saveSetCity(){
	$$("SetCity").submit();
	/*if($$('county').value==''){
		weather(true,$$('city').value);
	}
	else weather(true,$$('county').value);*/
}

//blogs
//var pageId=0;
/*var blogView =["<div class = 'blog-single-container'><a class = 'blog-content' href = 'show.php?blogid=","' >",
"</a><div class = 'author-time'>——&nbsp;",". @",
"</div><div class = 'blog-infoshow'><a class = 'blog-controller'><i class = 'icon-comments' style = 'font-size:1.5em'>&nbsp;",
"</i></a></div></div>"];*/
/*function getHtml(data)
{
	
	html = "";
	for(var i = 0;i < data.length;i++)
	{
		html += blogView[0] + data[i][0] + blogView[1] + data[i][2] + blogView[2] + data[i][1] + blogView[3]+ data[i][3] 
		+blogView[4] + data[i][4] + blogView[5];
	}
	return html;
}*/
/*function appendBlog()
{
	pageId++;
	var xmlhttp = createXMLHttp();
        xmlhttp.open("GET","",true);
        xmlhttp.send();
        xmlhttp.onreadystatechange=function()
	{
	     if (xmlhttp.readyState==4 && xmlhttp.status==200)
	     {
	        var data = eval(xmlhttp.responseText);
		var para = document.createElement("div");
		if(data.length == 0)
		{
			var pc = $$("pageController");
			pc.innerHTML = "没有更多";
			pc.href = "javascript:void(0);";
			pc.className = "page-controller-disable";
		}
		para.innerHTML = getHtml(data);
		//alert(data);
		$$("blogContainer").appendChild(para);
	     }
	}
}*/
