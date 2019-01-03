<template>
   <scroller>
       <wxc-minibar title="传统烹饪" background-color="#ffffff" text-color="#000000" font-size="36px" font-family='PingFang-SC-Bold' font-weight='bold' color='rgba(31,31,31,1)'></wxc-minibar>
       <div class="navBox">
           <image src="/src/assets/steambg.png" class="bgimg"></image>
           <text class="navTitle">烹饪模式</text>
       </div>


       <div>
           <router-view></router-view>
       </div>
   </scroller>
</template>
<script>
import { WxcMinibar } from 'weex-ui';
export default {
    components:{WxcMinibar},
    name:'traditionalCooking',
    data(){
        return{

        }
    }
}
</script>
<style scoped>
.text{
    font-size: 100px
}
.navBox{
   width:750px;
   height:420px;
   position: relative
}
.bgimg{
   width:750px;
   height:420px;
   position: absolute;
   top: 0px;
   left: 0px;
}
.navTitle{
   font-size:32px;
   line-height: 32px;
   font-family:PingFang-SC-Bold;
   font-weight:bold;
   color:rgba(255,255,255,1);
   position: absolute;
   top:61px;
   left: 312px;
}
</style>