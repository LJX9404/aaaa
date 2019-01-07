<template>
   <scroller>
         <wxc-minibar title="蒸箱" background-color="#000000" text-color="#FFFFFF"></wxc-minibar>
         <div class="navbox">
                <image class="bgimg" src="/src/assets/steambg.png"></image>
                <image class="switchButton" :src='switchOff' @click="turnLight"></image>
                <image  src='/src/assets/yellow_0.png' :class="[isnormal ? normalRing :statusRing]"></image>
                <image :src='mainView' :class="[isnormal ? normalPic :statusPic]"></image>
                <div class="bottompicBox">
                    <div class="childBox">
                         <image class="bottomLeftpic" :src='lightOff' @click="turnLight"></image>
                    </div>
                    <div class="childBox">
                          <image class="bottomCenterpic" src='/src/assets/zhengxiang_water@2x.png'></image>
                    </div>
                    <div  class="childBox">
                        <div class="centerBox">
                        </div>
                        <div class="centerBox2"></div>
                    </div>
                    <div class="zhengqibox childBox" @click="jump('traditionalCooking')">
                          <image class="bottomRightpic " :src='pengrenOff'></image>
                          <text class="zhengqi">蒸汽烹饪</text>
                    </div>
                </div>
            </div>  
      <div class="bottomBox">
        <div class="nav">
          <text  @click="link('caipu')" :class="[selectpath=='caipu'?'nav-item-selecte':'nav-selecte-normal']">蒸箱菜谱</text>
          <text  @click="link('caidan')" :class="[[selectpath=='caidan'?'nav-item-selecte':'nav-selecte-normal'],secondMenu]">蒸箱菜单</text>
          <text  @click="link('moreMenu')" :class="[[selectpath=='moreMenu'?'nav-item-selecte':'nav-selecte-normal'],moreSelect]">更多智能菜谱  ></text>
        </div>
      <scroller scroll-direction="horizontal" class="lists" >
          <div class="cellStyle" v-for="(item,index) in listTwo" :key="index">
            <div class="bottomPicBox">
             <image :src='item.img' class="bottomPic"></image>              
            </div>
             <div class="textBox">
             <text class="bottomText">{{item.text}}</text>               
             </div>
          </div>
      </scroller>
     </div>              
     <div>
           <router-view></router-view>
       </div>
   </scroller>
