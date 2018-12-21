   document.addEventListener("deviceready", onDeviceReady, false); //等待cordova加载

   export default function onDeviceReady(json,callBack) {
      json.username = "姓名";
      json.token = "敏行令牌";
      var data = {"json":JSON.stringify(json)};
      console.log('ondeviceready');
      MXSetting &&
      typeof MXSetting.setConsoleLogEnabled === 'function' &&
      MXSetting.setConsoleLogEnabled();
      // console.log({ a: 1, b: 2 }, [1, 2, 3]);
      ajax(data,callBack)
   }
   //调用远程AJAX
   function ajax(data,callBack) {
    var sUrl = "http://139.199.99.136/mobile/minxing.nsf/agshowlist?openagent";
     MXCommon.getSSOToken("OA_Remote", function (sso_token) {
       MXCommon.getCurrentUser(function (cur_user) {
         MXCommon.ajax({
           type: "POST",
           url: sUrl,
           data: data,
           dataType: "json",
           async: false,
           complete: function () { },
           success: function (res, status, xhr) {
             callBack(res)
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
