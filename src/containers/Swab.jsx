import React from 'react';

import axios from '../axios';


class Swab extends React.Component {
    
    state = {
        first: null,
        last: null,
    }

    componentDidMount() {
        axios.post('covid/hse/swab')
        .then(response => {
            this.setState(response.data)
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
                                        Positive Swabs
                                        <h3>
                                            {first.confirmedcovidcases}
                                        </h3>
                                    </div>
                                    <div className='col-lg-6'>
                                        Positivity Rate
                                        <h3>
                                            {first.confirmedcoviddeaths}%
                                        </h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ): null}
                {last ? (
                    <div className='col-lg-6'>
                        <small className='text-muted'>{last.date} to {first.date}</small>
                        <div className='card'>
                            <div className='card-body'>
                                <div className='row text-lg-center'>
                                    <div className='col-lg-6'>
                                        Positive Swabs
                                        <h3>
                                            {last.confirmedcovidcases}
                                        </h3>
                                    </div>
                                    <div className='col-lg-6'>
                                        Positivity Rate
                                        <h3>
                                            {last.confirmedcoviddeaths}%
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

export default Swab;