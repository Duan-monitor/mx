document.addEventListener("deviceready", onDeviceReady, false); //等待cordova加载

//定义json对象
var json = {};
json.username = "姓名";
json.token = "敏行令牌";
json.type = "noticeviewdoc";
//json.viewlist = ' {"key": "A112971", "pagenum": "页码","pagesize": "每页请求记录","totalcount": "总记录数"}';

var jsondoc = {};
jsondoc.key = "notice";
jsondoc.dbpath = "rjoa/ygonggao.nsf";
jsondoc.unid = "19B296F35449D8944825834700263BFC";

json.viewlist = JSON.stringify(jsondoc);
var data = { "json": JSON.stringify(json) };

// var sUrl = "/mobile/minxing.nsf/agshowlist?openagent";

export default function onDeviceReady(sUrl, callBack) {
  MXSetting &&
    typeof MXSetting.setConsoleLogEnabled === 'function' &&
    MXSetting.setConsoleLogEnabled();
  ajax(sUrl, callBack);
}
//调用远程AJAX
function ajax(sUrl, callBack) {
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
          callBack(res);
          // alert("sucess")
        },
        error: function (data, status, xhr) {
          // alert("error")
        }
      })
    });
  });
}