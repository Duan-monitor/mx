<template>
    <div>
        <el-tree v-if="!data.status"></el-tree>
        <div v-if="data.status" class="list" v-for="(item,index) in data.showlist" :key="index" @click="center(item)" >
        	<div class="list_title">
        		{{item.title}}
        	</div>
        	<div class="list_user">
        		{{item.user}}
        		<span>{{item.time}}</span>
        	</div>
        </div>
        <div class="cHeight"></div>
        <el-button-group v-if="data.status">
            <el-button type="primary" icon="el-icon-arrow-left" @click="upward(data)">上一页</el-button>
            <el-button type="primary" @click="down(data)">下一页<i class="el-icon-arrow-right el-icon--right"></i></el-button>
        </el-button-group>
    </div>
</template>
<script>
import onDeviceReady from "@/http/Interface";
export default {
  components: {
  },
  data() {
    return {
      pagenum: 1,
      data: "",
    };
  },
  computed: {
  },
  methods: {
    center(item) {
      this.$router.push({ path: "/Query", query: { content: item } });
    },
    upward (data) {
      var that = this;
      if(data.pagenum>1){
        data.pagenum--;
         //定义json对象
        var json = {};
        // json.username = "姓名";
        // json.token = "敏行令牌";
        json.type = "noticeviewlist";
        var jsonpage = {};
        jsonpage.key = "notice";
        jsonpage.pagenum = data.pagenum;
        jsonpage.pagesize = 8;
        jsonpage.totalcount = 0;
        json.viewlist = JSON.stringify(jsonpage);
        onDeviceReady(json, function(res) {
          that.data = JSON.parse(res);
        });
      }else{
        alert("已经是第一页了");
      }
    },
    down (data) {
      var that = this;
      if(data.pagenum<Math.ceil(data.totalcount/data.pagesize)){
        data.pagenum++;
         //定义json对象
        var json = {};
        // json.username = "姓名";
        // json.token = "敏行令牌";
        json.type = "noticeviewlist";
        var jsonpage = {};
        jsonpage.key = "notice";
        jsonpage.pagenum = data.pagenum;
        jsonpage.pagesize = 8;
        jsonpage.totalcount = 0;
        json.viewlist = JSON.stringify(jsonpage);
        // var sUrl = "http://139.199.99.136/mobile/minxing.nsf/agshowlist?openagent";
        onDeviceReady(json, function(res) {
          that.data = JSON.parse(res);
        });
      }else{
        alert("已经是最后一页了");
      }
    },
  },
  mounted() {},
  created() {
    var that = this;
    //定义json对象
    var json = {};
    // json.username = "姓名";
    // json.token = "敏行令牌";
    json.type = "noticeviewlist";
    var jsonpage = {};
    jsonpage.key = "notice";
    jsonpage.pagenum = this.pagenum;
    jsonpage.pagesize = 8;
    jsonpage.totalcount = 0;
    json.viewlist = JSON.stringify(jsonpage);
    onDeviceReady(json, function(res) {
      that.data = JSON.parse(res);
    });
  }
};
</script>
<style scoped>
.list {
  margin: 4px 5px;
  border: solid 1px;
  border-radius: 4px;
}

.list_title {
  padding: 0 11px;
  border-bottom: solid 1px;
  background-color: rgba(148, 196, 138, 0.582);
}

.list_user {
  padding: 0 11px;
  /*border-bottom: solid 1px;*/
}
span {
  float: right;
}

.el-button-group {
  width: 100%;
  position: fixed;
  bottom: 0;
  left: 21%;
}

.previousPage{
  margin-right: 30px;
}

.cHeight{
    height: 50px;
}
</style>
