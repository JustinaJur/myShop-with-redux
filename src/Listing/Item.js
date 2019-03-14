import React from 'react';
import data from '../products.json'
import ButtonAdd from "./ButtonAdd"
import ButtonRemove from "./ButtonRemove"

import { connect } from 'react-redux';


class Item extends React.Component {

    renderProducts = () => {
        let filteredData = data.products.filter((item) =>
            item.name.toLowerCase().indexOf(this.props.search) !== -1
            || item.description.toLowerCase().indexOf(this.props.search) !== -1);

        return (
            <div className="products-container">
                {filteredData.map(item =>

                    < div key={item.id}>
                        <h3> {item.name}</h3>
                        <img
                            height={100}
                            src={`/products/${item.image}`}
                        />
                        {item.description}
                        <h3> {item.price} EUR</h3>

                        <div className="buttons">
                            <ButtonAdd
                                item={item}
                                name="Add Item"
                            />

                            < ButtonRemove
                                item={item}
                                name="Remove Item"
                            />
                        </div>
                        {/* <div className="button">{this.props.children}</div> */}
                    </div>
                )
                }
            </div>
        )

    }

    render() {
        return <div>{this.renderProducts()} </div>
    }
}



const mapStateToProps = (state) => {
    return { search: state.search }
    //console.log(state)
}


//export default Item
export default connect(mapStateToProps)(Item)















