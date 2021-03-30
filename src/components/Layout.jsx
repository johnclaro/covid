import React from 'react';
import { Link } from 'react-router-dom';


class Layout extends React.Component {

    render() {
        const pathname = window.location.pathname;
        return (
            <div>
                <div className='container mt-3 mb-5'>
                    <div className='text-center mt-3'>
                        <h1>Covid in Ireland</h1>
                        <Link to='/' className={`btn btn--template ${pathname === '/' ? 'primary' : 'light'}--bg mr-3`}>Cases</Link>
                        <Link to='/swabs' className={`btn btn--template ${pathname === '/swabs' ? 'primary' : 'light'}--bg mr-3`}>Swabs</Link>
                    </div>
                    {this.props.children}
                </div>
            </div>
        )
    }
}


export default Layout;