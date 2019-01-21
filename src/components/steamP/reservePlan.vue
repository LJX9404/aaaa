<template>
  <scroller>
    <div class="navigatorBox" >
    <div  @click='toBack'>
        <am-icon type="left" size="md" class="gobackStyle" ></am-icon>
    </div>
    <text class="navigatorTitle">我的蒸箱</text>
    <text class="sureStyle"  @click="start">确定</text>
</div>
    <div class="navBox">
      <text class="navtext" >预约计划</text>
      <am-switch
        v-model="checked"
        :color="color"
        class="btn"
        @change="changeView"
      ></am-switch>
    </div>
    <div :class="[isChecked ? check : notchecked]">
      <am-picker-view
        :data="times"
        v-model="value"
        @change="getValue"
      ></am-picker-view>
      <text class="startStyle">启动</text>
    </div>
    <div>
      <router-view></router-view>
    </div>
  </scroller>
</template>
<script>

import { AmSwitch, AmPickerView ,AmIcon} from "weex-amui";
const dom = weex.requireModule("dom");
let navigator = weex.requireModule("navigator");
const storage = weex.requireModule("storage");
const times = [
  [
    {
      label: "今天",
      value: "今天"
    },
    {
      label: "明天",
      value: "明天"
    }
  ],
  [
    {
      label: "00",
      value: "00"
    },
    {
      label: "01",
      value: "01"
    },
    {
      label: "02",
      value: "02"
    },
    {
      label: "03",
      value: "03"
    },
    {
      label: "04",
      value: "04"
    },
    {
      label: "05",
      value: "05"
    },
    {
      label: "06",
      value: "06"
    },
    {
      label: "07",
      value: "07"
    },
    {
      label: "08",
      value: "08"
    },
    {
      label: "09",
      value: "09"
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
    }
  ],
  [
    {
      label: "00",
      value: "00"
    },
    {
      label: "01",
      value: "01"
    },
    {
      label: "02",
      value: "02"
    },
    {
      label: "03",
      value: "03"
    },
    {
      label: "04",
      value: "04"
    },
    {
      label: "05",
      value: "05"
    },
    {
      label: "06",
      value: "06"
    },
    {
      label: "07",
      value: "07"
    },
    {
      label: "08",
      value: "08"
    },
    {
      label: "09",
      value: "09"
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
export default {
  components: { AmIcon, AmSwitch, AmPickerView },
  name: "reservePlan",
  data() {
    return {
      // value: false,
      color: "#2ECC71",
      checked: false,
      times,
      value: null,
      isChecked: false,
      check: "timeBoxShow",
      notchecked: "timeBoxHidden",
      cookTime: ""
    };
  },
  mounted() {
    storage.getItem("cookTime", event => {
      console.log(event);
      
          this.cookTime = JSON.parse(event.data);
          this.cookTime.planDay= this.times[0][0]['value']
          this.cookTime.planTime=this.times[1][0]['value']+" : "+this.times[2][0]['value']
        });
  },
  methods: {
    changeView: function() {
      this.isChecked = !this.isChecked;
       this.cookTime.status='plan'
    },
    toBack: function() {
      console.log("999999");
      navigator.pop({
        animated: "true"
      });
    },
    getValue: function(item) {
    this.cookTime.planDay=item[0]['value']
    this.cookTime.planTime=item[1]['value']+" : "+item[2]['value']
      
    },
    start() {
      if(this.isChecked)storage.setItem("cookTime", JSON.stringify(this.cookTime),event => {
        console.log( this.cookTime);
        
      });
      this.$router.go(-1);
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
   position: fixed;
  top: 0px;
  overflow: hidden;
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
.sureStyle{
font-size:32px;
font-family:PingFang-SC-Medium;
font-weight:500;
color:rgba(35,38,39,1);
line-height:32px;
margin-top: 37px;
margin-left: 213px
}
.navBox {
  width: 750px;
  height: 145px;
  padding-left: 38px;
  padding-right: 38px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-bottom-style: solid;
  border-bottom-color: rgba(244, 244, 244, 1);
  border-bottom-width: 20px;
  border-top-style: solid;
  border-top-color: rgba(244, 244, 244, 1);
  border-top-width: 20px;
  margin-top: 95px

}
.navtext {
  font-size: 32px;
  line-height: 32px;
  margin-top: 37px;
  font-family: PingFang-SC-Medium;
  font-weight: 500;
  color: rgba(31, 31, 31, 1);
  line-height: 32px;
}
.btn {
  margin-top: 26px;
}
.timeBoxShow {
  width: 750px;
  height: 410px !important;
  position: relative;
  opacity: 1;
}
.timeBoxHidden {
  opacity: 0;
}

.startStyle {
  position: absolute;
  top: 221px;
  left: 650px;
  font-size: 32px;
  font-family: PingFang-SC-Medium;
  font-weight: 500;
  color: rgba(31, 31, 31, 1);
  line-height: 32px;
}
</style>