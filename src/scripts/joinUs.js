/*
 * @Description: 
 * @Author: hezhijie
 * @Date: 2020-09-09 20:31:51
 * @LastEditors: hezhijie
 * @LastEditTime: 2020-10-16 10:39:00
 */
$(window).scroll(function (e) {
  var scrollTop = $(window).scrollTop() + 4;
  if (scrollTop >= $(window).height()) {
    $(".page-nav-part .nav-icon-btn div").css("border-top", "0.2rem solid #787C90");
  }
  else {
    $(".page-nav-part .nav-icon-btn div").css("border-top", "0.2rem solid #FFF");
  }
});

$(document).ready(function () {
  if (sessionStorage.getItem("language") == "en") {
    $(".jobInformation").html("Job Information");
  }
  else {
    $(".jobInformation").html("岗位信息");
  }
});