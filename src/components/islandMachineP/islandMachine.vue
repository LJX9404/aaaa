<template>
   <scroller>
       <wxc-minibar title="蒸微一体机" background-color="#000000" text-color="#FFFFFF"></wxc-minibar>
       <text class="text">this is steamMicro</text>


       <div>
           <router-view></router-view>
       </div>
   </scroller>
</template>
<script>
import { WxcMinibar } from 'weex-ui';
export default {
    components:{WxcMinibar},
    name:'islandMachine'
}
</script>
<style scoped>
.text{
    font-size: 100px
}
</style>