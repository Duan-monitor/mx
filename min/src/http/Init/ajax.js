document.addEventListener("deviceready", onDeviceReady, false); //等待cordova加载

export default function onDeviceReady(sUrl,callback) {
    console.log('ondeviceready');
    MXSetting &&
      typeof MXSetting.setConsoleLogEnabled === 'function' &&
      MXSetting.setConsoleLogEnabled();
    console.log({ a: 1, b: 2 }, [1, 2, 3]);
    ajax(sUrl,callback);
  }

//调用远程AJAX
function ajax(sUrl,callback) {
  MXCommon.getSSOToken("OA_Remote", function (sso_token) {
    MXCommon.getCurrentUser(function (cur_user) {
    //   var sUrl = "http://139.199.99.136:8080/duan/zh_qianbao_data.json";
      //						sUrl += "&sso_token=" + sso_token;
      //						sUrl += "&username=" + cur_user.name;

      MXCommon.ajax({
        type: "GET",
        url: sUrl,
        dataType: "json",
        async: true,
        complete: function () { },
        success: function (res, status, xhr) {
            var data = JSON.parse(res);
            callback(data)
        //   var draft = data.draft;
        //   var centent_all = "";
        //   for (let i = 0; i < draft.length; i++) {
        //     centent_all += "<div onclick='centent_in()'><div>" + draft[i].label + "</div>" +
        //                   "<div>" + draft[i].value + "</div>1</div>"
        //   }
        //   document.querySelector("#app-box").innerHTML = centent_all;
        },
        error: function (data, status, xhr) {
          alert("error");
          alert(JSON.stringify(data));
        }
      })
    });
  });
}