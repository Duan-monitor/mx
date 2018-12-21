<template>
    <div>
      <div class="showList" @click="showList">列表展示</div>
      <div class="mailList" @click="mailList">通讯录</div>
    </div>
</template>
<script>
export default {
  components: {
  },
  data() {
    return {
    };
  },
  computed: {
  },
  methods: {
    showList() {
      this.$router.push({ path: "/login"});
    },
    mailList() {
      this.$router.push({ path: "/MailList"});
    }
  },
  mounted() {},
  created() {}
};
</script>
<style lang="scss" scoped>
.showList, .mailList{
  margin: 4px;
  padding: 4px;
  background: rgb(66, 160, 28);
}
</style>
