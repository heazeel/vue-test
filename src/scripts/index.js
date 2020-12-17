
var core = {
  //资源预加载
  loadResources: function() {
    var TR7S = [];
    var RA3 = [];
    for (let i = 1; i < 122; i += 2){
      TR7S.push(`https://xyi-web.oss-cn-hangzhou.aliyuncs.com/imgs/index/TR7S/TR7S动效-20200612.81.${i}.png`)
    }
    for(let i=1; i<242; i+=2){
      RA3.push(`https://xyi-web.oss-cn-hangzhou.aliyuncs.com/imgs/index/RA3/ra3/RA3-1.129.${i}.png`)
    }
    var sourceArr = [TR7S, RA3];
    var loadImage = function(path, callback) {
        var img = new Image();
        img.onload = function() {
            img.onload = null;
            callback(path);
        }
        img.src = path;
    }
    var imgLoader = function(imgs, callback) {
      var len = imgs[0].length + imgs[1].length;
      var current = 0;
      // while (imgs.length) {
      //   loadImage(imgs.shift(), function(path) {
      //     callback(path, ++i, len);
      //   });
      // }
      for (var i = 0; i < imgs.length; i++){
        for (var j = 0; j < imgs[i].length; j++){
          loadImage(imgs[i][j], function(path) {
            callback(path, ++current, len);
          });
        }
      }
    }
    imgLoader(sourceArr, function(path, curNum, total) {
      var percent = curNum / total;
      document.getElementById("progress").style.width = Math.floor(percent * 100) + "%";
      if (percent == 1) {
        setTimeout(() => {
          core.showPage();
        }, 200);
      }
    });
  } (),
  //资源加载完毕，显示页面内容
  showPage: function () {
    $(".loading").css({"transform": "translateY(-100%)"});
    setTimeout(() => {
      $(".loading").remove();
      $("#scene-one .mask").css("animation", "mask 0.4s ease 0.5s forwards")
      $("#scene-one #line1").css("animation", "scene-one-line1 .4s ease 0.9s forwards");
      $("#scene-one #line2").css("animation", "scene-one-line2 .4s ease 0.9s forwards");
      $("#scene-one #arrow").css("animation-play-state", "running, running");

      var video = document.getElementById("video");
      if (video.paused == true) {
        video.play();
      }

    }, 500);
  }
}
core.loadResources;

$(document).ready(function () {

  $("#play-btn").mouseenter(function(){
    $("#line2").css(
      {"background-image":"linear-gradient(to top right, #505D75 , #EF8354)","box-shadow":"3px 3px 4px rgba(0,0,0,.5)"}
    );
  
  })
  $("#play-btn").mouseout(function () {
    $("#line2").css(
      { "background-image": "linear-gradient(to top right, #fff , #fff)", "box-shadow": "0px 0px 0px rgba(0,0,0,.5)" }
    );
  });

  $("#play-btn").click(function () {
    var video = document.getElementsByClassName("video");
    for (var i = 0; i < video.length; i++){
      if (video[i].paused == false) {
        video[i].pause();
      } 
    }
    $(".video-group").show();
    $("#video1").show();
    if (video[0].paused == true) {
      video[0].play();
    }
    $(document).off("mousewheel DOMMouseScroll");
  });

  $(".scene-two-content .button").click(function () {
    var video = document.getElementsByClassName("video");
    var videoIndex = $(this).attr("id");
    var index = parseInt(videoIndex[5]);
    $(".video-group .two").hide();
    $(".video-group").show();
    $("#" + videoIndex).show();
    if (video[index-1].paused == true) {
      video[index-1].play();
    }
    $(document).off("mousewheel DOMMouseScroll");
  });

  $(".video-group-btn").click(function () {
    var video = document.getElementsByClassName("video");
    for (var i = 0; i < video.length; i++) {
      if (video[i].paused == false) {
        video[i].pause();
      }
    }
    $(".video-group").hide();
    $(".video-group .one").hide();
    $(".video-group .two").hide();
    $(document).on("mousewheel DOMMouseScroll", throttle(scrollFun, 1000));
  });

  //svg图片根据分辨率缩放
  svgResize();
  
});

//svg图片根据分辨率缩放
function svgResize() {
  var width = $(window).width();
  // var resize = width <= 1920 ? 1 : (width / 1920);
  var resize = width / 1920;
  $("#uavMovingLine").css("transform", "scale(" + resize + ")");
}

//图片预加载
function loadImage(src){
  let p=new Promise(function(resolve,reject){
    let img=new Image();
    img.onload=function(){//加载时执行resolve函数
        resolve(img);
    }
    img.onerror=function(){
        reject(src);
    }
    img.src=src;
  })
  return p;
}

var TR7S = [];
(function () {
  for(let i=1; i<122; i+=2){
    TR7S.push(`https://xyi-web.oss-cn-hangzhou.aliyuncs.com/imgs/index/TR7S/TR7S动效-20200612.81.${i}.png`)
  }
})();

var RA3_2 = [];
(function () {
  for(let i=1; i<242; i+=2){
    RA3_2.push(`https://xyi-web.oss-cn-hangzhou.aliyuncs.com/imgs/index/RA3/ra3/RA3-1.129.${i}.png`)
  }
})();

var RH1 = [];
(function () {
  for(let i=1; i<27; i++){
    RH1.push(`https://xyi-web.oss-cn-hangzhou.aliyuncs.com/imgs/index/RH1/rh1/智能机场RH1-20191028-adnet - 官网首页.131.${i}.png`)
  }
})();

var RH1_2 = [];
(function () {
  for(let i=61; i<212; i+=2){
    RH1_2.push(`https://xyi-web.oss-cn-hangzhou.aliyuncs.com/imgs/index/RH1/rh1-2/智能机场RH1-20191028-adnet - 官网首页.132.${i}.png`)
  }
})();


//RH1图片
async function RH1Images() {
  let arr=[];
  for(let i=1; i<27; i++){
    await loadImage(`https://xyi-web.oss-cn-hangzhou.aliyuncs.com/imgs/index/RH1/rh1/智能机场RH1-20191028-adnet - 官网首页.131.${i}.png`).then(img=>{
      arr.push(img);
    });
  }
  return arr;
}
//RH1-2图片
async function RH1_2Images() {
  let arr=[];
  for(let i=61; i<212; i+=2){
    await loadImage(`https://xyi-web.oss-cn-hangzhou.aliyuncs.com/imgs/index/RH1/rh1-2/智能机场RH1-20191028-adnet - 官网首页.132.${i}.png`).then(img=>{
      arr.push(img);
    });
  }
  return arr;
}

