import React from 'react';

import axios from '../axios';


class Swab extends React.Component {
    
    state = {
        data: null
    }

    componentDidMount() {
        axios.post('covid/hse/swabs/latest')
        .then(response => {
            this.setState({data: response.data})
        }, error => {
            console.log(error);
        })
    }

    render() {
        const { data } = this.state;
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
                                            Positive Swabs
                                            <h3>
                                                {data.pos1}
                                            </h3>
                                        </div>
                                        <div className='col-lg-6'>
                                            Positivity Rate
                                            <h3>
                                                {data.posr1}%
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
                                            Positive Swabs
                                            <h3>
                                                {data.positive}
                                            </h3>
                                        </div>
                                        <div className='col-lg-6'>
                                            Positivity Rate
                                            <h3>
                                                {data.prate}%
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

export default Swab;