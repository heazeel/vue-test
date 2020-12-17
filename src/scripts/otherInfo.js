/*
 * @Description: 新闻中心、媒体报道、资料下载
 * @Author: linjia
 * @Date: 2020-05-19 16:51:29
 * @LastEditors: hezhijie
 * @LastEditTime: 2020-10-19 12:06:29
 */
(function () {
  /* 吸顶效果 */
  var scrollTop = $(window).scrollTop() + 4;
  var headerHeight = $(document).height() - $(window).height();
  var isTop = false;
  isTop = headerHeight <= scrollTop;
  $(window).scroll(throttle(function (e) {
    var scrollTop = $(window).scrollTop() + 4;
    isTop = headerHeight <= scrollTop;
    if (isTop) {
      $(".page-nav-part .nav-icon-btn div").css("border-top", "0.2rem solid #787C90");
      $('.content-container').css('overflow', 'auto');
    } else {
      $(".page-nav-part .nav-icon-btn div").css("border-top", "0.2rem solid #FFF");
      $('.content-container').css('overflow', 'hidden');
    }
  }, 500));
  $('.content-container').scroll(throttle(function (e) {
    if (isTop) {
      $('.content-container').css('overflow', 'auto');
    } else {
      $('.content-container').css('overflow', 'hidden');
    }
  }, 500));

})();

function throttle(fn,wait){
  var timer = null;
  return function(){
    var context = this;
    var args = arguments;
    if(!timer){
      timer = setTimeout(function(){
          fn.apply(context,args);
          timer = null;
      },wait)
    }
  }
}