var imglist = null; //缓存TR7S图片
var imglist2 = null; //缓存RA3第一次出现的图片
var imglist3 = null; //缓存RA3第二次出现的图片
var imglist4 = null; //缓存RH1图片
var imglist5 = null; //缓存RH1-2图片
//预加载图片
// TR7SImages().then(list => {
//   imglist = list;
// });

// RA3_2Images().then(list => {
//   imglist3 = list;
// });

RH1Images().then(list => {
  imglist4 = list;
});

RH1_2Images().then(list => {
  imglist5 = list;
});

//防抖函数
function debounce(func, wait) {
  let timer;
  return function() {
    let context = this; // 这边的 this 指向谁?
    let args = arguments; // arguments中存着e
    if (timer) clearTimeout(timer);
    let callNow = !timer;
    timer = setTimeout(() => {
      timer = null;
    }, wait)
    if (callNow) func.apply(context, args);
  }
}

//节流函数
function throttle(func, wait) {
  let previous = 0;
  return function() {
    let now = Date.now();
    let context = this;
    let args = arguments;
    if (now - previous > wait) {
      func.apply(context, args);
      previous = now;
    }
  }
}

//窗口改变，场景高度改变
$(window).resize(function () {
  svgResize();
  hei = document.documentElement.clientHeight;
  if (index == 1) {
    now = 0;
  }
  else if (index == 2) {
    now = -hei;
  }
});

var index = 1; //记录
var curIndex = 1;
var wrap = document.getElementById("wrap");
var main = document.getElementById("main");
var hei = document.documentElement.clientHeight; //获取场景高度
var pageNum = document.querySelectorAll(".scene").length; //获取场景个数

var now = 0;

//为页面绑定滚动事件
$(document).on("mousewheel DOMMouseScroll", throttle(scrollFun, 1000));

var navIndex = 1;
var currentNavIndex = 1;
var firstFlag = true;

var scrollPromise = false;

// function normalScroll(e) {
//   var delta = e.originalEvent.detail || (-e.originalEvent.wheelDelta);
//   scrollPromise = true
// }

//鼠标滚轮滚动事件
function scrollFun (e) {
  closeNavMenu();
  var delta = e.originalEvent.detail || (-e.originalEvent.wheelDelta);
  //mousewheel事件中的 “event.wheelDelta” 属性值：返回的如果是正值说明滚轮是向上滚动
  //DOMMouseScroll事件中的 “event.detail” 属性值：返回的如果是负值说明滚轮是向上滚动
  if (delta > 0 && parseInt(main.offsetTop) > -(hei * (pageNum - 1))) {
    //向下滚动
    if (index == 1) {
      
      //首页关闭视频
      var video = document.getElementById("video");
      if (video.paused == false) {
        video.pause();
      }

      $("#scene-one .mask").css("animation", "mask-full 0.4s ease forwards");
      index++;
      
    
      setTimeout(function(){
        toPage(index);
        firstFlag = false;

        setTimeout(function () {
          $("#scene-two ul").css("opacity", "1");

          setTimeout(function () {
            $(".pic-box").css("right", "0");

            setTimeout(() => {

              $(document).off("mousewheel DOMMouseScroll").on("mousewheel DOMMouseScroll", throttle(scrollFun, 1000));
              
            }, 600);
            
          }, 400);

        }, 250);

        $(document).off("mousewheel DOMMouseScroll");
      }, 350)
      
      // $(".pic-box").css("animation", "pic-box 0.6s ease 2s forwards");
    }
    else if (index == 2) {
      if(currentNavIndex<5){
        if(currentNavIndex!=4){
          currentNavIndex++;
          //切换导航
          switchNav(currentNavIndex,firstFlag);
        }
        else{
          currentNavIndex++;
        }
      }
      if(currentNavIndex==5){
        $(document).off("mousewheel DOMMouseScroll");

        $("#item2 .pic").css("opacity","0");
        $("#item2").children().css("transform","translate(-6rem,1rem)")
        $("#scene-two ul").css({"transform": "translateX(-4rem)", "opacity":"0"})
        
        $(".pic-item:eq(0), .pic-item:eq(2), .pic-item:eq(3)").children().css("transform","translate(15vw,0)");
        
        $("#background-rise-item3, #background-rise-item9, #background-rise-item17").css("animation", "background-ani 0.6s ease 0.6s forwards");

        $("#background-rise-item2, #background-rise-item4, #background-rise-item8, #background-rise-item13, "
        + "#background-rise-item16, #background-rise-item20").css("animation", "background-ani 0.5s ease 0.8s forwards");

        $("#background-rise-item1, #background-rise-item7, #background-rise-item10, #background-rise-item12, "
        + "#background-rise-item15, #background-rise-item18, #background-rise-item20").css("animation", "background-ani 0.4s ease 1.0s forwards");

        $("#background-rise-item5, #background-rise-item6, #background-rise-item11, #background-rise-item14, "
        + "#background-rise-item19").css("animation", "background-ani 0.3s ease 1.2s forwards");

        setTimeout(() => {
          $(".page-nav-part .nav-icon-btn div").css("border-top", "0.2rem solid #787C90");
          setTimeout(function(){
            $("#uavGroup .title").css("opacity","1");
            $("#scene-one .mask").hide();
          }, 800);
        }, 1000);
        
        $("#uavGroup .background").css("animation", "ground 1.8s ease .6s forwards");
        $("#uavGroup .architecture-back").css("animation", "architecture-back 1s linear .6s forwards")

        $("#car1").css("animation", "car1 1s linear 2s forwards");
        $("#car2").css("animation", "car2 1s linear 2s forwards");
        $("#car3").css("animation", "car3 1s linear 2s forwards");
        $("#car4").css("animation", "car4 1s linear 2s forwards");

        $("#building1").css("animation", "building 0.5s ease 1s forwards");
        $("#building2").css("animation", "building 0.5s ease 1.2s forwards");
        $("#building3").css("animation", "building 0.5s ease 1.4s forwards");
        $("#building4").css("animation", "building 0.5s ease 1.4s forwards");
        $("#building5").css("animation", "building 0.5s ease 1.2s forwards");
        $("#building6").css("animation", "building 0.5s ease 1.6s forwards");
        $("#building7").css("animation", "building 0.5s ease 1.6s forwards");
        $("#building8").css("animation", "building 0.5s ease 1.4s forwards");
        $("#building9").css("animation", "building 0.5s ease 1.8s forwards");
        $("#building10").css("animation", "building 0.5s ease 2s forwards");
        $("#building11").css("animation", "building 0.5s ease 2s forwards");
        $("#building12").css("animation", "building 0.5s ease 1.8s forwards");

        $("#river-mask").css("animation", "river-mask 1s linear 2s forwards");
        $("#uav1").css("animation", "uav1 2s linear 3s forwards");

        setTimeout(function(){
          $("#uav1").css({"bottom":"41.5rem", "animation":""});
          $(document).on("mousewheel DOMMouseScroll",throttle(uavMove,10));
        },4000)
        
        $("#uavGroup .title .line").css("animation", "line .2s linear 2.2s forwards");
        $("#uavGroup .title #p1").css("animation", "title_p1 .2s linear 2.2s forwards");
        $("#uavGroup .title #p2").css("animation", "title_p2 .2s linear 2.4s forwards");

        $(".content-box section").removeClass("active-in");
        $(".content-box section").removeClass("active-out");
        $("#content4").addClass("active-out");
      }
    }   
  }
  if (delta < 0 && parseInt(main.offsetTop) < 0) {
    //向上滚动
    if(index==2 && currentNavIndex==1){

      //首页视频开启
      var video = document.getElementById("video");
      if (video.paused == true) {
        video.play();
      }

      $("#scene-one .mask").css("animation", "mask-half 0.4s ease forwards")
      index = 1;
      setTimeout(function () {
        $(".pic-box").css("right", "-50%");

        setTimeout(function () {
          toPage(index);
          firstFlag = true;
        }, 150);
        
      }, 200);
      
    }
    else if(index==2 && currentNavIndex>1 && currentNavIndex < 5){
      currentNavIndex--;
      switchNav(currentNavIndex);
    }
  }
}

