// window.onload = function() {
    document.addEventListener("deviceready", onDeviceReady, false); //等待cordova加载
    // }
    console.log("123");

    //定义json对象
    var json = {};
    json.username = "姓名";
    json.token = "敏行令牌";
    json.type = "noticeviewlist";
    //json.viewlist = ' {"key": "A112971", "pagenum": "页码","pagesize": "每页请求记录","totalcount": "总记录数"}';

    var jsonpage = {};
    jsonpage.key = "notice";
    jsonpage.pagenum = 1;
    jsonpage.pagesize = 10;
    jsonpage.totalcount = 0;

    json.viewlist = JSON.stringify(jsonpage);
    var data = {"json":JSON.stringify(json)};
    var sUrl = "http://139.199.99.136/mobile/minxing.nsf/agshowlist?openagent";



    function onDeviceReady() {
      console.log('ondeviceready');
      MXSetting &&
        typeof MXSetting.setConsoleLogEnabled === 'function' &&
        MXSetting.setConsoleLogEnabled();
      console.log({ a: 1, b: 2 }, [1, 2, 3]);
      ajax()
    }
    //调用远程AJAX
    function ajax() {
      MXCommon.getSSOToken("OA_Remote", function (sso_token) {
        MXCommon.getCurrentUser(function (cur_user) {
        //   var sUrl = "http://139.199.99.136:8080/duan/zh_qianbao_data.json";
          //						sUrl += "&sso_token=" + sso_token;
          //						sUrl += "&username=" + cur_user.name;

          MXCommon.ajax({
            type: "POST",
            url: sUrl,
            data: data,
            dataType: "json",
            async: true,
            complete: function () { },
            success: function (res, status, xhr) {
                var data = JSON.parse(res);
                alert(res)
                alert("122221320003")
              var draft = data.draft;
              var centent_all = "";
              for (let i = 0; i < draft.length; i++) {
                centent_all += "<div onclick='centent_in()'><div>" + draft[i].label + "</div>" +
                              "<div>" + draft[i].value + "</div>1</div>"
              }
              // document.querySelector("#app-box").innerHTML = centent_all;
            },
            error: function (data, status, xhr) {
              alert("error");
              alert(JSON.stringify(data));
            }
          })
        });
      });
    }