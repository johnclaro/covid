import React from 'react';

import Layout from './Layout';
import Case from '../containers/Case';
import Cases from '../containers/Cases';
import Deaths from '../containers/Deaths';
import Counties from '../containers/Counties';
import Ages from '../containers/Ages';
import Genders from '../containers/Genders';


class CasesPage extends React.Component {

    render() {
        return (
            <Layout>
                <Case />
                <Cases />
                <Deaths />
                <Counties />
                <div className='row'>
                    <div className='col-lg-6'>
                        <Ages />
                    </div>
                    <div className='col-lg-6'>
                        <Genders />
                    </div>
                </div>
            </Layout>
        )
    }
}

export default CasesPage;