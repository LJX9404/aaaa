<template>
  <div class="border">
      <div class="linebg"></div>
      <div class="lineActive" ref='line'></div>
      <div :ref="'box'" class="box" 
      @touchstart="ontouchstart"
      @touchmove="ontouchmove"
      @touchend="ontouchend"
      fireEventSync="true">
      
      </div>
      <text class="textLeft">小</text>
      <text class="textRight">大</text>
    </div>
</template>

<style scoped>
  .linebg{
    width: 494px;
    height: 4px;
    position: absolute;
    left:128px;
    top: 50px;
    background-color: #3b3c3e;
  }
  .lineActive{
    width: 247px;
    height: 4px;
    position: absolute;
    left:128px;
    top: 50px;
    background-image:linear-gradient(to right,#3b3c3e, #a5b6ba);
  }
  .border{
    padding:48px;
    background-color:#29292b;
    height:100px;
  }
  .box {
    width: 40px;
    height: 40px;
    border-radius:20px;
    background-color: #fff;
    position: absolute;
    left:340px;
    top: 30px;
  }
  .textLeft{
    color: #939393;
    font-size: 28px;
    position: absolute;
    top: 35px;
    left: 50px;

  }
  .textRight{
    color: #939393;
    font-size: 28px;
    position: absolute;
    top: 35px;
    right: 50px;
  }
</style>

<script>
  var startX = 0;
  var startY = 0;
  const unit = "px";
  var modal = weex.requireModule('modal');
  const animation = weex.requireModule('animation')
  
  export default {
    data () {
      return {
        x: 0,
        startX :0,
        lineWidth:''
      }
    },
    methods: {
      ontouchend(event) {
          var Gear
          for(let i=0;i<9;i++){
              if(this.lineWidth>494/9*i)Gear=i+1
          }
          this.$emit('getValue', Gear)
      },
      ontouchmove(event) {
          var self = this; 
          var line=this.$refs.line;
           var box=this.$refs.box;
          self.x = ( self.x + parseFloat(event.changedTouches[0].screenX) - self.startX);
          self.startX = parseFloat(event.changedTouches[0].screenX);
        this.lineWidth=247+parseFloat(this.x)
          if(this.lineWidth>494){this.lineWidth=494}
          if(this.lineWidth<0)this.lineWidth=0;
          if(parseFloat(this.x)<-235)this.x=-235;
          if(parseFloat(this.x)>240)this.x=240
         animation.transition(line, {
          styles: {
           width:this.lineWidth+'px'
          },
          duration: 0, //ms
          timingFunction: 'linear',
          needLayout:false,
          delay: 0 //ms
        }, function () {
         
        })
        animation.transition(box, {
          styles: {
           transform:'translateX(' + parseFloat(this.x)  +  'px'
          },
          duration: 0, //ms
          timingFunction: 'linear',
          needLayout:false,
          delay: 0 //ms
        }, function () {
         
        })
          
      },
      ontouchstart (event) {
        var self = this; 
         self.startX = parseFloat(event.changedTouches[0].screenX);
         console.log(self.startX);
         
      },
    }
  }
</script>