var mediaReport = [
  ["1", "2020.07.06", "Shaping the future of delivery", 'R3plica', 'https://replica.substack.com/p/shaping-the-future-delivery?r=41152&utm_campaign=post&utm_medium=web&utm_source=copy'],
  ["2", "2020.06.15", "无人机“进城”", '中国民航网', 'http://www.caacnews.com.cn/1/6/202006/t20200615_1304130.html'],
  ["3", "2020.06.15", "无人机配送：构筑起疫情“空中防线”", '浙江工人日报', 'http://epaper.zjgrrb.com/html/2020-06/15/content_2712498.htm?div=-1'],
  ["4", "2020.04.16", "Drones to stop the COVID-19 epidemic", 'BBVA', 'https://www.bbva.com/en/drones-to-stop-the-covid-19-epidemic/amp/'],
  ["5", "2020.03.27", "How drone technologies are used in the current COVID-19 Medical Response Opesration", 'PX4', 'https://px4.io/how-drone-technologies-are-used-in-the-current-covid-19-medical-response-operation/'],
  ["6", "2020.03.24", "Zhao Liang – Chief Operating Officer at Antwork", 'DroneII', 'https://www.droneii.com/zhao-liang'],
  ["7", "2020.03.18", "COVID-19 pandemic prompts more robot usage worldwide", 'The robot repot', 'https://www.therobotreport.com/covid-19-pandemic-prompts-more-robot-usage-worldwide/'],
  ["8", "2020.03.10", "Drone delivery startup lifts off early with medical samples", 'Technode', 'https://technode.com/2020/03/10/drone-delivery-startup-lifts-off-early-with-medical-samples/'],
  ["9", "2020.03.06", "无人机筑起疫情“空中防线”，商用还有多远？", '创业邦', 'https://mp.weixin.qq.com/s/HB98d2UrvUXH-74mPN9mmw'],
  ["10", "2020.02.19", "疫情来袭 无人机化身战“疫”奇兵", '中国民航报', 'https://mp.weixin.qq.com/s/2BZcrN4O81KlW1ACOUWmsA'],
  ["11", "2020.02.17", "「G」观察|进入医疗物资配送领域，「迅蚁」要用无人机解决“最后一公里”", '戈壁创投', 'https://mp.weixin.qq.com/s/adgA28G8JgZtAVdBKinQ7w'],
  ["12", "2020.02.13", "进入医疗物资配送领域，「迅蚁」要用无人机解决“最后一公里”", '36氪', 'https://36kr.com/p/1725104291841'],
  ["13", "2020.02.06", "无人机配送医疗用品 杭企搭建抗疫“城市空中运输桥梁”", '浙江新闻', 'https://zj.zjol.com.cn/news.html?id=1381045'],
  ["14", "2020.02.06", "抗疫！物流无人机为医院搭起“城市空中运输桥梁” 时效大", '环球网', 'https://mp.weixin.qq.com/s/sGSmWbjixLE6ZRnag35yGQ'],
  ["15", "2020.04.25", "The Scramble for Delivery Robots Is On and Startups Can Barely Keep Up", 'WSJ', 'https://www.wsj.com/video/china-mail-drone-makes-first-delivery/A3EA877F-AF8E-4E43-AF27-BFE5EF8F15C5.html?mod=trending_now_video_2'],
  ["16", "2020.01.06", "获“牌照”后 杭州城市空中配送发展如何？", '中国民航报', 'https://attachments-cdn.shimo.im/FdY6cxu39NQjvmW2.jpg'],
  ["17", "2019.11.14", "CAAC Issues the First License for the Trial Operation of UAS in Urban Areas", 'CAAC', 'http://www.caac.gov.cn/en/XWZX/201911/t20191114_199470.html'],
  ["18", "2019.10.30", "Chinese civil aviation authority issues urban-area approval and business license to Antwork", 'Urban air mobility news', 'https://www.urbanairmobilitynews.com/express-delivery/chinese-civil-aviation-authority-issues-urban-area-approval-and-business-license-to-antwork/'],
  ["19", "2019.10.23", "ドローン物流のANTWORK、中国都市部での運用認可を取得　「１日に1000件の配送を」", 'Drone Tribune', 'https://dronetribune.jp/articles/16674/'],
  ["20", "2019.10.17", "First license for drone delivery test-running granted in east China", '新华网', 'http://www.xinhuanet.com/english/2019-10/17/c_138477317.htm'],
  ["21", "2019.10.17", "First license for drone delivery test-running granted in east China", '人民网', 'http://en.people.cn/n3/2019/1017/c90000-9623668.html'],
  ["22", "2019.10.15", "CAAC Issued World’s First Approval and Business License to Antwork for Operating Commercial Drone Deliveries in Urban Areas", 'AP news', 'https://apnews.com/ACCESSWIRE/67eb503106e88c656ef19f9998394ca3'],
  ["23", "2019.10.15", "迅蚁送吧获全球首张城市无人机试运行“牌照”", '中国民航网', 'http://www.caacnews.com.cn/1/1/201910/t20191015_1283094.html'],
  ["24", "2019.09.20", "The Chinese startup that wants to replace human couriers with drones", 'Technode', 'https://technode.com/2019/09/20/the-chinese-startup-that-wants-to-replace-human-couriers-with-drones/'],
  ["25", "2019.07.12", "Digital growth as a key driving force in China's Zhejiang", 'CGTN', 'https://news.cgtn.com/news/2019-07-12/Digital-growth-as-a-key-driving-force-in-China-s-Zhejiang-IgKnBS6Y36/index.html'],
  ["26", "2018.08.17", "36氪首发 | 「迅蚁」完成A+轮融资，无人配送“从农村走向城市”", '36氪', 'https://36kr.com/p/1722758332417'],
  ["27", "2018.07.13", "“迅蚁网路”驾无人机布局美好生活", '浙江工人日报', 'http://epaper.zjgrrb.com/html/2018-07/13/content_2631436.htm?div=-1'],
  ["28", "2018.03.01", "我在杭州喝到了一杯无人机送来的咖啡 运费3元10分钟送达", '杭州网', 'https://hznews.hangzhou.com.cn/jingji/content/2018-03/01/content_6809491_2.htm'],
  ["29", "2018.02.27", "无人机可以进城送咖啡了！我们去现场体验了下", '界面新闻', 'https://www.jiemian.com/article/1957766.html'],
  ["30", "2016.09.21", "《朝闻天下》视频新闻", 'CCTV', 'http://tv.cctv.com/2016/09/21/VIDEYBIWhFXnYG5IQAmUijuG160921.shtml']
];

