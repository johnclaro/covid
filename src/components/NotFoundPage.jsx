import React from 'react';
import { Link } from 'react-router-dom';

import Layout from './Layout';


class NotFoundPage extends React.Component {

    render() {
        return (
            <Layout>
                <h3><b>Page not found!</b></h3> 
                <p>Sorry, but the page you were looking for could not be found.</p>
                <p>You can <Link to='/'>click here to return to our front page</Link>.</p>
            </Layout>
        )
    }
}

export default NotFoundPage;