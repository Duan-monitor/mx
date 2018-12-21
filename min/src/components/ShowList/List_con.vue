<template>
  <div id="all">
    <div v-html="data.draft[2].value"></div>
  </div>
</template>
<script>
import onDeviceReady from "@/http/Interface";
import { setTimeout } from "timers";
export default {
  components: {
  },
  data() {
    return {
      runData: this.$route.query.content,
      data: {},
      src: {},
    };
  },
  methods: {
    center() {
    },
  },
  mounted() {
  },
  created() {
    //定义json对象
    var json = {};
    // json.username = "姓名";
    // json.token = "敏行令牌";
    json.type = "noticeviewdoc";
    var jsondoc = {};
    jsondoc.key = "notice";
    jsondoc.dbpath = this.runData.dbpath;
    jsondoc.unid = this.runData.unid;

    json.viewlist = JSON.stringify(jsondoc);
    var that = this;
    onDeviceReady(json, function(res) {
      that.data = JSON.parse(res);
    });
  },
  watch: {
    showList: function() {}
  }
};
</script>
<style scoped>
#all>>>img{
  width: 50%;
  margin: 4px;
}
</style>
