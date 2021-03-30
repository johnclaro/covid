import React from 'react';

import axios from '../axios';


class Case extends React.Component {
    
    state = {
        data: null
    }

    componentDidMount() {
        axios.post('covid/hse/cases/latest')
        .then(response => {
            this.setState({data: response.data})
        }, error => {
            console.log(error);
        })
    }

    render() {
        const data = this.state.data;
        return (
            <div>
                {data ? (
                    <div className='row mt-3 mb-3'>
                        <div className='col-lg-6'>
                            <small className='text-muted'>{data.latest_date}</small>
                            <div className='card'>
                                <div className='card-body'>
                                    <div className='row text-lg-center'>
                                        <div className='col-lg-6'>
                                            Cases
                                            <h3>
                                                {data.confirmedcovidcases}
                                            </h3>
                                        </div>
                                        <div className='col-lg-6'>
                                            Deaths
                                            <h3>
                                                {data.confirmedcoviddeaths}
                                            </h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-6'>
                            <small className='text-muted'>{data.oldest_date} to {data.latest_date}</small>
                            <div className='card'>
                                <div className='card-body'>
                                    <div className='row text-lg-center'>
                                        <div className='col-lg-6'>
                                            Cases
                                            <h3>
                                                {data.totalconfirmedcovidcases}
                                            </h3>
                                        </div>
                                        <div className='col-lg-6'>
                                            Deaths
                                            <h3>
                                                {data.totalcoviddeaths}
                                            </h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ): (
                    <div>Loading...</div>
                )}
            </div>
        )
    }
}

export default Case;