//获取无人机拖尾的SVG对象
var path = document.getElementsByClassName("uavLine");
var pathLength = [];

//隐藏每条拖尾
for(var i=0; i<path.length; i++){
  //获取path路径长度
  pathLength[i] = path[i].getTotalLength();
  //设置虚线长度
  path[i].style.strokeDasharray = pathLength[i] + " " + pathLength[i];
  //设置虚线偏移量
  path[i].style.strokeDashoffset = pathLength[i];
  
}

var uav2 = [
  [74, 15], [72, 15.3], [70.5, 16], [68.5, 16.3], [66.2, 16.3], [64.7, 15.8], [63.2, 15], [61.8, 14],
  [60.5, 13], [59, 12], [57, 10.5], [55.5, 9], [54.5, 7.5], [53.7, 6], [53, 4.8], [52.5, 3.8]
].reverse();

var uav3 = [
  [52.5, 3.8], [54, 4.5], [57, 6], [59, 6.5], [61, 6.7], [63, 6.7], [66, 6.1], [69, 5.7],
  [72, 5.1], [74, 4.2], [76, 3.7], [78, 3.2], [79.5, 2.2], [81, 1.5], [82.5, 0.2], [83, -2]
].reverse();

var uav4 = [
  [22, 29.8], [20.6, 31.8], [19.2, 33.8], [17.8, 35.3], [16.4, 36.8], [15, 38.3], [13.8, 39.8], [12.6, 41.3], 
  [11.4, 42.5], [10.2, 43.5], [9, 44.5], [7.8, 45.2], [6.6, 45.7], [5.4, 46.2], [4.2, 46.6], [3, 50]
].reverse();

var uav5 = [
  [10.5, 5.3], [10.6, 7.3], [10.7, 9.3], [10.9, 11.3], [11.1, 13.3], [11.4, 16.3], [11.7, 18.3], [12.1, 20.3],
  [12.5, 22.3], [13, 24.3], [13.5, 25.8], [15.5, 27.8], [17, 29.3], [18.5, 30.3], [20, 30.5], [22, 29.8]
].reverse();

var count = 15; //记录顶部无人机运动次数，运动16次之后，其余无人机运动
var count2 = 15; //记录其余无人机运动次数
var strokeLength = 15;

var interval = []; //定时器数组，保存所有定时器
var timeout = [];
var sceneThree = false; //场景三标记，false表示当前不在场景三当中

