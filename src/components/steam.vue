<template>
   <scroller>
         <wxc-minibar title="蒸箱" background-color="#000000" text-color="#FFFFFF"></wxc-minibar>
         <div class="navbox">
                <image class="bgimg" src="/src/assets/steambg.png"></image>
                <image class="switchButton" src='/src/assets/switchoff.png'></image>
                <image src='/src/assets/steammain.png' class="mainpic"></image>
                <div class="bottompicBox">
                    <div>
                         <image class="bottompic" src='/src/assets/lightoff.png'></image>
                    </div>
                    <div>
                          <image class="bottompic" src='/src/assets/zhengxiang_water@2x.png'></image>
                    </div>
                    <div class="zhengqibox">
                          <image class="bottompic " src='/src/assets/pengren.png'></image>
                          <text class="zhengqi">蒸汽烹饪</text>
                    </div>
                </div>
            </div>

            <div>
    <div class="nav">
          <text  @click="link('caipu')" :class="[selectpath=='caipu'?'nav-item-selecte':'nav-selecte-normal']">蒸箱菜谱</text>
          <text  @click="link('caidan')" :class="[selectpath=='caidan'?'nav-item-selecte':'nav-selecte-normal']">蒸箱菜单</text>
          <text  @click="link('moreMenu')" :class="[selectpath=='moreMenu'?'nav-item-selecte':'nav-selecte-normal']">更多智能菜谱></text>
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
       }
    }
}
</script>
<style scoped>
.text{
    font-size: 100px
}
.navbox{
    width: 750px;
    height: 900px;
    background: cover
}
.bgimg{
    width: 750px;
    height: 900px;
    position: absolute;
    top: 0px;
    left: 0px;
}
.switchButton{
    width: 50px;
    height: 50px;
    position: absolute;
    top: 10px;
    right: 10px;
}
.mainpic{
    width: 200px;
    height: 200px;
    position: absolute;
    top: 350px;
    left: 275px
}
.bottompicBox{
    width: 720px;
    height: 150px;
    line-height: 150px;
    position: absolute;
    bottom: 20px;
    left: 15px;
    background-color: #ccc;
    border-top-right-radius: 20px;
    border-top-left-radius: 20px;
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
    display: -ms-flex;
    display: -webkit-flex;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    text-align: center;
    align-items: center
}
.bottompic{
    width: 80px;
    height: 80px;
}
.zhengqi{
    font-size: 30px
}
.zhengqibox{
    /* text-align: center; */
    align-items: center;
}

.nav{
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 750px;
  height: 88px;
}
.nav-item-selecte{
  width: 250px;
  height: 88px;
  line-height: 88px;
  color: #FFFF00;
  font-size: 25px;
  text-align: center;
  
}
.nav-selecte-normal{
  width: 250px;
  height: 88px;
  line-height: 88px;
  color: #000000;
  font-size: 25px;
  text-align: center;
}
.lists{
    width: 750px;
    height: 100px;
    display: flex;
    justify-content: space-around;
}
</style>