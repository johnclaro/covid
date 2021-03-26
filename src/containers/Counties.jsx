import React from 'react';

import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

import axios from '../axios';


class Counties extends React.Component {

    state = {
        options: {
            chart: {
                type: 'bar',
                height: 768,
            },
            title: {
                text: 'Cases by county'
            },
            xAxis: {
                type: 'category'
            },
            yAxis: {
                min: 0,
                title: {
                    text: 'Cases',
                    align: 'high'
                },
                labels: {
                    overflow: 'justify'
                }
            },
            plotOptions: {
                bar: {
                    dataLabels: {
                        enabled: true
                    }
                }
            },
            series: []
        } 
    }

    componentDidMount() {
        axios.post('covid/hse/counties')
        .then(response => {
            const { data } = response;
            const series = {
                name: 'Cases',
                data: data,
                color: '#44A9A8'
            }
            this.internalChart.addSeries(series)
        }, error => {
            console.log(error);
        })
    }

    initChart = (chart) => {
        this.internalChart = chart;
    }

    render() {
        return (
            <HighchartsReact
                highcharts={Highcharts}
                options={this.state.options}
                callback={this.initChart}
            />
        )
    }
}

export default Counties;