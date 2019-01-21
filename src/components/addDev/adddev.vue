<template>
   <scroller>
      <div class="navBox">
          <image class="cancle" src="/src/assets/cancel.png"></image>
          <text class="navText">选择添加设备</text>
      </div>
      <div class="container">
          <div class="mangerbox firstBox"  @click="link('addSquipment')">
              <image class="mangerPic" src="/src/assets/pengrenselect.png"></image>
              <text class="mangerText">大厨管家IKCC</text>
              <image class="mangerRight" src="/src/assets/goahead.png"></image>
          </div>
          <text class="yanji">油烟机</text>
          <div class="mangerbox" @click="link('findDev')"> 
              <image class="commonPic" src="/src/assets/xiaodugui.png"></image>
              <text class="firstText">方太CXW-200油烟机</text>
              <image class="mangerRight" src="/src/assets/goahead.png"></image>              
          </div>
          <div class="grap"></div>
          <div class="mangerbox"> 
              <image class="commonPic" src="/src/assets/xiaodugui.png"></image>
              <text class="firstText">岛式油烟机</text>
              <image class="mangerRight" src="/src/assets/goahead.png"></image>              
          </div>
          <text class="yanji">消毒柜</text>
          <div class="mangerbox"> 
              <image class="commonPic" src="/src/assets/xiaodugui.png"></image>
              <text class="firstText">方太消毒柜</text>
              <image class="mangerRight" src="/src/assets/goahead.png"></image>              
          </div>
      </div>

       <div>
           <router-view></router-view>
       </div>
   </scroller>
</template>
<script>
export default {
  components: {},
  name: "adddev",
  data(){
      return{

      }
  },
  methods:{
      link:function(e){
         this.$router.push(e);
         console.log(e)
      }
  }
};
</script>
<style scoped>
.navBox {
  width: 750px;
  height: 95px;
  display: flex;
  flex-direction: row;
  padding-bottom: 25px;
  border-bottom-color: rgba(206,215,219,1);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  position:fixed;
  top:0px;
  overflow: hidden;
}
.cancle {
  width: 44px;
  height: 40px;
  margin-left: 34px;
  margin-top: 33px;
}
.navText {
  font-size: 36px;
  font-family: PingFang-SC-Bold;
  font-weight: bold;
  color: rgba(35, 38, 39, 1);
  line-height: 36px;
  margin-left: 190px;
  margin-top: 33px;
}
.container {
  width: 750px;
  /* height: 1205px; */
  background-color: rgba(252, 247, 247, 1);
  margin-top: 95px;
}
.mangerbox {
  width: 750px;
  height: 108px;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  background-color: rgba(255, 255, 255, 1);
  position:relative;
}
.firstBox{
    margin-top: 20px
}
.mangerPic {
  margin-left: 38px;
  margin-top: 20px;
  width: 68px;
  height: 68px;
  border-top-left-radius: 34px;
  border-top-right-radius: 34px;
  border-bottom-left-radius: 34px;
  border-bottom-right-radius: 34px;
}
.mangerText {
  font-size: 32px;
  font-family: PingFang-SC-Medium;
  font-weight: 500;
  color: rgba(102, 102, 102, 1);
  line-height: 32px;
  margin-left: 20px;
  margin-top: 39px;
}
.mangerRight {
  top: 43px;
  right: 42px;
  width: 12px;
  height: 22px;
  position:absolute;
}
.yanji {
  font-size: 32px;
  font-family: PingFang-SC-Medium;
  font-weight: 500;
  color: rgba(102, 102, 102, 1);
  line-height: 32px;
  margin-left: 37px;
  margin-top: 38px;
  margin-bottom: 38px;
}
.commonPic {
  width: 44px;
  height: 44px;
  margin-top: 34px;
  margin-left: 51px;
}
.firstText {
  font-size: 32px;
  font-family: PingFang-SC-Medium;
  font-weight: 500;
  color: rgba(102, 102, 102, 1);
  line-height: 32px;
  margin-top: 38px;
  margin-left: 32px
}
.grap {
  width: 710px;
  height: 1px;
  background-color: rgba(206, 215, 219, 1);
  opacity: 0.5;
  margin-left: 40px;
}
</style>