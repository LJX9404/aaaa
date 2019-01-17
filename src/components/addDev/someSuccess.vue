<template>
  <scroller>
       <div class="navigatorBox">
         <image class="gobackStyle" src="/src/assets/cancel.png"></image>
         <text class="navigatorTitle">添加设备</text>
      </div>
      <div class="container">
          <scroller  scroll-direction='horizontal' class="bingSuccessBox">
              <div class="bingSuccessDev" v-for="(item,index) in list" :key="index">
                  <image class="devpic" :src="item.img"></image>
                  <div class="infoBox">
                      <text class="devinfo">{{item.message}}</text>
                  </div>
              </div>
          </scroller>
          <div class="erroBox">
                <image class="erroPic" scr="/src/assets/succeed.png"></image> 
                <text class="erroInfo">绑定未成功</text>             
          </div>
          <div class="grap"></div>

              <text class="textStyle">检测到该WIFI下有以下设备还未绑定</text>
              <text class="bingSure">是否绑定</text>
          <scroller  scroll-direction='horizontal' class="bingFailBox">
              <div class="bingSuccessDev" v-for="(item,index) in list" :key="index">
                  <image class="devpic" :src="item.img"></image>
                  <div class="infoBox">
                      <text class="devinfo">{{item.message}}</text>
                  </div>
              </div>
          </scroller>
             <div class="bottombtn">
            <text class="bottomText">继续绑定</text>
         </div>
         <div class="replay">
           <text class="replayText" @click="link('addScreendev')">返回我的厨房</text>
         </div>
      </div>
  </scroller>
</template>
<script>
export default {
  components: {},
  name: "someSuccess",
  data() {
    return {
      list: [
        { img: "/src/assets/origin.png", message: "方太CXW-200油烟机..." },
        { img: "/src/assets/origin.png", message: "方太CXW-200油烟机..." },
        { img: "/src/assets/origin.png", message: "方太CXW-200油烟机..." },
        { img: "/src/assets/origin.png", message: "方太CXW-200油烟机..." },
        { img: "/src/assets/origin.png", message: "方太CXW-200油烟机..." }
      ]
    };
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
  height: 1797px;
  background-color: rgba(244, 244, 244, 1);
}
.bingSuccessBox {
  width: 2140px;
  height: 400px;
  margin-top: 119px;
  margin-left: 20px;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
}
.bingFailBox{
width: 2140px;
  height: 400px;
  margin-top: 74px;
  margin-left: 20px;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
}
.bingSuccessDev {
  position: relative;
  width: 396px;
  height: 400px;
  margin-left: 20px;
  background-color: rgba(255, 255, 255, 1);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
}
.devpic {
  width: 195px;
  height: 170px;
  margin-top: 75px;
  margin-left: 101px;
}
.infoBox {
  width: 396px;
  height: 92px;
  position: absolute;
  left: 0px;
  bottom: 0px;
  background-color: rgba(241, 236, 226, 1);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  text-align: center;
  align-items: center;
}
.devinfo {
  font-size: 32px;
  font-family: PingFang-SC-Medium;
  font-weight: 500;
  color: rgba(200, 175, 112, 1);
  line-height: 32px;
  margin-top: 30px;
}
.erroBox {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  margin-left: 228px;
  margin-top: 97px;
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
.grap {
  width: 750px;
  height: 1px;
  background-color: rgba(206, 215, 219, 1);
}
.centerBox {
  width: 580px;
  height: 106px;
  text-align: center;
  align-items: center;
  margin-top: 88px;
  margin-left: 88px;
}
.textStyle {
  font-size: 36px;
  font-family: PingFang-SC-Medium;
  font-weight: 500;
  color: rgba(31, 31, 31, 1);
  line-height: 36px;
  margin-top: 88px;
  margin-left: 88px;
}
.bingSure {
  font-size: 36px;
  font-family: PingFang-SC-Medium;
  font-weight: 500;
  color: rgba(31, 31, 31, 1);
  line-height: 36px;
  margin-top: 34px;
  margin-left: 303px;
}
.replay{
width:710px;
height:100px;
margin-top: 30px;
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
margin-top: 129px;
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

