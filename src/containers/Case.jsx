import React from 'react';

import axios from '../axios';


class Case extends React.Component {
    
    state = {
        first: null,
        last: null,
    }

    componentDidMount() {
        axios.post('covid/hse')
        .then(response => {
            this.setState({
                first: response.data.first,
                last: response.data.last,
            })
        }, error => {
            console.log(error);
        })
    }

    render() {
        const { first, last } = this.state;
        return (
            <div className='row mt-3 mb-3'>
                {first ? (
                    <div className='col-lg-6'>
                        <small className='text-muted'>{first.date}</small>
                        <div className='card'>
                            <div className='card-body'>
                                <div className='row text-lg-center'>
                                    <div className='col-lg-6'>
                                        Cases
                                        <h3>
                                            {first.confirmedcovidcases}
                                        </h3>
                                    </div>
                                    <div className='col-lg-6'>
                                        Deaths
                                        <h3>
                                            {first.confirmedcoviddeaths}
                                        </h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ): null}
                {last ? (
                    <div className='col-lg-6'>
                        <small className='text-muted'>{last.date}</small>
                        <div className='card'>
                            <div className='card-body'>
                                <div className='row text-lg-center'>
                                    <div className='col-lg-6'>
                                        Cases
                                        <h3>
                                            {last.confirmedcovidcases}
                                        </h3>
                                    </div>
                                    <div className='col-lg-6'>
                                        Deaths
                                        <h3>
                                            {last.confirmedcoviddeaths}
                                        </h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ): null}
            </div>
        )
    }
}

export default Case;