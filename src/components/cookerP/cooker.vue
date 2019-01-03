<template>
	<scroller>
		<!--<wxc-minibar title="灶具" background-color="#000000" text-color="#FFFFFF"  ></wxc-minibar>-->
		<am-nav-bar title="灶具" :right-btn="['ellipsis']"  ></am-nav-bar>
		<div class="content"  >
			<img src="/src/assets/steambg.png" class="BGC" @click="show=true"/>
			<div class="rangBox">
				<div class="rangBoxLeft">
					<img src="/src/assets/zaoJuBgc.png" class="ranBgc" />
					<img src="/src/assets/zaoJuRang.png" class="rangAnmin" />
					<div class="rangBoxTitle">左灶：已关闭</div>
				</div>
				<div class="rangBoxRight">
					<img src="/src/assets/zaoJuBgc.png" class="ranBgc">
					<img src="/src/assets/zaoJuRang.png" class="rangAnmin" />
					<div class="rangBoxTitle2">右灶：三档火力</div>
					<div class="OilTitle">
						<img src="/src/assets/OilDropletRed.png" class="Oil" /> 智能烹饪中
					</div>
					<div class="rangTime">1小时20分钟后</br> <span class="BrTitle">自动关机</span></div>
				</div>
			</div>
			<div class="contentBottom">
				<div class="contentBottomLeft">
					<img src="/src/assets/zaoju_btn_close@3x.png" class="closeImg" />
					<div class="close">开启</div>
				</div>
				<div class="contentBottomRight">
					<img src="/src/assets/zaoju_btn_open@2x.png" class="openImg" />
					<div class="open">关闭</div>
				</div>
			</div>
		</div>
		 <div class="bottomBox">
        <div class="nav">
          <text  @click="link('caipu')" :class="[selectpath=='caipu'?'nav-item-selecte':'nav-selecte-normal']">灶具菜谱</text>
          <text  @click="link('caidan')" :class="[[selectpath=='caidan'?'nav-item-selecte':'nav-selecte-normal'],secondMenu]">灶具菜单</text>
          <text  @click="link('moreMenu')" :class="[[selectpath=='moreMenu'?'nav-item-selecte':'nav-selecte-normal'],moreSelect]">更多智能菜谱  ></text>
        </div>
        <list class="lists"  v-for="(item,index) in listTwo" :key="index">
           <cell>{{item}}</cell>
        </list>
     </div>   
		
		
		<div>
	<am-popup :show.sync="show" position="bottom" width="500" height='569' @click="handleClick">
		<div  class="listsPopup"  @click="listItemClick">
			<div class="listItem" >
				重命名
			</div>
			<div class="listItem"  @click="myDishwasher('myDishwasher')">
				固件升级
			</div>
			<div class="listItem"  @click="echarts('echartsTime')">
				使用时间统计
			</div>
			<div class="listItem colorRed"  @click="pickTIme('pickTIme')">
				删除设备
			</div>
		</div>
		 <div  class="Close" @click="show=false">
		 	取消
		 </div>
	</am-popup>
</div>
		
			<router-view></router-view>
		</div>
	</scroller>
</template>
<script>
	import { WxcMinibar } from 'weex-ui';
		 import { AmNavBar ,AmPopup, AmButton} from 'weex-amui'
		
	export default {
		components: {
			WxcMinibar,AmNavBar ,AmPopup, AmButton
		},
			name: 'cooker',
		  data(){
        return{
             selectpath:'caipu',
             moreSelect:'moreStyle',
             secondMenu:'secondStyle',
             listTwo:[1,2,3],
          listPopup:['第一','第二','第三','第四'],
             show:false,
             
        }
    },
      methods:{
      link:function(e){
      this._data.selectpath=e;
      switch(e){
        case 'caipu':
          this.listTwo=[1,2,3]
        break;
        case 'caidan':
          this.listTwo=[4,5,6]
        break;
        case "moreMenu":
        this.$router.push(e)
        break
           }
       },
       handleClick:function(e){
       	this.show=false;
       	console.log(1111)
       },
       listItemClick:function(e){
       	console.log(this.key)
       },
       jump:function(e){
           console.log('跳转至传统烹饪')
           this.$router.push(e)
       },
       echarts:function(e){
       	 console.log(e+'-----------------');
      this.$router.push(e);
       },
       myDishwasher:function(e){
       	console.log(e),
       	this.$router.push(e)
       },
       pickTIme:function(e){
       	console.log(e)
       	this.$router.push(e)
       }
    }
	
	}
