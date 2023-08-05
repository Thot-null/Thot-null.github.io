var app={};window.onload=function(){!function(){var e,a=echarts.init(document.getElementById("Visitors"),null,{renderer:"svg"}),t=0,n=null,i=(e={title:{text:"2023年国内各省访问人数",left:"center"},visualMap:{min:0,max:15,left:"left",top:"bottom",text:["高","低"],calculable:!1,orient:"horizontal",inRange:{color:["#e0ffff","#006edd"],symbolSize:[30,100]}},toolbox:{show:!0,feature:{mark:{show:!0},dataView:{show:!0,readOnly:!1},magicType:{show:!0,type:["pie","funnel"]},restore:{show:!0},saveAsImage:{show:!0}}},tooltip:{padding:8,enterable:!0,transitionDuration:1,textStyle:{color:"#000000",decoration:"none"},formatter:function(e){var a=e.name,t=e.value,n=e.data.tipData;return'<div><span style="color: black">'+a+'</span><br /><span style="color: black">IP数</span><span style="color: black; margin-left: 8px">'+t+'</span><br /><span style="color: black">PV数:</span><span style="color: black; margin-left: 8px">'+n[0]+'</span><br /><span style="color: black">UV数:</span><span style="color: black; margin-left: 8px">'+n[1]+"</span></div>"}},series:[{name:"访问人数",type:"map",mapType:"china",itemStyle:{normal:{label:{show:!1}},emphasis:{label:{show:!0}}},label:{normal:{show:!0,textStyle:{color:"#fff",fontSize:12}},emphasis:{color:"#fff"}},data:[{name:"北京",value:4,tipData:[5,3]},{name:"天津",value:0,tipData:[0,0]},{name:"上海",value:2,tipData:[3,2]},{name:"重庆",value:1,tipData:[2,1]},{name:"河北",value:1,tipData:[1,1]},{name:"河南",value:2,tipData:[5,2]},{name:"云南",value:0,tipData:[0,0]},{name:"辽宁",value:0,tipData:[0,0]},{name:"黑龙江",value:1,tipData:[5,1]},{name:"湖南",value:0,tipData:[0,0]},{name:"安徽",value:2,tipData:[4,2]},{name:"山东",value:1,tipData:[1,1]},{name:"新疆",value:0,tipData:[0,0]},{name:"江苏",value:2,tipData:[2,2]},{name:"浙江",value:0,tipData:[0,0]},{name:"江西",value:2,tipData:[3,2]},{name:"湖北",value:0,tipData:[0,0]},{name:"广西",value:1,tipData:[1,1]},{name:"甘肃",value:0,tipData:[0,0]},{name:"山西",value:7,tipData:[77,14]},{name:"内蒙古",value:0,tipData:[0,0]},{name:"陕西",value:0,tipData:[0,0]},{name:"吉林",value:0,tipData:[0,0]},{name:"福建",value:0,tipData:[0,0]},{name:"贵州",value:0,tipData:[0,0]},{name:"广东",value:6,tipData:[10,5]},{name:"青海",value:0,tipData:[0,0]},{name:"西藏",value:0,tipData:[0,0]},{name:"四川",value:1,tipData:[2,1]},{name:"宁夏",value:0,tipData:[0,0]},{name:"海南",value:0,tipData:[0,0]},{name:"台湾",value:0,tipData:[0,0]},{name:"香港",value:0,tipData:[0,0]},{name:"澳门",value:0,tipData:[0,0]}]}]}).series[0].data.length;n&&clearInterval(n),n=setInterval((function(){a.dispatchAction({type:"downplay",seriesIndex:0}),a.dispatchAction({type:"highlight",seriesIndex:0,dataIndex:t%i}),a.dispatchAction({type:"showTip",seriesIndex:0,dataIndex:t%i}),t++}),1e3),a.on("mouseover",(function(e){console.log(e),clearInterval(n),a.dispatchAction({type:"downplay",seriesIndex:0}),a.dispatchAction({type:"highlight",seriesIndex:0,dataIndex:e.dataIndex}),a.dispatchAction({type:"showTip",seriesIndex:0,dataIndex:e.dataIndex})})),a.on("mouseout",(function(e){n&&clearInterval(n),n=setInterval((function(){a.dispatchAction({type:"downplay",seriesIndex:0}),a.dispatchAction({type:"highlight",seriesIndex:0,dataIndex:t%i}),a.dispatchAction({type:"showTip",seriesIndex:0,dataIndex:t%i}),t++}),1e3)})),e&&"object"==typeof e&&a.setOption(e);window.addEventListener("resize",a.resize)}(),function(){var e,a=echarts.init(document.getElementById("categories"),null,{renderer:"svg"});(e={title:{text:"文章分类图",left:"center"},color:["#37a2da","#32c5e9","#9fe6b8","#ffdb5c","#ff9f7f","#fb7293","#e7bcf3","#8378ea"],tooltip:{trigger:"item",formatter:"{a} <br/>{b} : {c} ({d}%)"},toolbox:{show:!0,feature:{mark:{show:!0},dataView:{show:!0,readOnly:!1},magicType:{show:!0,type:["pie","funnel"]},restore:{show:!0},saveAsImage:{show:!0}}},calculable:!0,series:[{name:"分类",type:"pie",radius:[40,150],roseType:"area",data:[{value:4,name:"笔记"},{value:4,name:"科技与生活"},{value:4,name:"软件分享"},{value:5,name:"😃hexo"},{value:5,name:"国学"},{value:1,name:"梦境诡谈"}]}]})&&"object"==typeof e&&a.setOption(e);window.addEventListener("resize",a.resize)}(),function(){var e,a=echarts.init(document.getElementById("welcome"),null,{renderer:"svg"});(e={graphic:{elements:[{type:"text",left:"center",top:"top",style:{text:"Welcome SuYi !",fontSize:80,fontWeight:"bold",lineDash:[0,200],lineDashOffset:0,fill:"transparent",stroke:"#38D1FC",lineWidth:1},keyframeAnimation:{duration:5e3,loop:!0,keyframes:[{percent:.7,style:{fill:"transparent",lineDashOffset:200,lineDash:[200,0]}},{percent:.8,style:{fill:"transparent"}},{percent:1,style:{fill:"#38D1FC"}}]}}]}})&&"object"==typeof e&&a.setOption(e);window.addEventListener("resize",a.resize)}(),function(){var e,a=echarts.init(document.getElementById("number of post"),null,{renderer:"svg"});(e={title:{text:"各月文章发布数量",left:"center"},toolbox:{show:!0,feature:{mark:{show:!0},dataView:{show:!0,readOnly:!1},magicType:{show:!0,type:["pie","funnel"]},restore:{show:!0},saveAsImage:{show:!0}}},tooltip:{},grid:{top:"8%",left:"1%",right:"1%",bottom:"8%",containLabel:!0},xAxis:[{type:"category",boundaryGap:!1,axisLine:{show:!0,lineStyle:{color:"#233e64"}},axisLabel:{textStyle:{color:"#6a9cd5",margin:15}},axisTick:{show:!1},data:["一月","二月","三月","四月","五月","六月","七月"]}],yAxis:[{type:"value",min:0,max:15,splitNumber:5,splitLine:{show:!1,lineStyle:{color:"#233e64"}},axisLine:{show:!1},axisLabel:{margin:20,textStyle:{color:"#6a9cd5"}},axisTick:{show:!1}}],series:[{name:"异常流量",type:"line",smooth:!0,symbolSize:0,lineStyle:{normal:{color:"#3deaff"}},areaStyle:{normal:{color:new echarts.graphic.LinearGradient(0,0,0,1,[{offset:0,color:"rgba(61,234,255, 0.9)"},{offset:.7,color:"rgba(61,234,255, 0)"}],!1),shadowColor:"rgba(53,142,215, 0.9)",shadowBlur:20}},data:[1,0,0,0,0,4,9]}]})&&"object"==typeof e&&a.setOption(e);window.addEventListener("resize",a.resize)}()};