//无人机拖尾滚动控制函数
function uavMovingLine (e) {
  closeNavMenu ()
  var delta = (-e.originalEvent.detail) || (e.originalEvent.wheelDelta);
  //滚轮向下滚动
  if (delta < 0) {
    $(document).off("mousewheel DOMMouseScroll");
    var currentLength = [];

    //无人机拖尾自动播放
    interval.push(setInterval(() => {
      if (count != 0) {
        count = count - 1;
        for (var i = 0; i < 4; i++) {
          currentLength[i] = pathLength[i] * (count / strokeLength);
          path[i].style.strokeDashoffset = currentLength[i]
        }
      }
      else {
        if (count2 > 0) { //
          count2 = count2 - 1;
  
          //无人机拖尾长度改变
          for (var i = 4; i < path.length; i++) {
            currentLength[i] = pathLength[i] * (count2 / strokeLength);
            path[i].style.strokeDashoffset = currentLength[i]
          }
  
          //无人机位置改变
          $("#uav2").css({ "right": uav2[count2][0] + "rem", "bottom": uav2[count2][1] + "rem" });
          $("#uav3").css({ "right": uav3[count2][0] + "rem", "bottom": uav3[count2][1] + "rem" });
          $("#uav4").css({ "right": uav4[count2][0] + "rem", "bottom": uav4[count2][1] + "rem" });
          $("#uav5").css({ "right": uav5[count2][0] + "rem", "bottom": uav5[count2][1] + "rem" });
          
        }

        else if (count2 == 0) {
          clear(interval)
          count2 = -1;
          setTimeout(() => {
            $(document).off("mousewheel DOMMouseScroll").on("mousewheel DOMMouseScroll", uavMovingLine);
            $("#uav-TR7S .body").css("opacity", "1");
            reduction();
          }, 800);
        }

      }
    }, 25));

    if (count2 == -1) {
      //如果其他无人机运动到最终位置，则滚轮继续滑动，切换页面
      toPage(3);
      $("#scene-three .mask").css({ "width": "0", "animation": "scene-three-mask-type1 0.5s ease 0.5s forwards" });
      $("#uav-TR7S").css("animation", "uav-TR7S-action1 .5s linear 1s forwards");
      $("#main-content1 .title").css({ "opacity": "0", "transform": "translateX(5rem)", "animation": "main-content1-action1 .4s linear .7s forwards" });
      $("#main-content1 .content1").css({ "opacity": "0", "transform": "translateX(5rem)", "animation": "main-content1-action1 .4s linear 1s forwards" });
      $("#main-content1 .content2").css({ "opacity": "0", "transform": "translateX(5rem)", "animation": "main-content1-action1 .4s linear 1.1s forwards" });
      
      $("#main-content2 .table").css({ "transform": "translateY(2rem)", "opacity": "0", "animation": "" });
      $("#main-content2 .tips").css({ "transform": "translateY(-1rem)", "opacity": "0", "animation": "" });

      $("#uav-TR7S .rotor").css({ "opacity": "0", "animation-play-state": "paused" });
      $("#uav-TR7S .rotor-box").css({ "opacity": "0"});
      
      $(".mask .TR7SLogo").css("opacity", "1");

      //设置计时器，播放无人机桨叶旋转动画
      clear(interval);
      var i = 0;
      interval.push(setInterval(() => {
        //$("#uav-TR7S").html(imglist[i]);
        $("#uav-TR7S .body").attr("src", TR7S[i]);
        if(i==29){
          i=0;
        }
        else{
          i++;
        }
      }, 30));

      setTimeout(() => {
        //清除原本的滚动事件，注册场景三的滚动事件
        $(document).off("mousewheel DOMMouseScroll").on("mousewheel DOMMouseScroll", throttle(sceneThreeScroll, 1000));
      }, 1400);
      
    }
  }
  //滚轮向上滚动
  else if (delta > 0) {
    if(count2 == strokeLength){
      if(count == strokeLength){
        $(document).off("mousewheel DOMMouseScroll").on("mousewheel DOMMouseScroll",uavMove);
      }
      else{
        count = count + 1;
        var currentLength = [];
        for(var i=0; i<4; i++){
          currentLength[i] = pathLength[i] * (count / strokeLength);
          path[i].style.strokeDashoffset = currentLength[i];
        }
      }
    }
    else{
      count2 = count2 + 1;
      var currentLength = [];
      for(var i=4; i<path.length; i++){
        currentLength[i] = pathLength[i] * (count2 / strokeLength);
        path[i].style.strokeDashoffset = currentLength[i]
      }
      $("#uav2").css({"right": uav2[count2][0] + "rem", "bottom": uav2[count2][1] + "rem"});
      $("#uav3").css({"right": uav3[count2][0] + "rem", "bottom": uav3[count2][1] + "rem"});
      $("#uav4").css({"right": uav4[count2][0] + "rem", "bottom": uav4[count2][1] + "rem"});
      $("#uav5").css({"right": uav5[count2][0] + "rem", "bottom": uav5[count2][1] + "rem"});
    }
  }
}

var bottom = 41.5;
var width = 4.5;
var right = 42.1;
var height = 0;
var scrollDelta = 120;
//顶部无人机控制函数
function uavMove (e) {
  closeNavMenu ()
  var delta = (-e.originalEvent.detail) || (e.originalEvent.wheelDelta);
  if(delta < 0) {
    if(bottom>23.5 && bottom<=41.5){
      scrollDelta = -120;
      bottom += scrollDelta / 120;
      right -= scrollDelta / 2700;
      width += scrollDelta / 1440;
      height += 1;
      $("#uav1").css({ "bottom": bottom + "rem", "right": right + "rem", "width": width + "rem" });
      $(".light img").css("opacity", height/18);
    }
    else{
      $(document).off("mousewheel DOMMouseScroll").on("mousewheel DOMMouseScroll",throttle(uavMovingLine,30));
    }
  }

  if (delta > 0) {
    if(bottom>=23.5 && bottom<41.5){
      scrollDelta = 120;
      bottom += scrollDelta / 120;
      right -= scrollDelta / 2700;
      width += scrollDelta / 1440;
      height += -1;
      $("#uav1").css({ "bottom": bottom + "rem", "right": right + "rem", "width": width + "rem" });
      $(".light img").css("opacity", height/18);
    }
    else if(bottom>=41.5){
      $(document).off("mousewheel DOMMouseScroll");
      setTimeout(() => {
        currentNavIndex--;
        $("#item2 .pic").css("opacity","1");
        $("#item2").children().css("transform","translate(0,0)");
        $("#scene-two ul").css({"transform": "translateX(0)", "opacity":"1"});
        $(".pic-item:eq(0), .pic-item:eq(2), .pic-item:eq(3)").children().css("transform","translate(0,0)");

        $(".content-box section").removeClass("active-in");
        $(".content-box section").removeClass("active-out");
        $("#content4").addClass("active-in");

        $("#uavGroup").children().css({ "animation": "", "opacity": "0" });
        $("#uavGroup .title .line").css("animation", "");
        $("#uavGroup .title #p1").css("animation", "");
        $("#uavGroup .title #p2").css("animation", "");

        $(".background-rise-item").css({ "animation": "", "opacity": "0" });
        $(".building").children().css({ "animation": "", "opacity": "0" });
        $(".car").css({ "animation": "", "opacity": "" });
        $("#river-mask").css("animation", "");
        $("#uav1").css({"bottom":"55rem", "animation":""});

        $("#scene-one .mask").show();
        $(document).on("mousewheel DOMMouseScroll", throttle(scrollFun, 1000));
      }, 600);
    }
  }
}

