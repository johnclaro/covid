import React from 'react';

import Layout from './Layout';
import Swab from '../containers/Swab';
import Swabs from '../containers/Swabs';
import { PLOT_BANDS } from '../constants';


class SwabsPage extends React.Component {

    render() {
        return (
            <Layout>
                <Swab />
                <Swabs days={7} />
                <Swabs days={31} />
                <Swabs plotBands={PLOT_BANDS} />
            </Layout>
        )
    }
}

export default SwabsPage;