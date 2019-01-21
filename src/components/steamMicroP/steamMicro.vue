<template>
   <scroller>
       <div class="navigatorBox" >
          <div  @click='toBack'>
             <am-icon type="left" size="md" class="gobackStyle" ></am-icon>
          </div>
          <text class="navigatorTitle">我的油烟机</text>
          <div>
            <am-icon type="ellipsis" size="md" class="ellStyle"></am-icon>
          </div>
       </div>
       <div class="container">
         <image class="bgpic" src="/src/assets/steambg.png"></image>
         <div class="topBox">
           <image class="liandong" src="/src/assets/liandong.png"></image>
           <text class="liandongText">烟社联动中</text>
           <image class="toggleSwitch" src="/src/assets/switchoff.png"></image>
         </div>
         <image class="mainpic" src="/src/assets/yanji.png"></image>
         <div class="bottomBox">
          <image class="lamb" src="/src/assets/lightoff.png"></image>
          <div>
            <div class="grap"></div>
            <div class="grap2"></div>
          </div>   
          <div class="childBox firstchild">
            <image class="modalpic" src="/src/assets/kongqi2.png"></image>
            <text class="modalinfo">空气管家</text>
          </div>
          <div class="childBox">
             <image class="modalpic" src="/src/assets/xunhang2.png"></image>
            <text class="modalinfo">智能巡航</text>
          </div>
          <div class="childBox">
             <image class="modalpic" src="/src/assets/fengliang2.png"></image>
            <text class="modalinfo">风量调节</text>
          </div>
         </div>
       </div>
       	<div class="bottomContentBox">
			<div class="nav">
				<text @click="link('caipu')" :class="[selectpath=='caipu'?'nav-item-selecte':'nav-selecte-normal']">烟机菜谱</text>
				<text @click="link('caidan')" :class="[[selectpath=='caidan'?'nav-item-selecte':'nav-selecte-normal'],secondMenu]">烟机菜单</text>
				<text @click="link('moreMenu')" :class="[[selectpath=='moreMenu'?'nav-item-selecte':'nav-selecte-normal'],moreSelect]">更多智能菜谱 ></text>
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
  name: "steamMicro",
  data() {
    return {
      selectpath: "caipu",
      moreSelect: "moreStyle",
      secondMenu: "secondStyle",
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
      ]
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
  position: fixed;
  top: 0px;
  overflow: hidden;
}
.gobackStyle {
  margin-left: 34px;
  margin-top: 31px;
  color: #fff;
}
.navigatorTitle {
  font-size: 36px;
  font-family: PingFang-SC-Bold;
  font-weight: bold;
  color: #fff;
  line-height: 36px;
  margin-top: 32px;
  margin-left: 232px;
}
.ellStyle {
  margin-left: 190px;
  margin-top: 39px;
  color: #fff;
}
.container {
  width: 750px;
  height: 840px;
  position: relative;
  border-bottom-style: solid;
  border-bottom-width: 20px;
  border-bottom-color: rgba(244, 244, 244, 1);
  margin-top: 95px
}
.bgpic {
  width: 750px;
  height: 820px;
  position: absolute;
  top: 0px;
  left: 0px;
}
.topBox {
  position: absolute;
  top: 47px;
  left: 266px;
  width: 452px;
  height: 42px;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
}
.liandong {
  width: 42px;
  height: 42px;
}
.liandongText {
  margin-left: 25px;
  margin-top: 5px;
  font-size: 32px;
  font-family: PingFang-SC-Medium;
  font-weight: 500;
  color: rgba(214, 214, 214, 1);
  line-height: 32px;
}
.toggleSwitch {
  width: 39px;
  height: 39px;
  margin-left: 183px;
}
.mainpic {
  width: 265px;
  height: 245px;
  position: absolute;
  top: 201px;
  left: 243px;
}
.bottomBox {
  width: 710px;
  height: 226px;
  position: absolute;
  left: 20px;
  bottom: 40px;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  background-image: linear-gradient(
    to top,
    rgba(42, 42, 42, 1),
    rgba(48, 48, 48, 1)
  );
  opacity: 0.9;
  background-color: #ccc;
}
.lamb {
  width: 73px;
  height: 71px;
  margin-top: 92px;
  margin-left: 60px;
}
.grap {
  margin-top: 34px;
  margin-left: 59px;
  width: 2px;
  height: 80px;
  background-image: linear-gradient(to top, #5a5a5a, #2e2d2f);
  border-top-right-radius: 1px;
  border-top-left-radius: 1px;
}
.grap2 {
  margin-top: -2px;
  margin-left: 59px;
  width: 2px;
  height: 80px;
  background-image: linear-gradient(to top, #2e2d2f, #5a5a5a);
  border-bottom-left-radius: 1px;
  border-bottom-right-radius: 1px;
}
.childBox {
  width: 120px;
  height: 170px;
  margin-top: 30px;
  margin-left: 36px;
}
.firstchild {
  margin-left: 50px;
}
.modalpic {
  width: 120px;
  height: 120px;
}
.modalinfo {
  font-size: 30px;
  font-family: PingFang-SC-Regular;
  font-weight: 400;
  color: rgba(244, 244, 244, 1);
  line-height: 30px;
  margin-top: 18px;
}
.bottomContentBox {
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
.scroller {
  flex-direction: row;
}
</style>