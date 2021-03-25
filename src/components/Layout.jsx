import React from 'react';
import { Link } from 'react-router-dom';


class Layout extends React.Component {

    render() {
        return (
            <div>
                <div className='container mt-3 mb-5'>
                    <div className='text-center mt-3'>
                        <h1>Covid in Ireland</h1>
                        <Link to='/' className='btn btn--template primary--bg mr-3'>Cases</Link>
                        <Link to='/swabs' className='btn btn--template primary--bg mr-3'>Swabs</Link>
                        <Link to='/vaccines' className='btn btn--template primary--bg'>Vaccines</Link>
                    </div>
                    {this.props.children}
                </div>
            </div>
        )
    }
}


export default Layout;