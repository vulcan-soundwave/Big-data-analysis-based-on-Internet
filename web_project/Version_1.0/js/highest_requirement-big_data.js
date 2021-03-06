        var myChart = echarts.init(document.getElementById('menu1'));
		var jobdata = ['互联网', '第二项', '第三项', '第四项', '第五项', '第六项', '第七项', '第八项'
		]; 
		var option = {
		    title : {
		        text: '大数据职位需求量最高的前10名行业',
		        subtext: '南丁格尔玫瑰图',
		        x:'center'
		    },
		    tooltip : {
		        trigger: 'item',
		        formatter: "{a} <br/>{b} : {c} ({d}%)"
		    },
		    legend: {
		        x : 'center',
		        y : 'bottom',
		        data: jobdata
		    },
		    toolbox: {
		        show : true,
		        feature : {
		            mark : {show: true},
		            dataView : {show: true, readOnly: false},
		            magicType : {
		                show: true,
		                type: ['pie', 'funnel']
		            },
		            restore : {show: true},
		            saveAsImage : {show: true}
		        }
		    },
		    calculable : true,
		    series : [
		        {
		            name:'半径模式',
		            type:'pie',
		            radius : [20, 130],
		            //center : ['25%', '50%'],
		            roseType : 'radius',
		            /*label: {
		                normal: {
		                    show: false
		                },
		                emphasis: {
		                    show: true
		                }
		            },
		            lableLine: {
		                normal: {
		                    show: false
		                },
		                emphasis: {
		                    show: true
		                }
		            },
					*/
		            data:[
		                {value:10, name:'互联网'},
		                {value:5, name:'第二项'},
		                {value:15, name:'第三项'},
		                {value:25, name:'第四项'},
		                {value:20, name:'第五项'},
		                {value:35, name:'第六项'},
		                {value:30, name:'第七项'},
		                {value:40, name:'第八项'}
		            ]
		        },
		        /*{
		            name:'面积模式',
		            type:'pie',
		            radius : [30, 110],
		            center : ['75%', '50%'],
		            roseType : 'area',
		            //'area' 所有扇区圆心角相同，仅通过半径展现数据大小。
					data:[
		                {value:10, name:'rose1'},
		                {value:5, name:'rose2'},
		                {value:15, name:'rose3'},
		                {value:25, name:'rose4'},
		                {value:20, name:'rose5'},
		                {value:35, name:'rose6'},
		                {value:30, name:'rose7'},
		                {value:40, name:'rose8'}
		            ]
		        }*/
		    ]
		};
		
        myChart.setOption(option);

