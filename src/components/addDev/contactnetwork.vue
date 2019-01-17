<template>
  <scroller>
       <div class="navigatorBox">
          <am-icon type="left" size="md"  class="rightArrow"/>
         <text class="navigatorTitle">连接网络</text>
      </div>
        <div>
            <text class="navinfo">请输入无线网名称和密码</text>
            <input type="text" placeholder="网络名称" class="firstinput" :autofocus=false value=""/>
            <div class="grap"></div>
            <div class="pwdBox">
                 <input type="password" placeholder="密码" class="secondinput" :autofocus=false value=""/>
                 <image  :src="eyesrc" class="eyestyle" @click="changeView"></image>
            </div>
           
            <div class="grap"></div>            
            <div class="bottombtn">
               <text class="bottomText" >连接</text>
            </div>
        </div>

  </scroller>
</template>
<script>
import { AmIcon } from "weex-amui";
const dom = weex.requireModule("dom");
export default {
  components: { AmIcon },
  name: "contactnetwork",
  data() {
    return {
      eyesrc: "/src/assets/showpwd.png",
      count: 0
    };
  },
  methods: {
    link: function(e) {
      this.$router.push(e);
      console.log(e);
    },
    changeView: function() {
      this.count++;
      if (this.count % 2 == 0) {
        this.eyesrc = "/src/assets/showpwd.png";
      } else {
        this.eyesrc = "/src/assets/pwdhidden.png";
      }
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
  border-bottom-color: rgba(206, 215, 219, 1);
}
.rightArrow {
  margin-top: 34px;
  margin-left: 33px;
}
.navigatorTitle {
  font-size: 35px;
  font-family: PingFang-SC-Bold;
  font-weight: bold;
  color: rgba(31, 31, 31, 1);
  line-height: 35px;
  margin-top: 33px;
  margin-left: 248px;
}

.navinfo {
  font-size: 31px;
  font-family: PingFang-SC-Medium;
  font-weight: 500;
  color: rgba(31, 31, 31, 1);
  line-height: 31px;
  margin-top: 45px;
  margin-left: 41px;
}
.firstinput {
  margin-top: 86px;
  margin-left: 43px;
   width: 200px;
 height: 80px;
  font-size: 31px;
  font-family: PingFang-SC-Medium;
  font-weight: 500;
  color: rgba(154, 154, 154, 1);
  line-height: 31px;
}
.pwdBox {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  /* position: relative; */
  margin-top: 80px;
  width: 710px;
  height: 100px;
}
.eyestyle {
  width: 34px;
  height: 34px;
  margin-left: 200px;
  margin-top: 30px
}
.secondinput {
 width: 200px;
 height: 80px;
  margin-left: 43px;
  font-size: 31px;
  font-family: PingFang-SC-Medium;
  font-weight: 500;
  color: rgba(154, 154, 154, 1);
  line-height: 31px;
}
.grap {
  width: 710px;
  height: 1px;
  margin-left: 40px;
  margin-top: 18px;
  background-color: rgba(206, 215, 219, 1);
}
.bottombtn {
  width: 710px;
  height: 100px;
  margin-top: 206px;
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
  margin-left: 315px;
  margin-top: 33px;
}
</style>

