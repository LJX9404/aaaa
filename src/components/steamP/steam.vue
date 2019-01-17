<template>
  <scroller>
    <div class="containerStyle">
      <div>
          <div class="navigatorBox" >
    <div  @click='toBack'>
        <am-icon type="left" size="md" class="gobackStyle" ></am-icon>
    </div>
    <text class="navigatorTitle">我的蒸箱</text>
  </div>

        <div class="navbox" >
          <image
            class="bgimg"
            src="/src/assets/steambg.png"
          ></image>
          <image
            class="switchButton"
            :src='switchOff'
            @click="power"
          ></image>
          <div :class="[isnormal ? normalRing :statusRing]">
          </div>
          <div
            class='demo1-bg2-2'
            :style='{ opacity:circle.bg2opacity,
                  transform:circle.bg2rotate,
                }'
            ref="circle2"
          ></div>
          <div
            class="demo1-bg2-1"
            :style='{ opacity:circle.bg1opacity,
                  transform:circle.bg2rotate,
                }'
            ref="circle"
          ></div>
          <div :class="[isnormal ? normalPic :'',descalingImg ? 'hidden' :'']">
            <image
              :src="mainView"
              :class="[isnormal&&!descalingImg ? 'mainpic1' :'']"
            ></image>
          </div>
          <div :class="[descalingImg ? 'mainpicDescalingImg' :'']">
            <image
              :src='startImg'
              :class="[descalingImg ? 'mainpic1' :'',descalingImg=='除垢' ? 'descalingImg':'',descalingImg=='发酵' ? 'doorImg':'']"
            ></image>
          </div>
          <div
            ref='test'
            :class="[isnormal ? '' :'working']"
          >
            <image
              src="/src/assets/yuanhuan.png"
              :class="[isnormal ? '' :'working1']"
            ></image>
          </div>
          <text
            class="text descalingtext"
            :class="[descalingImg=='除垢' ? '' :'hidden']"
            v-if='descalingImg'
          >请在水箱内加入1包除垢剂并添加水至除垢水位,
            整个除垢过程中大约需要71分钟,
            按开关进行除垢</text>
          <text
            class="text descalingtext"
            :class="[descalingImg=='发酵' ? '' :'hidden']"
            :style='{fontSize:"31px",paddingTop:"10px"}'
            v-if='descalingImg'
          > 请将蒸盘放在中间层,按开始键进行发酵</text>
          <!-- 圆环内容 -->
          <div
            class='txtBox'
            :class="[isnormal ? 'hidden' :'']"
            v-if='!isnormal&&cookText.status=="working"'
          >
            <div class="group">
              <div class="panel"><text class="text paddingRight20">{{cookText.degreeCelsius}}</text></div>
              <div class="panel"><text class="text">{{cookText.pattern}}</text></div>
            </div>
            <div class="group">
              <div class="panel"> <text
                  class="text txt2"
                  v-if="cookText.hour!=0"
                >{{cookText.hour}}</text></div>
              <div class="panel"> <text
                  class="text txtColor paddingRight10"
                  v-if="cookText.hour!=0"
                >时</text></div>
              <div class="panel"><text class="text txt2">{{cookText['minute']}}</text></div>
              <div class="panel"> <text class="text txtColor">分</text></div>
            </div>
            <div class="group">
              <div class="panel"> <text class="text txtorder">{{cookText.order}}</text></div>
            </div>
          </div>
          <!-- 预约内容 -->
          <div
            class="txtBox planText"
            :class="[isnormal ? 'hidden' :'']"
           
            v-if='!isnormal&&cookText.status=="plan"'
          >
            <div class="navTextStyle">
              <text class="putongSteam">{{cookText.pattern}}</text>
            </div>
            <div class="dataBox">
              <text class="putongSteam">{{cookText.degreeCelsius}}</text>
              <text class="putongSteam">{{cookText.hour+'时'+cookText.minute+'分'}}</text>
            </div>
            <div class="tomorrowBox">
              <div class="lineStyle"></div>
              <text class="dayText">{{cookText.planDay}}</text>
              <div class="lineStyle"></div>
            </div>
            <text class="detilTime">{{cookText.planTime}}</text>
            <text class="reserving">预约中</text>
          </div>
          <!-- 工作状态通用按钮组 -->
          <div
            class="btnBox"
            :class="[isnormal ? 'hidden' :'']"
            v-if='!isnormal'
          >
            <div
              class="btnImage1"
              @click='showPopup(cookText.pattern)'
            >
              <image
                class="btnImage1"
                src="/src/assets/RoundedRectangle@2x.png"
              ></image>
              <text class='btntext'>取消</text>
            </div>
            <div class="btnImage2">
              <image
                class="btnImage2"
                src="/src/assets/RoundedRectangle@2x.png"
              ></image>
              <text
                class='btntext'
                :class="[btnContinueAndSuspend=='立即开始'?'left_20':'']"
                @click="suspend"
              >{{btnContinueAndSuspend}}</text>
            </div>
          </div>
          <!-- 除垢、发酵开始按钮 -->
          <div
            class="btnBox center"
            :class="[descalingImg ? '' :'hidden']"
            v-if='descalingImg'
          >
            <div
              class="btnImage3"
              @click="start"
            >
              <image
                class="btnImage1"
                src="/src/assets/RoundedRectangle@2x.png"
              ></image>
              <text class='btntext'>开始</text>
            </div>
          </div>
          <!-- navbox底部栏 -->
          <div class="bottompicBox">
            <div class="childBox">
              <image
                class="bottomLeftpic"
                :src='lightOff'
                @click="lampSwitch"
              ></image>
            </div>
            <div class="childBox">
              <image
                class="bottomCenterpic"
                src='/src/assets/zhengxiang_water@2x.png'
              ></image>
            </div>
            <div class="childBox">
              <div class="grap"></div>
            <div class="grap2"></div>
            </div>
            <div
              class="zhengqibox childBox"
              @click="jump('traditionalCooking')"
            >
              <image
                class="bottomRightpic "
                :src='pengrenOff'
              ></image>
              <text class="zhengqi">蒸汽烹饪</text>
            </div>
          </div>
        </div>
        <!-- 菜谱 -->
        <div>
          <div class="bottomBox">
            <div class="nav">
              <text
                @click="link('caipu')"
                :class="[selectpath=='caipu'?'nav-item-selecte':'nav-selecte-normal']"
              >蒸箱菜谱</text>
              <text
                @click="link('caidan')"
                :class="[[selectpath=='caidan'?'nav-item-selecte':'nav-selecte-normal'],secondMenu]"
              >蒸箱菜单2</text>
              <text
                @click="link('moreMenu')"
                :class="[[selectpath=='moreMenu'?'nav-item-selecte':'nav-selecte-normal'],moreSelect]"
              >更多智能菜谱 ></text>
            </div>
            <scroller
              scroll-direction="horizontal"
              class="lists"
            >
              <div
                class="cellStyle"
                v-for="(item,index) in listTwo"
                :key="index"
              >
                <div class="bottomPicBox">
                  <image
                    :src='item.img'
                    class="bottomPic"
                  ></image>
                </div>
                <div class="textBox">
                  <text class="bottomText">{{item.text}}</text>
                </div>
              </div>
            </scroller>
          </div>
        </div>
      </div>
      <div :class="[showpBox ? 'mask' :'']"></div>
      <div :class="[showpBox ? showP :hiddenP]">
        <text class="dangerInfo">{{popupTxt}}</text>
        <div class="promotBox">
          <div
            class="leftbox"
            @click="showPopup"
          >
            <text class="cancleText">取消</text>
          </div>
          <div>
            <text
              class="sureText"
              @click='remove'
            >确定</text>
          </div>
        </div>
      </div>
    </div>
  </scroller>
