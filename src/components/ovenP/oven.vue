<template>
   <scroller>
         <wxc-minibar title="蒸箱" background-color="#000000" text-color="#FFFFFF"></wxc-minibar>

       <text class="text">this is oven</text>



       <div>
           <router-view></router-view>
       </div>
   </scroller>
</template>
<script>
import { WxcMinibar } from 'weex-ui';
export default {
    components:{WxcMinibar},
    name:'oven'
}
</script>
<style scoped>
.text{
    font-size: 100px
}
</style>