var app = {};
window.onload = function () {
    /* svg渲染模式
    var myChart = echarts.init(document.getElementById('zhexiantu'), null, {renderer: 'svg'}); 
    */
    echart01();
    echart02();
    echart03();
    echart04();


    function echart01() {
        var myChart = echarts.init(document.getElementById('Visitors'), null, { renderer: 'svg' });

        var option;
        option = {
            title: {
                text: '于今国内各省访问人数',
                left: 'center'
            },
            visualMap: {
                min: 0,
                max: 50,
                left: 'left',
                top: 'bottom',
                text: ['高', '低'],
                calculable: false,
                orient: 'horizontal',
                inRange: {
                    color: ['#e0ffff', '#006edd'],
                    symbolSize: [30, 100]
                }
            },
            toolbox: {
                show: true,
                feature: {
                    mark: { show: true },
                    dataView: { show: true, readOnly: false },
                    magicType: {
                        show: true,
                        type: ['pie', 'funnel']
                    },
                    restore: { show: true },
                    saveAsImage: { show: true }
                }
            },
            tooltip: {
                padding: 8,
                enterable: true,
                transitionDuration: 1,
                textStyle: {
                    color: '#000000',
                    decoration: 'none'
                },
                formatter: function (params) {
                    var name = params.name;
                    var value = params.value;
                    var tipData = params.data.tipData;
        
                    // 拼接自定义内容
                    var customContent = '<div>' +
                        '<span style="color: black">' + name + '</span>' +
                        '<br />' +
                        '<span style="color: black">' + 'IP数' + '</span>' +
                        '<span style="color: black; margin-left: 8px">' + value + '</span>' +
                        '<br />' +
                        '<span style="color: black">PV数:</span>' +
                        '<span style="color: black; margin-left: 8px">' + tipData[0] + '</span>' +
                        '<br />' +
                        '<span style="color: black">UV数:</span>' +
                        '<span style="color: black; margin-left: 8px">' + tipData[1] + '</span>' +
                        '</div>';
        
                    return customContent;
                }
            },
            series: [
                {
                    name: '访问人数',
                    type: 'map',
                    mapType: 'china',
                    itemStyle: {
                        normal: {
                            label: {
                                show: false
                            }
                        },
                        emphasis: {
                            label: {
                                show: true
                            }
                        }
                    },
                    label: {
                        normal: {
                            //静态的时候展示样式
                            show: true, //是否显示地图省份得名称
                            textStyle: {
                                color: '#fff',
                                fontSize: 12
                            }
                        },
                        emphasis: {
                            //动态展示的样式
                            color: '#fff'
                        }
                    },
                    data: [
                        {
                            name: '北京',
                            value: 41,
                            tipData: [
                                50,
                                43
                            ]
                        },
                        {
                            name: '天津',
                            value: 2,
                            tipData: [
                                2,
                                2
                            ]
                        },
                        {
                            name: '上海',
                            value: 7,
                            tipData: [
                                12,
                                7
                            ]
                        },
                        {
                            name: '重庆',
                            value: 4,
                            tipData: [
                                6,
                                4
                            ]
                        },
                        {
                            name: '河北',
                            value: 1,
                            tipData: [
                                1,
                                1
                            ]
                        },
                        {
                            name: '河南',
                            value: 2,
                            tipData: [
                                5,
                                2
                            ]
                        },
                        {
                            name: '云南',
                            value: 6,
                            tipData: [
                                7,
                                6
                            ]
                        },
                        {
                            name: '辽宁',
                            value: 1,
                            tipData: [
                                1,
                                1
                            ]
                        },
                        {
                            name: '黑龙江',
                            value: 1,
                            tipData: [
                                5,
                                1
                            ]
                        },
                        {
                            name: '湖南',
                            value: 2,
                            tipData: [
                                2,
                                2
                            ]
                        },
                        {
                            name: '安徽',
                            value: 3,
                            tipData: [
                                4,
                                3
                            ]
                        },
                        {
                            name: '山东',
                            value: 7,
                            tipData: [
                                9,
                                8
                            ]
                        },
                        {
                            name: '新疆',
                            value: 1,
                            tipData: [
                                1,
                                1
                            ]
                        },
                        {
                            name: '江苏',
                            value: 36,
                            tipData: [
                                42,
                                38
                            ]
                        },
                        {
                            name: '浙江',
                            value: 37,
                            tipData: [
                                49,
                                37
                            ]
                        },
                        {
                            name: '江西',
                            value: 2,
                            tipData: [
                                2,
                                2
                            ]
                        },
                        {
                            name: '湖北',
                            value: 4,
                            tipData: [
                                5,
                                4
                            ]
                        },
                        {
                            name: '广西',
                            value: 4,
                            tipData: [
                                5,
                                4
                            ]
                        },
                        {
                            name: '甘肃',
                            value: 1,
                            tipData: [
                                1,
                                1
                            ]
                        },
                        {
                            name: '山西',
                            value: 38,
                            tipData: [
                                91,
                                46
                            ]
                        },
                        {
                            name: '内蒙古',
                            value: 0,
                            tipData: [
                                0,
                                0
                            ]
                        },
                        {
                            name: '陕西',
                            value: 4,
                            tipData: [
                                4,
                                4
                            ]
                        },
                        {
                            name: '吉林',
                            value: 1,
                            tipData: [
                                1,
                                1
                            ]
                        },
                        {
                            name: '福建',
                            value: 4,
                            tipData: [
                                7,
                                4
                            ]
                        },
                        {
                            name: '贵州',
                            value: 1,
                            tipData: [
                                1,
                                1
                            ]
                        },
                        {
                            name: '广东',
                            value: 94,
                            tipData: [
                                116,
                                96
                            ]
                        },
                        {
                            name: '青海',
                            value: 0,
                            tipData: [
                                0,
                                0
                            ]
                        },
                        {
                            name: '西藏',
                            value: 1,
                            tipData: [
                                1,
                                1
                            ]
                        },
                        {
                            name: '四川',
                            value: 9,
                            tipData: [
                                15,
                                9
                            ]
                        },
                        {
                            name: '宁夏',
                            value: 0,
                            tipData: [
                                0,
                                0
                            ]
                        },
                        {
                            name: '海南',
                            value: 1,
                            tipData: [
                                1,
                                1
                            ]
                        },
                        {
                            name: '台湾',
                            value: 0,
                            tipData: [
                                0,
                                0
                            ]
                        },
                        {
                            name: '香港',
                            value: 10,
                            tipData: [
                                10,
                                10
                            ]
                        },
                        {
                            name: '澳门',
                            value: 0,
                            tipData: [
                                0,
                                0
                            ]
                        }
                    ]
                }
            ]
        };
        var count = 0;
        var timeTicket = null;
        var dataLength = option.series[0].data.length;
        timeTicket && clearInterval(timeTicket);
        timeTicket = setInterval(function () {
            myChart.dispatchAction({
                type: 'downplay',
                seriesIndex: 0
            });
            myChart.dispatchAction({
                type: 'highlight',
                seriesIndex: 0,
                dataIndex: count % dataLength
            });
            myChart.dispatchAction({
                type: 'showTip',
                seriesIndex: 0,
                dataIndex: count % dataLength
            });
            count++;
        }, 1000);

        myChart.on('mouseover', function (params) {
            console.log(params);
            clearInterval(timeTicket);
            myChart.dispatchAction({
                type: 'downplay',
                seriesIndex: 0
            });
            myChart.dispatchAction({
                type: 'highlight',
                seriesIndex: 0,
                dataIndex: params.dataIndex
            });
            myChart.dispatchAction({
                type: 'showTip',
                seriesIndex: 0,
                dataIndex: params.dataIndex
            });
        });
        myChart.on('mouseout', function (params) {
            timeTicket && clearInterval(timeTicket);
            timeTicket = setInterval(function () {
                myChart.dispatchAction({
                    type: 'downplay',
                    seriesIndex: 0
                });
                myChart.dispatchAction({
                    type: 'highlight',
                    seriesIndex: 0,
                    dataIndex: count % dataLength
                });
                myChart.dispatchAction({
                    type: 'showTip',
                    seriesIndex: 0,
                    dataIndex: count % dataLength
                });
                count++;
            }, 1000);
        });


        if (option && typeof option === 'object') {
            myChart.setOption(option);
        }

        window.addEventListener('resize', myChart.resize);

    }


    function echart02() {
        var myChart = echarts.init(document.getElementById('categories'), null, { renderer: 'svg' });
        var option;

        option = {
            title: {
                text: '文章分类图',
                left: 'center'
            },
            color: ['#37a2da', '#32c5e9', '#9fe6b8', '#ffdb5c', '#ff9f7f', '#fb7293', '#e7bcf3', '#8378ea'],
            tooltip: {
                trigger: 'item',
                formatter: "{a} <br/>{b} : {c} ({d}%)"
            },
            toolbox: {
                show: true,
                feature: {
                    mark: { show: true },
                    dataView: { show: true, readOnly: false },
                    magicType: {
                        show: true,
                        type: ['pie', 'funnel']
                    },
                    restore: { show: true },
                    saveAsImage: { show: true }
                }
            },
            calculable: true,
            series: [
                {
                    name: '分类',
                    type: 'pie',
                    radius: [40, 150],

                    roseType: 'area',
                    data: [
                        { value: 4, name: '笔记' },
                        { value: 5, name: '科技与生活' },
                        { value: 4, name: '软件分享' },
                        { value: 5, name: '😃hexo' },
                        { value: 6, name: '国学' },
                        { value: 2, name: '梦境诡谈' },
                        { value: 1, name: '插件分享' }
                    ]
                }
            ]
        };


        if (option && typeof option === 'object') {
            myChart.setOption(option);
        }

        window.addEventListener('resize', myChart.resize);
    }


    function echart03() {
        var myChart = echarts.init(document.getElementById('welcome'), null, { renderer: 'svg' });

        var option;


        option = {
            graphic: {
                elements: [
                    {
                        type: 'text',
                        left: 'center',
                        top: 'top',
                        style: {
                            text: 'Welcome SuYi !',
                            fontSize: 80,
                            fontWeight: 'bold',
                            lineDash: [0, 200],
                            lineDashOffset: 0,
                            fill: 'transparent',
                            stroke: '#38D1FC',
                            lineWidth: 1
                        },
                        keyframeAnimation: {
                            duration: 5000,
                            loop: true,
                            keyframes: [
                                {
                                    percent: 0.7,
                                    style: {
                                        fill: 'transparent',
                                        lineDashOffset: 200,
                                        lineDash: [200, 0]
                                    }
                                },
                                {
                                    // Stop for a while.
                                    percent: 0.8,
                                    style: {
                                        fill: 'transparent'
                                    }
                                },
                                {
                                    percent: 1,
                                    style: {
                                        fill: '#38D1FC'
                                    }
                                }
                            ]
                        }
                    }
                ]
            }
        };

        if (option && typeof option === 'object') {
            myChart.setOption(option);
        }

        window.addEventListener('resize', myChart.resize);
    }

    function echart04() {
        var myChart = echarts.init(document.getElementById('number of post'), null, { renderer: 'svg' });

        var option;

        option = {
            title: {
                text: '于今各月文章发布数量',
                left: 'center',
            },
            toolbox: {
                show: true,
                feature: {
                    mark: { show: true },
                    dataView: { show: true, readOnly: false },
                    magicType: {
                        show: true,
                        type: ['pie', 'funnel']
                    },
                    restore: { show: true },
                    saveAsImage: { show: true }
                }
            },
            tooltip: {
            },
            grid: {
                top: '8%',
                left: '1%',
                right: '1%',
                bottom: '8%',
                containLabel: true,
            },
            xAxis: [{
                type: 'category',
                boundaryGap: false,
                axisLine: { //坐标轴轴线相关设置。数学上的x轴
                    show: true,
                    lineStyle: {
                        color: '#233e64'
                    },
                },
                axisLabel: { //坐标轴刻度标签的相关设置
                    textStyle: {
                        color: '#6a9cd5',
                        margin: 15,
                    },
                },
                axisTick: { show: false, },
                data: ['六月 2023', '七月 2023', '十一月 2023', '十二月 2023', '二月 2024'],
            }],
            yAxis: [{
                type: 'value',
                min: 0,
                max: 15,
                splitNumber: 5,
                splitLine: {
                    show: false,
                    lineStyle: {
                        color: '#233e64'
                    }
                },
                axisLine: { show: false, },
                axisLabel: {
                    margin: 20,
                    textStyle: {
                        color: '#6a9cd5',

                    },
                },
                axisTick: { show: false, },
            }],
            series: [{
                name: '文章数量',
                type: 'line',
                smooth: true, //是否平滑曲线显示
                // 			symbol:'circle',  // 默认是空心圆（中间是白色的），改成实心圆
                symbolSize: 0,

                lineStyle: {
                    normal: {
                        color: "#3deaff"   // 线条颜色
                    }
                },
                areaStyle: { //区域填充样式
                    normal: {
                        //线性渐变，前4个参数分别是x0,y0,x2,y2(范围0~1);相当于图形包围盒中的百分比。如果最后一个参数是‘true’，则该四个值是绝对像素位置。
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                            { offset: 0, color: 'rgba(61,234,255, 0.9)' },
                            { offset: 0.7, color: 'rgba(61,234,255, 0)' }
                        ], false),

                        shadowColor: 'rgba(53,142,215, 0.9)', //阴影颜色
                        shadowBlur: 20 //shadowBlur设图形阴影的模糊大小。配合shadowColor,shadowOffsetX/Y, 设置图形的阴影效果。
                    }
                },
                data: [4, 8, 2, 1, 1]
            }]
        };

        if (option && typeof option === 'object') {
            myChart.setOption(option);
        }

        window.addEventListener('resize', myChart.resize);
    }



}