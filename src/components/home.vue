<template>
    <scroller class='scroller'>
        <div class="container ">
     <div class="headernav">
       <text class="family">家庭</text>
       <am-icon class="angle"  type="down"  size="md" />
       <text class="chitench">我的厨房</text>
       <image class="shop" src="/src/assets/shop.png"></image>
       <image class="ring" src="/src/assets/lingdang.png"></image>
      
     </div>


    <div class="adddev">
      <div class="addpicbox">
         <image class="addpic" src="/src/assets/add.png" @click="link('adddev')"></image>
      </div>
      <text class="addtext" >点击添加设备</text>
    </div>


    <div class="devbox">
      <div  @click="link('bar')">
        <image class="dev" src="/src/assets/many.png" ></image>
      </div>
       <div @click="link('HelloWorld')">
       <image class="dev devsecond" src="/src/assets/virt.png"></image>
       </div>
    </div>  
    <div >
      <router-view></router-view>
    </div>
    
  </div>
  
    </scroller>
  
</template>

<script>
import { AmIcon } from 'weex-amui'
const modal = weex.requireModule('modal');
const dom = weex.requireModule('dom');
export default {
   components: { 
     AmIcon
    },
 data() {
    return {
      msg:'HelloWorld',
      navmsg:'我的厨房'
    }
  },
  methods: {
    link: function(e) {
       console.log(e);
      this.$router.push(e);
    },
   
  }
};
</script>

<style scoped>
.container{
  position: relative;
}
.icon {
    font-family: awesomefont
}
.pic{
  width:50px;
  height:50px;
  margin:10px ;
}
.headernav{
  width: 750px;
  height: 88px;
  display: flex;
  flex-direction: row;
  text-align: center;
  /* position: absolute; */
  position:fixed;
  top: 0px;
  background-color: #fff;
  overflow: hidden;
  border-bottom-style: solid;
  border-bottom-color: #ccc;
  border-bottom-width: 1px

}
.family{
  font-size: 32px;
  position:absolute;
  left: 39px;
  top: 21px;
  color: #1F1F1F
}
.angle{
  position:absolute;  
  top: 28px;
  left: 119px;
  font-size: 27px;
}
.chitench{
height:50px;
font-size:36px;
font-family:PingFangSC-Medium;
font-weight:500;
color:#1F1F1F;
line-height:50px;
position:absolute;
top:18px;
left:303px

}
.shop{
  width: 37px;
  height: 37px;
  position:absolute;
  top: 26px;
  left: 598px
}
.ring{
  width: 40px;
  height: 40px;
  position:absolute;  
  right: 40px;
  bottom: 24px;
}

.adddev{
 text-align: center;
 align-items: center;
 width: 750px;
 height: 400px;
 margin-top: 196px
}
.addpicbox{
  width:268px;
  height:268px;
  padding-top: 17px;
  padding-left: 26px
}
.addpic{
  width: 216px;
  height: 216px;
}
.addtext{
  font-size: 32px;
  color:#9A9A9A
}
.devbox{
  width: 750px;
  height: 800px;
  background-color: #faf8f8;
  margin-top: 83px;
  padding-left: 32px
}
.dev{
  width: 686px;
  height: 340px;
}
.devsecond{
  margin-top: 20px
}
</style>
