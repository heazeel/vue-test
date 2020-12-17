/*
 * @Description: 公司介绍
 * @Author: linjia
 * @Date: 2020-05-19 13:44:30
 * @LastEditors: hezhijie
 * @LastEditTime: 2020-10-16 09:56:17
 */

(function () {
  getHistoryList();
  function getHistoryList() {
    $.ajax({
      type: 'get',
      url: baseUrl + 'development_history/list',
      success: function (res) {
        var data = res.msg;
        var historyList = [];
        Object.keys(data).sort(function (a, b) {
          return b - a;
        }).forEach(function (yearList, index) {
          historyList.push({ year: yearList, monthList: data[yearList] });
        });
        // var html = template('development-history-ul-script', { historyList });
        // document.getElementById('development-history-ul').innerHTML = html;
        var language = sessionStorage.getItem("language");
        var monthName = ["Jan.", "Feb.", "Mar.", "Apr.", "May.", "Jun.", "Jul.", "Aug.", "Sept.", "Oct.", "Nov.", "Dec."];
        historyList.forEach(item => {
          // $("#development-history-ul").append(
          var monthList = '';
          for (month in item.monthList) {
            if (language == 'en') {
              monthList +=
                '<li>' +
                '<div class="month">' + monthName[parseInt(month) - 1] + '</div>' +
                '<p>' + item.monthList[month].event_en + '</p>' +
                '</li>';
            }
            else {
              monthList +=
              '<li>' +
              '<div class="month">' + month + '<span class="i18n" name="month">月</span></div>' +
              '<p>' + item.monthList[month].event + '</p>' +
              '</li>';
            }
          }
          var html = 
            '<li>' +
              '<div class="title">'+ item.year + '</div>' +
              '<ul class="month-list">' +
                monthList +
              '</ul>' +
            '</li>';
          $("#development-history-ul").append(html);
        })
        
        // <script id="development-history-ul-script" type="text/html">
        //   <% historyList.forEach( yearList => { %>
        //     <li>
        //       <div class="title"><%= yearList.year %></div>
        //       <ul class="month-list">
        //       <% for (month in yearList.monthList) { %>
        //         <li>
        //           <div class="month"><%= month %><span class="i18n" name="month">月</span></div>
        //           <p><%= yearList.monthList[month].event %></p>
        //         </li>
        //       <% } %>
        //       </ul>
        //     </li>
        //   <% }) %>
        // </script>
      },
    });
  }

  $(window).scroll(function (e) {
    var scrollTop = $(window).scrollTop() + 4;
    if (scrollTop >= 0 && scrollTop < 432) {
      $(".page-nav-part .nav-icon-btn div").css("border-top", "0.2rem solid #FFF");
    }
    else if (scrollTop >= 432 && scrollTop < 1080) {
      $(".page-nav-part .nav-icon-btn div").css("border-top", "0.2rem solid #787C90");
    }
    else if (scrollTop >= 1080 && scrollTop < 1400) {
      $(".page-nav-part .nav-icon-btn div").css("border-top", "0.2rem solid #FFF");
    }
    else if (scrollTop >= 1400){
      $(".page-nav-part .nav-icon-btn div").css("border-top", "0.2rem solid #787C90");
    }
  });
  
})();
