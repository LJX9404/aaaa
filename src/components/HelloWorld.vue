<template>
    <scroller class='scroller'>
      <div>
        <wxc-minibar title="虚拟体验" background-color="#fff" text-color="#000" style="height:100px"></wxc-minibar>

      <div class="container ">
        <div class="boxone" @click="link('myCooker')">
          <div class="boxCommon mangerbox"  >
             <text class="mangerinfo">我的大厨管家</text>
             <text class="deviceinfo">已连接的设备 ></text>
          </div>
          <div class="boxCommon boxwifi">
           <text class="enviromentinfo">当前环境</text>
          </div>

          <div class="boxCommon">
            <div class="environment">
             <text class="title">空气质量</text>
             <text class="goodinfo">优</text>
             <div class="mypro"></div>
             <div class="protext">
               <text class="proinfo">pm</text>
               <text class="proinfo">2.5</text>

             </div>
            </div>
            <div class="environment">
              <text class="title">燃气</text>
              <image class="wuxielouimg" src="/src/assets/wuxielou.png"></image>
              <text class="xieloutext">无泄漏</text>
            </div>
            <div class="environment">
              <text class="title">舒适指数</text>
              <text class="comfortLevel">一般 </text>
              <div class="mypro justSo"></div>
              <div class="protext">
                <text class="proinfo">湿度</text>
                <text class="proinfo">40%</text>
              </div>
            </div>
          </div>
         
         
        </div>
      <div class="boxCommon secondnav"  >
             <text class="myChufang">我的智能厨房</text>
             <text class="addDevice">添加设备  ></text>
          </div>

       <div class="boxtwo boxCommon">
            <text class="tastyLife">美味生活</text>
           <image :src="openbtn" :class="[isActive ? activeClass :errorClass]" @click="changeView('one')" ></image>
        </div>

        <div :class="[isActive ? activeBox :inactiveBox]" >
              <div :class="[isActive ? activePerBox :inactivePerBox]" v-for="(item,index) in list" :key="index"  @click="detil(item.id)">
                <div :class="[isActive ? activeEveryBox :inactiveEveryBox]">
                  <image class="image" :src="item.img" alt=""></image>
                  <div :class="[isActive ? activeInfoBox :inactiveInfoBox]">
                    <text class="info">{{item.text}}</text>
                    <text class="status">{{item.status}}</text>
                    </div>
                </div>
                </div>
             
      </div>

        <!-- <div class="boxtwo boxCommon">
            <text>安全洁净</text>
           <image :src="openbtn" :class="[isActiveTwo ? activeClass :errorClass]" @click="changeView('two')" ></image>
        </div>  -->

         <!-- <div :class="[isActiveTwo ? activeBox :inactiveBox]" >
              <div :class="[isActiveTwo ? activePerBox :inactivePerBox]"  v-for="(item,index) in listTwo" :key="index"  @click="detil(item.id)">
                   <div :class="[isActiveTwo ? activeEveryBox :inactiveEveryBox]">
                  <image class="image" :src="item.img" alt=""></image>
                 <div :class="[isActiveTwo ? activeInfoBox :inactiveInfoBox]">
                    <text class="info">{{item.text}}</text>
                    <text class="status">{{item.status}}</text>
                    </div>
                </div>
              </div>
              <div class="emptybox"></div>
      </div>  -->
      </div>
      <div >
      <router-view></router-view>
    </div>
        </div>
    </scroller>
  
