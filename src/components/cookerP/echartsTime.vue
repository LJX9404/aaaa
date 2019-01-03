<template>
	<scroller>
		<div class="content">
			<div class="echartsTitle">
				近七日使用设备时间:
				<div class="echartsTime">{{time}}分钟</div>
			</div>
			<div id="my_echarts" class="echart"></div>
			<div>
				<router-view></router-view>
			</div>
		</div>
	</scroller>
</template>
<style>
	.echart {
		height: 400px;
		width: 700px;
	}
	
	.content {
		width: 750px;
		height: 519px;
		background: rgba(255, 255, 255, 1)
	}
	
	.echartsTitle {
		font-size: 28px;
		color: #666666;
		display: flex;
		flex-direction: row;
		justify-content: flex-start;
		margin-left: 45px;
		margin-top: 27px;
	}
	
	.echartsTime {
		color: #000000;
		font-size: 30px;
	}
</style>

<script>
	import echarts from 'echarts';
	import { WxcMinibar } from 'weex-ui';
	export default {
		components: {
			WxcMinibar
		},
		name: 'echarts',
		data() {
			return {
				time: '100',
			}
		},
		mounted: function() {
			this.$nextTick(function() {
				this.draw('my_echarts');
			})
		},
		methods: {
			draw: function(id) {
				var myChart = echarts.init(document.getElementById(id));
				var option = {
					xAxis: {
						type: 'category',
						name: '日期',
						nameTextStyle: {
							padding: [40, 10, 0, -30]
						},
						data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
						axisLine: {
							symbol: ['none', 'arrow'],
							lineStyle: {
								color: '#686868',
							}
						},
						axisTick: {
							show: false,
						}
					},
					yAxis: {
						type: 'value',
						name: 'tine\n min',
						nameTextStyle: {
							padding: [60, 0, -40, -50]
						},
						axisLabel: {
							show: 'true',
							formatter: ''
						},
						axisLine: {
							symbol: ['none', 'arrow'],
							lineStyle: {
								color: '#686868',
							}
						},
						axisTick: {
							show: false,
						}
					},
					series: [{
						data: [120, 200, 150, 80, 70, 110, 130],
						type: 'bar',
						itemStyle: {
							normal: {
								color: '#FFC8AF70'
							}
						}
					}]
				};
				myChart.setOption(option);
			}
		}
	}
</script>