<template>
   <scroller>
        <div class="navigatorBox" >
          <div  @click='toBack'>
             <am-icon type="left" size="md" class="gobackStyle" ></am-icon>
          </div>
          <text class="navigatorTitle">虚拟体验馆</text>
       </div>
        <div class="container">
            <div class="boxone">
        <div class="boxCommon boxwifi">
                 <text class="enviromentinfo">当前环境</text>
                 <image class="wifisty" src="/src/assets/wifi.png"></image>
          </div>

             <div class="boxCommon">
            <div class="environment">
             <text class="title">空气质量</text>
             <text class="goodinfo">优</text>
             <div class="mypro "></div>
             <div class="protext">
               <text class="proinfo">pm</text>
               <text class="proinfo">2.5</text>

             </div>
            </div>
            <div class="environment">
              <text class="title">燃气</text>
              <image class="wuxielouimg" src="/src/assets/wuxielou.png"></image>
              <text class="xieloutext">无泄漏</text>
            </div>
            <div class="environment">
              <text class="title">舒适指数</text>
              <text class="comfortLevel">一般 </text>
              <div class="mypro justSo"></div>
              <div class="protext">
                <text class="proinfo">湿度</text>
                <text class="proinfo">40%</text>
              </div>
            </div>
          </div>
          <div class="networkbox">
             <text class="networkinfo">请先开启设备端配网模式</text>
          </div>
         
          <div class="bottominfo">
              <image src="/src/assets/1.png"  class="bottompic"></image>
                <text class="bottomtext">搜索设备</text>
          </div>
            </div>    
        </div>
   </scroller>
</template>
<script>
import { AmIcon } from "weex-amui";
const dom = weex.requireModule("dom");
let navigator = weex.requireModule("navigator");
export default {
  components: { AmIcon },
  name: "myCooker",
  data() {
    return {};
  },
  methods: {
    toBack: function() {
      console.log("999999");
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
  background-color: #fff;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
}
.gobackStyle {
  margin-left: 34px;
  margin-top: 35px;
  color: #000;
}
.navigatorTitle {
  font-size: 36px;
  font-family: PingFang-SC-Bold;
  font-weight: bold;
  color: #000;
  line-height: 36px;
  margin-top: 35px;
  margin-left: 214px;
}
.container {
  width: 750px;
  background-color: #f4f4f4;
  padding-top: 20px;
  padding-left: 20px;
  padding-bottom: 20px;
}
.boxCommon {
  display: -ms-flex;
  display: -webkit-flex;
  display: flex;
  flex-direction: row;
  text-align: center;
}
.boxone {
  width: 710px;
  height: 565px;
  background-color: #ffffff;
}
.mangerbox {
  height: 121px;
  width: 650px;
  margin-left: 30px;
  margin-right: 30px;
  border-bottom-color: #ced7db;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
}
.mangerinfo {
  font-size: 32px;
  font-family: PingFang-SC-Medium;
  font-weight: 500;
  color: rgba(88, 88, 88, 1);
  margin-top: 45px;
}
.deviceinfo {
  font-size: 27px;
  font-family: PingFang-SC-Medium;
  font-weight: 500;
  color: rgba(154, 154, 154, 1);
  margin-top: 48px;
}
.enviromentinfo {
  font-size: 31px;
  font-family: PingFang-SC-Bold;
  font-weight: bold;
  color: rgba(102, 102, 102, 1);
}

.boxwifi {
  margin-top: 48px;
  margin-left: 34px;
}
.environment {
  margin-top: 40px;
  width: 210px;
  height: 280px;
  border-top-right-radius: 8px;
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  background-color: rgba(249, 249, 249, 1);
  text-align: center;
  margin-left: 20px;
  align-items: center;
}

.title {
  font-size: 23px;
  line-height: 23px;
  font-family: PingFang-SC-Medium;
  font-weight: 500;
  color: rgba(102, 102, 102, 1);
  margin-top: 24px;
}
.wuxielouimg {
  width: 59px;
  height: 69px;
  margin-top: 43px;
}
.xieloutext {
  font-size: 31px;
  line-height: 31px;
  font-family: PingFang-SC-Bold;
  font-weight: bold;
  color: rgba(73, 73, 73, 1);
  margin-top: 49px;
}

.comfortLevel {
  font-size: 60px;
  line-height: 60px;
  font-family: PingFang-SC-Bold;
  font-weight: bold;
  color: rgba(102, 102, 102, 1);
  margin-top: 51px;
}
.goodinfo {
  margin-top: 51px;
  font-size: 70px;
  line-height: 70px;
  font-family: PingFang-SC-Bold;
  font-weight: bold;
  color: rgba(200, 175, 112, 1);
}
.mypro {
  width: 174px;
  height: 6px;
  background-color: rgba(232, 238, 245, 1);
  border-radius: 3px;
  margin-top: 46px;
}
.protext {
  width: 174px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 23px;
}
.justSo {
  margin-top: 55px;
}
.proinfo {
  font-size: 23px;
  line-height: 23px;
  font-family: PingFangSC-Semibold;
  font-weight: 600;
  color: rgba(102, 102, 102, 1);
}
.networkbox {
  width: 750px;
  text-align: center;
  align-items: center;
}
.networkinfo {
  font-size: 23px;
  font-family: PingFangSC-Semibold;
  font-weight: 600;
  color: rgba(102, 102, 102, 1);
  margin-top: 24px;
}
.bottominfo {
  border-top-width: 1px;
  border-top-color: #aba7a7;
  border-top-style: solid;
  border-left-width: 1px;
  border-left-color: #aba7a7;
  border-left-style: solid;
  border-right-width: 1px;
  border-right-color: #aba7a7;
  border-right-style: solid;
  border-bottom-width: 1px;
  border-bottom-color: #aba7a7;
  border-bottom-style: solid;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  margin-top: 20px;
  margin-left: 60px;
  margin-bottom: 20px;
  width: 600px;
  height: 80px;
  display: flex;
  justify-content: center;
  flex-direction: row;
}
.bottompic {
  width: 50px;
  height: 50px;
  margin-top: 15px;
}
.bottomtext {
  font-size: 20px;
  margin-top: 30px;
}
</style>

