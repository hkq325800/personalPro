<?php
    require_once './php/session.php';
    require_once './php/common.php';
  //manifest="./my.appcache"
  //<?php if(is_login()) echo 'style="display:none"' 
?>
<!DOCTYPE HTML>
<html>
<head>
<link href="./img/logo.jpg" rel="shortcut icon">
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<title>personalPro</title>
<script type="text/javascript" src="js/jquery/dist/jquery.min.js"></script>
<script type="text/javascript" src="bootstrap/dist/js/bootstrap.js"></script>
<script type="text/javascript" src="js/jQuery.md5.js"></script>
<script type="text/javascript" src="js/search.js"></script>
<script type="text/javascript" src="js/login.js"></script>
<script type="text/javascript" src="js/jquery.onepage-scroll.min.js"></script>
<script type="text/javascript" src="js/module.js"></script>
<script type="text/javascript" src="js/jquery.cityselect.js"></script>
<script type="text/javascript" src="http://int.dpool.sina.com.cn/iplookup/iplookup.php?format=js"></script>
<link href= "bootstrap/dist/css/bootstrap.css" rel="stylesheet" type="text/css" />
<link href= "css/header.css" rel="stylesheet" type="text/css" />
<link href= "css/mask.css" rel="stylesheet" type="text/css" />
<link href= "css/font-awesome.css" rel="stylesheet" type="text/css" />
<link href= "css/my.css" rel="stylesheet" type="text/css" />
<link href= "css/his.css" rel="stylesheet" type="text/css" />
<link href= "css/onepage-scroll.css" rel="stylesheet" type="text/css" />
<script>
    $(document).ready(function(){
      $(".main").onepage_scroll({
        sectionContainer: "section",
        loop: true,
        responsiveFallback: true
      });
    });
    var myprovince = remote_ip_info['province'];
    var mycity = remote_ip_info['city']; 
    var mydistrict = remote_ip_info['district'];
    $(function(){$('#city_1').citySelect({ prov:myprovince, city:mycity }); }); 
</script>
</head>
<script>var userid = "<?php if(is_login()){echo current_userid();}else {echo '0';} ?>";var thiscity = "<?php echo current_city(); ?>";</script>

