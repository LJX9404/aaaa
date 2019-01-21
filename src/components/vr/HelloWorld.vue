<template>
<scroller class='scroller'> 
   <div class="navigatorBox" >
    <div  @click='toBack'>
        <am-icon type="left" size="md" class="gobackStyle" ></am-icon>
    </div>
    <text class="navigatorTitle">虚拟体验</text>
  </div>

      <div class="container ">
        <div class="boxone" @click="link('myCooker')">
          <div class="boxCommon mangerbox"  >
             <text class="mangerinfo">我的大厨管家</text>
             <text class="deviceinfo">已连接的设备 ></text>
          </div>
          <div class="boxCommon boxwifi">
           <text class="enviromentinfo">当前环境</text>
          </div>

          <div class="boxCommon">
            <div class="environment">
             <text class="title">空气质量</text>
             <text class="goodinfo">优</text>
             <div class="mypro"></div>
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
        </div>
          <div class="secondnav"  >
             <text class="myChufang">我的智能厨房</text>
             <text class="addDevice">添加设备  ></text>
          </div>
   
    <div >
           <div class="safyBox">
            <text class="safyClean">美味生活</text>
           <image :src="openbtn" class="viewBtn" @click="changeView('one')" ></image>
        </div>
        <div :class="[isActive ? activeContainerBox :inactiveContainerbox]">
          <div :class="[item.statusCode,[isActive ? activePerBox :inactivePerbox]]" v-for="(item,index) in list" :key="index"  @click="detil(item.id)">
              <image :src="item.img" :class="[isActive ? activeimg :inactiveimg]"></image>
              <div :class="[isActive ? activeTextBox :inactiveTextBox]">
                  <text :class="[isActive ? activeTextInfo :inactiveTextInfo]">{{item.text}}</text>
                  <text :class="[isActive ? activeStatus :inactiveStatus]">{{item.status}}</text>
              </div>
          </div>
        </div>
    </div>
    
  
    <div >
           <div class="safyBox">
            <text class="safyClean">安全洁净</text>
        </div>
        <div :class="[isActive ? activeContainerBox :inactiveContainerbox]">
          <div :class="[item.statusCode,[isActive ? activePerBox :inactivePerbox]]" v-for="(item,index) in list" :key="index"  @click="detil(item.id)">
              <image :src="item.img" :class="[isActive ? activeimg :inactiveimg]"></image>
              <div :class="[isActive ? activeTextBox :inactiveTextBox]">
                  <text :class="[isActive ? activeTextInfo :inactiveTextInfo]">{{item.text}}</text>
                  <text :class="[isActive ? activeStatus :inactiveStatus]">{{item.status}}</text>
              </div>
          </div>
        </div>
    </div>
        <image class="footerImg1" src="/src/assets/many.png" ></image>
        <image class="footerImg2 " src="/src/assets/virt.png"></image>  
 </div>
      <div >
             <router-view></router-view>
      </div>
    </scroller>