</template>
<script>
import { WxcMinibar } from 'weex-ui';
const modal = weex.requireModule('modal')
const closebtn='/src/assets/viewTwo.png'
const toggelbtn='/src/assets/viewOne.png'
export default {
  components: { WxcMinibar },
  name: "HelloWorld",
  data() {
    return{
      msg:'jump to bar',
      activeClass:"viewOpen",
      errorClass:'viewClose',
      isActive:true,
      isActiveTwo:true,
      activeBox:'boxOpen',
      inactiveBox:'boxClose',
      activePerBox:'perBoxOpen',
      activeInfoBox:"infoboxOpen",
      inactiveInfoBox:"infoboxClose",
      inactivePerBox:'perBoxClose',
      activeEveryBox:'EveryBoxOpen',
      inactiveEveryBox:'EveryBoxClose',
      a:"",
      openbtn:'/src/assets/viewOne.png',
      list:[{img:"/src/assets/daoshiji1.png",text:"蒸箱",id:"steam",status:'联网'},{img:"/src/assets/youyanji1.png",text:"烤箱",id:"oven",status:"故障"},{img:"/src/assets/zhengwei1.png",text:"蒸微一体机",id:"steamMicro",status:"运行中"},{img:"/src/assets/zaoju.png",text:"灶具",id:"cooker",status:"待机"},{img:"/src/assets/daoshiji1.png",text:"蒸箱",id:"steam",status:'联网'}],
      listTwo:[{img:"/src/assets/daoshiji1.png",text:"蒸箱",id:"steam",status:'联网'},{img:"/src/assets/youyanji1.png",text:"烤箱",id:"oven",status:"故障"},{img:"/src/assets/zhengwei1.png",text:"蒸微一体机",id:"steamMicro",status:"运行中"},{img:"/src/assets/zaoju.png",text:"灶具",id:"cooker",status:"待机"},{img:"/src/assets/daoshiji1.png",text:"蒸箱",id:"steam",status:'联网'}],
    //  listTwo:[{img:"/src/assets/add-dev.png",text:"消毒柜",id:"sterilizer"},{img:"/src/assets/add-dev.png",text:"岛式机",id:'islandMachine'},{img:"/src/assets/add-dev.png",text:"热水器",id:'heater'},{img:"/src/assets/add-dev.png",text:"洗碗槽",id:'sink'},{img:"/src/assets/add-dev.png",text:"水槽洗碗机",id:'dishWasher'}],
      count:0,
      flag:0,
      info:null
    }
  },
   methods: {
    link: function(e) {
       console.log(e);
      this.$router.push(e);
    },
    back:function(){
       this.$router.go(-1)
    },
    jump:function (e) {
      this.$router.push(e)
    },
    changeView:function(e){
      switch(e){
        case 'one':
          this.count++;
          this.isActive=! this.isActive
         if( this.count%2==1){
          this.a="fjijij";
          this.openbtn=closebtn
          }
          else{
           this.a="hhhhhhhh";
           this.openbtn=toggelbtn
          }
        break;
        case 'two':
          this.flag++;
          this.isActiveTwo=! this.isActiveTwo
         if( this.flag%2==1){
          this.a="fjijij",
          this.openbtn=closebtn

          }
          else{
           this.a="hhhhhhhh"
           this.openbtn=toggelbtn

          }
        break;
        
      }
      
     
     
    },
    detil:function(e){
      console.log(e)
      this.$router.push(e)
    }
  }
};
</script>
<style scoped>
.container{
  width: 750px;
  height: 2595px;
  background-color: #F4F4F4;
  padding-top: 20px;
  padding-left: 20px;
  padding-bottom: 20px;
}
.boxCommon{
  display: -ms-flex;
  display: -webkit-flex;
  display: flex;
  flex-direction: row;
  text-align: center;
}
.boxone{
  width: 710px;
  height: 565px;
  background-color: #ffffff;
}
.mangerbox{
height: 121px;
width: 650px;
margin-left: 30px;
margin-right: 30px;
border-bottom-color: #CED7DB;
border-bottom-style: solid;
border-bottom-width: 1px;
display: flex;
justify-content: space-between;
flex-direction: row
}
.mangerinfo{
font-size:32px;
font-family:PingFang-SC-Medium;
font-weight:500;
color:rgba(88,88,88,1);
margin-top: 45px
}
.deviceinfo{
font-size:27px;
font-family:PingFang-SC-Medium;
font-weight:500;
color:rgba(154,154,154,1);
margin-top: 48px;

}
.enviromentinfo{
font-size:31px;
font-family:PingFang-SC-Bold;
font-weight:bold;
color:rgba(102,102,102,1);
}