<body style="width:100%;" onkeydown="if(window.event.keyCode==13){ window.event.keyCode=9}" background="./img/2.jpg" onselectstart="return false">
<!-- <audio src="hifi raver.mp3" autoplay="true" loop="true" style=""></audio> -->
<div class=face>
  <header class = "head-container" onselectstart="return false"> <a class = "logo-container" style="margin-top:6px"><img src="./img/logo.jpg" style="width:37px;margin-right:3px;margin-top:-8px;margin-left:-10px;margin-bottom:-5px;" /> <span id="welcome">Personal Pro 欢迎你！</span> <span style="margin-left:5px">
    <?php if(is_login())echo current_account()?>
    </span> <span id="weather" style="padding-left:0px"></span></a>
    <div class = "login-container"> 
    <a class = "login-btn-grey" id = "toLogIn" href = "#"  <?php if(is_login()) echo 'style="display:none"' ?>>Log In</a> 
    <a class = "login-btn-grey" id = "toSignUp" href = "#" <?php if(is_login()) echo 'style="display:none"' ?>>Sign Up</a> 
    <a class = "login-btn-grey" id = "toCustom" href= "#" <?php if(!is_login()) echo 'style="display:none"' ?>>Setting</a> 
    <a class = "login-btn-grey" id = "toLogOut" href= "php/logout.php" <?php if(!is_login()) echo 'style="display:none"' ?>>Log Out</a> 
    </div>
  </header>
  <div class="container-fluid" style="margin-top:50px">
    <div class="row">
      <div class="main onepage-wrapper" style="position: relative; -webkit-transform: translate3d(0px, 0%, 0px); transition: all 1000ms ease; -webkit-transition: all 1000ms ease;">
        <div class="col-xs-2 " id="socialsoft" style="width:10%;margin-left:0.5%"><!-- background-color:#eee;opacity:0.4; -->
          <ul class="nav nav-pills nav-stacked" role="tablist" style="min-width: 100px;">
            <li role="presentation"><a href="http://www.renren.com/" target="_blank"><img src="img/renren_logo.png" style="width:40px;"><span class='a'>人人</span></a></li>
            <li role="presentation"><a href="http://weibo.com/login.php" target="_blank"><img src="img/xinlangweibo_logo.png" style="width:40px;"><span class='a'>微博</span></a></li>
            <li role="presentation"><a href="https://wx.qq.com/" target="_blank"><img src="img/weixin_logo.png" style="width:40px;"><span class='a'>微信</span></a></li>
            <li role="presentation"><a href="http://w.qq.com/" target="_blank"><img src="img/webqq_logo.png" style="width:40px;"><span class='a'>QQ</span></a></li>
          </ul>
        </div>
        <!-- end of col-lg-2 -->
        <div class="col-xs-8" style="margin-left:40px">
          <section class="page1 section active back" data-index="1" style="position: absolute; left: 0px; top: 0%;">
            <div class="page_container">
              <ul class="nav nav-tabs" role="tablist" >
                <li role="presentation" class="active"> <a href="#Baidu" id="Baidu-tab" data-toggle="tab" aria-controls="Baidu"><img src="img/baidu_logo.png" style="height:17px;" /></a> </li>
                <li role="presentation"> <a href="#Zhihu" id="Zhihu-tab" data-toggle="tab" aria-controls="Zhihu"><img src="img/zhihu_logo.jpg" style="height:17px;" /></a> </li>
                <li role="presentation"> <a href="#Flvcd" id="Flvcd-tab" data-toggle="tab" aria-controls="Flvcd"><img src="img/flvcd_logo.png" style="height:17px;" /></a> </li>
                <li role="presentation"> <a href="#Bilibili" id="Bilibili-tab" data-toggle="tab" aria-controls="Bilibili"><img src="img/bilibili_logo.jpg" style="height:17px;" /></a> </li>
                <li role="presentation"> <a href="#Taobao" id="Taobao-tab" data-toggle="tab" aria-controls="Taobao"><img src="img/taobao_logo.png" style="height:17px;" /></a> </li>
                <li role="presentation"> <a href="#Btbook" id="Btbook-tab" data-toggle="tab" aria-controls="Btbook"><img src="img/btbook_logo.png" style="height:17px;" /></a> </li>
                <li role="presentation"> <a href="#Dazhong" id="Dazhong-tab" data-toggle="tab" aria-controls="Dazhong"><img src="img/dazhong_logo.png" style="height:17px;" /></a> </li>
                <li role="presentation" class="dropdown"> <a href="#" id="myTabDrop1" class="dropdown-toggle" data-toggle="dropdown" aria-controls="myTabDrop1-contents"><img src="img/bus_logo.png" style="width:35px;height:25px" /><span class="caret"></span></a>
                  <ul class="dropdown-menu" role="menu" aria-labelledby="myTabDrop1" id="myTabDrop1-contents">
                    <li><a href="#dropdown_busLine" tabindex="-1" role="tab" id="dropdown_busLine-tab" data-toggle="tab" aria-controls="dropdown_busLine">BusLine</a></li>
                    <li><a href="#dropdown_busStation" tabindex="-1" role="tab" id="dropdown_busStation-tab" data-toggle="tab" aria-controls="dropdown_busStation">BusStation</a></li>
                    <li><a href="#dropdown_busChange" tabindex="-1" role="tab" id="dropdown_busChange-tab" data-toggle="tab" aria-controls="dropdown_busChange">BusChange</a></li>
                  </ul>
                </li>
              </ul>
              <div id="myTabContent" class="tab-content">
                <div role="tabpanel" class="tab-pane fade in active" id="Baidu" aria-labelledBy="Baidu-tab">
                  <form action="http://www.baidu.com/baidu" target=_blank>
                    <div class="form-group">
                      <input name=tn type=hidden value=baidu>
                      <input class="form-control myinput" name="word" size="20" baiduSug=1 placeholder="请输入关键字" />
                      <button class="btn btn-default mybtn" type="submit">搜索</button>
                      <input name=ie type=hidden value=utf-8/>
                    </div>
                  </form>
                </div>
                <div role="tabpanel" class="tab-pane fade" id="Zhihu" aria-labelledBy="Zhihu-tab">
                  <div class="form-group">
                    <form>
                      <input class="form-control myinput" type="text" id="zhihu_key" baiduSug=1 placeholder="请输入关键字"/>
                      <button class="btn btn-default mybtn" type="submit" onclick="zhihu()">知乎</button>
                    </form>
                  </div>
                </div>
                <div role="tabpanel" class="tab-pane fade" id="Flvcd" aria-labelledBy="Flvcd-tab">
                  <div class="form-group">
                    <form name="mainform" id="mainform" onsubmit="return flvcd()" action="" method="get">
                      <input class="form-control myinput" name="kw" id="flvcd_key" baiduSug=1 type="text" placeholder="请输入视频地址"/>
                      <button class="btn btn-default mybtn" name="sbt" type="submit">解析</button>
                    </form>
                  </div>
                </div>
                <div role="tabpanel" class="tab-pane fade" id="Bilibili" aria-labelledBy="Bilibili-tab">
                  <div class="form-group">
                    <form>
                      <input class="form-control myinput" id="bili_key" baiduSug=1 placeholder="请输入关键字"/>
                      <button class="btn btn-default mybtn" type="submit" onclick="bilibili()">搜索</button>
                    </form>
                  </div>
                </div>
                <div role="tabpanel" class="tab-pane fade" id="Taobao" aria-labelledBy="Taobao-tab">
                  <div class="form-group">
                    <form>
                      <input class="form-control myinput" id="taobao_key" baiduSug=1 placeholder="请输入关键字"/>
                      <button class="btn btn-default mybtn" type="submit" onclick="taobao()">搜索</button>
                    </form>
                  </div>
                </div>
                <div role="tabpanel" class="tab-pane fade" id="Btbook" aria-labelledBy="Btbook-tab">
                  <div class="form-group">
                    <form>
                      <input class="form-control myinput" id="btbook_key" baiduSug=1 placeholder="请输入关键字"/>
                      <button class="btn btn-default mybtn" type="submit" onclick="btbook()">搜索</button>
                    </form>
                  </div>
                </div>
                <div role="tabpanel" class="tab-pane fade" id="Dazhong" aria-labelledBy="Dazhong-tab">
                  <div class="form-group">
                    <form>
                      <input class="form-control myinput" id="dazhong_key" baiduSug=1 placeholder="请输入关键字"/>
                      <button class="btn btn-default mybtn" type="submit" onclick="dazhong()">搜索</button>
                    </form>
                  </div>
                </div>
                <div role="tabpanel" class="tab-pane fade" id="dropdown_busLine" aria-labelledBy="dropdown_busLine-tab">
                  <div class="form-group">
                    <input class="form-control myinput" id="busLine" placeholder="线路"/>
                    <button class="btn btn-default mybtn" type="submit" onclick="busLine()">搜索</button>
                  </div>
                </div>
                <div role="tabpanel" class="tab-pane fade" id="dropdown_busStation" aria-labelledBy="dropdown_busStation-tab">
                  <div class="form-group">
                    <input class="form-control myinput" id="station" placeholder="站点"/>
                    <button class="btn btn-default mybtn" type="submit" onclick="busStation()">搜索</button>
                  </div>
                </div>
                <div role="tabpanel" class="tab-pane fade" id="dropdown_busChange" aria-labelledBy="dropdown_busChange-tab">
                  <div class="form-group">
                    <input class="form-control myinput" id="start" placeholder="起始" style="width:40%;"/>
                    <input class="form-control myinput" id="end" placeholder="终点" style="width:40%;margin-left:10px"/>
                    <button class="btn btn-default mybtn" type="submit" onclick="busChange()">搜索</button>
                  </div>
                </div>
              </div>
              <!-- end of tab-content --> 
            </div>
            <!-- end of page_container --> 
          </section>
          <section class="page2 section" data-index="2" style="position: relative; left: 0px; top: 500px;opacity:0.4;">
            <div class="page_container">
              <div id="bili_iframe" ></div>
            </div>
          </section>
        </div>
        <!-- end of col-lg-8 -->
        <div class="col-xs-2" id="top">
          <h5 id="top_tag" onselectstart="return false"  value=""></h5>
          <ul class="nav nav-pills nav-stacked"  role="tablist">
            <li role="presentation" id="top1"></li>
            <li role="presentation" id="top2"></li>
            <li role="presentation" id="top3"></li>
            <li role="presentation" id="top4"></li>
            <li role="presentation" id="top5"></li>
            <li role="presentation" id="top6"></li>
            <li role="presentation" id="top7"></li>
            <li role="presentation" id="top8"></li>
            <li role="presentation" id="top9"></li>
            <li role="presentation" id="top10"></li>
          </ul>
        </div>
        <!-- end of col-lg-2 --> 
      </div>
      <!-- end of row --> 
    </div>
    <!-- end of main -->
    <div id="footer"><span>©Copyright 2014 Jason Huang. All Rights Reserved.</span> </div>
  </div>
  <!-- end of container-fluid --> 
</div>
<!-- end of face -->
</body>
<script charset="gbk" src="http://www.baidu.com/js/opensug.js"></script>
</html>