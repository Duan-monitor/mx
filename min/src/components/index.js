// window.onload = function() {
    document.addEventListener("deviceready", onDeviceReady, false); //等待cordova加载
    // }
    // console.log("123");

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
    // function jsonPagenum(num) {
    //   alert("执行了2");
    //   jsonpage.pagenum = num;
    //   alert(num);
    // }
    json.viewlist = JSON.stringify(jsonpage);
    var data = {"json":JSON.stringify(json)};
    // console.log("datadatdatdatdtdtatdtadtatdtdtadttad",JSON.parse(JSON.parse(data.json).viewlist).pagenum);
    // var sUrl = "http://139.199.99.136/mobile/minxing.nsf/agshowlist?openagent";
    
    function onDeviceReady(sUrl,callBack) {
      console.log('ondeviceready');
      MXSetting &&
      typeof MXSetting.setConsoleLogEnabled === 'function' &&
      MXSetting.setConsoleLogEnabled();
      // console.log({ a: 1, b: 2 }, [1, 2, 3]);
      ajax(sUrl,callBack)
    }
    //调用远程AJAX
    function ajax(sUrl,callBack) {
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
            async: false,
            complete: function () { },
            success: function (res, status, xhr) {
              // var data = JSON.parse(res);
              // alert("接收数据并返回1")
              // alert(res)
              // console.log("10101010101010101010")
              callBack(res)
              // alert(res)
            },
            error: function (data, status, xhr) {
              // alert("error");
              // alert("报错了")
              // alert(JSON.stringify(data));
            }
          })
        });
      });
    }


    export { jsonPagenum , onDeviceReady }

