import React from 'react';
import ProductList from './productlist';

class Home extends React.Component {
    render() {
        return (
            <div>
                
                <ProductList style={{ marginTop: 0 }} />
            </div>
        );
    }
}

export default Home;