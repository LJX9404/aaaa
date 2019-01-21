<template>
  <scroller>
       <div class="navigatorBox">
         <image class="gobackStyle" src="/src/assets/cancel.png"></image>
         <text class="navigatorTitle">添加设备</text>
      </div>
      <div class="container">
          <text class="navinfo">请拔插电源插头，或者长按电源键3秒</text>
          <text class="navinfos">直到听见蜂鸣声</text>
          <div class="contentBox">
              <image class="picStyle" src="/src/assets/origin.png"></image>
              <text class="setinfo1">1.设备链接电源，直到设备主页面显示</text>
              <richtext class="setinfo2">2.点击左下角“<image class="setStyle" src="/src/assets/set.png"></image>”设置按钮</richtext>
              <richtext class="setinfo2">3.点击“<image class="set2Style" src="/src/assets/wifi.png"></image>”按钮，进行连接</richtext>
              
          </div>
           <div class="replay">
            <text class="replayText">设备已联网，直接绑定</text>
         </div>
         <div class="bottombtn">
           <text class="bottomText" @click="link('network')">使用手机配置设置网络</text>
         </div>
      </div>

  </scroller>
</template>
<script>
export default {
  components: {},
  name: "addScreendev",
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
    position:fixed;
  top:0px;
  overflow: hidden;
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
  background-color:#fff;
  margin-top: 95px
}
.navinfo {
  font-size: 31px;
  line-height: 31px;
  font-family: PingFang-SC-Medium;
  font-weight: 500;
  color: rgba(102, 102, 102, 1);
  margin-top: 93px;
  margin-left: 127px;
}
.navinfos {
  font-size: 31px;
  font-family: PingFang-SC-Medium;
  font-weight: 500;
  color: rgba(102, 102, 102, 1);
  line-height: 31px;
  margin-top: 20px;
  margin-left: 268px;
}
.contentBox {
  width: 710px;
  height: 693px;
  margin-top: 38px;
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
  margin-top: 79px;
  margin-left: 121px;
}
.setinfo2 {
  margin-top: 30px;
  margin-left: 121px;
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
.replay {
  width: 710px;
  height: 100px;
  margin-top: 47px;
  margin-left: 20px;
  background-color: rgba(244, 244, 244, 1);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-style: solid;
  border-top-width: 1px;
  border-top-color: rgba(31, 31, 31, 1);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-bottom-color: rgba(31, 31, 31, 1);
  border-left-style: solid;
  border-left-width: 1px;
  border-left-color: rgba(31, 31, 31, 1);
  border-right-style: solid;
  border-right-width: 1px;
  border-right-color: rgba(31, 31, 31, 1);
}
.replayText {
  font-size: 36px;
  font-family: PingFang-SC-Medium;
  font-weight: 500;
  color: rgba(102, 102, 102, 1);
  line-height: 36px;
  margin-left: 181px;
  margin-top: 33px;
}
.bottombtn {
  width: 710px;
  height: 100px;
  margin-top: 27px;
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
  margin-left: 181px;
  margin-top: 33px;
}
</style>

