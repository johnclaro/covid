import React from 'react';

import Layout from './Layout';
import Cases from '../containers/Cases';
import Deaths from '../containers/Deaths';


class CasesPage extends React.Component {

    render() {
        return (
            <Layout>
                <Cases />
                <Deaths />
            </Layout>
        )
    }
}

export default CasesPage;