var RH1ImagesIndex = 0;
//场景三的滚动函数
function sceneThreeScroll (e) {
  closeNavMenu ()
  var delta = (-e.originalEvent.detail) || (e.originalEvent.wheelDelta);
  //滚轮向下滚动
  if (delta < 0) {

    $("#scene-three .mask").css({"width":"72.5%", "animation": "scene-three-mask-type2 0.5s ease 0.5s forwards"});
    $("#main-content1 .title").css({"opacity": "1", "transform": "translateX(0)", "animation": "main-content1-action2 0.3s linear 0s forwards"});
    $("#main-content1 .content1").css({"opacity": "1", "transform": "translateX(0)", "animation": "main-content1-action2 0.3s linear .1s forwards"});
    $("#main-content1 .content2").css({ "opacity": "1", "transform": "translateX(0)", "animation": "main-content1-action2 0.3s linear .2s forwards" });
    
    $(document).off("mousewheel DOMMouseScroll");
    $("#scene-three .TR7SFont").css({ "opacity": "1", "transform":"translateX(0)", "animation": "TR7S-font-action1 15s linear 0s infinite" });

    setTimeout(() => {

      $(document).off("mousewheel DOMMouseScroll");

      //TR7S旋转移动到右侧
      clear(interval);
      var i = 30
      interval.push(setInterval(() => {
        //$("#uav-TR7S").html(imglist[i]);
        $("#uav-TR7S .body").attr("src", TR7S[i]);
        if(i==60){
          clear(interval);
        }
        else{
          i++;
        }
      }, 25));
      $("#uav-TR7S").css("animation", "uav-TR7S-action2 0.8s cubic-bezier(.13,.46,.66,.67) 0s forwards");
      $(".page-nav-part .nav-icon-btn div").css("border-top", "0.2rem solid #FFF");

      //TR7S右侧悬停
      setTimeout(() => {
        clear(interval)
        //$("#uav-TR7S .body").attr("src", "https://xyi-web.oss-cn-hangzhou.aliyuncs.com/imgs/index/TR7S/TR7S-last.png");
        $("#uav-TR7S .body").css("opacity", "0");
        $("#uav-TR7S .rotor-box").css({ "opacity": "1"});
        $("#uav-TR7S .rotor").css({ "opacity": "1", "animation-play-state": "running"});

        setTimeout(() => {
          //绑定第三场景RA3的控制函数
          $(document).off("mousewheel DOMMouseScroll").on("mousewheel DOMMouseScroll", throttle(sceneThreeScroll2, 1000));
          
          timeout.push(setTimeout(() => {
            $("#scene-three .TR7SFont").css({"transform":"translateX(-570%)", "animation": "TR7S-font-action2 30s linear 0s infinite"});
          }, 12450));

        }, 800);

      }, 750);

    }, 1000);

    $("#main-content2 .table").css({"transform":"translateY(2rem)", "opacity":"0", "animation": "content2-table-action1 0.4s ease 1.8s forwards"});
    $("#main-content2 .tips").css({"transform":"translateY(-1rem)", "opacity":"0", "animation": "content2-tips-action1 0.4s ease 2s forwards"});
  }

  //滚轮向上滚动
  if (delta > 0) {
    sceneThree = false;
    if (!sceneThree) {
      if(count2 == -1){
        count2 = 0;
        //$("#scene-three .mask").css("animation", "scene-three-mask-type2 0.5s ease 0s forwards");
        $(".page-nav-part .nav-icon-btn div").css("border-top", "0.2rem solid ##787C90");
        clear(interval);
        toPage(2);
      }
      setTimeout(() => {
        $("#scene-three .mask").css("width", "0");
        $(document).off("mousewheel DOMMouseScroll").on("mousewheel DOMMouseScroll", uavMovingLine);
      }, 800);
    }
  }
}

var contentPosition = [
  ["4%", "0"], ["6%", ".1"], ["8%", ".2"], ["10%", ".3"], ["12%", ".4"], ["14%", ".5"], ["16%", ".6"], ["18%", ".7"], ["20%", ".8"], ["22%", ".9"], ["24%", "1"],
  ["26%", "1"], ["28%", "1"], ["30%", "1"], ["32%", "1"], ["34%", "1"], ["36%", "1"], ["38%", ".9"], ["40%", ".7"], ["42%", ".6"], ["44%", ".5"], ["46%", ".4"],
  ["48%", ".3"], ["50%", ".2"], ["52%", ".1"], ["54%", "0"]
]

