
	function $$(id){
		return document.getElementById(id);
	}
	function busLine(){
		var busLine=$$("busLine").value;
		var url="http://map.baidu.com/?newmap=1&ie=utf-8&s=s%26wd%3D"+busLine+"%26c%3D179";
		if(busLine==""){
			url="http://map.baidu.com/";
		}
		window.open(url);
	}
	function busChange(){
		var start=$$("start").value;
		var end=$$("end").value;
		var url="http://map.baidu.com/?newmap=1&ie=utf-8&s=bt%26wd1%3D"+start+"%26wd2%3D"+end+"%26c%3D179";
		if(start==""||end==""){
			url="http://map.baidu.com/";
		}
		window.open(url);
	}
	function busStation(){
		var station=$$("station").value;
		var url="http://map.baidu.com/m?word="+station+"&fr=ala_open&qt=bs&c=179";
		if(station==""){
			url="http://map.baidu.com/";
		}
		window.open(url);
	}
	function zhihu(){
		var keyword=$$("zhihu_key").value;
		if (keyword == ""){
	    	url="http://www.zhihu.com/";
	    }
	    else{
			url="http://www.zhihu.com/search?q="+keyword+"&type=question";
		}
		window.open(url);
	}
	function flvcd(){
	    var keyword = $$('flvcd_key').value;
	    keyword = keyword.trim();
	    if (keyword == ""){
	    	window.open("http://www.flvcd.com");
	        //window.location.href = "http://www.flvcd.com";
	        return false;
	    }
	    if (keyword.indexOf("youtube.com/watch") > 0){
	        alert("YouTube视频必须使用专用下载器才能解析，请到硕鼠下载中心下载使用！");
	        window.location.href = "http://download.flvcd.com/#youtube";        
	        return false;
	    }
	    if (keyword.indexOf("http://") == 0 || (keyword.indexOf(".")>0 && keyword.indexOf("/")>0) || keyword.indexOf("javascript:loadVideo(") >= 0){
	        document.mainform.action = "http://www.flvcd.com/parse.php";
	    }
	    else{
	        document.mainform.action = "http://www.flvcd.com/dvseek.php";
	    }

	    return true;
	}
	function bilibili(){
		var keyword=$$("bili_key").value;
		if (keyword == ""){
	    	url="http://www.bilibili.com";
	    }
	    else{
			url="http://www.bilibili.com/search?keyword="+keyword+"&orderby=&formsubmit=";
		}
		window.open(url);
	}
	function taobao(){
		var keyword=$$("taobao_key").value;
		if (keyword == ""){
	    	url="http://www.taobao.com";
	    }
	    else{
			url="http://s.taobao.com/search?q="+keyword+"&commend=all&ssid=s5-e&search_type=item&sourceId=tb.index&spm=1.7274553.1997520841.1&initiative_id=tbindexz_20141201";
		}
		window.open(url);
	}
	function btbook(){
		var keyword=$$('btbook_key').value;
		if (keyword == ""){
	    	url="http://www.btbook.net/";
	    }
	    else{
			url="http://www.btbook.net/search/"+keyword;
		}
		window.open(url);
	}
	function dazhong(){
		//http://www.dianping.com/search/keyword/3/0_
		//http://t.dianping.com/list/hangzhou?q=
		var keyword=$$('dazhong_key').value;
		if (keyword == ""){
	    	url="http://www.dianping.com/";
	    }
	    else{
			url="http://t.dianping.com/list/hangzhou?q="+keyword;
		}
		window.open(url);
	}
	
	/*function CreateScript(src) {
        var Scrip=document.createElement('script');
        Scrip.src=src;
        document.body.appendChild(Scrip);
    }
    function jsonpcallback(json) {
            console.log(json);//Object { email="中国", email2="中国222"}
    }*/
    /*function click(){
      CreateScript("http://weatherapi.market.xiaomi.com/wtr-v2/weather?cityId=101210101&callback=jsonpcallback") ;   
    }*/