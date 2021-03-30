import React from 'react';

import Layout from './Layout';
import Swab from '../containers/Swab';
import Swabs from '../containers/Swabs';


class SwabsPage extends React.Component {

    render() {
        return (
            <Layout>
                <Swab />
                <Swabs days={7} />
                <Swabs days={31} />
                <Swabs />
            </Layout>
        )
    }
}

export default SwabsPage;