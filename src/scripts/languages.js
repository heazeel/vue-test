/*
 * @Description: 多语言
 * @Author: linjia
 * @Date: 2020-05-18 09:37:31
 * @LastEditors: hezhijie
 * @LastEditTime: 2020-10-16 10:14:32
 */

var getCookie = function (name, value, options) {
  if (typeof value != 'undefined') {
    // name and value given, set cookie
    options = options || {};
    if (value === null) {
      value = '';
      options.expires = -1;
    }
    var expires = '';
    if (
      options.expires &&
      (typeof options.expires == 'number' || options.expires.toUTCString)
    ) {
      var date;
      if (typeof options.expires == 'number') {
        date = new Date();
        date.setTime(date.getTime() + options.expires * 24 * 60 * 60 * 1000);
      } else {
        date = options.expires;
      }
      expires = '; expires=' + date.toUTCString(); // use expires attribute, max-age is not supported by IE
    }
    var path = options.path ? '; path=' + options.path : '';
    var domain = options.domain ? '; domain=' + options.domain : '';
    // var s = [cookie, expires, path, domain, secure].join('');
    var secure = options.secure ? '; secure' : '';
    var c = [name, '=', encodeURIComponent(value)].join('');
    var cookie = [c, expires, path, domain, secure].join('');
    document.cookie = cookie;
  } else {
    // only name given, get cookie
    var cookieValue = null;
    if (document.cookie && document.cookie != '') {
      var cookies = document.cookie.split(';');
      for (var i = 0; i < cookies.length; i++) {
        var _cookie = jQuery.trim(cookies[i]);
        // Does this cookie string begin with the name we want?
        if (_cookie.substring(0, name.length + 1) == name + '=') {
          cookieValue = decodeURIComponent(_cookie.substring(name.length + 1));
          break;
        }
      }
    }
    return cookieValue;
  }
};

/**
 * 获取浏览器语言类型
 * @return {string} 浏览器国家语言
 */
var getNavLanguage = function () {
  if (navigator.appName == 'Netscape') {
    var navLanguage = navigator.language;
    return navLanguage.substr(0, 2);
  }
  return false;
};

/**
 * 设置语言类型： 默认为中文
 */
var i18nLanguage = 'zh-CN';

/*
设置一下网站支持的语言种类
*/
var webLanguage = ['zh-CN', 'en'];

/**
 * 执行页面i18n方法
 * @return
 */

var execI18n = function () {
  /*
  获取一下资源文件名
   */
  var optionEle = $('#i18n_pagename');
  if (optionEle.length < 1) {
    console.log(
      '未找到页面名称元素，请在页面写入\n <meta id="i18n_pagename" content="页面名(对应语言包的语言文件名)">'
    );
    return false;
  }
  var sourceName = optionEle.attr('content');
  sourceName = sourceName.split(',');
  console.log('sourceName', sourceName)
  /*
    首先获取用户浏览器设备之前选择过的语言类型
  */
  if (getCookie('userLanguage')) {
    i18nLanguage = getCookie('userLanguage');
    sessionStorage.setItem("language", i18nLanguage);
  } else {
    // 获取浏览器语言
    var navLanguage = getNavLanguage();
    if (navLanguage) {
      // 判断是否在网站支持语言数组里
      var charSize = $.inArray(navLanguage, webLanguage);
      if (charSize > -1) {
        i18nLanguage = navLanguage;
        sessionStorage.setItem("language", i18nLanguage);
        // 存到缓存中
        getCookie('userLanguage', navLanguage);
      }
    } else {
      console.log('not navigator');
      return false;
    }
  }
  /* 需要引入 i18n 文件*/
  if ($.i18n == undefined) {
    console.log('请引入i18n js 文件');
    return false;
  }

  /*
  这里需要进行i18n的翻译
  */
  console.log('i18nLanguage', i18nLanguage)
  jQuery.i18n.properties({
    name: sourceName, //资源文件名称
    path: '../i18n/' + i18nLanguage + '/', //资源文件路径
    mode: 'map', //用Map的方式使用资源文件中的值
    language: i18nLanguage,
    callback: function () {
      //加载成功后设置显示内容
      var insertEle = $('.i18n');
      console.log('.i18n 写入中...', insertEle);
      insertEle.each(function () {
        // 根据i18n元素的 name 获取内容写入
        $(this).html($.i18n.prop($(this).attr('name')));
        // if (i18nLanguage == 'zh-CN') {
        //   $(this).css('font-family', 'SourceHanSansSC');
        // }
      });
      console.log('写入完毕');

      console.log('.i18n-input 写入中...');
      var insertInputEle = $('.i18n-input');
      insertInputEle.each(function () {
        var selectAttr = $(this).attr('selectattr');
        if (!selectAttr) {
          selectAttr = 'value';
        }
        $(this).attr(selectAttr, $.i18n.prop($(this).attr('selectname')));
      });
      console.log('写入完毕');
    },
  });
};

function changeLanguage(language) {
  if (language == 'zh-CN') {
    $("#home-page").text("首页");

    $("#media").text("媒体");
    $("#news-center p").text("新闻中心");
    $("#media-report p").text("媒体报道")
    $("#source-download p").text("资料下载");

    $("#about").text("关于");
    $("#introduction p").text("迅蚁介绍");
    $("#joinUs p").text("加入我们");

    $("#main-content8 .title").css("letter-spacing", "0.5rem");
    $("#main-content8 .content1").css("letter-spacing", "0.1rem");
    $("#main-content8 .content1").css("line-height", "2.2rem");

    $(".other-info-div .tab-ul li").css("letter-spacing", "0.2rem");

    $(".development-history-title").css("background-image", 'url("https://xyi-web.oss-cn-hangzhou.aliyuncs.com/website-otherInfo/imgs/bg1.jpg")');
  }
  else if (language == 'en') {
    $("#home-page").text("Home");

    $("#media").text("Media")
    $("#news-center p").text("News-Center");
    $("#media-report p").text("Media-Report");
    $("#source-download p").text("Download");

    $("#about").text("About");
    $("#introduction p").text("Instroduction");
    $("#joinUs p").text("JoinUs");

    $("#main-content8 .title, #main-content8 .content1").css("letter-spacing", "0");
    $("#main-content8 .content1").css("line-height", "1.8rem");

    $(".other-info-div .tab-ul li").css("letter-spacing", "0rem");

    $(".development-history-title").css("background-image", 'url("https://xyi-web.oss-cn-hangzhou.aliyuncs.com/website-otherInfo/imgs/bg2.jpg")');
  }
}

/*页面执行加载执行*/
$(function () {
  /*执行I18n翻译*/
  execI18n();
/*将语言选择默认选中缓存中的值*/
  console.log(i18nLanguage);
  
  $('.' + i18nLanguage).addClass('selected');
  changeLanguage(i18nLanguage);

  /* 选择语言 */
  $('.change-language span').on('click', function () {
    //var language = $(this).children('option:selected').val();
    $('.change-language span').removeClass("selected");
    var language = $(this).attr("class");

    //changeLanguage(language);

    $(this).addClass("selected");
    //console.log(language);
    getCookie('userLanguage', language, {
      expires: 30,
      path: '/',
    });
    location.reload(true);
  });
});
