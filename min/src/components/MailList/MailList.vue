<template>
    <div id="a">
      <el-collapse v-model="activeNames" @change="handleChange" accordion>
        <el-collapse-item title="总行" name="1">
          <el-tree class="el" :data="data.showlist" :props="defaultProps" @node-click="handleNodeClick"></el-tree>
        </el-collapse-item>
        <el-collapse-item title="支行" name="2">
          <el-tree class="el" :expand-on-click-node="false" :data="data2.showlist" :props="defaultProps" @node-click="handleNodeClick"></el-tree> 
        </el-collapse-item>
      </el-collapse>
    </div>
</template>
<script>
import onDeviceReady from "@/http/Interface";
export default {
  data() {
    return {
      data: "",
      data2: "",
      total_con: true,
      branch_con: true,
      defaultProps: {
        children: 'suborg',
        label: 'text'
      }

    };
  },
  methods: {
      details(id) {
        //   alert(typeof id)
          this.$router.push({ path: "/mailTotal", query: { id: id } });
      },

      handleNodeClick(data) {
        if (data.id) {
          this.$router.push({ path: "/mailBranch", query: { id: data.id } });
        }
      },



  },
  created() {
      //定义json对象
    var json = {};
    json.type = "telbookviewlist";
    json.scope = "zonghang";
    var that = this;
    onDeviceReady(json, function(res) {
      that.data = JSON.parse(res);
    });
    json.scope = "zhihang";
    onDeviceReady(json, function(res) {
      that.data2 = JSON.parse(res);
    });
  }
}
</script>
<style scoped>

</style>