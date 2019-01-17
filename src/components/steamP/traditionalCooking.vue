<template>
  <scroller>
      <div class="navigatorBox" >
    <div  @click='toBack'>
        <am-icon type="left" size="md" class="gobackStyle" ></am-icon>
    </div>
    <text class="navigatorTitle">传统烹饪</text>
  </div>
    <div class="navBox">
      <image
        src="/src/assets/steambg.png"
        class="bgimg"
      ></image>
      <text class="navTitle">烹饪模式</text>
      <scroller
        class="circleBox"
        scroll-direction='horizontal'
      >
        <div
          v-for="(item,index) in list"
          :class="[isChecked==index ? checkedView :normalView]"
          :key="item"
          @click="changeView(item)"
        >
          <text :class="[isChecked==index ? checkedText :normalText]">{{item}}</text>
        </div>
      </scroller>
    </div>
    <div class="timePickBox">
      <text class="setinfo">烹饪设置</text>
      <div class="cookset">
        <text class="cook cooktem">烹饪温度</text>
        <text class="cook cooktime">烹饪时长</text>
      </div>
      <div class="pickerBox">
        <am-picker-view
          :data="times"
          v-model="value"
          class="mypicker"
          @change="setValue"
        ></am-picker-view>
        <text class="degree commonFont">℃</text>
        <text class="hour commonFont">时</text>
        <text class="minute commonFont">分钟</text>
      </div>
      <div
        :class="[isTrue ?checkedBox : normalBox]"
        @click="link('reservePlan')"
      >
        <text class="reserveTime">{{info}}</text>
        <text class="close">{{message}} ></text>
      </div>
      <div class="startBtn">
        <text
          class="startCook"
          @click="startCooking"
        >{{btnInfo}}</text>
      </div>
    </div>
    <div>
      <router-view></router-view>
    </div>
  </scroller>
