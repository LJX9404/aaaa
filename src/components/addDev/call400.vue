<template>
  <scroller>
       <div class="navigatorBox">
         <image class="gobackStyle" src="/src/assets/cancel.png"></image>
         <text class="navigatorTitle">添加设备</text>
      </div>
      <div class="container">
          <div class="mainpicBox">
              <image class="mainpic" src="/src/assets/youyanji_03.png"></image>
              <div class="infoBox">
                  <text class="devInfo">方太CXW-200油烟机...</text>
              </div>
          </div>
          <div class="erroBox">
                <image class="erroPic" scr="/src/assets/failure.png"></image> 
                <text class="erroInfo">绑定未成功</text>             
          </div>
           <div class="failBox">
             <text class="failText">可能是以下原因：</text>
             <text class="failText">1.设备与手机是否处于同一WIFI下</text>
             <text class="failText">2.请确认无线网络状态是否畅通</text>
             <text class="failText">3.请确认设备WIFI模式未关闭</text>
         </div>
         <div class="replay">
            <text class="replayText">一键拨打400</text>
         </div>
         <div class="bottombtn">
           <text class="bottomText" @click="link('someSuccess')">重新配置</text>
         </div>
      </div>

  </scroller>
</template>
<script>
export default {
  components: {},
  name: "call400",
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
  height: 1205px;
  background-color: rgba(244, 244, 244, 1);
  margin-top: 95px
}
.mainpicBox {
  width: 396px;
  height: 400px;
  margin-top: 119px;
  margin-left: 177px;
  background-color: rgba(255, 255, 255, 1);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  position: relative;
}
.mainpic {
  width: 229px;
  height: 129px;
  margin-left: 84px;
  margin-top: 86px;
}
.infoBox {
  width: 396px;
  height: 92px;
  background-color: rgba(241, 236, 226, 1);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  position: absolute;
  left: 0px;
  bottom: 0px;
}
.devInfo {
  font-size: 32px;
  font-family: PingFang-SC-Medium;
  font-weight: 500;
  color: rgba(200, 175, 112, 1);
  line-height: 32px;
  margin-left: 30px;
  margin-top: 30px;
}
.erroBox {
  display: flex;
  flex-direction: row;
  margin-left: 228px;
  margin-top: 45px;
  width: 300px;
  height: 68px;
}
.erroPic {
  width: 68px;
  height: 68px;
}
.erroInfo {
  font-size: 42px;
  font-family: PingFang-SC-Medium;
  font-weight: 500;
  color: rgba(31, 31, 31, 1);
  line-height: 42px;
  margin-top: 15px;
  margin-left: 20px;
}
.failBox {
  width: 420px;
  height: 176px;
  margin-left: 169px;
  margin-top: 68px;
}
.failText {
  text-align: center;
  font-size: 28px;
  font-family: PingFang-SC-Medium;
  font-weight: 500;
  color: rgba(88, 88, 88, 1);
}
.replay{
width:710px;
height:100px;
margin-top: 75px;
margin-left: 20px;
background-color:rgba(244,244,244,1);
border-top-left-radius: 8px;
border-top-right-radius: 8px;
border-bottom-left-radius: 8px;
border-bottom-right-radius: 8px;
border-top-style: solid;
border-top-width: 1px;
border-top-color: rgba(31,31,31,1);
border-bottom-style: solid;
border-bottom-width: 1px;
border-bottom-color: rgba(31,31,31,1);
border-left-style: solid;
border-left-width: 1px;
border-left-color: rgba(31,31,31,1);
border-right-style: solid;
border-right-width: 1px;
border-right-color: rgba(31,31,31,1);
}
.replayText{
  font-size:36px;
font-family:PingFang-SC-Medium;
font-weight:500;
color:rgba(102,102,102,1);
line-height:36px;
margin-left: 251px;
margin-top: 33px
}
.bottombtn{
width:710px;
height:100px;
margin-top: 30px;
margin-left: 20px;
background-color:rgba(31,31,31,1);
border-top-left-radius: 8px;
border-top-right-radius: 8px;
border-bottom-left-radius: 8px;
border-bottom-right-radius: 8px;
border-top-style: solid;
}
.bottomText{
  font-size:36px;
font-family:PingFang-SC-Medium;
font-weight:500;
color:rgba(200,175,112,1);
line-height:36px;
margin-left: 251px;
margin-top: 33px
}

</style>