.boxwifi{
  margin-top: 48px;
  margin-left: 34px
}
.environment{
  margin-top: 40px;
  width: 210px;
  height: 280px;
  border-top-right-radius: 8px;
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  background-color:rgba(249,249,249,1);
  text-align: center;
  margin-left: 20px;
  align-items: center
}


.title{
font-size:23px;
line-height: 23px;
font-family:PingFang-SC-Medium;
font-weight:500;
color:rgba(102,102,102,1);
margin-top: 24px
}
.wuxielouimg{
  width: 59px;
  height: 69px;
  margin-top: 43px
}
.xieloutext{
font-size:31px;
line-height: 31px;
font-family:PingFang-SC-Bold;
font-weight:bold;
color:rgba(73,73,73,1);
margin-top: 49px
}

.comfortLevel{
font-size:60px;
line-height: 60px;
font-family:PingFang-SC-Bold;
font-weight:bold;
color:rgba(102,102,102,1);
margin-top: 51px
}
.goodinfo{
margin-top: 51px;
font-size:70px;
line-height: 70px;
font-family:PingFang-SC-Bold;
font-weight:bold;
color:rgba(200,175,112,1);
}
.mypro{
width:174px;
height:6px;
background-color:rgba(232,238,245,1);
border-radius:3px;
margin-top: 46px
}
.justSo{
  margin-top: 55px;
}
.protext{
  width: 174px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 23px;
}
.proinfo{
font-size:23px;
line-height: 23px;
font-family:PingFangSC-Semibold;
font-weight:600;
color:rgba(102,102,102,1);
}
.secondnav{
  width: 670px;
  height: 133px;
  margin-left: 20px;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-bottom-color: rgba(206,215,219,1);
  padding-top: 62px;
  display: flex;
  flex-direction: row;
  justify-content:space-between
}
.myChufang{
  font-size:32px;
  line-height: 32px;
  font-family:PingFang-SC-Medium;
  font-weight:500;
  color:rgba(102,102,102,1);
}
.addDevice{
font-size:27px;
line-height: 27px;
font-family:PingFang-SC-Medium;
font-weight:500;
color:rgba(154,154,154,1);
margin-right: 0px
}
.boxtwo{
  width: 670px;
  height: 110px;
  margin-left: 20px;
  display: flex;
  flex-direction: row;
  justify-content:space-between
}
.tastyLife{
font-size:31px;
line-height: 31px;
margin-top: 36px;
font-family:PingFang-SC-Bold;
font-weight:bold;
color:rgba(35,38,39,1);
}
.viewOpen{
  width: 44px;
  height: 44px;
  margin-top: 29px
}
.viewClose{
  width: 44px;
  height: 44px;
  margin-top: 29px  
}
.boxOpen{
  width: 710px;
  height: 188px;
  position: relative;
}
.infoboxOpen{
  width: 710px;
  height: 188px;
  position:absolute;
  top: 0px;
  left:0px;
  background-color:rgba(200,175,112,1);
  opacity:0.9;
}
.infoboxClose{

}
.boxClose{
  width: 710px;
  height: 188px;
  display: flex;
  flex: 2;
  flex-direction: row;
  justify-content: space-between;
  text-align: center;
  flex-wrap:wrap
}
.perBoxOpen{
  width: 700px;
  height:180px;
  margin-bottom:20px;
  background-color: #ffffff;
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
}
.perBoxClose{
  width: 220px;
  height: 180px;
  margin-bottom:20px;
  background-color: #ffffff;
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
}
.image {
  width: 120px;
  height: 108px;
  margin-top: 40px;
  margin-left: 52px
}
.info{
 font-size:31px;
 line-height: 31px;
 margin-top: 56px;
 margin-left: 262px;
font-family:PingFang-SC-Medium;
font-weight:500;
color:rgba(255,255,255,1);
}
.status{
font-size:27px;
line-height: 27px;
margin-top: 24px;
margin-left: 262px;
font-family:PingFang-SC-Medium;
font-weight:500;
color:rgba(255,255,255,1);
}
.EveryBoxOpen{
  display: flex;
  flex-direction: row;
  justify-content: space-left;
}
.EveryBoxClose{
  
}

.emptybox{
   width: 220px;
  height: 180px;
}

</style>


