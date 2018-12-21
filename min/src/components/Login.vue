<template>
    <div>
      <div class="top"></div>
      <div class="showList" @click="showList">列表展示</div>
      <div class="mailList" @click="mailList">通讯录</div>
    </div>
</template>
<script>
export default {
  data() {
    return {}
  },
  computed: {
  },
  methods: {
    showList() {
      this.$router.push({ path: "/showList"});
    },
    mailList() {
      this.$router.push({ path: "/mailList"});
    }
  },
  mounted() {},
  created() {
  }
};
</script>
<style scoped>
.showList, .mailList{
  margin: 10px;
  padding: 6px;
  border: 1px solid ;
  border-radius: 8px;
  text-align: center;
}
.showList{
  margin-top: 0;
}
.top{
  height: 4px;
}
</style>
