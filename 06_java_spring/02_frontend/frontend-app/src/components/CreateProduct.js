import React from "react";

class CreateProduct extends React.Component {
    constructor(props) {
        super(props);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.createProduct = this.createProduct.bind(this);
    }

    createProduct() {
        fetch('http://localhost:8080/products',
            {
                method: 'POST',
                body: JSON.stringify(this.state),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .then(response => console.log(response));
    }

    handleInputChange(event) {
        const target = event.target;
        const {value, name} = target;

        this.setState({
            [name]: value,
        });
    }

    render() {
        return (
            <div className="wrapper">
                <form>
                    <div className="form-group">
                        <label>Enter Name</label>
                        <input type="text" name="name" onChange={this.handleInputChange}/>

                    </div>
                    <div className="form-group">
                        <label>Enter id</label>
                        <input type="number" name="id" onChange={this.handleInputChange}/>
                    </div>
                    <div className="form-group">
                        <input type="button" value="Create product" onClick={this.createProduct}/>
                    </div>
                </form>
            </div>
        )
    }

}

export default CreateProduct