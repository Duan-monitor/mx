<template>
    <div>
        <el-tree v-if="!data.danwei"></el-tree>
        <div class="title">{{data.danwei}}</div>
        <div v-if="data.danwei">
            <div>地址:{{data.dizhi}} 邮编:{{data.youbian}}</div>{{data.zhibandianhua_text}}:
            <div v-html="data.zhibandianhua_value"></div>
        </div>
        <div v-if="data.danwei" v-for="(item,index) in data.data" :key="index" :class="init<=index&&(init+pageNum)>index?'show':'hide'">
            <hr>
            <div class="conList">
                <div class="qf">姓名:{{item.xingming}}</div><div>单位:{{item.danwei}}</div>
            </div>
            <div class="conList">
                <div class="qf">内线:{{item.neixian}}</div><div>外线:{{item.waixian}}</div>
            </div>
            <div class="conList">
                <div class="qf">手机:{{item.shouji}}</div><div>传真:{{item.chuanzhen}}</div>
            </div>
            <div class="conList">
                <div class="qf">房间号:{{item.fangjianhao}}</div><div>邮箱:{{item.youxiang}}</div>
            </div>
        </div>
        <div class="cHeight"></div>
        <el-button-group v-if="data.danwei">
            <el-button type="primary" icon="el-icon-arrow-left" @click="upward()">上一页</el-button>
            <el-button type="primary" @click="down()">下一页<i class="el-icon-arrow-right el-icon--right"></i></el-button>
        </el-button-group>
    </div>
</template>
<script>
import onDeviceReady from "@/http/Interface";
export default {
  data() {
    return {
      data: "",
      content: false,
      id: this.$route.query.id,
      init:0,                         //初始页码
      pageNum:5,                   //每页显示几条数据

    };
  },
  methods: {
      contentBtn() {
          this.content=!this.content
      },
      upward() {
          if (this.init>=1) {
              this.init-=this.pageNum;
          }
      },
      down() {
          if (this.init<this.data.data.length-this.pageNum) {
              this.init+=this.pageNum;
          }
      },
  },
  created() {
    //定义json对象
    var json = {};
    json.type = "telbookorgdetail";
    json.docid = this.id;
    var that = this;
    onDeviceReady(json, function(res) {
        // alert(res)
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

.el-button-group {
  width: 100%;
  position: fixed;
  bottom: 0;
  left: 21%;
}

.conList{
    display: flex;
    /* justify-content: space-around; */
    align-items: center;
}

.qf{
    width: 40%;
}

.hide{
    display: none;
}

.show{
    display: block;
}
.cHeight{
    height: 50px;
}
</style>