var sceneThreeIndex = 1;
//第三场景RA3控制函数
function sceneThreeScroll2 (e) {
  closeNavMenu ()
  var delta = (-e.originalEvent.detail) || (e.originalEvent.wheelDelta);
  //滚轮向下滚动
  if (delta < 0) {
    if (sceneThreeIndex == 1) {
      $(".mask .TR7SLogo").css("opacity", "0");
      $("#scene-three #RA3 .font").css({ "opacity": "0", "transform": "translateY(-100%)", "animation": "" });
      
      $("#main-content2 .table").css({"transform":"translateY(0)", "opacity":"1", "animation": "content2-table-action2 0.4s ease 0.2s forwards"});
      $("#main-content2 .tips").css({"transform":"translateY(0)", "opacity":".9", "animation": "content2-tips-action2 0.4s ease 0s forwards"});
  
      $("#scene-three .mask").css({ "width": "0", "z-index": "20", "background-color": "#EF8354", "animation": "scene-three-mask-type3 0.5s ease 0.5s forwards" });
      $("#main-content3 .title").css({ "opacity": "0", "transform": "translateX(5rem)", "animation": "main-content3-action1 0.3s linear 1s forwards"});
      $("#main-content3 .content1").css({ "opacity": "0", "transform": "translateX(5rem)", "animation": "main-content3-action1 0.3s linear 1.1s forwards"});
      $("#main-content3 .content2").css({ "opacity": "0", "transform": "translateX(5rem)", "animation": "main-content3-action1 0.3s linear 1.2s forwards" });
      setTimeout(() => {
        $("#scene-three .TR7SFont").css({ "opacity": "0", "transform": "translateX(0)", "animation": "" });
        $("#scene-three #RA3").css({ "opacity":"1", "transform": "scale(1)" });
        $("#scene-three #RA3 .rotor").css({ "animation-play-state": "running" });
        $("#uav-TR7S .rotor").css({ "opacity": "0", "animation-play-state": "paused" });
        $("#uav-TR7S .rotor-box").css({ "opacity": "0"});
      }, 800);
      //$("#scene-three #RA3 .body").css({ "animation": "RA3-action1 0.6s ease 0.8s forwards" });

      //防止动画播放的时候触发滚动事件，所以移除滚动事件
      $(document).off("mousewheel DOMMouseScroll");
      sceneThreeIndex = 2;
      setTimeout(() => {
        $(document).on("mousewheel DOMMouseScroll", throttle(sceneThreeScroll2, 1000));
      }, 1500);
    }
    else if (sceneThreeIndex == 2) {
      //防止动画播放的时候触发滚动事件，所以移除滚动事件
      $(document).off("mousewheel DOMMouseScroll");

      $("#scene-three #RA3 .font").css({ "opacity": "0", "transform":"translateY(-100%)", "animation": "" });
      $("#scene-three .TR7SFont").css({ "opacity": "0", "transform":"translateX(0)", "animation": "" });
      setTimeout(() => {
        $("#main-content4 .table").css({ "opacity": "1" });
        $("#scene-three #RA3 .font").css({ "opacity":"1", "animation": "RA3-font 30s linear 0s infinite forwards"});
      }, 700);
      $("#scene-three #RA3").css({ "animation": "RA3-action2 1s cubic-bezier(.37,.01,.44,.99) .7s forwards" });
      $("#main-content4").css({ "animation": "content4-table-action1 0.8s cubic-bezier(.37,.01,.44,.99) .7s forwards" });
      $("#scene-three .mask").css({ "width": "65%", "z-index": "20", "background-color": "#EF8354", "animation": "scene-three-mask-type4 0.3s ease 0.5s forwards" });
      $("#main-content3 .title").css({ "opacity": "1", "transform": "translateX(0)", "animation": "main-content3-action2 0.3s linear 0s forwards" });
      $("#main-content3 .content1").css({ "opacity": "1", "transform": "translateX(0)", "animation": "main-content3-action2 0.3s linear .1s forwards" });
      $("#main-content3 .content2").css({ "opacity": "1", "transform": "translateX(0)", "animation": "main-content3-action2 0.3s linear .2s forwards" });
      sceneThreeIndex = 3;

      setTimeout(() => {
        $(document).on("mousewheel DOMMouseScroll", throttle(sceneThreeScroll2,1000));
      }, 2000);
    }
    else if (sceneThreeIndex == 3) {
      //防止动画播放的时候触发滚动事件，所以移除滚动事件
      $(document).off("mousewheel DOMMouseScroll");

      setTimeout(() => {
        $(".page-nav-part .nav-icon-btn div").css("border-top", "0.2rem solid #787C90");
      }, 500);

      setTimeout(() => {
        //RA3移动到无人站上
        clear(interval)
        var m = 0;
        interval.push(setInterval(() => {
          //$("#main-content5-RA3").html(imglist3[m]);
          $("#main-content5-RA3 img").attr("src",RA3_2[m]);
          if(m == RA3_2.length-1){
            clear(interval);
          }
          else{
            m++;
          }
        }, 20));
        $("#scene-three #RA3 .rotor").css({ "animation-play-state": "paused" });
        $("#main-content5-RA3").css({ "animation": "main-content5-RA3-action1 1.5s ease-out 0s forwards" });
        $("#main-content5-RA3-shadow1").css({ "animation": "main-content5-RA3-shadow1 1.5s ease-out 0s forwards" });
        $("#main-content5-RA3-shadow2").css({ "animation": "main-content5-RA3-shadow2 1.5s ease-out 0s forwards" });
        $("#main-content6 .RH1Font").css({ "opacity":"1", "animation-play-state": "running" });

        setTimeout(() => {
          $("#scene-three #RA3 .font").css({ "animation": ""});
          $("#main-content5-RA3").css({ "animation": "main-content5-RA3-action2 1s ease-out 0s forwards" });
          $("#main-content5-RA3-shadow2").css({ "animation": "main-content5-RA3-shadow3 1s ease-out 0s forwards" });
        }, 1500);

        setTimeout(() => {
          $(document).on("mousewheel DOMMouseScroll", throttle(sceneThreeScroll2,20));
        }, 2000);

      }, 2000);
      
      $("#main-content5-RA3").css("opacity", "1");
      $("#RH1").css("opacity", "1");

      $("#scene-three #RA3").css({ "animation": "RA3-action3 .5s ease-out 0s forwards" });
      $("#main-content4 .table").css({ "animation": "content4-table-action2 .5s ease-out 0s forwards" });
      $("#main-content5").css("animation", "main-content5-action1 0.5s ease-out 0.5s forwards");

      $("#main-content6 .title").css({ "opacity": "0", "transform": "translateX(5rem)", "animation": "main-content6-action1 0.3s linear 1s forwards"});
      $("#main-content6 .content1").css({ "opacity": "0", "transform": "translateX(5rem)", "animation": "main-content6-action1 0.3s linear 1.1s forwards"});
      $("#main-content6 .content2").css({ "opacity": "0", "transform": "translateX(5rem)", "animation": "main-content6-action1 0.3s linear 1.2s forwards" });

      sceneThreeIndex = 4;
    }
    else if (sceneThreeIndex == 4) {
      if (RH1ImagesIndex == 0) {
        RH1ImagesIndex++;
        $("#scene-three #RA3 .font").css({ "opacity": "0", "transform":"translateY(-100%)", "animation": "" });
        $(".RH1").css("display", "block");
        $("#main-content5-RA3, #RH1").css("opacity", "0");
        $("#main-content6 .title").css({ "opacity": "1", "transform": "translateX(0)", "animation": "main-content6-action2 0.3s linear 0s forwards"});
        $("#main-content6 .content1").css({ "opacity": "1", "transform": "translateX(0)", "animation": "main-content6-action2 0.3s linear 0.1s forwards"});
        $("#main-content6 .content2").css({ "opacity": "1", "transform": "translateX(0)", "animation": "main-content6-action2 0.3s linear 0.2s forwards" });
        $("#main-content6 .RH1Font").css({ "opacity":"0", "transform":"translateX(700%)", "animation-play-state": "paused" });
      }
      else if(RH1ImagesIndex != 0 && RH1ImagesIndex < 25){
        //$(".RH1").html(imglist4[RH1ImagesIndex]); 
        $(".RH1 img").attr("src",RH1[RH1ImagesIndex]); 
        $("#main-content7 .table").css({ "bottom": contentPosition[RH1ImagesIndex][0], "opacity": contentPosition[RH1ImagesIndex][1] });
        RH1ImagesIndex++;
      }
      else if (RH1ImagesIndex == 25) {
        $(document).off("mousewheel DOMMouseScroll");
        //$(".RH1").html(imglist5[0]);
        $(".RH1").css({ "transform": "scale(1.6) translate(-4%, -39.5%)" });
        $(".RH1 img").attr("src",RH1_2[0]);
        clear(interval);
        setTimeout(() => {
          var n = 1;
          interval.push(setInterval(() => {
            //$(".RH1").html(imglist5[n]);
            $(".RH1 img").attr("src", RH1_2[n]);
            if(n == RH1_2.length-50){
              $("#main-content8 .title").css({ "opacity": "0", "transform": "translateX(5rem)", "animation": "main-content8-action1 0.3s linear 0s forwards"});
              $("#main-content8 .content1").css({ "opacity": "0", "transform": "translateX(5rem)", "animation": "main-content8-action1 0.3s linear 0.1s forwards" });
              $("#main-content8 .content2").css({ "opacity": "0", "transform": "translateX(5rem)", "animation": "main-content8-action1 0.3s linear 0.2s forwards"});
            }
            if(n == RH1_2.length-1){
              clear(interval);
            }
            else{
              n++;
            }
          }, 50));
          $(".RH1").css({ "transform": "scale(1.6) translate(-4%, -39.5%)", "animation": "RH1-action 1.6s cubic-bezier(.51,.03,.82,1.01) 0s forwards" });
          $("#main-content5").css("animation", "main-content5-action2 0.5s ease-out 0s forwards");
          setTimeout(() => {
            $(".RH1-shadow").css("opacity", "1");
          }, 500);
         
          setTimeout(() => {
            $(document).on("mousewheel DOMMouseScroll", throttle(sceneThreeScroll2, 1000));
            //$(".page-footer-part").css("display", "block");
          }, 4000);

          RH1ImagesIndex ++;
        }, 10);
      }
      else if (RH1ImagesIndex == 26) {
        $(".RH1").css("animation", "RH1-action2 0.5s ease 0s forwards");
        $("#main-content8").css("animation", "main-content8-action3 0.5s ease 0s forwards");
        $(".page-footer-part").css("bottom", "0");
        RH1ImagesIndex = 27;
      }
    }
  }

  //滚轮向上滚动
  if (delta > 0) {
    sceneThree = false;
    if (!sceneThree) {
      if (sceneThreeIndex == 4) {
        if (RH1ImagesIndex != 0 && RH1ImagesIndex < 25) {
          RH1ImagesIndex--;

          $(".RH1 img").attr("src",RH1[RH1ImagesIndex]);
          $("#main-content7 .table").css({ "bottom": contentPosition[RH1ImagesIndex][0], "opacity": contentPosition[RH1ImagesIndex][1] });
        }
        else if (RH1ImagesIndex == 0) {
          $(".RH1").css({ "display": "none","transform":"scale(1.185) translate(-7.2%, -37%)"});
          $("#main-content5-RA3, #RH1").css("opacity", "1");
          $("#main-content6 .title").css({ "opacity": "0", "transform": "translateX(-5rem)", "animation": "main-content6-action1 0.3s linear 0s forwards"});
          $("#main-content6 .content1").css({ "opacity": "0", "transform": "translateX(-5rem)", "animation": "main-content6-action1 0.3s linear 0.1s forwards"});
          $("#main-content6 .content2").css({ "opacity": "0", "transform": "translateX(-5rem)", "animation": "main-content6-action1 0.3s linear 0.2s forwards" });
          $(document).off("mousewheel DOMMouseScroll");

          setTimeout(() => {
            if (count2 == -1) {
              count2 = 0;
              toPage(2);
              $(".page-nav-part .nav-icon-btn div").css("border-top", "0.2rem solid #787C90");
              clear(interval);
              sceneThreeIndex = 1;
            }
            
            setTimeout(() => {
              $(document).off("mousewheel DOMMouseScroll").on("mousewheel DOMMouseScroll", uavMovingLine);
            }, 500);

          }, 500);
        }
        else if (RH1ImagesIndex == 26) {
          if (count2 == -1) {
            count2 = 0;
            toPage(2);
            $(".page-nav-part .nav-icon-btn div").css("border-top", "0.2rem solid #787C90");
            $(".RH1-shadow").css("opacity", "0");
            clear(interval);
            sceneThreeIndex = 1;
            RH1ImagesIndex = 0;
          }

          setTimeout(() => {
            $(document).off("mousewheel DOMMouseScroll").on("mousewheel DOMMouseScroll", uavMovingLine);
          }, 500);
        }
        else if (RH1ImagesIndex == 27) {
          $(".RH1").css("animation", "RH1-action3 0.5s ease 0s forwards");
          $("#main-content8").css("animation", "main-content8-action4 0.5s ease 0s forwards");
          $(".page-footer-part").css("bottom", "-13.2rem");
          RH1ImagesIndex = 26;
        }
      }
      else if (sceneThreeIndex == 3) {
        if (count2 == -1) {
          count2 = 0;
          toPage(2);
          $(".page-nav-part .nav-icon-btn div").css("border-top", "0.2rem solid #787C90");
          $("#scene-three .mask").css({ "width": "100%" });
          clear(interval);
          $(document).off("mousewheel DOMMouseScroll").on("mousewheel DOMMouseScroll", uavMovingLine);
          sceneThreeIndex = 1;
        }
      }
      else if (sceneThreeIndex == 2) {
        if (count2 == -1) {
          count2 = 0;
          toPage(2);
          $(".page-nav-part .nav-icon-btn div").css("border-top", "0.2rem solid #787C90");
          $("#scene-three .mask").css({ "width": "65%" });
          clear(interval);
          $(document).off("mousewheel DOMMouseScroll").on("mousewheel DOMMouseScroll", uavMovingLine);
          sceneThreeIndex = 1;
        }
      }
      else if (sceneThreeIndex == 1) {
        if (count2 == -1) {
          count2 = 0;
          toPage(2);
          $("#scene-three .mask").css({ "width": "72.5%" });
          $(".page-nav-part .nav-icon-btn div").css("border-top", "0.2rem solid #787C90");
          $("#scene-three .TR7SFont").css({ "opacity": "0", "transform": "translateX(0)", "animation": "" });
          clearTout(timeout);
          clear(interval);
          $(document).off("mousewheel DOMMouseScroll").on("mousewheel DOMMouseScroll", uavMovingLine);
          sceneThreeIndex = 1;
        }
      }
      //$(document).off("mousewheel DOMMouseScroll").on("mousewheel DOMMouseScroll",sceneThreeScroll);
    }
  }
}

