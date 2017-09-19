        var myChart = echarts.init(document.getElementById('main0'));

	var option = {
	    	title: {
                text: '工作经验-薪资分布图'
            },
	    tooltip: {
		trigger: 'axis',
		axisPointer: {
		    type: 'cross',
		    crossStyle: {
		        color: '#999'
		    }
		}
	    },
	    toolbox: {
		feature: {
		    dataView: {show: true, readOnly: false},
		    magicType: {show: true, type: ['line', 'bar']},
		    restore: {show: true},
		    saveAsImage: {show: true}
		}
	    },
	    legend: {
		data:['min_salary','max_salary','average_salary']
	    },
	    xAxis: [
		{
		    type: 'category',
		    data: ['无经验','经验1年以下','经验1-3年','经验3-5年','经验5-10年','经验不限','应届毕业生'],
		    axisPointer: {
		        type: 'shadow'
		    }
		}
	    ],
	    yAxis: [
		{
		    type: 'value',
		    name: '薪资',
		    min: 0,
		    max: 30000,
		    interval: 5000,
		    axisLabel: {
		        formatter: '{value} ￥'
		    }
		},
	    ],
	    series: [
		{
		    name:'min_salary',
		    type:'bar',
		    data:[7000, 20000, 3500, 12000, 21000, 8000, 2000]
		},
		{
		    name:'max_salary',
		    type:'bar',
		    data:[8000, 22000, 4500, 14000, 23000, 9000, 4000]
		},
		{
		    name:'average_salary',
		    type:'line',
		    // yAxisIndex: 1,
		    data:[7500, 21000, 4000, 13000, 22000, 8500, 3000]
		}
	    ]
	};

        myChart.setOption(option);

