<template>
   <scroller>
      <div class="navigatorBox">
        <image class="gobackStyle" src="/src/assets/cancel.png"></image>
        <text class="navigatorTitle">添加设备</text>
      </div>

        <div class="content">
           <div class="suqipment">
             <img src="/src/assets/youyanji_03.png" alt="" class="youyanjiImg">
             <div class="suqipmentTitlwBox">
                <text class="suqipmentTitlwText">方太CWX_200油烟机</text>
             </div>
         </div>
         <div class="suqipmentTips">
               <text class="bangdingText" @click="link('call400')">已搜索到目标设备,正在配置...</text>
         </div>   
        </div>
       <div>
           <router-view></router-view>
       </div>
   </scroller>
</template>
<script>

export default {
  components: {  },
  name: "addSquipment",
  methods:{
    link:function(e){
      this.$router.push(e)
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
.gobackStyle{
  margin-left: 34px;
  margin-top: 29px;
  width: 44px;
  height: 40px;
}
.text {
  font-size: 100px;
}
.content {
  width: 750px;
 min-height: 1206px;
  position: relative;
  background-color: #f4f4f4;
}
.suqipment {
  width: 396px;
  height: 400px;
  background-color: #ffffff;
  margin: 119px 177px 110px;
   border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
}

.bangdingIcon {
  width: 68px;
  height: 68px;
}
.bangdingText {
  font-size: 36px;
  font-family: PingFang-SC-Medium;
  font-weight: 500;
  color: rgba(31, 31, 31, 1);
  text-align: center;
}
.OnceAgain {
  width: 710px;
  height: 100px;
  position: absolute;
  bottom: 155px;
  left: 20px;
  background-color: #000;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
}
.OnceAgainText {
  line-height: 100px;
  font-size: 36px;
  font-family: PingFang-SC-Medium;
  font-weight: 500;
  color: rgba(200, 175, 112, 1);
  text-align: center;
}
.backMyCook {
  width: 710px;
  height: 100px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-color: rgba(31, 31, 31, 1);
  border-top-style: solid;
  border-top-width: 1;
  border-bottom-color: rgba(31, 31, 31, 1);
  border-bottom-style: solid;
  border-bottom-width: 1;
  border-left-color: rgba(31, 31, 31, 1);
  border-left-style: solid;
  border-left-width: 1;
  border-right-color: rgba(31, 31, 31, 1);
  border-right-style: solid;
  border-right-width: 1;
   position: absolute;
  left: 20px;
  bottom: 24px;
}
.backMyCookText {
  line-height: 100px;
  font-size: 36px;
  font-family: PingFang-SC-Medium;
  font-weight: 500;
  color: rgba(102, 102, 102, 1);
  text-align: center;
}
.youyanjiImg{
    width: 229px;
    height: 129px;
    margin: 82px 84px 97px 83px;
}
.suqipmentTitlwBox{
    height: 92px;
    background-color: #F1ECE2;
}
.suqipmentTitlwText{
line-height: 92px;
font-size:32px;
font-family:PingFang-SC-Medium;
font-weight:500;
color:rgba(200,175,112,1);
text-align: center;

}
</style>