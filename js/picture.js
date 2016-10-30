/**
 * Created by zhuangqf on 10/30/16.
 */

var images=new Array();
setImages();
var currentPicNum = 0;

//后期需改用ajax动态修改（从服务器获取数据）
function setImages() {
    images[0]="images/slider-1.jpg";
    images[1]="images/slider-2.jpg";
    images[2]="images/slider-3.jpg";
    images[3]="images/slider-5.jpg";
    images[4]="images/slider-6.jpg";
    images[5]="images/slider-1.jpg";
    images[6]="images/slider-2.jpg";
    images[7]="images/slider-3.jpg";
    images[8]="images/slider-5.jpg";
    images[9]="images/slider-6.jpg";
    images[10]="images/slider-1.jpg";
    images[11]="images/slider-2.jpg";

    for(var i=0;i<images.length;i++){
        var id = "pic"+i;
        var picImg = document.getElementById(id);
        picImg.setAttribute("src",images[i]);
        console.log(i+"begin");
        picImg.setAttribute('click',picClick(i));
        console.log(i+"end");
    }
}

function picClick(n) {
    console.log(n);
    document.getElementById("bigpic").setAttribute("src",images[0]);
    $("#myModal").modal('show');
    currentPicNum = n;
}

function Forward() {
    currentPicNum = (currentPicNum+1)%images.length;
    document.getElementById("bigpic").setAttribute("src",images[currentPicNum]);
}
function Backward() {
    currentPicNum = (currentPicNum-1+images.length)%images.length;
    document.getElementById("bigpic").setAttribute("src",images[currentPicNum]);
}
