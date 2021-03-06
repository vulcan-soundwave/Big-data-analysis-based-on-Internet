        var myChart = echarts.init(document.getElementById('main4'));

		//app.title = '环形图';

		var option = {
			title: {
				text: '工作经验要求比例',
				x: 'center'
			},
		    tooltip: {
		        trigger: 'item',
		        formatter: "{a} <br/>{b}: {c} ({d}%)"
		    },
		    legend: {
		        orient: 'vertical',
		        x: 'left',
		        data: ['经验1年以下', '经验1-3年', '经验3-5年', '经验5-10年', '经验10年以上', '经验不限', '应届毕业生']
			},
		    series: [
		        {
		            name:'工作经验要求比例',
		            type:'pie',
		            radius: ['50%', '70%'],
		            avoidLabelOverlap: false,
		            label: {
		                normal: {
		                    show: false,
		                    position: 'center'
		                },
		                emphasis: {
		                    show: true,
		                    textStyle: {
		                        fontSize: '30',
		                        fontWeight: 'bold'
		                    }
		                }
		            },
		            labelLine: {
		                normal: {
		                    show: false
		                }
		            },
		            data:[
					//百度自己的表格转换多一个空格，是不是脑壳有问题
				    {name: '经验1年以下', value: 524},
				    {name: '经验1-3年', value: 10019},
				    {name: '经验3-5年', value: 9238},
				    {name: '经验5-10年', value: 3183},
				    {name: '经验10年以上', value: 142},
				    {name: '经验不限', value: 5479},
				    {name: '应届毕业生', value: 494}

		            ]
		        }
		    ]
		};

        myChart.setOption(option);
