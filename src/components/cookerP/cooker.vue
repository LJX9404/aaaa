<template>
	<scroller>
    <div class="container">
      <div class="contentBox">
         <div class="navigatorBox" >
        <div  @click='toBack'>
          <am-icon type="left" size="md" class="gobackStyle" ></am-icon>
        </div>
    <text class="navigatorTitle">我的灶具</text>
    <div>
       <am-icon type="ellipsis" size="md" class="ellipsisStyle"/>
    </div>
</div>
		<div class="content">
			<img src="/src/assets/steambg.png" class="BGC" @click="showpopup" />
			<div class="rangBox">
				<div class="rangBoxLeft">
					<img src="/src/assets/zaoJuBgc.png" class="ranBgc" />
					<img src="/src/assets/zaoJuRang.png" class="rangAnmin" />
					<div class="rangBoxTitle"><text class='rangBoxTitleText'>左灶：已关闭</text></div>
				</div>
				<div class="rangBoxRight">
					<img src="/src/assets/zaoJuBgc.png" class="ranBgc">
					<img src="/src/assets/zaoJuRang.png" class="rangAnmin" />
					<div class="rangBoxContent">
					<div class="OilTitle">
						<img :src="Oil" class="Oil" /> <text class='OilTitleText'>{{OilTitleText}}</text>
					</div>
					<div class="rangBoxTitle2"><text class='rangBoxTitle2Text'>右灶：{{zaojuGear}}</text></div>
					<div class="rangTime"><text class='rangTime1'>{{rangTime1}}</text> <text class="BrTitle">{{BrTitle}}</text></div>
					</div>
					
				</div>
			</div>
		
			<div class="contentBottom">
				<div class="contentBottomLeft">
					<img :src='zaojuClose' class="closeImg" @click="zaojuBtnLeft" />
					<div class="close"><text class='closeText'>{{zaojuItem}}</text></div>
				</div>
				<div class="contentBottomRight">
					<img :src='zaojuOPen' class="openImg" @click="zaojuBtnRight" />
					<div class="open"><text class='openText'>{{zaojuItemRight}}</text></div>
				</div>
			</div>
		</div>
		<div class="bottomBox">
			<div class="nav">
				<text @click="link('caipu')" :class="[selectpath=='caipu'?'nav-item-selecte':'nav-selecte-normal']">灶具菜谱</text>
				<text @click="link('caidan')" :class="[[selectpath=='caidan'?'nav-item-selecte':'nav-selecte-normal'],secondMenu]">灶具菜单</text>
				<text @click="link('moreMenu')" :class="[[selectpath=='moreMenu'?'nav-item-selecte':'nav-selecte-normal'],moreSelect]">更多智能菜谱  ></text>
			</div>
			<div style="justify-content:center">
				<scroller class="scroller" scroll-direction="horizontal">
					<div class="MenuList" v-for="(item,index) in Menulists" :key="index">
						<img :src="item.img" class="MenuImg bottomPicBox" />
						<text class="MenuTitle">{{item.title}}</text>
					</div>
				</scroller>
			</div>
		</div>
		<div>

		</div> 
      </div>
      <div :class="[showpBox ? 'mask' :'']"></div>
      <div :class="[showpBox ? showP :hiddenP]">
          <text class="common popuptext1" @click="jump('myDishwasher')">重命名</text>
          <div class="grap"></div>
          <text class="common popuptext2" >固件升级</text>
          <div class="grap"></div>
          <text class="common popuptext3" >使用时间统计</text>
          <div class="grap"></div>
          <text class="common popuptext4" >删除设备</text>
          <div class="grapBox"></div>
          <text class="common popuptext5" >取消</text>
          
      </div>
    </div>
	</scroller>
