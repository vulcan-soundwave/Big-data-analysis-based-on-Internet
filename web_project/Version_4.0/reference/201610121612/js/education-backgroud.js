        var myChart = echarts.init(document.getElementById('main5'));

		var builderJson = {
		  "all": 45887,
		  "charts": {
		
			"大专及以上": 9191,
			"本科及以上": 16912,
			"硕士及以上": 24606,
			"博士及以上": 32250,
			"学历不限": 10391
		
		  },
		  "components": {
			  
		    "经验1-3年": 10701,
		    "经验10年以上": 38859,
		    "经验1年以下": 6939,
		    "经验3-5年": 18218,
		    "经验5-10年": 25870,
		    "经验不限": 8946,
		    "经验应届毕业生": 5685
		
		  },
		  //"ie": 12000
		};
		
		var education = {

            "大专及以上": 9191,
			"本科及以上": 16912,
            "硕士及以上": 24606,
			"博士及以上": 32250,
            "学历不限": 10391

		};
		
		var hands_on_background = {
			"经验1-3年": 10701,
            "经验10年以上": 38859,
			"经验1年以下": 6939,
         	"经验3-5年": 18218,
         	"经验5-10年": 25870,
         	"经验不限": 8946,
         	"经验应届毕业生": 5685

		};
		
		var waterMarkText = 'ECHARTS';
		
		var canvas = document.createElement('canvas');
		var ctx = canvas.getContext('2d');
		canvas.width = canvas.height = 100;
		ctx.textAlign = 'center';
		ctx.textBaseline = 'middle';
		ctx.globalAlpha = 0.08;
		ctx.font = '20px Microsoft Yahei';
		ctx.translate(50, 50);
		ctx.rotate(-Math.PI / 4);
		ctx.fillText(waterMarkText, 0, 0);
		
		option = {
		    backgroundColor: {
		        type: 'pattern',
		        image: canvas,
		        repeat: 'repeat'
		    },
		    tooltip: {},
		    title: [{
				text: '学历及工作经验与平均薪资关系',
				x: 'center'
			},{
		        text: '学历与工作经验',
		        subtext: '总计 ' + builderJson.all,
		        x: '25%',
		        textAlign: 'center'
		    }, {
		        text: '学历构成比例',
		        subtext: '总计 ' + Object.keys(education).reduce(function (all, key) {
		            return all + education[key];
		        }, 0),
		        x: '75%',
		        textAlign: 'center'
		    }, {
		        text: '工作经验构成比例',
		        subtext: '总计 ' + Object.keys(hands_on_background).reduce(function (all, key) {
		            return all + hands_on_background[key];
		        }, 0),
		        x: '75%',
		        y: '50%',
		        textAlign: 'center'
		    }],
		    grid: [{
		        top: 50,
		        width: '50%',
		        bottom: '45%',
		        left: 10,
		        containLabel: true
		    }, {
		        top: '55%',
		        width: '50%',
		        bottom: 0,
		        left: 10,
		        containLabel: true
		    }],
		    xAxis: [{
		        type: 'value',
		        max: builderJson.all,
		        splitLine: {
		            show: false
		        }
		    }, {
		        type: 'value',
		        max: builderJson.all,
		        gridIndex: 1,
		        splitLine: {
		            show: false
		        }
		    }],
		    yAxis: [{
		        type: 'category',
		        data: Object.keys(builderJson.charts),
		        axisLabel: {
		            interval: 0,
		            rotate: 30
		        },
		        splitLine: {
		            show: false
		        }
		    }, {
		        gridIndex: 1,
		        type: 'category',
		        data: Object.keys(builderJson.components),
		        axisLabel: {
		            interval: 0,
		            rotate: 30
		        },
		        splitLine: {
		            show: false
		        }
		    }],
		    series: [{
		        type: 'bar',
		        stack: 'chart',
		        z: 3,
		        label: {
		            normal: {
		                position: 'right',
		                show: true
		            }
		        },
		        data: Object.keys(builderJson.charts).map(function (key) {
		            return builderJson.charts[key];
		        })
		    }, {
		        type: 'bar',
		        stack: 'chart',
		        silent: true,
		        itemStyle: {
		            normal: {
		                color: '#eee'
		            }
		        },
		        data: Object.keys(builderJson.charts).map(function (key) {
		            return builderJson.all - builderJson.charts[key];
		        })
		    }, {
		        type: 'bar',
		        stack: 'component',
		        xAxisIndex: 1,
		        yAxisIndex: 1,
		        z: 3,
		        label: {
		            normal: {
		                position: 'right',
		                show: true
		            }
		        },
		        data: Object.keys(builderJson.components).map(function (key) {
		            return builderJson.components[key];
		        })
		    }, {
		        type: 'bar',
		        stack: 'component',
		        silent: true,
		        xAxisIndex: 1,
		        yAxisIndex: 1,
		        itemStyle: {
		            normal: {
		                color: '#eee'
		            }
		        },
		        data: Object.keys(builderJson.components).map(function (key) {
		            return builderJson.all - builderJson.components[key];
		        })
		    }, {
		        type: 'pie',
		        radius: [0, '30%'],
		        center: ['75%', '25%'],
		        data: Object.keys(education).map(function (key) {
		            return {
		                name: key.replace('.js', ''),
		                value: education[key]
		            }
		        })
		    }, {
		        type: 'pie',
		        radius: [0, '30%'],
		        center: ['75%', '75%'],
		        data: Object.keys(hands_on_background).map(function (key) {
		            return {
		                name: key.replace('.js', ''),
		                value: hands_on_background[key]
		            }
		        })
		    }]
		}

        myChart.setOption(option);