</template>
<script>
import { WxcMinibar } from "weex-ui";
import { AmTabs } from "weex-amui";
import { throws } from "assert";
const storage = weex.requireModule("storage");
const modal = weex.requireModule("modal");
const lightOn = "/src/assets/lighton.png";
const switchOn = "/src/assets/switchon.png";
const lightToggle = "/src/assets/lightoff.png";
const switchToggle = "/src/assets/switchoff.png";
const pengrenOn = "/src/assets/pengrenselect.png";
const pengrenToggle = "/src/assets/pengren.png";
export default {
  components: { WxcMinibar, AmTabs },
  name: "steam",
  data() {
    return {
      mainView: "/src/assets/steammain.png",
      lightOff: "/src/assets/lightoff.png",
      switchOff: "/src/assets/switchoff.png",
      pengrenOff: "/src/assets/pengren.png",
      selectpath: "caipu",
      moreSelect: "moreStyle",
      secondMenu: "secondStyle",
      listTwo : [{img:'/src/assets/many.png',text:'清蒸鳜鱼'}, {img:'/src/assets/many.png',text:'清蒸鳜鱼'}, {img:'/src/assets/many.png',text:'清蒸鳜鱼'},{img:'/src/assets/many.png',text:'清蒸鳜鱼'},{img:'/src/assets/many.png',text:'清蒸鳜鱼'},{img:'/src/assets/many.png',text:'清蒸鳜鱼'}],
      count: 0,
      isnormal: true,
      normalPic: "mainpic",
      statusPic: "working",
      normalRing: "hiddenRing",
      statusRing: "showRing"
    };
  },
  methods: {
    link: function(e) {
      this._data.selectpath = e;
      switch (e) {
        case "caipu":
          this.listTwo = [{img:'/src/assets/many.png',text:'清蒸鳜鱼'}, {img:'/src/assets/many.png',text:'清蒸鳜鱼'}, {img:'/src/assets/many.png',text:'清蒸鳜鱼'},{img:'/src/assets/many.png',text:'清蒸鳜鱼'},{img:'/src/assets/many.png',text:'清蒸鳜鱼'},{img:'/src/assets/many.png',text:'清蒸鳜鱼'}];
          break;
        case "caidan":
          this.listTwo = [{img:'/src/assets/first.jpg',text:'清蒸鳜鱼'}, {img:'/src/assets/first.jpg',text:'清蒸鳜鱼'}, {img:'/src/assets/many.png',text:'清蒸鳜鱼'},{img:'/src/assets/many.png',text:'清蒸鳜鱼'},{img:'/src/assets/many.png',text:'清蒸鳜鱼'},{img:'/src/assets/many.png',text:'清蒸鳜鱼'}];
          break;
        case "moreMenu":
          this.$router.push(e);
          break;
      }
    },
    jump: function(e) {
      console.log("跳转至传统烹饪");
      this.$router.push(e);
    },
    turnLight: function() {
      this.count++;
      console.log(this.count);
      if (this.count % 2 == 0) {
        this.switchOff = switchToggle;
        this.lightOff = lightToggle;
        this.pengrenOff = pengrenToggle;
        this.isnormal = true;
        this.mainView = "/src/assets/steammain.png";
      } else {
        this.lightOff = lightOn;
        this.switchOff = switchOn;
        this.pengrenOff = pengrenOn;
        this.isnormal = false;
        this.mainView = "/src/assets/yuanhuan.png";
        storage.getItem("cookTime", event => {
          console.log(event.data);
        });
      }
    }
  }
};
</script>
<style scoped>
.navbox {
  width: 750px;
  height: 942px;
  background: cover;
  border-bottom-color: rgba(244, 244, 244, 1);
  border-bottom-style: solid;
  border-bottom-width: 20px;
}
.bgimg {
  width: 750px;
  height: 922px;
  position: absolute;
  top: 0px;
  left: 0px;
}
.switchButton {
  width: 39px;
  height: 39px;
  position: absolute;
  top: 47px;
  right: 33px;
}
.mainpic {
  width: 257px;
  height: 256px;
  position: absolute;
  top: 206px;
  left: 249px;
}
.working {
  width: 350px;
  height: 350px;
  position: absolute;
  top: 95px;
  left: 210px;
  animation: que 4s linear infinite;
}
@keyframes que {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.hiddenRing {
  width: 1px;
  height: 1px;
}
.showRing {
  width: 500px;
  height: 500px;
  position: absolute;
  top: 25px;
  left: 140px;
}
.bottompicBox {
  width: 710px;
  height: 226px;
  position: absolute;
  bottom: 40px;
  left: 20px;
  background-image: linear-gradient(
    to top,
    rgba(42, 42, 42, 1),
    rgba(48, 48, 48, 1)
  );
  opacity: 0.9;
  background-color: #ccc;
  border-top-right-radius: 5px;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  display: -ms-flex;
  display: -webkit-flex;
  display: flex;
  flex-direction: row;
  text-align: center;
  align-items: center;
}
.childBox {
  height: 226px;
}
.bottomLeftpic {
  width: 73px;
  height: 71px;
  margin-top: 78px;
  margin-left: 85px;
}
.bottomCenterpic {
  width: 63px;
  height: 62px;
  margin-top: 82px;
  margin-left: 90px;
}
.bottomRightpic {
  width: 120px;
  height: 120px;
  margin-top: 30px;
  margin-left: 96px;
}
.centerBox {
  margin-top: 34px;
  margin-left: 85px;
  width: 2px;
  height: 80px;
  background-image: linear-gradient(
    to bottom,
    rgba(46, 45, 47, 1),
    rgba(90, 90, 90, 1)
  );
}
.centerBox2 {
  margin-left: 85px;
  margin-top: -2px;
  width: 2px;
  height: 80px;
  background-image: linear-gradient(
    to top,
    rgba(46, 45, 47, 1),
    rgba(90, 90, 90, 1)
  );
}
.zhengqi {
  font-size: 28px;
  line-height: 28px;
  margin-left: 96px;
  margin-top: 19px;
  font-family: PingFang-SC-Bold;
  font-weight: bold;
  color: rgba(244, 244, 244, 1);
}
.gapBox {
  width: 750px;
  height: 20px;
  background-color: rgba(244, 244, 244, 1);
  border-bottom-color: rgba(244, 244, 244, 1) !important;
  border-bottom-style: none !important;
  border-bottom-width: 0 !important;
}
.bottomBox {
  width: 750px;
  height: 523px;
  padding-left: 40px;
  /* background-color:whitesmoke; */
}

.nav {
  display: flex;
  flex-direction: row;
  width: 710px;
}
.nav-item-selecte {
  font-size: 36px;
  line-height: 36px;
  margin-top: 56px;
  font-family: PingFang-SC-Bold;
  font-weight: bold;
  color: rgba(35, 38, 39, 1);
  text-align: center;
}
.nav-selecte-normal {
  font-size: 36px;
  line-height: 36px;
  margin-top: 56px;
  font-family: PingFang-SC-Bold;
  font-weight: bold;
  color: rgba(154, 154, 154, 1);
  text-align: center;
}
.moreStyle {
  font-size: 28px;
  line-height: 28px;
  margin-top: 61px;
  margin-left: 151px;
  font-family: PingFang-SC-Medium;
  font-weight: 500;
  color: rgba(102, 102, 102, 1);
}
.secondStyle {
  margin-left: 54px;
}
.lists {
  width: 1800px;
  height: 260px;
  margin-top: 44px;
  margin-left: -40px;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
}
.cellStyle{
  width: 306px;
  height: 260px;
}
.textBox{
  width: 306px;
  height: 60px;
  text-align: center;
  align-items:center;
}
.bottomPicBox{
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  margin-left: 28px;  
}
.bottomPic{
  width: 306px;
  height: 200px;
}
.bottomText{
  font-size:28px;
  line-height: 28px;
  font-family:PingFang-SC-Bold;
  font-weight:bold;
  color:rgba(31,31,31,1);
  margin-top: 24px
}
</style>