import React from 'react';

import Layout from './Layout';
import Cases from '../containers/Cases';
import Deaths from '../containers/Deaths';
import Counties from '../containers/Counties';


class CasesPage extends React.Component {

    render() {
        return (
            <Layout>
                <Cases />
                <Deaths />
                <Counties />
            </Layout>
        )
    }
}

export default CasesPage;