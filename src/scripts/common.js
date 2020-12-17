/*
 * @Description:
 * @Author: linjia
 * @Date: 2020-05-15 16:44:12
 * @LastEditors: hezhijie
 * @LastEditTime: 2020-10-14 15:36:01
 */

function IsPC() {
  var userAgentInfo = navigator.userAgent;
  console.log(userAgentInfo);
  var Agents = ["Android", "iPhone",
              "SymbianOS", "Windows Phone",
              "iPad", "iPod", "Mobile"];
  var flag = true;
  for (var v = 0; v < Agents.length; v++) {
      if (userAgentInfo.indexOf(Agents[v]) > 0) {
          flag = false;
          break;
      }
  }
  return flag;
}

//var baseUrl = 'http://antlink.xyitech.com/';
var baseUrl = 'https://cloud.xyitech.com/';
(function () {
  var flag = IsPC(); //true为PC端，false为手机端

  if(!flag){
    window.location.href='http://mobile.antwork.link/build/pages/index.html';
  }

  $('.look-more').on('click', function () {
    var scrollHeight = $(this).siblings()[0].scrollHeight;
    $($(this).siblings()).css('height', scrollHeight + 'px');
    $(this).hide();
  });
  var header = `
  <div class="nav-background"></div>
  <div class="nav-icon-btn">
    <div class="btn-line1"></div>
    <div class="btn-line2"></div>
  </div>
  <div class="nav-content">
    <div class="change-language">
      <span class="zh-CN">中</span>
      /
      <span class="en">En</span>
    </div>
    <ul class="main-content-ul">
      <li>
        <h1><a id="home-page" href="index.html">首页</a></h1>
      </li>
      <li>
        <h1 class="title" id="media">媒体</h1>
        <div class="section" id="section1">
          <a class="section-item" id="news-center" href="otherInfo.html#news-center">
            <p>新闻中心</p>
            <div class="rec"></div>
          </a>
          <a class="section-item" id="media-report" href="otherInfo.html#media-report">
            <p>媒体报道</p>
            <div class="rec"></div>
          </a>
          <a class="section-item" id="source-download" href="otherInfo.html#source-download">
            <p>资料下载</p>
            <div class="rec"></div>
          </a>
        </div>
      </li>
      <li>
        <h1 class="title" id="about">关于</h1>
        <div class="section" id="section2">
          <a class="section-item" id="introduction" href="introduction.html">
            <p>迅蚁介绍</p>
            <div class="rec"></div>    
          </a>
          <a class="section-item" id="joinUs" href="joinUs.html">
            <p>加入我们</p>
            <div class="rec"></div>
          </a>
        </div>
      </li>
    </ul>
    <ul class="contact-img-ul">
        <li><a target="_blank" href="https://www.facebook.com/Antworkchina/"><img src="imgs/contact/facebook.png" alt=""></a></li>
        <li>
          <img src="imgs/contact/officewebsite_share_wechat-btn.svg" alt="">
          <div class="erweima_photo">
            <img src="https://xyi-mobile.oss-cn-hangzhou.aliyuncs.com/erweima.jpg" alt="二维码"/>
            <div class="triangle"></div>
          </div>
        </li>
        <li><a target="_blank" href="https://weibo.com/u/5897788137"><img src="imgs/contact/officewebsite_share_microblog-btn.svg" alt=""></a></li>
        <li><a target="_blank" href="https://i.youku.com/i/UNDgyMDg5ODkwNA==?spm=a2hww.11359951.uerCenter.5!6~5!2~A"><img src="imgs/contact/officewebsite_share_youku-btn.svg" alt=""></a></li>
        <li><a target="_blank" href="https://www.youtube.com/channel/UCu3ue5JZbTElBc55cq-Ba9A?reload=9"><img src="imgs/contact/officewebsite_share_youtube-btn.svg" alt=""></a></li>
      </ul>
  </div>`;

  //var navStatue = false;
  sessionStorage.setItem("navStatus", false);
  $('.page-nav-part').html(header);
  navBtnClick();
  function navBtnClick () {
    $('.page-nav-part .nav-icon-btn').on('click', function () {
      if (sessionStorage.getItem("navStatus") == "false") {
        $(".page-nav-part .nav-icon-btn .btn-line1").css("transform", "rotate(-45deg)");
        $(".page-nav-part .nav-icon-btn .btn-line2").css("transform", "rotate(-135deg)");
        $(".page-nav-part").css("right", "0");
        $(".page-nav-part .nav-icon-btn div").css("border-top", "0.2rem solid #FFF");
        $(".page-nav-part .nav-background").css("display", "block");
        var colorArr = $(".page-nav-part .nav-icon-btn div").css("border-top").split(" ");
        var color = colorArr[2] + colorArr[3] + colorArr[4];
        sessionStorage.setItem("color", color);
        sessionStorage.setItem("navStatus", true);
      }
      else {
        $(".page-nav-part .nav-icon-btn .btn-line1").css("transform", "rotate(0deg)");
        $(".page-nav-part .nav-icon-btn .btn-line2").css("transform", "rotate(0deg)");
        $(".page-nav-part").css("right", "-23.75rem");
        $(".page-nav-part .nav-icon-btn div").css("border-top", "0.2rem solid " + sessionStorage.getItem("color"));
        $(".page-nav-part .nav-background").css("display", "none");
        sessionStorage.setItem("navStatus", false);
      }
    });
  }

  $("#home-page").on("click",function () {
    sessionStorage.removeItem("item-id");
  })

  $(".page-nav-part .nav-content .title").hover(
    function () {
      $(".page-nav-part .section").removeClass("section-active");
      $(this).parent().find(".section").css({ "height": "10rem", "overflow": "auto" });
    },
    function() {
      $(this).parent().find(".section").css({ "height": "0", "overflow": "hidden" });
    }
  )

  $(".page-nav-part .nav-content .section").hover(
    function () {
      $(".page-nav-part .section").removeClass("section-active");
      $(this).css({ "height": "10rem", "overflow": "auto" });
    },
    function() {
      $(this).css({ "height": "0", "overflow": "hidden" });
    }
  )

  $(".page-nav-part .section-item").on("click", function () {
    $(".page-nav-part .section").removeClass("section-active");
    $(".page-nav-part .section-item .rec").removeClass("active");
    $(this).children(".rec").addClass("active");
    $(this).parent().addClass("section-active");
    sessionStorage.setItem("item-id", $(this).attr("id"));
  })

  $(".page-nav-part .nav-background").on("click", function () {
    $(".page-nav-part .nav-icon-btn .btn-line1").css("transform", "rotate(0deg)");
    $(".page-nav-part .nav-icon-btn .btn-line2").css("transform", "rotate(0deg)");
    $(".page-nav-part").css("right", "-23.75rem");
    $(".page-nav-part .nav-icon-btn div").css("border-top", "0.2rem solid " + sessionStorage.getItem("color"));
    $(".page-nav-part .nav-background").css("display", "none");
    navStatue = false;
  })

  if (sessionStorage.getItem("item-id") != null) {
    var itemId = sessionStorage.getItem("item-id");
    console.log(itemId);
    document.getElementById(itemId).children[1].classList.add("active");
    document.getElementById(itemId).parentNode.classList.add("section-active");
  }
  // $('.page-nav-part .close-nav-btn').on('click', function name() {
  //   $('.page-nav-part .nav-content').hide();
  //   $('.page-nav-part').css('height', 'auto');
  //   $('.page-nav-part .nav-icon-btn').show();
  // });

  $("#section1 .section-item").click(function (params) {
    var name = $(this).attr("id");
    //window.location.reload();
    $(".tab-ul ." + name).click();
  })

  var footer = `<div class="page-footer">
    <ul class="content-link-ul">
      <li class="logo">
        <img src="imgs/pure-logo.png" alt="logo">
      </li>
      <li class="media-li">
        <span class="title i18n" name="media">媒体</span>
        <ul>
          <li><a href="otherInfo.html#news-center" class="i18n" name="news-center">新闻中心</a></li>
          <li><a href="otherInfo.html#media-report" class="i18n" name="media-report">媒体报道</a></li>
          <li><a href="otherInfo.html#source-download" class="i18n" name="source-download">资源下载</a></li>
        </ul>
      </li>
      <li>
        <span class="title i18n" name="about">关于</span>
        <ul>
          <li><a href="introduction.html" class="i18n" name="introduction">迅蚁介绍</a></li>
          <li><a href="joinUs.html" class="i18n" name="join-us">加入我们</a></li>
        </ul>
      </li>
    </ul>
    <div class="contact-part">
      <ul class="contact-img-ul">
        <li><a target="_blank" href="https://www.facebook.com/Antworkchina/"><img src="imgs/contact/facebook.png" alt=""></a></li>
        <li>
          <img src="imgs/contact/officewebsite_share_wechat-btn.svg" alt="">
          <div class="erweima_photo">
            <img src="https://xyi-mobile.oss-cn-hangzhou.aliyuncs.com/erweima.jpg" alt="二维码"/>
            <div class="triangle"></div>
          </div>
        </li>
        <li><a target="_blank" href="https://weibo.com/u/5897788137"><img src="imgs/contact/officewebsite_share_microblog-btn.svg" alt=""></a></li>
        <li><a target="_blank" href="https://i.youku.com/i/UNDgyMDg5ODkwNA==?spm=a2hww.11359951.uerCenter.5!6~5!2~A"><img src="imgs/contact/officewebsite_share_youku-btn.svg" alt=""></a></li>
        <li><a target="_blank" href="https://www.youtube.com/channel/UCu3ue5JZbTElBc55cq-Ba9A?reload=9"><img src="imgs/contact/officewebsite_share_youtube-btn.svg" alt=""></a></li>
      </ul>
      <ul class="contact-text-ul">
        <li>
          <img src="imgs/contact/officewebsite_phone_icon.svg" alt="">
          86 571-8851823
        </li>
        <li>
          <img src="imgs/contact/officewebsite_emile_icon.svg" alt="">
          market@antwork.link
        </li>
      </ul>
    </div>
  </div>
  <div class="copy-right">@ 2019 Antwork Ltd. All rights reserved. <a target="_blank" href="https://www.beian.miit.gov.cn/">浙ICP备16018944号</a></div>`;
  $('.page-footer-part') && $('.page-footer-part').html(footer);
})();
