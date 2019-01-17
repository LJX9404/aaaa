<template>
  <scroller>
       <div class="navigatorBox">
         <image class="gobackStyle" src="/src/assets/cancel.png"></image>
         <text class="navigatorTitle">添加设备</text>
      </div>
      <div class="container">
        <text class="navinfo">请确保手机与设备连接的是同一WIFI</text>
        <text class="navinfo2">如不是，请修改手机WIFI</text>
         <div class="contentBox">
              <image class="picStyle" src="/src/assets/origin.png"></image>
              <text class="setinfo1">1.手机打开设置页面</text>
              <text class="setinfo2">2.设置手机WIFI</text>
          </div>
            <div class="bottombtn">
           <text class="bottomText" @click="link('contactnetwork')">已连接同一WIFI,开始配置</text>
         </div>
      </div>

  </scroller>
</template>
<script>
export default {
  components: {},
  name: "wifinetwork",
  data() {
    return {};
  },
  methods: {
    link: function(e) {
      this.$router.push(e);
      console.log(e);
    }
  }
};
</script>
<style scoped>
.navigatorBox {
  width: 750px;
  height: 95px;
  background-color: #fff;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-bottom-color: rgba(206,215,219,1);
}
.navigatorTitle {
  font-size: 36px;
  font-family: PingFang-SC-Bold;
  font-weight: bold;
  color: #000;
  line-height: 36px;
  margin-top: 33px;
  margin-left: 228px;
}
.gobackStyle {
  margin-left: 34px;
  margin-top: 29px;
  width: 44px;
  height: 40px;
}
.container {
  width: 750px;
  height: 1206px;
  background-color: #fff;
}
.navinfo {
  font-size: 35px;
  font-family: PingFang-SC-Medium;
  font-weight: 500;
  color: rgba(214, 66, 71, 1);
  margin-top: 98px;
  margin-left: 89px;
}
.navinfo2 {
  font-size:31px;
font-family:PingFang-SC-Medium;
font-weight:500;
color:rgba(88,88,88,1);
line-height:31px;
  margin-top: 44px;
  margin-left: 207px;
}
.contentBox {
  width: 710px;
  height: 693px;
  margin-top: 43px;
  margin-left: 20px;
  background: rgba(239, 234, 231, 1);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
}
.picStyle {
  width: 368px;
  height: 321px;
  margin-top: 50px;
  margin-left: 172px;
}
.setinfo1 {
  font-size: 28px;
  font-family: PingFang-SC-Medium;
  font-weight: 500;
  color: rgba(102, 102, 102, 1);
  margin-top: 179px;
  margin-left: 232px;
}
.setinfo2 {
  margin-top: 30px;
  margin-left: 232px;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  font-size: 28px;
  font-family: PingFang-SC-Medium;
  font-weight: 500;
  color: rgba(102, 102, 102, 1);
}
.setStyle {
  width: 36px;
  height: 34px;
   margin-top: 5px
}
.set2Style {
  width: 35px;
  height: 26px;
  margin-top: 10px
}
.bottombtn {
  width: 710px;
  height: 100px;
  margin-top: 137px;
  margin-left: 20px;
  background-color: rgba(31, 31, 31, 1);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-style: solid;
}
.bottomText {
  font-size: 36px;
  font-family: PingFang-SC-Medium;
  font-weight: 500;
  color: rgba(200, 175, 112, 1);
  line-height: 36px;
  margin-left: 194px;
  margin-top: 33px;
}
</style>