$(document).ready(function () {
  var type = location.href.split('#')[1];
  /* tab切换 */
  $('.tab-ul li').on('click', function () {
    $('.tab-ul li').removeClass('active');
    $(this).addClass('active');
    type = $(this).attr('name');
    $('.tab-content').hide();
    $('#' + type + '-part').show();
    document.title = $(this).html();
    location.href = location.href.split('#')[0] + '#' + $(this).attr('name');
    if (type == 'news-center') {
      getNewsList();
    }
  });
  $('.tab-ul li[name="' + type + '"]').click();

  function getNewsList() {
    $.ajax({
      type: 'get',
      url: baseUrl + 'media_coverage/search',
      success: function (res) {
        let newsList = [];
        newsList = res.msg.map(function (ele) {
          ele.title =
            ele.title.length > 28
              ? ele.title.substr(0, 27) + '...'
              : ele.title;
          let timeShow = ele.time
            .split('年')
            .join('/')
            .split('月')
            .join('/')
            .split('日')
            .join('')
            .split('/');
          ele.timeShow = timeShow
            .map(function(num, index) {
              if (index > 0) {
                num = Math.abs(num) < 10 ? '0' + Math.abs(num) : Math.abs(num);
              }
              return num;
            })
            .join('/')
            .substr(0, 7);
          return ele;
        });
        newsList = newsList.reverse();
        // var html = template('news-center-part-ul-script', { newsList });
        // document.getElementById('news-center-part-ul').innerHTML = html;
        var list = "";
        newsList.forEach(news => { 
          if (news.image && news.id != 1039 && news.id != 1038 && news.id != 1035) {
            if (sessionStorage.getItem("language") == "en") {
              if (news.title_en == "") {
                news.title_en = news.title;
              }
              list +=
                '<li>' +
                  '<a target="_blank" href="' + news.link + '">' +
                    '<div class="img-div">' +
                      '<img src="' + news.image + '" alt="新闻图片" onerror="this.parentNode.parentNode.parentNode.remove()">' +
                    '</div>' +
                    '<p>' + news.title_en + '</p>' +
                    '<span>' + news.timeShow + '</span>' +
                  '</a>' +
                '</li>';
            }
            else {
              list +=
                '<li>' +
                  '<a target="_blank" href="' + news.link + '">' +
                    '<div class="img-div">' +
                      '<img src="' + news.image + '" alt="新闻图片" onerror="this.parentNode.parentNode.parentNode.remove()">' +
                    '</div>' +
                    '<p>' + news.title + '</p>' +
                    '<span>' + news.timeShow + '</span>' +
                  '</a>' +
                '</li>';
            }
          }
        });
        $("#news-center-part-ul").html(list);
      },
    });
  }

  var oldYear = null;
  var yearTap = "年";
  var language = sessionStorage.getItem("language");
  if (language == "zh-CN") {
    yearTap = "年";
  }
  else {
    yearTap = "";
  }

  for (var i = 0; i < mediaReport.length; i++){
    var day = changeToEn(language, "day", mediaReport[i][1].split(".")[2]);
    var month = changeToEn(language, "month", mediaReport[i][1].split(".")[1]);
    var year = mediaReport[i][1].split(".")[0];
    if (oldYear != year) {
      $(".media-report-ul").append(
        '<li class="time-head">' +
          '<span>' + year + yearTap + '</span>' +
          '<div></div>' +
        '</li>'
      )
      oldYear = year;
    }
    $(".media-report-ul").append(
      '<li class="list-item">' +
        '<a href="' + mediaReport[i][4] + '" target="_blank">' +
          '<div class="time">' +
            '<span class="day">' + day + '</span>/' +
            '<span class="month">' + month + '</span>' +
          '</div>' +
          '<span class="content">' + mediaReport[i][2] + '</span>' +
          '<span class="source">' + mediaReport[i][3] + '</span>' +
        '</a>' +
      '</li>'
    )
  }

  $(".operation .play-btn").click(function () {
    var videoUrl = $(this).parent().parent().find(".pic").attr("src");
    $(".video-group").show();
    $("#video").attr("src", videoUrl);
    var video = document.getElementById("video");
    setTimeout(() => {
      if (video.paused == true) {
        video.play();
      }
    }, 1000);
  });

  $(".operation .download-btn").click(function () {
    // //调用  点击按钮实现mp4格式视频下载
    var url = $(this).parent().parent().find(".pic").attr("src")
    var nameArr = url.split("/");
    var name = nameArr[nameArr.length - 1].split(".")[0];
    // downLoad(url, name, "video/mp4");
    var elem = $(this).find("span");

    elem.css("opacity", "1");

    $(this).css({ "opacity": "1", "transform": "translateX(-1.5rem)", "cursor": "default"});
    $(this).parent().css("opacity", "1");
    $(this).parent().removeClass("operation-active");
    $(this).parent().children().removeClass("btn-active");
    $(this).parent().find(".play-btn").css("opacity", "0");
    $(this).find("div").css("opacity", "0");
    $(this).unbind("click");
    
    downLoad(url, name, "video/mp4", elem);

  })

  $(".video-group-btn").click(function () {
    var video = document.getElementById("video");
    if (video.paused == false) {
      video.pause();
    }
    $(".video-group").hide();
    $("#video").attr("src", "");
  });
})

