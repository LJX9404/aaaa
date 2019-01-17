<template>
	<scroller>
		 <wxc-minibar title="洗碗机弹窗" background-color="#000000" text-color="#FFFFFF"></wxc-minibar>
		<div class="content">
			<div @click="show=true" ><text class="text">洗碗机</text></div>	
			<div>
				<am-popup :show.sync="show" position="bottom" width="500" height="912">
					<div class="popup">
						<text class='title' >清洗详情</text>
						<img src="/src/assets/cancel.png" class="close" @click="show=false" />
					</div>
					<div class="popupContent marginTop">
						<div class="garden"><text class='gardenText'>1</text></div>
						<div class='gardenSolid'>
						</div>
						<div class="popupContentRight">
							<text class='flowTitle'>第一遍清洗</text>
							<div class="flow">
								<div class="heating">
									<img src="/src/assets/heating.png" class="heatingImg" />
									<text class='IMGname'>加熱</text>
								</div>
								<div class="heating">
									<img src="/src/assets/clock.png" class="clockImg" />
									<text class='IMGname'>20分钟</text>
								</div>
								<div class="heating">
									<img src="/src/assets/Thermometer.png" class="ThermometerImg" />
									<text class='IMGname'>55C</text>
								</div>
								<div class="heating">
									<img src="/src/assets/WaterQuantity.png" class="WaterQuantityImg" />
									<text class='LastIMGname'>12L</text>
								</div>
							</div>
						</div>
					</div>
					<div class="popupContent">
						<div class="garden"><text class='gardenText'>2</text></div>
						<div class='gardenSolid'>
						</div>
						<div class="popupContentRight">
							<text class='flowTitle'>第二遍清洗</text>
								<div class="flow">
								<div class="heating">
									<img src="/src/assets/heating.png" class="heatingImg" />
									<text class='IMGname'>加熱</text>
								</div>
								<div class="heating">
									<img src="/src/assets/clock.png" class="clockImg" />
									<text class='IMGname'>20分钟</text>
								</div>
								<div class="heating">
									<img src="/src/assets/Thermometer.png" class="ThermometerImg" />
									<text class='IMGname'>55C</text>
								</div>
								<div class="heating">
									<img src="/src/assets/WaterQuantity.png" class="WaterQuantityImg" />
									<text class='LastIMGname'>12L</text>
								</div>
							</div>
						</div>
					</div>
					<div class="popupContent">
						<div class="garden"><text class='gardenText'>3</text></div>
						<div class='gardenSolid'>
						</div>
						<div class="popupContentRight">
							<text class='flowTitle'>第三遍清洗</text>
								<div class="flow">
								<div class="heating">
									<img src="/src/assets/heating.png" class="heatingImg" />
									<text class='IMGname'>加熱</text>
								</div>
								<div class="heating">
									<img src="/src/assets/clock.png" class="clockImg" />
									<text class='IMGname'>20分钟</text>
								</div>
								<div class="heating">
									<img src="/src/assets/Thermometer.png" class="ThermometerImg" />
									<text class='IMGname'>55C</text>
								</div>
								<div class="heating">
									<img src="/src/assets/WaterQuantity.png" class="WaterQuantityImg" />
									<text class='LastIMGname'>12L</text>
								</div>
							</div>
						</div>
					</div>
					<div class="popupContent">
						<div class="garden"><text class='gardenText'>4</text></div>
						
						<div class="popupContentRight">
							<text class='flowTitle'>第四遍清洗</text>
								<div class="flow">
								<div class="heating">
									<img src="/src/assets/heating.png" class="heatingImg" />
									<text class='IMGname'>加熱</text>
								</div>
								<div class="heating">
									<img src="/src/assets/clock.png" class="clockImg" />
									<text class='IMGname'>20分钟</text>
								</div>
								<div class="heating">
									<img src="/src/assets/Thermometer.png" class="ThermometerImg" />
									<text class='IMGname'>55C</text>
								</div>
								<div class="heating">
									<img src="/src/assets/WaterQuantity.png" class="WaterQuantityImg" />
									<text class='LastIMGname'>12L</text>
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
	import {  AmNavBar, AmPopup, AmButton, } from 'weex-amui';
	import { WxcMinibar } from "weex-ui";
	const storage = weex.requireModule('storage');
    const modal = weex.requireModule('modal');
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
		},
		
	}
</script>
<style scoped>
	.text {
		font-size: 50px;
		text-align: center;
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
		margin-left: 137px;
		margin-right: 96px;
		position: relative;
		margin-bottom: 62px;
		
	}
	.garden{
		width: 50px;
		height: 50px;
		line-height: 50px;
		text-align: center;
		background-color: #494949;
		border-top-left-radius: 25px;
		border-top-right-radius: 25px;
		border-bottom-left-radius: 25px;
		border-bottom-right-radius: 25px;
		position: absolute;
		top: 0;
		left: -81px;
	}
	.gardenText{
			line-height: 50px;
		color: #ffffff;
		font-size: 30px;
		text-align: center;
	}
	.gardenSolid{
		width: 2px;
		height: 135px;
		position: absolute;
		top: 50px;
		left: -60px;
		background-color: #FFD9DFF9;
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
	.clockImg{
		width: 36px;
		height: 37px;
		margin-left: 10px;
	}
	.ThermometerImg{
		width: 17px;
		height: 37px;
		margin-left: 10px;
	}
	.WaterQuantityImg{
		width: 46px;
		height: 37px;
	}
	
	.IMGname {
		font-size: 30px;
		font-weight: 500;
		color: rgba(102, 102, 102, 1);
		margin-left: 13px;
	}
	.LastIMGname{
		font-size: 30px;
		font-weight: 500;
		color: rgba(102, 102, 102, 1);
	}
	.marginTop{
		margin-top: 82px;
	}
</style>