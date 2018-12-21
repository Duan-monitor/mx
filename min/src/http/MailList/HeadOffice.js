//总行通讯录导航调用：

    document.addEventListener("deviceready", onDeviceReady, false); //等待cordova加载


//定义json对象
var json = {};
json.username = "姓名";
json.token = "敏行令牌";
json.type = "telbookviewlist";
json.scope = "zonghang";

var data = {"json":JSON.stringify(json)};

// var sUrl = "http://139.199.99.136:8080/mobile/minxing.nsf/agshowlist?openagent";
export default function onDeviceReady(sUrl,callBack) {
    MXCommon.ajax({
       type: "post", //Post传参
       url: sUrl,//服务地址
       data: data,//参数
       dataType: "json",
       contentType: "application/x-www-form-urlencoded;charset=utf-8",
       success: function (result) {
  		if(result.status == "success"){
              //alert(JSON.stringify(result));
              alert(2)
			callBack(result)
		}else{
			alert(result.errinfo);
		}
       },
       error: function (x,e) {
          alert(e);
       }
  })
}