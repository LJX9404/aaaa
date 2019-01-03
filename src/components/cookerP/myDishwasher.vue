<template>
	<scroller>
		<div class="content">
			<div class="text" @click="show=true">洗碗机</div>	
			<div>
				<am-popup :show.sync="show" position="bottom" width="500" height="912">
					<div class="popup">
						<text class='title'>清洗详情</text>
						<img src="/src/assets/cancel.png" class="close" @click="show=false" />
					</div>
					<div class="popupContent">
						<div class="popupContentRight">
							<text class='flowTitle'>第一遍清洗</text>
							<div class="flow">
								<div class="heating">
									<img src="/src/assets/heating.png" class="heatingImg" />
									<text class='IMGname'>加熱</text>
								</div>
								<div class="heating">
									<img src="/src/assets/heating.png" class="heatingImg" />
									<text class='IMGname'>加熱</text>
								</div>
								<div class="heating">
									<img src="/src/assets/heating.png" class="heatingImg" />
									<text class='IMGname'>加熱</text>
								</div>
								<div class="heating">
									<img src="/src/assets/heating.png" class="heatingImg" />
									<text class='IMGname'>加熱</text>
								</div>
							</div>
						</div>

					</div>

				</am-popup>
			</div>

			<div>
				<router-view></router-view>
			</div>

		</div>
	</scroller>
</template>
<script>
	import { WxcMinibar, AmNavBar, AmPopup, AmButton, } from 'weex-amui'
	export default {
		components: {
			WxcMinibar,
			AmNavBar,
			AmPopup,
			AmButton
		},
		name: 'Dishwasher',
		data() {
			return {
				show: false
			}
		}
	}
</script>
<style scoped>
	.text {
		font-size: 100px
	}
	
	.title {
		height: 33px;
		line-height: 33px;
		font-size: 36px;
		font-weight: 500;
		color: rgba(102, 102, 102, 1);
		margin-top: 46px;
	}
	
	.close {
		position: absolute;
		top: 50px;
		right: 66px;
		width: 34px;
		height: 31px;
	}
	
	.popup {
		position: relative;
		width: 450px;
		margin-left: 305px;
	}
	
	.flowTitle {
		font-size: 30px;
		color: rgba(102, 102, 102, 1);
		font-weight: 500;
		margin-left: 10px;
	}
	
	.flow {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		margin-top: 44px;
		position: relative;
	}
	
	.popupContent {
		width: 653px;
		/*margin-left: 137px;*/
		margin-right: 96px;
		position: relative;
	}
	
	.popupContentRight {
		width: 516px;
		float: right;
	}
	
	.heating {
		display: flex;
		justify-content: space-between;
		flex-direction: row;
	}
	
	.heatingImg {
		width: 30px;
		height: 37px;
		margin-left: 10px;
	}
	
	.IMGname {
		font-size: 30px;
		font-weight: 500;
		color: rgba(102, 102, 102, 1);
		margin-left: 13px;
	}
	
	.flowTitle:before {
		content: "111111";
		/*background:'goldenrod';*/
		background-color: yellow;
		color: cornflowerblue;
		font-weight: bold;
		width: 50px;
		height: 50px;
		line-height: 50px;
		text-align: center;
		border-top-left-radius: 15px;
		border-top-right-radius: 15px;
		border-bottom-left-radius: 15px;
		border-bottom-right-radius: 15px;
		position: absolute;
		top: 0px;
		left: 0px;
	}
	
	.flowTitle:after {
		content: "";
		background-color: #FFD9DFF9;
		color: red;
		font-weight: bold;
		width: 3px;
		height: 185px;
		position: absolute;
		top: 40px;
		left: -25px;
	}
</style>