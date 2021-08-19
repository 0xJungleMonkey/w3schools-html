// 1. location object
var btn = document.getElementById("btn");
btn.onclick = function (){
    // output url
    // console.log(location.href)
    // go to another page
    // location.href = "http://www.lagou.com";

    // assign 
    location.assign("http://www.lagou.com");

    // replace
    // do not record history
    location.replace("http://www.lagou.com");

    // reload   f5=false ctrl f5 =true
    location.reload();
    // parameter: true ,false 
};