</template>
<script>
import { AmPopup, AmButton, AmIcon } from "weex-amui";
const dom = weex.requireModule("dom");
let navigator = weex.requireModule("navigator");
const zaojuClose = "/src/assets/zaoju_btn_close@3x.png";
const zaojuOPen = "/src/assets/zaoju_btn_open@2x.png";
const storage = weex.requireModule("storage");
const modal = weex.requireModule("modal");
export default {
  components: {
    AmIcon,
    AmPopup,
    AmButton
  },
  name: "cooker",
  data() {
    return {
      zaojuOPen: "/src/assets/zaoju_btn_open@2x.png",
      zaojuClose: "/src/assets/zaoju_btn_close@3x.png",
      Oil: "/src/assets/OilDropletRed.png",
      selectpath: "caipu",
      moreSelect: "moreStyle",
      secondMenu: "secondStyle",
      zaojuGear: "三档火力",
      zaojuItem: "已关闭",
      zaojuItemRight: "已开启",
      OilTitleText: "智能烹饪中",
      rangTime1: "1小时20分钟后",
      BrTitle: "自动关闭",
      showpBox: false,
      showP: "showpBoxStyle",
      hiddenP: "hiddenpBox",
      Menulists: [
        {
          title: "测试",
          img: "/src/assets/caipu1.jpg"
        },
        {
          title: "测试",
          img: "/src/assets/caipu1.jpg"
        },
        {
          title: "测试",
          img: "/src/assets/caipu1.jpg"
        },
        {
          title: "测试",
          img: "/src/assets/caipu1.jpg"
        }
      ],
      show: false,
      count: 0
    };
  },
  methods: {
    toBack: function() {
      this.$router.go(-1);
    },
    link: function(e) {
      this._data.selectpath = e;
      switch (e) {
        case "caipu":
          this.Menulists = [
            {
              title: "测试",
              img: "/src/assets/caipu1.jpg"
            },
            {
              title: "测试",
              img: "/src/assets/caipu1.jpg"
            },
            {
              title: "测试",
              img: "/src/assets/caipu1.jpg"
            },
            {
              title: "测试",
              img: "/src/assets/caipu1.jpg"
            }
          ];
          break;
        case "caidan":
          this.Menulists = [
            {
              title: "测试2",
              img: "/src/assets/caipu2.jpg"
            },
            {
              title: "测试2",
              img: "/src/assets/caipu2.jpg"
            },
            {
              title: "测试2",
              img: "/src/assets/caipu2.jpg"
            },
            {
              title: "测试2",
              img: "/src/assets/caipu2.jpg"
            }
          ];
          break;
        case "moreMenu":
          this.$router.push(e);
          break;
      }
    },
    handleClick: function(e) {
      this.show = false;
      console.log(1111);
    },
    listItemClick: function(e) {
      console.log(this.key);
    },
    jump: function(e) {
      console.log("跳转至传统烹饪");
      this.$router.push(e);
    },
    echarts: function(e) {
      console.log(e + "-----------------");
      this.$router.push(e);
    },
    myDishwasher: function(e) {
      console.log(e), this.$router.push(e);
    },
    pickTIme: function(e) {
      console.log(e);
      this.$router.push(e);
    },
    zaojuBtnLeft: function(e) {
      this.count++;
      if (this.count % 2 == 0) {
        this.zaojuClose = "/src/assets/zaoju_btn_close@3x.png";
        this.zaojuItem = "已关闭";
      } else {
        this.zaojuClose = "/src/assets/zaoju_btn_open@2x.png";
        this.zaojuItem = "已开启";
      }
    },
    zaojuBtnRight: function(e) {
      this.count++;
      console.log(this.count);
      if (this.count % 2 == 0) {
        this.zaojuOPen = "/src/assets/zaoju_btn_open@2x.png";
        this.Oil = "/src/assets/OilDropletRed.png";
        this.zaojuItemRight = "已开启";
        this.zaojuGear = "三档火力";
        this.OilTitleText = "智能烹饪中";
        this.rangTime1 = "1小时20分钟后";
        this.BrTitle = "自动关闭";
      } else {
        this.zaojuOPen = "/src/assets/zaoju_btn_close@3x.png";
        this.zaojuItemRight = "已关闭";
        this.zaojuGear = "已关闭";
        this.OilTitleText = "";
        this.rangTime1 = "";
        this.BrTitle = "";
        this.Oil = "11";
      }
    },
    showpopup: function() {
      this.showpBox = !this.showpBox;
    }
  }
};
</script>
<style scoped>
.container {
  width: 750px;
  height: 1334px;
  position: relative;
}
.contentBox {
  width: 750px;
  height: 1334px;
  position: absolute;
  top: 0px;
  left: 0px;
}
.showpBoxStyle {
  position: fixed;
  bottom: 0px;
  left: 0px;
  width: 750px;
  height: 569px;
  background-color: rgba(255, 255, 255, 1);
  opacity: 1;
}
.hiddenpBox {
  position: absolute;
  bottom: 0px;
  left: 0px;
  width: 750px;
  height: 569px;
  background-color: rgba(255, 255, 255, 1);
  opacity: 0;
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
.common {
  font-size: 36px;
  font-family: PingFang-SC-Medium;
  font-weight: 500;
  color: rgba(102, 102, 102, 1);
  line-height: 36px;
  margin-top: 37px;
}
.popuptext1 {
  margin-left: 328px;
}
.popuptext2 {
  margin-left: 304px;
}
.popuptext3 {
  margin-left: 267px;
}
.popuptext4 {
  margin-left: 304px;
  color: rgba(214, 65, 71, 1);
}
.popuptext5 {
  margin-left: 340px;
}
.grap {
  width: 670px;
  height: 1px;
  margin-left: 39px;
  margin-top: 37px;
  background-color: rgba(206, 215, 220, 1);
}
.grapBox {
  width: 750px;
  height: 20px;
  background-color: rgba(244, 244, 244, 1);
  margin-top: 38px;
}
.navigatorBox {
  width: 750px;
  height: 95px;
  background-color: #000;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  position: fixed;
  top: 0px;
  overflow: hidden;
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
.ellipsisStyle {
  margin-left: 230px;
  margin-top: 39px;
  color: #fff;
}
.scroller {
  flex-direction: row;
}

.MenuList {
  margin-top: 44px;
  justify-content: center;
  text-align: center;
  align-items: center;
}

.MenuImg {
  width: 306px;
  height: 200px;
}
.bottomPicBox {
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  margin-left: 28px;
}
.MenuTitle {
  font-size: 28px;
  font-family: PingFang-SC-Bold;
  font-weight: bold;
  color: rgba(31, 31, 31, 1);
  text-align: center;
}

.content {
  width: 750px;
  height: 840px;
  position: relative;
  border-bottom-color: rgba(244, 244, 244, 1);
  border-bottom-style: solid;
  border-bottom-width: 20px;
  margin-top: 95px;
}

.BGC {
  width: 750px;
  height: 820px;
  position: absolute;
  top: 0;
  left: 0;
}

.rangBox {
  width: 615px;
  height: 290px;
  position: absolute;
  top: 136px;
  left: 67px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.rangBoxRight {
  position: absolute;
  text-align: center;
  width: 290px;
  top: 0;
  right: 0;
}

.rangBoxLeft {
  position: relative;
  text-align: center;
  width: 290px;
}

.ranBgc {
  width: 290px;
  height: 290px;
}

.rangAnmin {
  width: 250px;
  height: 250px;
  position: absolute;
  top: 20px;
  left: 20px;
}
.rangBoxContent {
  width: 200px;
  height: 200px;
  position: absolute;
  top: 65px;
  right: 44px;
}
.rangBoxTitle {
  position: absolute;
  top: 131px;
  left: 65px;
}

.rangBoxTitleText {
  font-size: 28px;
  font-family: PingFang-SC-Medium;
  font-weight: 500;
  color: rgba(244, 244, 244, 1);
}

.rangBoxTitle2 {
  margin-top: 22px;
}

.rangBoxTitle2Text {
  font-size: 28px;
  font-family: PingFang-SC-Medium;
  font-weight: 500;
  color: rgba(244, 244, 244, 1);
  text-align: center;
}

.OilTitle {
  width: 150px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin-left: 20px;
}

.OilTitleText {
  font-size: 24px;
  color: #ffffff;
}

.Oil {
  width: 35px;
  height: 37px;
}
.rangTime {
  margin-left: 20px;
  margin-top: 15px;
}

.rangTime1 {
  font-size: 24px;
  color: rgba(154, 154, 154, 1);
}

.BrTitle {
  margin-left: 30px;
  margin-top: 10px;
  font-size: 24px;
  color: rgba(154, 154, 154, 1);
}

.contentBottom {
  width: 710px;
  height: 226px;
  background: linear-gradient(
    0deg,
    rgba(42, 42, 42, 1) 0%,
    rgba(48, 48, 48, 1) 100%
  );
  opacity: 0.9;
  border-radius: 5px;
  position: absolute;
  bottom: 40px;
  left: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.contentBottomLeft {
  width: 114px;
  display: flex;
  margin-left: 134px;
}

.contentBottomRight {
  width: 114px;
  display: flex;
  margin-right: 134px;
}

.closeImg {
  width: 114px;
  height: 114px;
  margin-top: 30px;
}

.openImg {
  width: 114px;
  height: 114px;
  margin-top: 30px;
}

.closeText {
  font-size: 26px;
  text-align: center;
  font-weight: 500;
  color: rgba(244, 244, 244, 1);
}

.openText {
  font-size: 26px;
  text-align: center;
  font-weight: 500;
  color: rgba(244, 244, 244, 1);
}

.bottomBox {
  width: 750px;
  height: 433px;
  padding-left: 40px;
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
  width: 750px;
  height: 100px;
  display: flex;
  justify-content: space-around;
}

.listsPopup {
  width: 749px;
  background: rgba(255, 255, 255, 1);
  border-bottom: 10px solid rgba(244, 244, 244, 1);
}

.listItem {
  height: 109px;
  border-top: 1px solid #717171;
  margin: 0 40px;
}

.listText {
  line-height: 109px;
  text-align: center;
  font-weight: 500;
  color: rgba(102, 102, 102, 1);
  font-size: 36px;
}

.Close {
  font-size: 36px;
  color: rgba(102, 102, 102, 1);
  height: 110px;
  line-height: 110px;
  text-align: center;
  font-weight: 500;
}

.colorRed {
  color: rgba(214, 65, 71, 1);
}
</style>