</script>
<style scoped>
	.am-nav-bar[data-v-6210cf28]{
		background-color: #000000 !important;
	}
	.text {
		font-size: 100px
	}
	
	.content {
		width: 750px;
		position: relative;
		border-bottom: 20px solid rgba(244, 244, 244, 1);
	}
	
	.BGC {
		width: 750px;
		height: 820px;
	}
	
	.rangBox {
		width: 615px;
		height: 290px;
		position: absolute;
		top: 136px;
		left: 67px;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
	}
	
	.rangBoxLeft {
		position: relative;
		text-align: center;
		width: 290px;
	}
	
	.rangBoxRight {
		position: relative;
		text-align: center;
		width: 290px;
	}
	
	.ranBgc {
		width: 290px;
		height: 290px;
	}
	
	.rangAnmin {
		width: 250px;
		height: 250px;
		position: absolute;
		top: 20px;
		left: 20px;
	}
	
	.rangBoxTitle {
		height: 26px;
		font-size: 28px;
		font-family: PingFang-SC-Medium;
		font-weight: 500;
		color: rgba(244, 244, 244, 1);
		line-height: 6px;
		position: absolute;
		top: 131px;
		left: 65px;
	}
	
	.rangBoxTitle2 {
		height: 26px;
		font-size: 28px;
		font-family: PingFang-SC-Medium;
		font-weight: 500;
		color: rgba(244, 244, 244, 1);
		line-height: 6px;
		position: absolute;
		top: 131px;
		left: 45px;
	}
	
	.OilTitle {
		position: absolute;
		top: 60px;
		left: 64px;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		font-size: 24px;
		color: #ffffff;
	}
	
	.Oil {
		width: 35px;
		height: 37px;
	}
	
	.rangTime {
		position: absolute;
		top: 185px;
		left: 64px;
		font-size: 24px;
		color: rgba(154, 154, 154, 1);
		line-height: 6px;
	}
	
	.BrTitle {
		margin-left: 30px;
		margin-top: 10px;
		font-size: 24px;
		color: rgba(154, 154, 154, 1);
		line-height: 6px;
	}
	
	.contentBottom {
		width: 710px;
		height: 226px;
		background: linear-gradient(0deg, rgba(42, 42, 42, 1) 0%, rgba(48, 48, 48, 1) 100%);
		opacity: 0.9;
		border-radius: 5px;
		position: absolute;
		bottom: 40px;
		left: 20px;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
	}
	
	.contentBottomLeft {
		width: 114px;
		display: flex;
		margin-left: 134px;
	}
	
	.contentBottomRight {
		width: 114px;
		display: flex;
		margin-right: 134px;
	}
	
	.closeImg {
		width: 114px;
		height: 114px;
		margin-top: 30px;
	}
	
	.openImg {
		width: 114px;
		height: 114px;
		margin-top: 30px;
	}
	
	.close {
		font-size: 26px;
		text-align: center;
		font-weight: 500;
		color: rgba(244, 244, 244, 1);
	}
	
	.open {
		font-size: 26px;
		text-align: center;
		font-weight: 500;
		color: rgba(244, 244, 244, 1);
	}
	.bottomBox{
    width: 750px;
    height: 523px;
    padding-left: 40px
}

.nav{
  display: flex;
  flex-direction: row;
  width: 710px;
}
.nav-item-selecte{
  font-size:36px;
  line-height: 36px;
  margin-top: 56px;
  font-family:PingFang-SC-Bold;
  font-weight:bold;
  color:rgba(35,38,39,1);
  text-align: center;
}
.nav-selecte-normal{
 font-size:36px;
 line-height: 36px;
 margin-top: 56px;
 font-family:PingFang-SC-Bold;
 font-weight:bold;
 color:rgba(154,154,154,1);
 text-align: center;
}
.moreStyle{
  font-size:28px;
  line-height: 28px;
  margin-top: 61px;
  margin-left: 151px;
  font-family:PingFang-SC-Medium;
  font-weight:500;
  color:rgba(102,102,102,1);
}
.secondStyle{
    margin-left: 54px
}
.lists{
    width: 750px;
    height: 100px;
    display: flex;
    justify-content: space-around;
}
.listsPopup{
	width:749px;
background:rgba(255,255,255,1);
border-bottom: 10px solid rgba(244,244,244,1);
}
.listItem{
	height: 109px;
	line-height: 109px;
	font-size: 36px;
	border-top: 1px solid #717171;
	margin: 0 40px;
	text-align: center;
	font-weight:500;
    color:rgba(102,102,102,1);
}
.Close{
	font-size: 36px;
	color:rgba(102,102,102,1);
	height: 110px;
	line-height: 110px;
	text-align: center;
		font-weight:500;
}
.colorRed{
	color:rgba(214,65,71,1);
}
</style>