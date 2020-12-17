/*
 * @Description: 职位
 * @Author: linjia
 * @Date: 2020-05-19 13:44:43
 * @LastEditors: hezhijie
 * @LastEditTime: 2020-10-20 16:28:47
 */

$(document).ready(function () {
  getJobList();
  function getJobList() {
    $.ajax({
      type: 'get',
      url: baseUrl + 'recruit_position_post/search',
      success: function (res) {
        console.log(res);
        var jobTypeObj = {};
        res.msg.forEach(job => {
          if (!jobTypeObj[job.department_id]) {
            jobTypeObj[job.department_id] = [job];
          } else {
            jobTypeObj[job.department_id].push(job);
          }
        });
        var jobTypeList = Object.keys(jobTypeObj).map(function (typeList, index) {
          return { department: jobTypeObj[typeList][0].department, department_en: jobTypeObj[typeList][0].department_en, data: jobTypeObj[typeList] };
        })
        // console.log(jobTypeList);
        // var html = template('job-infomation-ul-script', { jobTypeList });
        // document.getElementById('job-infomation-ul').innerHTML = html;

        var language = sessionStorage.getItem("language");
        jobTypeList.forEach(typeList => {
          var data = '';
            typeList.data.forEach(job => {
              data += '<li><a target="_blank" href="' + job.url + '">' + (language == 'en' ? job.name_en : job.name) + '</a></li>';
            });
          var html = 
            '<li>' +
              '<div class="title">' + (language == 'en' ? typeList.department_en : typeList.department) + '</div>' +
              '<ul>' +
                data +
              '</ul>' +
            '</li>'
          $("#job-infomation-ul").append(html);
        })
      },
    });
  }
  function sortBy(attr, rev) {
    //第二个参数没有传递 默认升序排列
    if (rev == undefined) {
      rev = 1;
    } else {
      rev = rev ? 1 : -1;
    }

    return function (a, b) {
      a = a[attr];
      b = b[attr];
      if (a < b) {
        return rev * -1;
      }
      if (a > b) {
        return rev * 1;
      }
      return 0;
    };
  }
  
  $(".page-nav-part .nav-icon-btn div").css("border-top", "0.2rem solid #787C90");

});
