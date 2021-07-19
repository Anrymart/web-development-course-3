import React from "react";
import CreateProduct from "./CreateProduct";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            products: []
        };
        fetch('http://localhost:8080/products')
            .then(response => response.json())
            .then((response) => {
                this.setState({products: response});
            });
    }

    render() {
        return (
            <div className="app">
                <ul className="products">
                    {this.state.products.map(product => <li key={product.id}>{product.name}</li>)}
                </ul>
                <CreateProduct></CreateProduct>
            </div>
        );
    }
}

export default App