</template>
<script>
import { WxcMinibar } from "weex-ui";
import { AmTabs, AmIcon } from "weex-amui";
import { throws } from "assert";
const dom = weex.requireModule("dom");
let navigator = weex.requireModule("navigator");
const storage = weex.requireModule("storage");
const modal = weex.requireModule("modal");
const animation = weex.requireModule("animation");
const lightOn = "/src/assets/lighton.png";
const switchOn = "/src/assets/switchon.png";
const lightToggle = "/src/assets/lightoff.png";
const switchToggle = "/src/assets/switchoff.png";
const pengrenOn = "/src/assets/pengrenselect.png";
const pengrenToggle = "/src/assets/pengren.png";

export default {
  components: { WxcMinibar, AmTabs, AmIcon },
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
      listTwo: [
        { img: "/src/assets/many.png", text: "清蒸鳜鱼" },
        { img: "/src/assets/many.png", text: "清蒸鳜鱼" },
        { img: "/src/assets/many.png", text: "清蒸鳜鱼" },
        { img: "/src/assets/many.png", text: "清蒸鳜鱼" },
        { img: "/src/assets/many.png", text: "清蒸鳜鱼" },
        { img: "/src/assets/many.png", text: "清蒸鳜鱼" }
      ],
      count: 0,
      isnormal: true,
      normalPic: "mainpic",
      statusPic: "working",
      normalRing: "hiddenRing",
      statusRing: "showRing",
      descalingImg: false,
      startImg: "/src/assets/descaling@2x.png",
      descalingtext: "",
      current_rotate: 0,
      yuanhuanTimer: null,
      circle: {
        val: 1,
        bg1opacity: 0,
        bg2opacity: 1,
        bg2rotate: "rotate(-45deg)",
        bg2borderTopLeftColor: "transparent",
        bg2borderBottomRightColor: "#585858",
        bg1rotate: "rotate(-45deg)",
        timer: null,
        circleTime: 1000,
        totalTime: 60
      },
      cookText: null,
      btnContinueAndSuspend: "暂停",
      btnContinueAndSuspendStatus: false,
      showpBox: false,
      showP: "showpBoxStyle",
      hiddenP: "hiddenpBox",
      popupTxt: "         您确定结束烹饪吗？"
    };
  },
  mounted() {
    storage.getItem("cookTime", event => {
      if (event.result == "success") {
        console.log("get value:", JSON.parse(event.data));
        this.cookText = JSON.parse(event.data);
        this.circle.totalTime =
          (this.cookText.hour * 60 + Number(this.cookText.minute)) * 60;
        if (this.cookText.status == "plan") {
          this.btnContinueAndSuspend = "立即开始";
          this.turnLight();
        } else if (
          this.cookText.pattern == "除垢" &&
          this.cookText.descalingImg
        ) {
          this.descalingImg = "除垢";
          this.circle.bg2opacity = 0;
        } else if (
          this.cookText.pattern == "发酵" &&
          this.cookText.descalingImg
        ) {
          this.descalingImg = "发酵";
          this.circle.bg2opacity = 0;
          this.startImg = "/src/assets/door@2x.png";
        } else if (
          (this.cookText.pattern == "除垢" && !this.cookText.descalingImg) ||
          (this.cookText.pattern == "发酵" && !this.cookText.descalingImg)
        ) {
          this.circle.bg2opacity = 0;
        } else {
          setTimeout(() => {
            if (this.cookText.minute > 0) {
              this.cookText.minute -= 1;
            } else {
              if (this.cookText.hour == 0) return;
              this.cookText.hour -= 1;
              this.cookText.minute = 59;
            }
          }, 1000);
          this.changeTime();
          this.turnLight();
        }
      } else {
        this.circle.bg2opacity = 0;
      }
    });
  },
  methods: {
    toBack: function() {
      this.$router.go(-1);
    },
    link: function(e) {
      this._data.selectpath = e;
      switch (e) {
        case "caipu":
          this.listTwo = [
            { img: "/src/assets/many.png", text: "清蒸鳜鱼" },
            { img: "/src/assets/many.png", text: "清蒸鳜鱼" },
            { img: "/src/assets/many.png", text: "清蒸鳜鱼" },
            { img: "/src/assets/many.png", text: "清蒸鳜鱼" },
            { img: "/src/assets/many.png", text: "清蒸鳜鱼" },
            { img: "/src/assets/many.png", text: "清蒸鳜鱼" }
          ];
          break;
        case "caidan":
          this.listTwo = [
            { img: "/src/assets/first.jpg", text: "清蒸鳜鱼" },
            { img: "/src/assets/first.jpg", text: "清蒸鳜鱼" },
            { img: "/src/assets/many.png", text: "清蒸鳜鱼" },
            { img: "/src/assets/many.png", text: "清蒸鳜鱼" },
            { img: "/src/assets/many.png", text: "清蒸鳜鱼" },
            { img: "/src/assets/many.png", text: "清蒸鳜鱼" }
          ];
          break;
        case "moreMenu":
          this.$router.push(e);
          break;
      }
    },
    showPopup: function(item) {
      this.showpBox = !this.showpBox;
      if (this.showpBox) {
        let list = ["普通蒸", "过温", "解冻", "除垢", "发酵"];
        let status = list.indexOf(item);
        if (status > 1 || status == -1) {
          this.popupTxt = "您确定结束" + item + "吗？";
        }
      }
      // if (this.showpBox) {
      //   let list = ["普通蒸", "过温", "解冻", "除垢", "发酵"];
      //   let status = list.indexOf(this.cookText.pattern);
      //   if (status > 1){
      //     this.popupTxt ="         您确定结束" + this.cookText.pattern + "吗？"
      //   };

      //   if (this.switchOff == switchOn) {
      //     this.popupTxt = "     您确定结束所有任务吗？";
      //   }
      // }
    },
    lampSwitch() {
      if (this.lightOff == lightOn) {
        this.lightOff = lightToggle;
      } else {
        this.lightOff = lightOn;
      }
    },
    changedescalingImg() {
      console.log("event");
      storage.getItem("cookTime", event => {
        if (event.result == "success") {
          let temp = JSON.parse(event.data);
          temp.descalingImg = false;
          console.log(temp);
          storage.setItem("cookTime", JSON.stringify(temp), event => {
            console.log(temp);
          });
        }
      });
    },
    start() {
      this.descalingImg = false;
      this.circle.bg2opacity = 1;
      setTimeout(() => {
        if (this.cookText.minute > 0) {
          this.cookText.minute -= 1;
        } else {
          if (this.cookText.hour == 0) return;
          this.cookText.hour -= 1;
          this.cookText.minute = 59;
        }
      }, 1000);
      this.changeTime();
      this.turnLight();
    },
    power() {
      if (this.switchOff == switchOn) {
        this.showPopup("所有任务吗");
      }
    },
    jump: function(e) {
      console.log("跳转至传统烹饪", e);
      if (this.pengrenOff == pengrenOn) {
        this.showPopup(this.cookText.pattern);
      } else {
        this.$router.push(e);
        this.changedescalingImg();
      }
    },
    turnLight: function() {
      this.count++;
      console.log(this.count);
      if (this.count % 2 == 0) {
        this.switchOff = switchToggle;
        this.pengrenOff = pengrenToggle;
      } else {
        this.switchOff = switchOn;
        this.pengrenOff = pengrenOn;
      }
      this.isnormal = false;
      let el = this.$refs.test;
      let el1 = this.$refs.circle;
      let el2 = this.$refs.circle2;
      let self = this;
      setTimeout(() => {
        this.rotate(el);
      }, 0);
      this.yuanhuanTimer = setInterval(function() {
        self.rotate(el);
      }, 3500);
      if (this.cookText.status == "plan") return;
      this.rotateCircle(el2, el1);
      this.circleRun(el2, el1);
    },
    rotate(el) {
      let self = this;
      this.current_rotate += 360;
      animation.transition(
        el,
        {
          styles: {
            color: "#FF0000",
            transform: "rotate(" + self.current_rotate + "deg)",
            transformOrigin: "center center"
          },
          duration: 4000, //ms
          timingFunction: "linear",
          delay: 0 //ms
        },
        function() {}
      );
    },
    rotateCircle: function(el2, el1) {
      let self = this;
      if (this.circle.val <= this.circle.totalTime / 2) {
        animation.transition(
          el2,
          {
            styles: {
              transform:
                "rotate(" +
                (-45 +
                  180 * self.circle.val * 2 / self.circle.totalTime
                ).toFixed(0) +
                "deg)",
              transformOrigin: "center center"
            },
            duration: self.circle.circleTime, //ms
            timingFunction: "linear",
            delay: 0 //ms
          },
          function() {}
        );
      } else {
        animation.transition(
          el1,
          {
            styles: {
              transform:
                "rotate(" +
                (-45 +
                  180 *
                    (self.circle.val - self.circle.totalTime / 2) *
                    2 /
                    self.circle.totalTime) +
                "deg)",
              transformOrigin: "center center"
            },
            duration: self.circle.circleTime, //ms
            timingFunction: "linear",
            delay: 0 //ms
          },
          function() {}
        );
      }
    },
    circleRun: function(el2, el1) {
      this.circle.timer = setInterval(() => {
        this.circle.val += 1;
        this.rotateCircle(el2, el1);
        if (this.circle.val == this.circle.totalTime / 2) {
          setTimeout(() => {
            this.circle.bg1opacity = 1;
          }, this.circle.circleTime);
        }
        if (this.circle.val >= this.circle.totalTime)
          clearInterval(this.circle.timer);
      }, this.circle.circleTime);
    },
    changeTime() {
      let self = this;
      setTimeout(function() {
        if (self.cookText.minute > 0) {
          self.cookText.minute -= 1;
          self.changeTime();
        } else {
          if (self.cookText.hour == 0) return;
          self.cookText.hour -= 1;
          self.cookText.minute = 59;
          self.changeTime();
        }
      }, 60000);
    },
    suspend() {
      if (this.btnContinueAndSuspend == "立即开始") {
        this.cookText.status = "working";
        this.btnContinueAndSuspend = "暂停";
        let list = ["解冻", "除垢", "发酵"];
        let status = list.indexOf(this.cookText.pattern);
        if (status == -1) {
          this.cookText.order = "烹饪中";
        } else {
          this.cookText.order = this.cookText.pattern + "中";
        }
        storage.setItem("cookTime", JSON.stringify(this.cookText), event => {});
        setTimeout(() => {
          if (this.cookText.minute > 0) {
            this.cookText.minute -= 1;
          } else {
            if (this.cookText.hour == 0) return;
            this.cookText.hour -= 1;
            this.cookText.minute = 59;
          }
        }, 1000);
        this.changeTime();
        this.btnContinueAndSuspendStatus = false;
        let el = this.$refs.circle2;
        let el2 = this.$refs.circle;
        this.circleRun(el, el2);
        return;
      }
      if (!this.btnContinueAndSuspendStatus) {
        this.btnContinueAndSuspendStatus = true;
        this.btnContinueAndSuspend = "继续";
        this.cookText.order = "暂停中";
        clearInterval(this.circle.timer);
      } else {
        this.btnContinueAndSuspend = "暂停";
        let list = ["解冻", "除垢", "发酵"];
        let status = list.indexOf(this.cookText.pattern);
        if (status == -1) {
          this.cookText.order = "烹饪中";
        } else {
          this.cookText.order = this.cookText.pattern + "中";
        }
        this.btnContinueAndSuspendStatus = false;
        let el = this.$refs.circle2;
        let el2 = this.$refs.circle;
        this.circleRun(el, el2);
      }
    },
    remove() {
      this.showPopup();
      storage.removeItem("cookTime", event => {});
      this.count++;
      console.log(this.count);
      if (this.count % 2 == 0) {
        this.switchOff = switchToggle;
        this.pengrenOff = pengrenToggle;
      } else {
        this.switchOff = switchOn;
        this.pengrenOff = pengrenOn;
      }
      this.isnormal = true;
      this.descalingImg = false;
      clearInterval(this.yuanhuanTimer);
      clearInterval(this.circle.timer);
      this.circle.bg2opacity = 0;
      this.circle.bg1opacity = 0;
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
  color: rgba(255, 255, 255, 1);
}
.navigatorTitle {
  font-size: 36px;
  font-family: PingFang-SC-Bold;
  font-weight: bold;
  color: rgba(255, 255, 255, 1);
  line-height: 36px;
  margin-top: 35px;
  margin-left: 214px;
}
.mask {
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  opacity: 0.6;
  background-color: #000;
}
.hidden {
  /* opacity: 0; */
  width: 1px;
  height: 1px;
}
.btnImage1 {
  width: 160px;
  height: 64px;
  position: absolute;
  left: 0;
  top: 0;
}
.btnImage2 {
  width: 160px;
  height: 64px;
  position: absolute;
  right: 0;
  top: 0;
}
.btnImage3 {
  width: 160px;
  height: 64px;
  position: absolute;
  left: 113px;
  top: 0;
}
.btnBox {
  position: absolute;
  width: 386px;
  height: 64px;
  left: 183px;
  top: 514px;
  flex-direction: row;
  justify-content: space-between;
}
.btntext {
  font-size: 31px;
  color: #fff;
  position: absolute;
  left: 49px;
  top: 14px;
}
.txtBox {
  width: 290px;
  height: 290px;
  position: absolute;
  top: 114px;
  left: 229px;
  padding: 50px;
  padding-bottom: 0px;
  /* border: 1px solid #fff; */
}
.panel {
  flex-direction: column;
  padding-top: 20px;
}
.group {
  flex-direction: row;
  justify-content: center;
  padding: 0px 20px;
}
.text {
  font-size: 23px;
  text-align: center;
  color: #fff;
}
.paddingRight20 {
  padding-right: 20px;
}
.paddingRight10 {
  padding-right: 10px;
}
.txtorder {
  font-size: 31px;
  color: #fff;
  padding-left: 20px;
}
.txt2 {
  color: rgba(199, 175, 112, 1);
  font-size: 54px;
}
.txtColor {
  color: #c7af70;
  padding-top: 30px;
  font-size: 25px;
}
.marginTop40 {
  margin-top: 40px;
}
.demo1-bg2-1 {
  width: 374px;
  height: 374px;
  position: absolute;
  transform: rotate(-45deg);
  top: 72px;
  left: 188px;
  border-top-style: solid;
  border-left-style: solid;
  border-right-style: solid;
  border-bottom-style: solid;
  border-top-width: 5px;
  border-left-width: 5px;
  border-right-width: 5px;
  border-bottom-width: 5px;
  border-top-color: transparent;
  border-left-color: transparent;
  border-right-color: #c8af70;
  border-bottom-color: #c8af70;
  border-top-left-radius: 187px;
  border-top-right-radius: 187px;
  border-bottom-left-radius: 187px;
  border-bottom-right-radius: 187px;
}
.demo1-bg2-2 {
  width: 374px;
  height: 374px;
  position: absolute;
  transform: rotate(-45deg);
  top: 72px;
  left: 188px;
  border-top-style: solid;
  border-left-style: solid;
  border-right-style: solid;
  border-bottom-style: solid;
  border-top-width: 5px;
  border-left-width: 5px;
  border-right-width: 5px;
  border-bottom-width: 5px;
  border-top-color: transparent;
  border-left-color: transparent;
  border-right-color: #585858;
  border-bottom-color: #585858;
  border-top-left-radius: 187px;
  border-top-right-radius: 187px;
  border-bottom-left-radius: 187px;
  border-bottom-right-radius: 187px;
}
.show {
  opacity: 1;
}
.containerStyle {
  position: relative;
  width: 750px;
  height: 1500px;
}
.showShadeStyle {
  position: absolute;
  top: 0px;
  left: 0px;
  width: 750px;
  height: 1500px;
  background-color: #000;
  opacity: 0.9;
}
.hiddenShadeStyle {
  position: absolute;
  top: 0px;
  left: 0px;
  width: 750px;
  height: 1500px;
  opacity: 1;
}
.navbox {
  width: 750px;
  height: 942px;
  background: cover;
  border-bottom-color: rgba(244, 244, 244, 1);
  border-bottom-style: solid;
  border-bottom-width: 20px;
  position: relative;
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
.mainpicDescalingImg {
  width: 257px;
  height: 256px;
  position: absolute;
  top: 106px;
  left: 249px;
}
.descalingtext {
  position: absolute;
  top: 357px;
  text-align: center;
  padding: 0px 100px;
  font-size: 25px;
}
.mainpic1 {
  width: 257px;
  height: 256px;
  position: absolute;
  top: 0px;
  left: 0px;
}
.working {
  width: 350px;
  height: 350px;
  position: absolute;
  top: 84px;
  left: 200px;
}
.working1 {
  width: 350px;
  height: 350px;
  position: absolute;
  top: 0px;
  left: 0px;
}
.descalingImg {
  width: 255px;
  height: 231px;
  position: absolute;
  top: 0px;
  left: 0px;
}
.doorImg {
  width: 274px;
  height: 229px;
  position: absolute;
  top: 0px;
  left: 0px;
}
.hiddenRing {
  width: 1px;
  height: 1px;
  /* opacity:0; */
}
.showRing {
  width: 374px;
  height: 374px;
  position: absolute;
  transform: rotate(-45deg);
  top: 72px;
  left: 188px;
  opacity: 1;
  border-top-style: solid;
  border-left-style: solid;
  border-right-style: solid;
  border-bottom-style: solid;
  border-top-width: 5px;
  border-left-width: 5px;
  border-right-width: 5px;
  border-bottom-width: 5px;
  border-top-color: #585858;
  border-left-color: #585858;
  border-right-color: #c8af70;
  border-bottom-color: #c8af70;
  border-top-left-radius: 187px;
  border-top-right-radius: 187px;
  border-bottom-left-radius: 187px;
  border-bottom-right-radius: 187px;
}
.textBox {
  width: 306px;
  height: 60px;
  text-align: center;
  align-items: center;
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
.bottomPic {
  width: 306px;
  height: 200px;
}
.bottomText {
  font-size: 28px;
  line-height: 28px;
  font-family: PingFang-SC-Bold;
  font-weight: bold;
  color: rgba(31, 31, 31, 1);
  margin-top: 24px;
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
.grap {
  margin-top: 34px;
  margin-left: 85px;
  width: 2px;
  height: 80px;
  background-image: linear-gradient(to top, #5a5a5a, #2e2d2f);
  border-top-right-radius: 1px;
  border-top-left-radius: 1px;
}
.grap2 {
  margin-top: -2px;
  margin-left: 85px;
  width: 2px;
  height: 80px;
  background-image: linear-gradient(to top, #2e2d2f, #5a5a5a);
  border-bottom-left-radius: 1px;
  border-bottom-right-radius: 1px;
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
  background-color: #fff;
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
.cellStyle {
  width: 306px;
  height: 260px;
}
.bottomPicBox {
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  margin-left: 28px;
}
.showpBoxStyle {
  position: fixed;
  width: 610px;
  height: 322px;
  top: 440px;
  left: 70px;
  background-color: rgba(255, 255, 255, 1);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  opacity: 1;
}
.hiddenpBox {
  position: absolute;
  width: 1px;
  height: 1px;
  top: 420px;
  left: 70px;
  background-color: rgba(255, 255, 255, 1);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  opacity: 0;
}
.dangerInfo {
  font-size: 32px;
  font-family: PingFang-SC-Medium;
  font-weight: 500;
  color: rgba(102, 102, 102, 1);
  line-height: 32px;
  margin-top: 100px;
  margin-left: 114px;
}
.promotBox {
  width: 610px;
  height: 105px;
  position: absolute;
  left: 0px;
  bottom: 0px;
  border-top-style: solid;
  border-top-width: 1px;
  border-top-color: rgba(206, 215, 219, 1);
  opacity: 0.5;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
}
.leftbox {
  width: 305px;
  height: 105px;
  border-right-style: solid;
  border-right-width: 1px;
  border-right-color: rgba(206, 215, 219, 1);
}
.cancleText {
  font-size: 32px;
  font-family: PingFang-SC-Medium;
  font-weight: 500;
  color: rgba(102, 102, 102, 1);
  line-height: 32px;
  margin-left: 125px;
  margin-top: 35px;
}
.sureText {
  font-size: 32px;
  text-align: center;
  font-family: PingFang-SC-Medium;
  font-weight: 500;
  color: rgba(214, 65, 71, 1);
  line-height: 32px;
  margin-top: 35px;
  margin-left: 125px;
}
.navTextStyle {
  width: 240px;
  height: 24px;
  text-align: center;
  align-items: center;
}
.putongSteam {
  font-size: 24px;
  font-family: PingFang-SC-Medium;
  font-weight: 500;
  color: rgba(214, 214, 214, 1);
  line-height: 24px;
}
.tomorrowBox {
  width: 170px;
  height: 24px;
  margin-top: 18px;
  margin-left: 35px;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
}
.lineStyle {
  width: 55px;
  height: 1px;
  background-color: rgba(70, 70, 70, 1);
  margin-top: 12px;
}
.dataBox {
  width: 170px;
  height: 24px;
  margin-left: 35px;
  margin-top: 15px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.dayText {
  font-size: 24px;
  font-family: PingFang-SC-Medium;
  font-weight: 500;
  color: rgba(154, 154, 154, 1);
  line-height: 24px;
}
.detilTime {
  margin-top: 13px;
  margin-left: 55px;
  font-size: 48px;
  font-family: PingFang-SC-Medium;
  font-weight: 500;
  color: rgba(200, 175, 112, 1);
  line-height: 48px;
}
.reserving {
  font-size: 32px;
  font-family: PingFang-SC-Medium;
  font-weight: 500;
  color: rgba(214, 214, 214, 1);
  line-height: 32px;
  margin-top: 20px;
  margin-left: 75px;
}
.left_20 {
  left: 20px;
}
.planText {
  padding-top: 28px;
  padding-left: 25px;
}
</style>