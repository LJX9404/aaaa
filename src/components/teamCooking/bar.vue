<template>
<scroller>
  <div>
    <am-nav-bar title="test" class="nav-bar-color" ></am-nav-bar>
    <!-- 导航栏 -->
    <am-flex :style="{flex: 1}" direction="column" justify="center" align="center">
      <am-button class="button" @click="showPopup()">上</am-button>
      <!-- <am-button class="button" @click="showPopup('bottom', {}, true)">下(auto-close=false)</am-button>
      <am-button class="button" @click="showPopup('left', {}, true, {backgroundColor: 'red'})">左(修改背景色)</am-button>
      <am-button class="button" @click="showPopup('right')">右</am-button>
      <am-button class="button" @click="showPopup('top', {top: 90})">上(offset.top=90)</am-button>
      <am-button class="button" @click="showPopup('right', {top: 90})">右(offset.top=90)</am-button> -->
      <am-popup
        :show.sync="show"
        :position="position"
        :offset="offset"
        :auto-close="autoClose"
        :popup-style="style"
        width="500"
        height="400"
      >
        <am-wing-blank>
          <text :style="{fontSize: '40px'}">popup</text>
          <am-white-space></am-white-space>
          <am-button
            type="warning"
            @click="show=true"
          >点我关闭</am-button>
        </am-wing-blank>
      </am-popup>
    </am-flex>
  </div>
   <div >
      <router-view></router-view>
    </div>
  </scroller>
</template>

<style scoped>
.button {
  width: 600px;
  margin-top: 30px;
}
.nav-bar-color{
    background-color: #fff !important;
    font-size: 30px !important;
}
.am-nav-bar-title[data-v-cb89152e]{
    color: #000 !important

}
</style>

<script>
import {AmNavBar, AmPopup, AmButton, AmFlex, AmWingBlank   } from 'weex-amui'
export default {
 name:'bar',
  components: { AmNavBar, AmPopup, AmButton, AmFlex, AmWingBlank },
  data () {
    return {
      show: false,
      position: 'bottom',
      offset: {},
      autoClose: true,
      style: {}
    }
  },
  methods: {
    showPopup :function() {
        console.log('ppppp')
      
    }
  }
}
</script>