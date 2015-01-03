<?php
session_start();
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

$_SESSION['serverCaptcha'] = strtolower($captchaContent);

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
?>