</template>
<script>
import { AmIcon } from "weex-amui";
const dom = weex.requireModule("dom");
let navigator = weex.requireModule("navigator");
const modal = weex.requireModule("modal");
const closebtn = "/src/assets/viewTwo.png";
const toggelbtn = "/src/assets/viewOne.png";
export default {
  components: { AmIcon },
  name: "HelloWorld",
  data() {
    return {
      isActive: true,
      openbtn: "/src/assets/viewOne.png",
      list: [
        {
          img: "/src/assets/daoshiji1.png",
          text: "蒸箱",
          id: "steam",
          status: "联网",
          statusCode: "online"
        },
        {
          img: "/src/assets/youyanji1.png",
          text: "烤箱",
          id: "oven",
          status: "故障",
          statusCode: "fault"
        },
        {
          img: "/src/assets/zhengwei1.png",
          text: "蒸微一体机",
          id: "steamMicro",
          status: "运行中",
          statusCode: "working"
        },
        {
          img: "/src/assets/zaoju.png",
          text: "灶具",
          id: "cooker",
          status: "待机",
          statusCode: "wating"
        },
        {
          img: "/src/assets/daoshiji1.png",
          text: "蒸箱",
          id: "steam",
          status: "联网",
          statusCode: "online"
        }
      ],
      listTwo: [
        {
          img: "/src/assets/daoshiji1.png",
          text: "蒸箱",
          id: "steam",
          status: "联网",
          statusCode: "online"
        },
        {
          img: "/src/assets/youyanji1.png",
          text: "烤箱",
          id: "oven",
          status: "故障"
        },
        {
          img: "/src/assets/zhengwei1.png",
          text: "蒸微一体机",
          id: "steamMicro",
          status: "运行中"
        },
        {
          img: "/src/assets/zaoju.png",
          text: "灶具",
          id: "cooker",
          status: "待机"
        },
        {
          img: "/src/assets/daoshiji1.png",
          text: "蒸箱",
          id: "steam",
          status: "联网"
        }
      ],
      flag: 0,
      count: 0,
      activeContainerBox: "containerBoxOpen",
      inactiveContainerbox: "containerBoxClose",
      activePerBox: "perBoxOpen",

      inactivePerbox: "perBoxClose",
      activeimg: "imgOpen",
      inactiveimg: "imgClose",
      activeTextBox: "textBoxOpen",
      inactiveTextBox: "textBoxClose",
      activeTextInfo: "textInfoOpen",
      inactiveTextInfo: "textInfoClose",
      activeStatus: "statusOpen",
      inactiveStatus: "statusClose",
      isActive: true
    };
  },
  methods: {
    link: function(e) {
      console.log(e);
      this.$router.push(e);
    },
    toBack: function() {
     this.$router.go(-1);
    },
    jump: function(e) {
      this.$router.push(e);
    },
    changeView: function(e) {
      switch (e) {
        case "one":
          this.count++;
          this.isActive = !this.isActive;
          if (this.count % 2 == 1) {
            this.openbtn = closebtn;
          } else {
            this.openbtn = toggelbtn;
          }
          break;
        case "two":
          this.flag++;
          this.isActiveTwo = !this.isActiveTwo;
          if (this.flag % 2 == 1) {
            (this.a = "fjijij"), (this.openbtn = closebtn);
          } else {
            this.a = "hhhhhhhh";
            this.openbtn = toggelbtn;
          }
          break;
      }
    },
    detil: function(e) {
      console.log(e);
      this.$router.push(e);
    }
  }
};
</script>
<style scoped>
.navigatorBox{
  width: 750px;
  height: 95px;
  background-color: #fff;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
   position: fixed;
  top: 0px;
  overflow: hidden;
}
.gobackStyle{
  margin-left: 34px;
  margin-top: 35px;
}
.navigatorTitle{
font-size:36px;
font-family:PingFang-SC-Bold;
font-weight:bold;
color:rgba(31,31,31,1);
line-height:36px;
margin-top: 35px;
margin-left: 214px
}
.container {
  width: 750px;
  background-color: #f4f4f4;
  padding-top: 20px;
  padding-left: 20px;
  padding-bottom: 20px;
  margin-top: 98px
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
.justSo {
  margin-top: 55px;
}
.protext {
  width: 174px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 23px;
}
.proinfo {
  font-size: 23px;
  line-height: 23px;
  font-family: PingFangSC-Semibold;
  font-weight: 600;
  color: rgba(102, 102, 102, 1);
}
.secondnav {
  width: 670px;
  height: 133px;
  margin-left: 20px;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-bottom-color: rgba(206, 215, 219, 1);
  padding-top: 62px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.myChufang {
  font-size: 32px;
  line-height: 32px;
  font-family: PingFang-SC-Medium;
  font-weight: 500;
  color: rgba(102, 102, 102, 1);
}
.addDevice {
  font-size: 27px;
  line-height: 27px;
  font-family: PingFang-SC-Medium;
  font-weight: 500;
  color: rgba(154, 154, 154, 1);
  margin-right: 0px;
}
.boxtwo {
  width: 670px;
  height: 110px;
  margin-left: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 35px;
}
.tastyLifeBox {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 710px;
  height: 110px;
  padding-left: 20px;
  padding-right: 20px;
}
.tastyLife {
  font-size: 31px;
  line-height: 31px;
  margin-top: 36px;
  font-family: PingFang-SC-Bold;
  font-weight: bold;
  color: rgba(35, 38, 39, 1);
}
.safyBox {
  width: 710px;
  height: 97px;
  padding-left: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.safyClean {
  font-size: 32px;
  line-height: 32px;
  margin-top: 27px;
  font-family: PingFang-SC-Bold;
  font-weight: bold;
  color: rgba(35, 38, 39, 1);
}
.viewBtn {
  width: 44px;
  height: 44px;
  margin-top: 29px;
  margin-right: 20px;
}
.containerBoxOpen {
  width: 710px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
}
.containerBoxClose {
  width: 710px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  flex-wrap: wrap;
}
.perBoxOpen {
  width: 710px;
  height: 188px;
  position: relative;
  margin-bottom: 20px;
}
.perBoxClose {
  width: 225px;
  height: 242px;
  margin-bottom: 20px;
  margin-left: 11px;
}
.imgOpen {
  width: 120px;
  height: 108px;
  position: absolute;
  top: 40px;
  left: 52px;
}
.imgClose {
  width: 88px;
  height: 88px;
  margin-top: 38px;
  margin-left: 69px;
  margin-bottom: 39px;
}
.textBoxOpen {
  position: absolute;
  top: 0px;
  left: 0px;
  width: 710px;
  height: 188px;
}
.textBoxClose {
  width: 226px;
  height: 75px;
  align-items: center;
  text-align: center;
  border-top-color: #ced7db;
  border-top-style: solid;
  border-top-width: 1px;
  margin-bottom: 0px;
}
.textInfoOpen {
  margin-top: 56px;
  margin-left: 262px;
  font-size: 31px;
  line-height: 31px;
  font-family: PingFang-SC-Medium;
  font-weight: 500;
  color: rgba(255, 255, 255, 1);
}
.textInfoClose {
}
.statusOpen {
  margin-top: 24px;
  margin-left: 262px;
  font-size: 27px;
  font-family: PingFang-SC-Medium;
  font-weight: 500;
  color: rgba(255, 255, 255, 1);
}
.statusClose {
}
.online {
  background-color: rgba(248, 198, 198, 0.5);
}
.working {
  background-color: rgba(189, 234, 99, 0.5);
}
.wating {
  background-color: rgba(251, 255, 147, 0.5);
}
.fault {
  background-color: rgba(238, 16, 16, 0.5);
}
.footerImg1 {
  width: 710px;
  height: 352px;
  margin-bottom: 20px;
  margin-top: 47px;
}
.footerImg2 {
  width: 710px;
  height: 339px;
}
</style>


