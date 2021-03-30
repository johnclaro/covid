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
                        {this.state.links.map((map, index) =>
                            <Link key={index} to={map.url} className={`btn btn--template ${pathname === map.url ? 'primary' : 'light'}--bg mr-3`}>
                                Cases
                                {pathname === map.url ? null : ' ->'}
                            </Link>
                        )}
                    </div>
                    {this.props.children}
                </div>
            </div>
        )
    }
}


export default Layout;