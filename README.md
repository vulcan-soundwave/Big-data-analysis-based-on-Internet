# Big-data-analysis-based-on-Internet
A contest. Need spider(Python/MySQL) data processing(C++) visualization(HTML/CSS/JS/jQuery/Bootstrap)

## 可视化实现功能
【图表要求条目最终版】以下条目都是计算机相关岗位的统计
### 1. 公布有效数据：
- 1.1 爬取数据的来源分布	--> 极坐标系下的堆叠柱状图	--> effective_data.html
- 1.2 不同网站不同领域比例(大数据，开发，测试，运维)	-->加上面的就是嵌套环形图	--> 同上

我们可以得到的数据：</br>
职位、工资、城市、经验、学历、公司<br>

### 2. 全国范围内的数据分布：
- 2.1 全国（平均）薪资分布情况	--> 地图散点图，薪资高的颜色深，http://echarts.baidu.com/demo.html#effectScatter-map --> china-average_salary-distribution.html

- 2.4 全国公司的城市分布			--> 地图散点图		--> china-company-distribution.html / china-company-distribution_2.html

- 2.3 在全国岗位需求量分布 		--> 饼图或者地图散点图，岗位多的颜色深，http://echarts.baidu.com/demo.html#scatter-ma	--> china-requirement.html
http://echarts.baidu.com/demo.html#scatter-map-brush

- 2.5 大数据在全国的岗位需求量分布		--> 柱状图或者地图散点图	--> big_data-requirement.html
http://echarts.baidu.com/demo.html#scatter-map-brush

- 2.2 不同领域的平均薪资所占比例			--> 【饼图】或者南丁格尔图	--> diff_area-average_salary.html

- 2.7 全国各行业占比（随意）

### 3. 排行表

- 3.1 计算机专业薪水最高的前10名招聘职位+岗位需求量	--> 折线图，highest_salary-post-requirement.js
- 2.6 计算机专业工作经验要求分布情况（应届、1～3年、3～5年）		-->	嵌套环形图	-->hands-on background.html
- 3.2 大数据职位需求量最高的前10名城市+大数据前六个岗位需求量排行	--> 饼图/南丁格尔图,highest_city-requirement.js, 极坐标系下的堆叠柱状图-polar-stack-radial
- 3.3 大数据职位需求量最高的前10名行业（如互联网、金融、电子商务等）	-->	 南丁格尔玫瑰图, highestarea_requirement_area-big_data.html
- 3.4 企业对哪类大数据人才需求最为迫切（大数据分析师、大数据架构师等）	-->	极坐标下的堆叠柱状图	-->highest_bigdata-requirement.html

- 3.5计算机专业编程语言职位需求量前十名饼状图	--> 矩形树图
--> http://echarts.baidu.com/demo.html#funnel-customize-漏斗图		--> language-requirement.html
- 3.6计算                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               机专业不同编程语言平均薪资柱状图
--> http://echarts.baidu.com/demo.html#bar-y-category / http://echarts.baidu.com/demo.html#mix-line-bar		-->language-salary.html

### 4. 不同要素的关系图表
- 4.1 学历和薪资(min,max)关系					--> 折线图		--> http://echarts.baidu.com/demo.html#watermark

- 4.2 工作经验和薪资(min,max)的关系		--> 折柱图，experience-salary	--> education-backgroud.html
