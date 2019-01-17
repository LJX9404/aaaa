<template>
   <scroller>
       <div class="navigatorBox" >
          <div  @click='toBack'>
             <am-icon type="left" size="md" class="gobackStyle" ></am-icon>
          </div>
          <text class="navigatorTitle">更多菜单</text>
       </div>
       <text class="text">this is sink</text>
       <div>
           <router-view></router-view>
       </div>
   </scroller>
</template>
<script>
import { AmIcon } from "weex-amui";
const dom = weex.requireModule("dom");
let navigator = weex.requireModule("navigator");
export default {
  components: { AmIcon },
  name: "sink",
  methods: {
    toBack: function() {
      navigator.pop({
        animated: "true"
      });
    }
  }
};
</script>
<style scoped>
.navigatorBox {
  width: 750px;
  height: 95px;
  background-color: #000;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
}
.gobackStyle {
  margin-left: 34px;
  margin-top: 35px;
  color: #fff;
}
.navigatorTitle {
  font-size: 36px;
  font-family: PingFang-SC-Bold;
  font-weight: bold;
  color: #fff;
  line-height: 36px;
  margin-top: 35px;
  margin-left: 214px;
}
.text {
  font-size: 100px;
}
</style>