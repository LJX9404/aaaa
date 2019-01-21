<template>
   <scroller>
         <wxc-minibar title="添加多个设备绑定成功与失败" background-color="#000000" text-color="#FFFFFF"></wxc-minibar>
        
<div class="content">
   <div class="suqipmentSuccessBox">
         <div class="suqipment">
  <img src="/src/assets/youyanji_03.png" alt="" class="youyanjiImg">
  <div class="suqipmentTitlwBox">
      <text class="suqipmentTitlwText">方太CWX_200油烟机</text>
  </div>
         </div>
         <div class="suqipmentTips">
           <img src="/src/assets/bangdingIcon.png" alt="" class="bangdingIcon">
           <text class="bangdingText">绑定成功  !</text>
         </div>
        </div>

           <div class="suqipmentFailBox">
               <div class="suqipmentList">
  <div class="suqipmentfail1">
  <img src="/src/assets/youyanji_03.png" alt="" class="youyanjiImg">
  <div class="suqipmentTitlwBox">
      <text class="suqipmentTitlwText">方太CWX_200油烟机</text>
  </div>
         </div>
           <div class="suqipmentfail2">
  <img src="/src/assets/youyanji_03.png" alt="" class="youyanjiImg">
  <div class="suqipmentTitlwBox">
      <text class="suqipmentTitlwText">方太CWX_200油烟机</text>
  </div>
         </div>
               </div>
       
         <div class="suqipmentTips2">
           <img src="/src/assets/youyanjiFail.png" alt="" class="bangdingIcon">
           <text class="bangdingText">绑定未成功</text>
         </div>
         <div class="failBox">
             <text class="failText">可能是以下原因：</text>
             <text class="failText">1.设备与手机是否处于同一WIFI下</text>
             <text class="failText">2.请确认无线网络状态是否畅通</text>
             <text class="failText">3.请确认设备WIFI模式未关闭</text>
         </div>
          
        </div>
        <div class="OnceAgain">
             <text class="OnceAgainText">再试一次</text>
         </div>
           <div class="backMyCook">
             <text class="backMyCookText">重新设置</text>
         </div>
</div>
     
        



       <div>
           <router-view></router-view>
       </div>
   </scroller>
</template>
<script>
import { WxcMinibar } from "weex-ui";

export default {
  components: { WxcMinibar },
  name: "success"
};
</script>
<style scoped>
.text {
  font-size: 100px;
}
.content {
  width: 750px;
 min-height: 1983px;
  position: relative;
  background-color: #f4f4f4;
}
.suqipmentSuccessBox{
width: 750px;
height: 745px;
position: relative;
border-bottom:1px solid #CED7DB;
border-bottom-style: solid;
border-bottom-width: 1px;
border-bottom-color: #CED7DB;
}
.suqipmentFailBox{
    width: 750px;
    height: 1237px;
    position: relative;
  
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
.suqipmentfail1{
     width: 396px;
  height: 400px;
  background-color: #ffffff;
   border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
     white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
.suqipmentfail2{
     width: 294px;
  height: 400px;
  background-color: #ffffff;
   border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  margin-left: 20px;
    white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
.suqipmentList{
          height: 400px;
    width: 750px;
    margin-left: 40px;
    margin-top: 88px;
        display: flex;
    flex-direction: row;
    justify-content: flex-start;
}
.suqipmentTips {
  flex-direction: row;
  justify-content: space-between;
  margin-left: 243px;
  margin-right: 226px;
}
.suqipmentTips2 {
  flex-direction: row;
  justify-content: space-between;
  margin-left: 228px;
  margin-right: 226px;
  margin-bottom: 82px;
  margin-top: 112px;

}
.bangdingIcon {
  width: 68px;
  height: 68px;
}
.bangdingText {
  font-size: 42px;
  font-family: PingFang-SC-Medium;
  font-weight: 500;
  color: rgba(31, 31, 31, 1);
  margin-left: 20px;
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
.failBox{
    width: 420px;
    height: 176px;
    margin-left: 169px;
    margin-right: 169px;
    margin-bottom: 83px;
}
.failText{
text-align: center;
font-size:28px;
font-family:PingFang-SC-Medium;
font-weight:500;
color:rgba(88,88,88,1);
}
</style>