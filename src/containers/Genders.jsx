import React from 'react';

import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

import axios from '../axios';


class Genders extends React.Component {

    state = {
        options: {
            chart: {
                plotBackgroundColor: null,
                plotBorderWidth: null,
                plotShadow: false,
                type: 'pie'
            },
            title: {
                text: 'Gender breakdown'
            },
            tooltip: {
                pointFormat: '{series.name}: <b> {point.percentage:.2f}%</b>'
            },
            plotOptions: {
                pie: {
                    allowPointSelect: true,
                    cursor: 'pointer',
                    dataLabels: {
                        enabled: true,
                        format: '<b>{point.name}</b>: <span style="font-weight: 400 !important;">{point.percentage:.2f}%</span>'
                    }
                }
            },
            series: []
        }
    }

    componentDidMount() {
        axios.post('/hse/genders')
        .then(response => {
            const series = {
                name: 'Gender',
                colorByPoint: true,
                data: response.data
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

export default Genders;