//关闭导航菜单
function closeNavMenu () {
  if (sessionStorage.getItem("navStatus") == "true") {
    $(".page-nav-part .nav-icon-btn .btn-line1").css("transform", "rotate(0deg)");
    $(".page-nav-part .nav-icon-btn .btn-line2").css("transform", "rotate(0deg)");
    $(".page-nav-part").css("right", "-23.75rem");
    $(".page-nav-part .nav-icon-btn div").css("border-top", "0.2rem solid " + sessionStorage.getItem("color"));
    $(".page-nav-part .nav-background").css("display", "none");
    sessionStorage.setItem("navStatus", false);
  }
}

//清除所有定时器
function clear(array) {
  for (var i = 0; i < array.length; i++){
    if (typeof array[i] !== 'undefined') {
      clearInterval(array[i]);
    }
  }
}

function clearTout(array) {
  for (var i = 0; i < array.length; i++){
    if (typeof array[i] !== 'undefined') {
      clearTimeout(array[i]);
    }
  }
}

//页面跳转函数
function toPage(idx) {
  //jquery实现动画效果
  if(idx != curIndex){
    index = idx
    var delta = idx - curIndex;
    now = now - delta * hei;        
    $("#main").animate({
        top: (now + 'px')
    }, 500);
    curIndex = idx;
  }
}