</template>
<script>
let navigator = weex.requireModule("navigator");
import { AmNavBar ,AmIcon} from "weex-amui";
import { AmPickerView } from "weex-amui";
import { log, debug } from "util";
const storage = weex.requireModule("storage");
const modal = weex.requireModule("modal");
const domModule = weex.requireModule("dom");
const times = [
  [
    {
      label: "100",
      value: "100"
    },
    {
      label: "99",
      value: "99"
    },
    {
      label: "98",
      value: "98"
    },
    {
      label: "97",
      value: "97"
    },
    {
      label: "96",
      value: "96"
    },
    {
      label: "95",
      value: "95"
    },
    {
      label: "94",
      value: "94"
    },
    {
      label: "93",
      value: "93"
    },
    {
      label: "92",
      value: "92"
    },
    {
      label: "91",
      value: "91"
    },
    {
      label: "90",
      value: "90"
    },
    {
      label: "89",
      value: "89"
    },
    {
      label: "88",
      value: "88"
    },
    {
      label: "87",
      value: "87"
    },
    {
      label: "86",
      value: "86"
    },
    {
      label: "85",
      value: "85"
    },
    {
      label: "84",
      value: "84"
    },
    {
      label: "83",
      value: "83"
    },
    {
      label: "82",
      value: "82"
    },
    {
      label: "81",
      value: "81"
    },
    {
      label: "80",
      value: "80"
    },
    {
      label: "79",
      value: "79"
    },
    {
      label: "78",
      value: "78"
    },
    {
      label: "77",
      value: "77"
    },
    {
      label: "76",
      value: "76"
    },
    {
      label: "75",
      value: "75"
    },
    {
      label: "74",
      value: "74"
    },
    {
      label: "73",
      value: "73"
    },
    {
      label: "72",
      value: "72"
    },
    {
      label: "71",
      value: "71"
    },
    {
      label: "70",
      value: "70"
    },
    {
      label: "69",
      value: "69"
    },
    {
      label: "68",
      value: "68"
    },
    {
      label: "67",
      value: "67"
    },
    {
      label: "66",
      value: "66"
    },
    {
      label: "65",
      value: "65"
    },
    {
      label: "64",
      value: "64"
    },
    {
      label: "63",
      value: "63"
    },
    {
      label: "62",
      value: "62"
    },
    {
      label: "61",
      value: "61"
    },
    {
      label: "60",
      value: "60"
    },
    {
      label: "59",
      value: "59"
    },
    {
      label: "58",
      value: "58"
    },
    {
      label: "57",
      value: "57"
    },
    {
      label: "56",
      value: "56"
    },
    {
      label: "55",
      value: "55"
    },
    {
      label: "54",
      value: "54"
    },
    {
      label: "53",
      value: "53"
    },
    {
      label: "52",
      value: "52"
    },
    {
      label: "51",
      value: "51"
    },
    {
      label: "50",
      value: "50"
    },
    {
      label: "49",
      value: "49"
    },
    {
      label: "48",
      value: "48"
    },
    {
      label: "47",
      value: "47"
    },
    {
      label: "46",
      value: "46"
    },
    {
      label: "45",
      value: "45"
    },
    {
      label: "44",
      value: "44"
    },
    {
      label: "43",
      value: "43"
    },
    {
      label: "42",
      value: "42"
    },
    {
      label: "41",
      value: "41"
    },
    {
      label: "40",
      value: "40"
    },
    {
      label: "39",
      value: "39"
    },
    {
      label: "38",
      value: "38"
    },
    {
      label: "37",
      value: "37"
    },
    {
      label: "36",
      value: "36"
    },
    {
      label: "35",
      value: "35"
    },
    {
      label: "34",
      value: "34"
    },
    {
      label: "33",
      value: "33"
    },
    {
      label: "32",
      value: "32"
    },
    {
      label: "31",
      value: "31"
    },
    {
      label: "30",
      value: "30"
    }
  ],
  [
    {
      label: "0",
      value: "0"
    },
    {
      label: "1",
      value: "1"
    },
    {
      label: "2",
      value: "2"
    },
    {
      label: "3",
      value: "3"
    },
    {
      label: "4",
      value: "4"
    },
    {
      label: "5",
      value: "5"
    }
  ],
  [
    {
      label: "1",
      value: "1"
    },
    {
      label: "2",
      value: "2"
    },
    {
      label: "3",
      value: "3"
    },
    {
      label: "4",
      value: "4"
    },
    {
      label: "5",
      value: "5"
    },
    {
      label: "6",
      value: "6"
    },
    {
      label: "7",
      value: "7"
    },
    {
      label: "8",
      value: "8"
    },
    {
      label: "9",
      value: "9"
    },
    {
      label: "10",
      value: "10"
    },
    {
      label: "11",
      value: "11"
    },
    {
      label: "12",
      value: "12"
    },
    {
      label: "13",
      value: "13"
    },
    {
      label: "14",
      value: "14"
    },
    {
      label: "15",
      value: "15"
    },
    {
      label: "16",
      value: "16"
    },
    {
      label: "17",
      value: "17"
    },
    {
      label: "18",
      value: "18"
    },
    {
      label: "19",
      value: "19"
    },
    {
      label: "20",
      value: "20"
    },
    {
      label: "21",
      value: "21"
    },
    {
      label: "22",
      value: "22"
    },
    {
      label: "23",
      value: "23"
    },
    {
      label: "24",
      value: "24"
    },
    {
      label: "25",
      value: "25"
    },
    {
      label: "26",
      value: "26"
    },
    {
      label: "27",
      value: "27"
    },
    {
      label: "28",
      value: "28"
    },
    {
      label: "29",
      value: "29"
    },
    {
      label: "30",
      value: "30"
    },
    {
      label: "31",
      value: "31"
    },
    {
      label: "32",
      value: "32"
    },
    {
      label: "33",
      value: "33"
    },
    {
      label: "34",
      value: "34"
    },
    {
      label: "35",
      value: "35"
    },
    {
      label: "36",
      value: "36"
    },
    {
      label: "37",
      value: "37"
    },
    {
      label: "38",
      value: "38"
    },
    {
      label: "39",
      value: "39"
    },
    {
      label: "40",
      value: "40"
    },
    {
      label: "41",
      value: "41"
    },
    {
      label: "42",
      value: "42"
    },
    {
      label: "43",
      value: "43"
    },
    {
      label: "44",
      value: "44"
    },
    {
      label: "45",
      value: "45"
    },
    {
      label: "46",
      value: "46"
    },
    {
      label: "47",
      value: "47"
    },
    {
      label: "48",
      value: "48"
    },
    {
      label: "49",
      value: "49"
    },
    {
      label: "50",
      value: "50"
    },
    {
      label: "51",
      value: "51"
    },
    {
      label: "52",
      value: "52"
    },
    {
      label: "53",
      value: "53"
    },
    {
      label: "54",
      value: "54"
    },
    {
      label: "55",
      value: "55"
    },
    {
      label: "56",
      value: "56"
    },
    {
      label: "57",
      value: "57"
    },
    {
      label: "58",
      value: "58"
    },
    {
      label: "59",
      value: "59"
    }
  ]
];
const timesTwo = [
  [
    {
      label: "100",
      value: "100"
    }
  ],
  [
    {
      label: "1",
      value: "1"
    }
  ],
  [
    {
      label: "11",
      value: "11"
    }
  ]
];
var movePosition, startPosition, endPosition;
export default {
  components: { AmPickerView, AmNavBar ,AmIcon},
  name: "traditionalCooking",
  data() {
    return {
      times,
      timesTwo,
      value: null,
      message: "关闭",
      info: "预约计划",
      list: ["普通蒸", "过温", "解冻", "除垢", "发酵"],
      isChecked: 0,
      isTrue: "true",
      checkedView: "checkedContainer",
      normalView: "normalContainer",
      checkedText: "textChecked",
      normalText: "textNormal",
      checkedBox: "reserveBox",
      normalBox: "hiddenBox",
      checkedTime: "reserveTime",
      normalTime: "hiddenTime",
      btnInfo: "开始烹饪",
      movePosition: 0,
      startPosition: 0,
      endPosition: 0,
      cookTime: {
        degreeCelsius: "100°C",
        hour: 0,
        minute: 1,
        order: "烹饪中",
        pattern: "普通蒸",
        status: "working",
        descalingImg:false,
        planDay: null,
        planTime: null
      }
    };
  },
  mounted() {
   
  },
  methods: {
    link: function(e) {
       storage.setItem('cookTime', JSON.stringify(this.cookTime), event => {
      })
      this.$router.push(e);
    }, 
     toBack: function() {
           this.$router.go(-1);
    },
    setValue: function(item) {
      this.cookTime.degreeCelsius = item[0]["value"] + "°C";
      this.cookTime.hour = item[1]["value"];
      this.cookTime.minute = item[2]["value"];
    },
    startCooking: function() {
      storage.getItem("cookTime", event => {
        if (event.result == "success") {
          let temp = JSON.parse(event.data);
           console.log( event);
          if (temp.status=='plan') {
            this.cookTime.planDay = temp.planDay;
            this.cookTime.planTime = temp.planTime;
            this.cookTime.order = "预约中";
            this.cookTime.status="plan";
          }
        }
        console.log(this.cookTime, event,"-=-=-=-=-=-=-");
        storage.setItem("cookTime", JSON.stringify(this.cookTime), event => {  
          console.log(this.cookTime, 'ppppppppp');
          this.$router.go(-1);
          });
      
      });
      
      
    },
    ontouchstart: function(e) {
      console.log(JSON.stringify(e.changedTouches[0].pageX));
      this.startPosition = JSON.stringify(e.changedTouches[0].pageX);
      if (e.changedTouches[0].pageX) {
        this.pagexValue = e.changedTouches[0].pageX;
      }
    },
    ontouchmove: function(e) {
      if (e.changedTouches[0].pageX) {
        this.forceValue = e.changedTouches[0].pageX;
      }
    },
    ontouchend: function(e) {
      console.log(JSON.stringify(e.changedTouches[0].pageX));
      this.endPosition = JSON.stringify(e.changedTouches[0].pageX);
      var count = this.endPosition - this.startPosition;
      if (count > 0) {
        this.movePosition = 0;
      } else if (count < -177) {
        this.movePosition = -177;
      } else {
        this.movePosition = count;
      }
    },
    changeView: function(e) {
      this.isChecked = this.list.indexOf(e);
      this.cookTime.pattern = e;
      if (this.isChecked == 3) {
        this.isTrue = false;
        this.times = timesTwo;
      } else {
        this.isTrue = true;
        this.times = times;
      }
      this.cookTime.degreeCelsius = this.times[0][0]["value"] + "°C";
      this.cookTime.hour = this.times[1][0]["value"];
      this.cookTime.minute = this.times[2][0]["value"];
      switch (e) {
        case "普通蒸":
          this.btnInfo = "开始烹饪";

          break;
        case "过温蒸":
          this.btnInfo = "开始烹饪";
          break;
        case "除垢":
          this.btnInfo = "开始除垢";
          this.cookTime.order = "除垢中";
          this.cookTime.descalingImg=true;
          break;
        case "解冻":
          this.btnInfo = "开始解冻";
          this.cookTime.order = "解冻中";
          break;
        case "发酵":
          this.btnInfo = "开始发酵";
          this.cookTime.order = "发酵中";
          this.cookTime.descalingImg=true;
          break;
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
}
.gobackStyle {
  margin-left: 34px;
  margin-top: 35px;
  color: #000;
}
.navigatorTitle {
  font-size: 36px;
  font-family: PingFang-SC-Bold;
  font-weight: bold;
  color: #000;
  line-height: 36px;
  margin-top: 35px;
  margin-left: 214px;
}
.active {
  border-top-color: rgba(200, 175, 112, 1);
  border-left-color: rgba(200, 175, 112, 1);
  border-bottom-color: rgba(200, 175, 112, 1);
  border-right-color: rgba(200, 175, 112, 1);
}
.am-nav-bar[data-v-cb89152e] {
  background-color: #000 !important;
}
.text {
  font-size: 100px;
}
.navBox {
  width: 750px;
  height: 420px;
  position: relative;
}
.bgimg {
  width: 750px;
  height: 420px;
  position: absolute;
  top: 0px;
  left: 0px;
}
.navTitle {
  font-size: 32px;
  line-height: 32px;
  font-family: PingFang-SC-Bold;
  font-weight: bold;
  color: rgba(255, 255, 255, 1);
  position: absolute;
  top: 61px;
  left: 312px;
}
.circleBox {
  position: absolute;
  top: 182px;
  left: 0px;
  width: 928px;
  height: 134px;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
}
.checkedContainer {
  width: 134px;
  height: 134px;
  border-top-left-radius: 67px;
  border-top-right-radius: 67px;
  border-bottom-left-radius: 67px;
  border-bottom-right-radius: 67px;
  border-top-color: rgba(200, 175, 112, 1);
  border-left-color: rgba(200, 175, 112, 1);
  border-bottom-color: rgba(200, 175, 112, 1);
  border-right-color: rgba(200, 175, 112, 1);
  border-top-style: solid;
  border-left-style: solid;
  border-bottom-style: solid;
  border-right-style: solid;
  border-top-width: 2px;
  border-left-width: 2px;
  border-bottom-width: 2px;
  border-right-width: 2px;
  font-size: 28px;
  font-family: PingFang-SC-Bold;
  font-weight: bold;
  color: rgba(200, 175, 112, 1);
  line-height: 28px;
  text-align: center;
  align-items: center;
  padding-top: 54px;
  margin-left: 43px;
}
.normalContainer {
  width: 134px;
  height: 134px;
  border-top-left-radius: 67px;
  border-top-right-radius: 67px;
  border-bottom-left-radius: 67px;
  border-bottom-right-radius: 67px;
  border-top-color: rgba(154, 154, 154, 1);
  border-left-color: rgba(154, 154, 154, 1);
  border-bottom-color: rgba(154, 154, 154, 1);
  border-right-color: rgba(154, 154, 154, 1);
  border-top-style: solid;
  border-left-style: solid;
  border-bottom-style: solid;
  border-right-style: solid;
  border-top-width: 2px;
  border-left-width: 2px;
  border-bottom-width: 2px;
  border-right-width: 2px;
  font-size: 28px;
  font-family: PingFang-SC-Bold;
  font-weight: bold;
  color: rgba(154, 154, 154, 1);
  line-height: 28px;
  text-align: center;
  align-items: center;
  padding-top: 54px;
  margin-left: 43px;
}
.textChecked {
  font-size: 28px;
  font-family: PingFang-SC-Bold;
  font-weight: bold;
  color: rgba(200, 175, 112, 1);
  line-height: 28px;
}
.textNormal {
  font-size: 28px;
  font-family: PingFang-SC-Bold;
  font-weight: bold;
  color: rgba(154, 154, 154, 1);
  line-height: 28px;
}
.timePickBox {
  width: 750px;
  height: 830px;
}
.pickerBox {
  position: relative;
  width: 750px;
  height: 376px;
}
.pickerHidden {
  width: 0px;
  height: 0px;
}
.commonFont {
  font-size: 40px;
  line-height: 40px;
  font-family: PingFang-SC-Bold;
  color: rgba(35, 38, 39, 1);
}
.degree {
  position: absolute;
  top: 221px;
  left: 150px;
}
.hour {
  position: absolute;
  top: 221px;
  left: 400px;
}
.minute {
  position: absolute;
  top: 221px;
  left: 650px;
}
.setinfo {
  margin-top: 42px;
  margin-left: 312px;
  font-size: 32px;
  line-height: 32px;
  font-family: PingFang-SC-Bold;
  font-weight: bold;
  color: rgba(102, 102, 102, 1);
}
.cookset {
  display: flex;
  flex-direction: row;
}
.cook {
  font-size: 32px;
  font-family: PingFang-SC-Medium;
  font-weight: 500;
  color: rgba(102, 102, 102, 1);
  line-height: 32px;
  margin-top: 41px;
}
.cooktem {
  margin-left: 97px;
}
.cooktime {
  margin-left: 240px;
}
.reserveBox {
  width: 750px;
  height: 105px;
  padding-top: 37px;
  margin-top: 50px;
  display: flex;
  flex-direction: row;
  border-bottom-style: solid;
  border-bottom-color: rgba(230, 235, 237, 1);
  border-bottom-width: 1px;
  border-top-style: solid;
  border-top-color: rgba(230, 235, 237, 1);
  border-top-width: 1px;
  opacity: 1;
}
.hiddenBox {
  width: 0px;
  height: 0px;
  opacity: 0;
}
.reserveTime {
  font-size: 32px;
  line-height: 32px;
  font-family: PingFang-SC-Medium;
  font-weight: 500;
  color: rgba(31, 31, 31, 1);
  margin-left: 45px;
}
.hiddenTime {
  font-size: 0px;
  opacity: 0;
}
.close {
  font-size: 30px;
  font-family: PingFang-SC-Medium;
  font-weight: 500;
  color: rgba(35, 38, 39, 1);
  line-height: 30px;
  margin-left: 455px;
}
.hiddenClose {
  font-size: 0px;
  opacity: 0px;
}
.startBtn {
  width: 670px;
  height: 96px;
  background-color: rgba(31, 31, 31, 1);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  margin-left: 41px;
  margin-top: 37px;
}
.startCook {
  font-size: 36px;
  font-family: PingFang-SC-Medium;
  font-weight: 500;
  color: rgba(200, 175, 112, 1);
  line-height: 36px;
  margin-left: 265px;
  margin-top: 31px;
  margin-bottom: 20px;
}
</style>