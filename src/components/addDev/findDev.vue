<template>
   <scroller>
     <div class="navBox">
          <image class="cancle" src="/src/assets/cancel.png"></image>
          <text class="navText">选择设备</text>
      </div>
      <div class="container">
          <text class="prompt">已为您找到以下产品</text>
          <div class="productList"  v-for="(item,index) in list" :key="index">
              <div class="leftBox">
                  <image class="leftPic" src="/src/assets/origin.png"></image>
                  <div class="leftBottom">
                      <text class="leftText">{{item.devName}}</text>
                  </div>
              </div>
              <div class="rightBox">
                  <text class="devType">{{item.devType}}</text>
                  <text class="introduce">{{item.devIntroduce}}</text>
                  <text class="buyTime">购置时间 ：{{item.devBuyTime}}</text>                  
              </div>
          </div>
          <div class="bottomBtn">
              <text class="btninfo">开始配置</text>
          </div>
      </div>


       <div>
           <router-view></router-view>
       </div>
   </scroller>
</template>
<script>
export default {
  name: "findDev",
  data() {
    return {
      list: [
        {
          devName: "吸油烟机",
          devType: "方太CXW-200-EM71T",
          devIntroduce: "云魔方 蝶翼环吸不跑烟",
          devBuyTime: "2017年6月5号"
        },
        {
          devName: "消毒柜",
          devType: "方太CXW-200-EM71T",
          devIntroduce: "云魔方 蝶翼环吸不跑烟",
          devBuyTime: "2017年6月5号"
        }
      ]
    };
  },
  methods: {}
};
</script>
<style scoped>
.navBox {
  width: 750px;
  height: 95px;
  display: flex;
  flex-direction: row;
  padding-bottom: 25px;
  border-bottom-color: rgba(206, 215, 219, 1);
  border-bottom-style: solid;
  border-bottom-width: 1px;
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
  position: relative;
  width: 750px;
  height: 1206px;
  background-color: #fff;
}
.prompt {
  font-size: 35px;
  font-family: PingFang-SC-Medium;
  font-weight: 500;
  color: rgba(31, 31, 31, 1);
  line-height: 35px;
  margin-top: 98px;
  margin-left: 220px;
  margin-bottom: 40px;
}
.productList {
  width: 730px;
  height: 280px;
  margin-left: 20px;
  border-bottom-color: rgba(212, 212, 212, 1);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  margin-top: 40px;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
}
.leftBox {
  width: 240px;
  height: 240px;
  background-color: rgba(244, 244, 244, 1);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
}
.leftPic {
  width: 148px;
  height: 129px;
  margin-left: 45px;
  margin-top: 30px;
}
.leftBottom {
  width: 240px;
  height: 47px;
  margin-top: 33px;
  background-color: rgba(241, 236, 226, 1);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  text-align: center;
  align-items: center;
}
.leftText {
  font-size: 27px;
  font-family: PingFang-SC-Medium;
  font-weight: 500;
  color: rgba(200, 175, 112, 1);
  line-height: 27px;
  margin-top: 10px;
}
.rightBox {
  margin-left: 40px;
  margin-top: 25px;
}
.devType {
  font-size: 31px;
  font-family: PingFang-SC-Medium;
  font-weight: 500;
  color: rgba(31, 31, 31, 1);
  line-height: 31px;
}
.introduce {
  font-size: 27px;
  font-family: PingFang-SC-Regular;
  font-weight: 400;
  color: rgba(102, 102, 102, 1);
  line-height: 27px;
  margin-top: 30px;
}
.buyTime {
  font-size: 27px;
  font-family: PingFang-SC-Regular;
  font-weight: 400;
  color: rgba(102, 102, 102, 1);
  line-height: 27px;
  margin-top: 68px;
}
.bottomBtn {
  position: absolute;
  left: 20px;
  bottom: 20px;
  width: 710px;
  height: 100px;
  background-color: rgba(31, 31, 31, 1);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
}
.btninfo {
  font-size: 35px;
  font-family: PingFang-SC-Medium;
  font-weight: 500;
  color: rgba(200, 175, 112, 1);
  line-height: 35px;
  margin-top: 35px;
  margin-left: 285px;
}
</style>