//场景二导航切换函数
function switchNav(idx,firstFlag){
  setTimeout(function(){
    $("#scene-two li").removeClass("active");
    $("#nav"+idx).addClass("active");
  },200)
  if(idx==1 && firstFlag){
    $(".content-box section").removeClass("active-in");
    $(".content-box section").removeClass("active-out");
    setTimeout(function(){
      $("#content1").show().addClass("active-in");
    },1000)
  }
  if(idx>=1 && !firstFlag){
    $(".content-box section").removeClass("active-in");
    $(".content-box section").removeClass("active-out");
    $("#content"+(idx-1)).addClass("active-out");
    setTimeout(function(){
      $("#content"+idx).show().addClass("active-in");
    },400)
    setTimeout(function(){
      $(".content-box section").hide()
      $("#content"+idx).show()
    },600)
  }
  setTimeout(function () {
    changeBackground.fn(idx);
    changeStyle.fn(idx,"pic");
    changeStyle.fn(idx,"station");
    changeStyle.fn(idx,"ground-top");
    changeStyle.fn(idx,"ground-bottom");
  },200)
}


//还原属性
function reduction() {
  $(".RH1").attr("src","https://xyi-web.oss-cn-hangzhou.aliyuncs.com/imgs/index/RH1/rh1/智能机场RH1-20191028-adnet - 官网首页.131.1.png");
  $(".RH1").css({ "display": "none", "transform": "scale(1.185) translate(-7.2%, -37%)", "animation": "" });
  $("#main-content7 .table").css({ "bottom": "4%", "opacity": "0" });
  $("#main-content8 .title").css({ "opacity": "0", "transform": "translateX(5rem)", "animation": ""});
  $("#main-content8 .content1").css({ "opacity": "0", "transform": "translateX(5rem)", "animation": "" });
  $("#main-content8 .content2").css({ "opacity": "0", "transform": "translateX(5rem)", "animation": ""});
  
  $("#RH1").css("opacity", "0");
  $("#main-content5-RA3").css({ "opacity": "0", "animation": "" });
  $("#main-content5-RA3-shadow1").css({ "animation": "" });
  $("#main-content5-RA3-shadow2").css({ "animation": "" });
  $("#main-content4 .table").css({"animation":"", "opacity": "0" });
  $("#main-content4").css({ "width":"12%", "animation": "" });
  $("#main-content5").css("animation", "");
  $("#main-content6 .title").css({ "opacity": "0", "transform": "translateX(5rem)", "animation": ""});
  $("#main-content6 .content1").css({ "opacity": "0", "transform": "translateX(5rem)", "animation": ""});
  $("#main-content6 .content2").css({ "opacity": "0", "transform": "translateX(5rem)", "animation": "" });
  $("#main-content6 .RH1Font").css({ "opacity":"0", "animation-play-state": "paused" });


  $("#scene-three #RA3").css({ "opacity":"0", "left": "5%", "animation": "", "transform": "scale(0)" });
  $("#scene-three .TR7SFont").css({ "opacity": "0", "transform":"translateX(0)", "animation": "" });
  $("#scene-three #RA3 .rotor").css({ "animation-play-state": "paused" });
  
  $("#main-content2 .table").css({"transform":"translateY(2rem)", "opacity":"0", "animation": ""});
  $("#main-content2 .tips").css({ "transform": "translateY(-1rem)", "opacity": "0", "animation": "" });
  $("#main-content3 .title").css({ "opacity": "0", "transform": "translateX(5rem)", "animation": ""});
  $("#main-content3 .content1").css({ "opacity": "0", "transform": "translateX(5rem)", "animation": ""});
  $("#main-content3 .content2").css({ "opacity": "0", "transform": "translateX(5rem)", "animation": "" });
  $("#scene-three .mask").css({ "width": "0", "z-index": "5", "background-color": "#fff", "animation": "" });
}

//改变背景透明度
var changeBackground = {
  fn: function (idx) {
    $("#scene-two .background-img").css("opacity", "0");
    $("#scene-two #background-img" + idx).css("opacity", "1");
  }
}

//场景二导航样式更改
var changeStyle = {
  picPosition: {
    1: {right: '13.5rem', bottom: "12rem", width: '28.05rem', height: '20.832rem'},
    2: {right: '-5.758rem', bottom: '2.5rem', width: '19.8rem', height: '14.705rem'},
    3: {right: '-28.791rem', bottom: '11.6rem', width: '19.8rem', height: '14.705rem'},
    4: {right: '-5.758rem', bottom: '25.1rem', width: '19.8rem', height: '14.705rem'}
  },
  stationPosition: {
    1: {right: '33.887rem', bottom: '20.809rem', width: '5.653rem', height: '4.959rem'},
    2: {right: '8.637rem', bottom: '8.3062rem', width: '3.99rem', height: '3.5rem'},
    3: {right: '-14.395rem', bottom: '18.52rem', width: '3.99rem', height: '3.5rem'},
    4: {right: '8.637rem', bottom: '31.731rem', width: '3.99rem', height: '3.5rem'}
  },
  groundTopPosition: {
    1: {right: '13.436rem', bottom: '13.218rem', width: '28.05rem', height: '17rem'},
    2: {right: '-5.758rem', bottom: '3.461rem', width: '19.8rem', height: '12rem'},
    3: {right: '-28.791rem', bottom: '13.218rem', width: '19.8rem', height: '12rem'},
    4: {right: '-5.758rem', bottom: '26.889rem', width: '19.8rem', height: '12rem'}
  },
  groundBottomPosition: {
    1: {right: '13.436rem', bottom: '12.272rem', width: '28.05rem', height: '17.946rem'},
    2: {right: '-5.758rem', bottom: '2.793rem', width: '19.8rem', height: '12.668rem'},
    3: {right: '-28.791rem', bottom: '12.55rem', width: '19.8rem', height: '12.668rem'},
    4: {right: '-5.758rem', bottom: '26.221rem', width: '19.8rem', height: '12.668rem'}
  },
  fn: function(idx,className){
    let arr = "1";
    if(className=='pic'){
      arr = this.picPosition;
    }
    else if(className=='station'){
      arr = this.stationPosition;
    }
    else if(className=="ground-top"){
      arr = this.groundTopPosition;
    }
    else if(className="ground-bottom"){
      arr = this.groundBottomPosition;
    }
    for(var i=1;i<5;i++){
      $("#item"+i+" ."+className).css(arr[(idx + i - 1) % 4 == 0 ? 4 : (idx + i - 1) % 4]);
    }
  }
}