import React from 'react';
import { Link } from 'react-router-dom';


class Layout extends React.Component {

    state = {
        links: [
            {url: '/', title: 'Cases'},
            {url: '/swabs', title: 'Swabs'},
        ]
    }

    render() {
        const pathname = window.location.pathname;
        return (
            <div>
                <div className='container mt-3 mb-5'>
                    <div className='text-center mt-3'>
                        <h1>Covid in Ireland</h1>
                        {this.state.links.map((link, index) =>
                            <Link key={index} to={link.url} className={`btn btn--template ${pathname === link.url ? 'primary' : 'light'}--bg mr-3`}>
                                {link.title}
                                {pathname === link.url ? null : ' ->'}
                            </Link>
                        )}
                        <div className='alert alert-danger mt-3' role='alert'>
                            Recent <a href='https://healthservice.hse.ie/staff/news/general/staff-update-hse-it-cyber-attack.html'>HSE IT Cyber Attack</a> has paused updates to GeoHive COVID-19 Hub until further notice.
                        </div>
                    </div>
                    {this.props.children}
                </div>
            </div>
        )
    }
}


export default Layout;