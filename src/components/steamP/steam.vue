<template>
   <scroller>
         <wxc-minibar title="蒸箱" background-color="#000000" text-color="#FFFFFF"></wxc-minibar>
         <div class="navbox">
                <image class="bgimg" src="/src/assets/steambg.png"></image>
                <image class="switchButton" src='/src/assets/switchoff.png'></image>
                <image src='/src/assets/steammain.png' class="mainpic"></image>
                <div class="bottompicBox">
                    <div class="childBox">
                         <image class="bottomLeftpic" src='/src/assets/lightoff.png'></image>
                    </div>
                    <div class="childBox">
                          <image class="bottomCenterpic" src='/src/assets/zhengxiang_water@2x.png'></image>
                    </div>
                    <div  class="childBox">
                        <div class="centerBox"></div>
                    </div>
                    <div class="zhengqibox childBox" @click="jump('traditionalCooking')">
                          <image class="bottomRightpic " src='/src/assets/pengren.png'></image>
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
        <list class="lists"  v-for="(item,index) in listTwo" :key="index">
           <cell>{{item}}</cell>
        </list>
     </div>              
  
     
     <div>
           <router-view></router-view>
       </div>
   </scroller>
</template>
<script>
import { WxcMinibar } from 'weex-ui';
import { AmTabs } from 'weex-amui'
import { throws } from 'assert';
const modal = weex.requireModule('modal')
export default {
    components:{WxcMinibar,AmTabs},
    name:'steam',
    data(){
        return{
             selectpath:'caipu',
             moreSelect:'moreStyle',
             secondMenu:'secondStyle',
             listTwo:[1,2,3]
        }
    },
    methods:{
      link:function(e){
      this._data.selectpath=e;
      switch(e){
        case 'caipu':
          this.listTwo=[1,2,3]
        break;
        case 'caidan':
          this.listTwo=[4,5,6]
        break;
        case "moreMenu":
        this.$router.push(e)
        break
           }
       },
       jump:function(e){
           console.log('跳转至传统烹饪')
           this.$router.push(e)
       }
    }
}
</script>
<style scoped>

.navbox{
    width: 750px;
    height: 942px;
    background: cover;
    border-bottom-color: rgba(244,244,244,1);
    border-bottom-style: solid;
    border-bottom-width: 20px;
}
.bgimg{
    width: 750px;
    height: 922px;
    position: absolute;
    top: 0px;
    left: 0px;
}
.switchButton{
    width: 39px;
    height: 39px;
    position: absolute;
    top: 47px;
    right: 33px;
}
.mainpic{
    width: 257px;
    height: 256px;
    position: absolute;
    top: 206px;
    left: 249px
}
.bottompicBox{
    width: 710px;
    height: 226px;
    position: absolute;
    bottom: 40px;
    left: 20px;
    background:linear-gradient(0deg,rgba(42,42,42,1) 0%,rgba(48,48,48,1) 100%);
    opacity:0.9;
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
    align-items: center
}
.childBox{
    height: 226px;
}
.bottomLeftpic{
    width: 73px;
    height: 71px;
    margin-top: 78px;
    margin-left: 85px
}
.bottomCenterpic{
    width: 63px;
    height: 62px;
    margin-top: 82px;
    margin-left: 90px
}
.bottomRightpic{
    width: 120px;
    height: 120px;
    margin-top: 30px;
    margin-left: 96px
}
.centerBox{
    margin-top: 34px;
    margin-left: 85px;
    width:2px;
    height:159px;
    background:linear-gradient(0deg,rgba(46,45,47,1) 0%,rgba(90,90,90,1) 50%,rgba(46,46,47,1) 100%);
    border-top-right-radius: 1px;
    border-top-left-radius: 1px;
    border-bottom-left-radius: 1px;
    border-bottom-right-radius: 1px;
}
.zhengqi{
  font-size:28px;
  line-height: 28px;
  margin-left: 96px;
  margin-top: 19px;
  font-family:PingFang-SC-Bold;
  font-weight:bold;
  color:rgba(244,244,244,1);
}
.gapBox{
    width: 750px;
    height: 20px;
    background-color:rgba(244,244,244,1);
    border-bottom-color: rgba(244,244,244,1) !important;
    border-bottom-style:none !important;
    border-bottom-width: 0 !important

}
.bottomBox{
    width: 750px;
    height: 523px;
    padding-left: 40px
}

.nav{
  display: flex;
  flex-direction: row;
  width: 710px;
}
.nav-item-selecte{
  font-size:36px;
  line-height: 36px;
  margin-top: 56px;
  font-family:PingFang-SC-Bold;
  font-weight:bold;
  color:rgba(35,38,39,1);
  text-align: center;
}
.nav-selecte-normal{
 font-size:36px;
 line-height: 36px;
 margin-top: 56px;
 font-family:PingFang-SC-Bold;
 font-weight:bold;
 color:rgba(154,154,154,1);
 text-align: center;
}
.moreStyle{
  font-size:28px;
  line-height: 28px;
  margin-top: 61px;
  margin-left: 151px;
  font-family:PingFang-SC-Medium;
  font-weight:500;
  color:rgba(102,102,102,1);
}
.secondStyle{
    margin-left: 54px
}
.lists{
    width: 750px;
    height: 100px;
    display: flex;
    justify-content: space-around;
}
</style>