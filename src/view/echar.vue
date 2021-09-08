<template>
    <div id="echar">
        <div id="main"></div>
    </div>
</template>
<script>
export default {
    data() {
        return{
            myChart:'',
            dataAyy:[[15, 0], [-50, 10], [-56.5, 20], [-46.5, 30], [-22.1, 40]]
        }
    },
    mounted(){
        this.$nextTick(()=>{
            // console.log(document.getElementById('main'))
            this.init1()
        })
    },
    methods:{
        init(){
            
            var myChart = this.echarts.init(document.getElementById('main'));
            // 绘制图表
            myChart.setOption({
                title: {
                    text: 'ECharts 入门示例'
                },
                tooltip: {},
                xAxis: {
                    data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
                },
                yAxis: [
                    {
                        name:"数量"
                    },
                    {
                        name:"价格"
                    }
                ],
                series: [{
                    name: '销量',
                    type: 'bar',
                    barWidth:"30%",
                    data: [5, 20, 36, 10, 10, 20],
                    yAxisIndex:0,
                    backgroundStyle:{
                        borderColor:'#000',
                        borderWidth:'2px'
                    }
                },{
                    name: '价格',
                    type: 'line',
                    data: [300, 200, 400, 800, 1000, 2000],
                    yAxisIndex:1
                }]
            });
        },
        init1(){
            let self=this
            var symbolSize = 20;
            var data = [[15, 0], [-50, 10], [-56.5, 20], [-46.5, 30], [-22.1, 40]];
            var myChart = this.echarts.init(document.getElementById('main'));
            this.myChart=myChart
            myChart.setOption({
            //  # 表示不使用默认的『显示』『隐藏』触发规则。
            tooltip: {
            triggerOn: 'none',
            formatter: function (params) {
                return 'X: ' + params.data[0].toFixed(2) + '<br>Y: ' + params.data[1].toFixed(2);
            }
            },
            xAxis: {
                min: -100,
                max: 80,
                type: 'value',
                axisLine: {onZero: false}
            },
            yAxis: {
                min: -30,
                max: 60,
                type: 'value',
                axisLine: {onZero: false}
            },
            series: [
                {
                    id: 'a',
                    type: 'line',
                    smooth: true,
                    symbolSize: symbolSize,
                    data: self.dataAyy
                }
            ],
            });
            myChart.setOption({
            //  #拖拽功能：用 graphic 组件，在每个点上面，覆盖一个隐藏的可拖拽的圆点
            graphic: this.echarts.util.map(self.dataAyy, function (item, dataIndex) {
                return {
                    type: 'circle',
                    position: myChart.convertToPixel('grid', item),
                    shape: {
                    r: symbolSize / 2
                    },
                    invisible: true,
                    draggable: true,
                    ondrag: self.echarts.util.curry(self.onPointDragging, dataIndex),
                    onmousemove: self.echarts.util.curry(self.showTooltip, dataIndex),
                    onmouseout: self.echarts.util.curry(self.hideTooltip, dataIndex),
                    z: 100
                };
            })
            });
            window.addEventListener('resize', function () {
                myChart.setOption({
                    graphic: self.echarts.util.map(self.dataAyy, function (item, dataIndex) {
                        return {
                            position: myChart.convertToPixel('grid', item)
                        };
                    })
                });
            });
        },
        showTooltip(dataIndex) {
            this.myChart.dispatchAction({
                type: 'showTip',
                seriesIndex: 0,
                dataIndex: dataIndex
            });
        },
        hideTooltip(dataIndex) {
            this.myChart.dispatchAction({
                type: 'hideTip'
            });
        },
        onPointDragging(dataIndex, dx, dy) {
            let self=this
            self.dataAyy[dataIndex] = this.myChart.convertFromPixel('grid', this.position);
            this.myChart.setOption({
                series: [{
                    id: 'a',
                    data: self.dataAyy
                }]
            });
        }
    }
}
</script>
<style scoped>
#echar{
    margin:0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
}
#main{
    width: 500px;
    height: 50vh;
}
</style>