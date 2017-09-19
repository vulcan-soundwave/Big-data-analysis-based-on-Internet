        var myChart = echarts.init(document.getElementById('menu0'));

		//app.title = '极坐标系下的堆叠柱状图';

		var option = {
		    title: {
			text: '大数据职位需求量最高的前10名城市+大数据前六个岗位需求量排行',
			x: 'center'
		   },
		    angleAxis: {
		        type: 'category',
		        data: ['上海', '北京', '广州', '深圳', '珠海', '重庆', '天津', '成都', '第九大薪水高城市', '第十大薪水高城市'],
		        //z: 10
				//z值小的图形会被z值大的图形覆盖。z相比zlevel优先级更低，而且不会创建新的 Canvas。
		    },
		    radiusAxis: {
				type: 'value',
				z: 9
		    },
		    polar: {
		    },
		    series: [{
		        type: 'bar',
		        data: [5000, 2000, 3000, 4000, 5000, 6000, 2000, 2000, 8000, 3000],
		        coordinateSystem: 'polar',
		        name: '内核开发',
		        stack: 'a'	//数据堆叠，同个类目轴上系列配置相同的stack值可以堆叠放置
		    }, {
		        type: 'bar',
		        data: [2000, 4000, 6000, 1000, 3000, 2000, 1000, 6000, 2300, 3000],
		        coordinateSystem: 'polar',
		        name: '系统架构',
		        stack: 'a'
		    }, {
		        type: 'bar',
		        data: [3000, 2000, 3000, 4000, 1000, 2000, 5000, 2000, 5000, 2000],
		        coordinateSystem: 'polar',
		        name: '图像处理',
		        stack: 'a'
		    },{
                type: 'bar',
                data: [4000, 2000, 3000, 4000, 5000, 6000, 7000, 2000, 4000, 3000],
                coordinateSystem: 'polar',
                name: '大数据处理',
                stack: 'a'
            },{
                type: 'bar',
                data: [1000, 2000, 3000, 4000, 5000, 6000, 7000, 3000, 2000, 3000],
                coordinateSystem: 'polar',
                name: '第五大需求岗位',
                stack: 'a'
            },{
                type: 'bar',
		        data: [2000, 4000, 6000, 1000, 3000, 2000, 1000, 1000, 2000, 3000],
                coordinateSystem: 'polar',
                name: '第六大需求岗位',
                stack: 'a'
            }/*,{
                type: 'bar',
                data: [4000, 2000, 3000, 4000, 5000, 6000, 7000, 2000, 4000, 3000],
                coordinateSystem: 'polar',
                name: '第七大需求岗位',
                stack: 'a'
            },{
                type: 'bar',
                data: [1000, 2000, 3000, 4000, 5000, 6000, 7000, 3000, 2000, 3000],
                coordinateSystem: 'polar',
                name: '第八大需求岗位',
                stack: 'a'
            }*/],
		    legend: {
		        show: true,
		        data: ['','','','内核开发', '系统架构', '图像处理', '大数据处理', '第五大需求岗位', '第六大需求岗位',/* '第七大需求岗位', '第八大需求岗位'*/]
		    }
		};
	
        myChart.setOption(option);