function changeToEn (language, name, value) {
  if (language == "en") {
    if (name == "day") {
      if (value == "01") {
        return "1st";
      }
      else if (value == "02") {
        return "2nd";
      }
      else if (value == "03") {
        return "3rd";
      }
      else {
        return value + "th";
      }
    }
    else if (name == "month") {
      var month = ["Jan.", "Feb.", "Mar.", "Apr.", "May.", "Jun.", "Jul.", "Aug.", "Sept.", "Oct.", "Nov.", "Dec."];
      return month[parseInt(value) - 1];
    }
  }
  else {
    if (name == "day") {
      return value;
    }
    else if (name == "month") {
      return value + "月";
    }
  } 
}

function downLoad (url, name, type, elem){
  
  var xhr = new XMLHttpRequest();
  xhr.open('GET', url);
  xhr.responseType = 'blob';    // 返回类型blob
  xhr.send();
  xhr.onload = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      let URL = window.URL || window.webkitURL;
      let blob = this.response;
      // 转换一个blob链接
      let u = URL.createObjectURL(new Blob([blob],{ type: type }))
      let a = document.createElement('a');
      a.download = name;
      a.href = u;
      a.style.display = 'none'
      document.body.appendChild(a)
      a.click();
      document.body.removeChild(a);
      //a.remove();
      URL.revokeObjectURL(u);
    }
  };

  xhr.addEventListener("progress", function (event) {
    if (event.lengthComputable) {
      var percentComplete = Math.floor(event.loaded / event.total * 100);
      if (percentComplete != 100) {
        var num = percentComplete + "%";
        elem.html(num);
      }
      else {
        elem.html("99%")
        setTimeout(() => {
          elem.parent().css({ "opacity": "0", "transform": "translateX(0rem)", "cursor": "pointer"});
          elem.parent().parent().css("opacity", "0");
          elem.parent().parent().find(".play-btn").css({ "opacity": "0.6"});
          elem.parent().find("div").css("opacity", "1");
          elem.css("opacity", "0");
          elem.parent().parent().addClass("operation-active");
          elem.parent().parent().children().addClass("btn-active");
          setTimeout(() => {
            elem.parent().hide();
          }, 500);
        }, 200);
      }
      // ...
   
    } else {
      // Unable to compute progress information since the total size is unknown
    }
  }, false);

  xhr.onerror = function () {
    console.log("文件下载失败");
  }
  
}

function blobStart (url, filekey, name, extension) {
  var x = new XMLHttpRequest();
  x.open("GET", url, true);
  x.responseType = 'blob';
  x.send();
  x.onload = function (e) {
  
    let url = URL.createObjectURL(x.response);
    var a = document.createElement("a");
    a.href = url;
    a.download = name;
    a.click();
    // postData();
    window.URL.revokeObjectURL(a.href);
  }

  x.addEventListener("progress", function (event) {
    if (event.lengthComputable) {
      var percentComplete = event.loaded / event.total * 100;
   
      console.log(percentComplete);
      // ...
   
    } else {
      // Unable to compute progress information since the total size is unknown
    }
  }, false);
  x.onerror = function () {
    console.log("文件下载失败");
  }
}
