<template>
	<div class="echarts">
		<div id="main" style="width: 100%;height:400px;"></div>
	</div>
</template>

<script>
export default {
	name: 'Echarts',
	data() {
		return {}
	},
	methods: {
		myEcharts() {
			var myChart = this.$echarts.init(document.getElementById('main'))

			let option = {
				title: {
					text: '2020-下半年 博客数据',
				},
				tooltip: {
					trigger: 'axis',
					axisPointer: {
						type: 'cross',
						label: {
							backgroundColor: '#6a7985',
						},
					},
				},
				legend: {
					data: [
						'访问',
						'留言',
						'用户',
						'文章',
					],
				},
				toolbox: {
					feature: {
						saveAsImage: {},
					},
				},
				grid: {
					left: '3%',
					right: '4%',
					bottom: '3%',
					containLabel: true,
				},
				xAxis: [
					{
						type: 'category',
						boundaryGap: false,
						data: [
							'七月',
							'八月',
							'九月',
							'十月',
							'十一月',
							'十二月',
						],
					},
				],
				yAxis: [
					{
						type: 'value',
					},
				],
				series: [
					{
						name: '访问',
						type: 'line',
						stack: '总量',
						areaStyle: {},
						data: [120, 132, 101, 134, 90, 230, 210],
					},
					{
						name: '留言',
						type: 'line',
						stack: '总量',
						areaStyle: {},
						data: [220, 182, 191, 234, 290, 330, 310],
					},
					{
						name: '用户',
						type: 'line',
						stack: '总量',
						areaStyle: {},
						data: [150, 232, 201, 154, 190, 330, 410],
					},
					{
						name: '文章',
						type: 'line',
						stack: '总量',
						areaStyle: {},
						data: [320, 332, 301, 334, 390, 330, 320],
					},
					,
				],
            }
            
            myChart.setOption(option);
		},
	},
	mounted() {
        this.myEcharts()
    },
	components: {},
}
</script>

<style scoped></style>
