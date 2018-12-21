<template>
    <div>
        <!-- {{data}} -->
        <!-- (0+1)*2-1 -->
        <div class="list" v-for="(item,index) in data.showlist" :key="index" @click="center(item)">
            <!-- {{item}} -->
        	<div class="list_title">
        		{{item.title}}
        	</div>
        	<div class="list_user">
        		{{item.user}}
        		<span>{{item.time}}</span>
        	</div>
        </div>
        <div class="next" @click="next">下一页</div>
        <!-- <van-pagination v-model="currentPage" :total-items="data.showlist.length" :items-per-page="1"/> -->
    </div>
</template>
<script>
// import { Pagination } from "vant";
// import { Cell, Group, Badge, Divider, XInput, XButton, AlertModule } from 'vux'
// import { login } from '../http/login';
// import axios from 'axios'
import * as all from "./index";
export default {
  components: {
    // Pagination
    // Cell,
    // Group,
    // Badge,
    // Divider,
    // XInput,
    // XButton,
    // AlertModule
  },
  data() {
    return {
        currentPage:1,
      // submitStatus: false,
      // id: '001170',
      // password: '123456',
      data: "数据",
      // data2: 0,
    };
  },
  computed: {
    // enableSubmit() {
    //     return ((!this.id && !this.password) || this.submitStatus)
    // },
    // submitBtnText() {
    //     return this.submitStatus ? '登录中' : '登录'
    // }
  },
  methods: {
    center(item) {
      // alert(1)
      // console.log(item)
      this.$router.push({ path: "/Query", query: { film: item } });
    },
    next() {
      alert("dianle123");
      // this.data.pagenum++
      alert(this.data.pagenum+1)
      // all.jsonpage.pagenum++
      // alert(all.jsonpage.pagenum++)
      // all.jsonPagenum(3)
    }
    // login() {
    //     var vm = this;
    //     vm.submitStatus = true;
    //     vm.$store.dispatch('loginFn', {
    //         id: vm.id,
    //         password: vm.password
    //     })
    //     .then(() => vm.$router.push('query'))
    //     .catch(e => {
    //                 vm.$vux.toast.show({
    //                     type:'text',
    //                     time:'4000',
    //                     text: e.error
    //                 });
    //                 vm.submitStatus = false
    //     });
    // }
  },
  mounted() {},
  created() {
    var that = this;
    var url = "http://139.199.99.136/mobile/minxing.nsf/agshowlist?openagent";
    all.onDeviceReady(url, function(res) {
      that.data = JSON.parse(res);
      // that.data2 = data1;
      // console.log(data1);
      // alert(res)
    });
    // this.$store.state.user.token && this.$router.push('query');
  }
};
</script>
<style scoped>
.list {
  margin: 4px 5px;
  /* margin-bottom: 80px; */
  border: solid 1px;
}

.list_title {
  padding: 0 11px;
  border-bottom: solid 1px;
  background-color: yellow;
}

.list_user {
  padding: 0 11px;
  /*border-bottom: solid 1px;*/
}
span {
  float: right;
}

.pagination {
  position: fixed;
  bottom: 0;
}

.next {
  margin-top: 30px;
}
</style>
