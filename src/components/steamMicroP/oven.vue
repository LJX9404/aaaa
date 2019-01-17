<template>
  <scroller>
    <wxc-minibar
      title="蒸箱"
      background-color="#000000"
      text-color="#FFFFFF"
    ></wxc-minibar>

    <text class="text">this is oven{{count}}</text>

    <div>
      <slideBar @getValue='deviceChange'></slideBar>
      <div class="box">
        <image
          class="shop"
          ref='test'
          src='/src/assets/yanji53@2x.png'
        ></image>
        <image
          class="particle "
          ref='test1'
          src='/src/assets/particle@2x.png'
        ></image>
      </div>
      <router-view></router-view>
    </div>
  </scroller>
</template>
<script>
import { WxcMinibar } from "weex-ui";
import slideBar from "../slideBar";
const modal = weex.requireModule("modal");
const dom = weex.requireModule("dom");
const animation = weex.requireModule("animation");
export default {
  components: { WxcMinibar, slideBar },
  name: "oven",
  data() {
    return {
      count: 5,
      current_rotate: 0,
      current_scale: 1,
      scaleTimer: null,
      rotateTimer: null
    };
  },
  mounted: function() {
    this.start();
  },
  methods: {
    deviceChange(data) {
      this.count = Number(data);
      clearInterval(this.scaleTimer)
      clearInterval(this.rotateTimer)
      this.start()
    },
    rotate(el) {
      let self = this;
      this.current_rotate += 360;
      animation.transition(
        el,
        {
          styles: {
            transform: "rotate(" + self.current_rotate + "deg)",
            transformOrigin: "center center"
          },
          duration: 7000, //ms
          timingFunction: "linear",
          delay: 0 //ms
        },
        function() {}
      );
    },
    scale(el) {
      let self = this;
      animation.transition(
        el,
        {
          styles: {
            transform: "scale(0)",
            transformOrigin: "center center"
          },
          duration: 700 -  50 * self.count, //ms
          timingFunction: "linear",
          delay: 0 //ms
        },
        function() {
          animation.transition(
            el,
            {
              styles: {
                // color: '#FF0000',
                transform: "scale(1)",
                transformOrigin: "center center"
              },
              duration: 200 - 10 * self.count, //ms
              timingFunction: "linear",
              delay: 0 //ms
            },
            function() {}
          );
        }
      );
    },
    start: function() {
      let that = this;
      let el = this.$refs.test;
      let el1 = this.$refs.test1;
      that.scale(el1);
      that.rotate(el);
      this.scaleTimer = setInterval(function() {
        that.scale(el1);
      }, 1400 - 70 * that.count);
      this.rotateTimer = setInterval(() => {
        that.rotate(el);
      }, 3000-200* that.count);
    }
  }
};
</script>
<style scoped>
.text {
  font-size: 100px;
}
.box {
  padding: 48px;
  background-color: #29292b;
  height: 800px;
}
.particle {
  width: 242px;
  height: 238px;
  position: absolute;
  top: 33px;
  left:270px;
}
.shop {
  width: 312px;
  height: 312px;
  position: absolute;
  top: 0;
   left:220px;
}
</style>