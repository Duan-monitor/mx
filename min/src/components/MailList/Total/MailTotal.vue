<template>
    <div>
        <div class="title">{{data.danwei}}</div>
        <div>地址:{{data.dizhi}} 邮编:{{data.youbian}}</div>{{data.zhibandianhua_text}}:
        <div v-html="data.zhibandianhua_value"></div>
        <div v-for="(item,index) in data.data" :key="index">
            <hr>
            <div>姓名:{{item.xingming}}  单位:{{item.danwei}}</div>
            <div>内线:{{item.neixian}}  外线:{{item.waixian}}</div>
            <div>手机:{{item.shouji}}  传真:{{item.chuanzhen}}</div>
            <div>房间号:{{item.fangjianhao}}  邮箱:{{item.youxiang}}</div>
        </div>
    </div>
</template>
<script>
import onDeviceReady from "@/http/Interface";
export default {
  data() {
    return {
      data: "",
      content: false,
      id: this.$route.query.id
    };
  },
  methods: {
      contentBtn() {
          this.content=!this.content
      }
  },
  created() {
    //定义json对象
    var json = {};
    // json.username = "姓名";
    // json.token = "敏行令牌";
    json.type = "telbookorgdetail";
    json.docid = this.id;
    var that = this;
    onDeviceReady(json, function(res) {
      that.data = JSON.parse(res);
    });
  }
}
</script>
<style scoped>
.title{
    font-size: 20px;
    text-align: center;
}
</style>