import React from 'react'
import ButtonRemove from './ButtonRemove'
import ButtonAdd from './ButtonAdd'
import history from "../history";
import { connect } from 'react-redux';


class Cart extends React.Component {




    renderCart = () => {
        let reduced = this.props.selected.reduce((acc, item) => {
            //find first matching item in acc and set it as value of filteredItem
            let filteredItem = acc.filter(item2 => item2.id === item.id)[0]
            //if filteredItem is already in acc, increase its quantity by 1 
            if (filteredItem !== undefined) {
                filteredItem.quantity++
            }
            // else: push it to acc 
            else { acc.push({ ...item, quantity: 1 }) }
            return acc
        }, []).filter((item) =>
            item.name.toLowerCase().indexOf(this.props.search) !== -1);

        let price = reduced.map(item => item.price * item.quantity);

        if (this.props.selected.length > 0)
            return (
                <div className="cart" >
                    < table >
                        <thead>
                            {/* <tr> */}
                            <th>products</th>
                            <th>quantity</th>
                            <th>price</th>
                            <th>add</th>
                            <th>remove</th>
                            {/* </tr> */}
                        </thead>
                        {reduced.map(item =>
                            <tbody key={item.id}>



                                < tr className="tableRow">
                                    <td>{item.name}</td>
                                    <td>{item.quantity}</td>
                                    <td>{Number(item.price * item.quantity).toFixed(2)} EUR</td>

                                    {/* </tr> */}
                                    <ButtonAdd

                                        item={item}
                                        /// addItem={this.props.addItem}
                                        // selected={this.props.selected}
                                        name="+"
                                    />
                                    < ButtonRemove

                                        item={item}
                                        /// removeItem={this.props.removeItem}
                                        name="-"
                                    />
                                    {/* <div className="button">{this.props.children}</div> */}
                                </tr>

                            </tbody>
                        )}
                    </table >
                </div >

            )
        else return (
            <div className="contacts">
                <h4> Your cart is empty</h4>
                <button onClick={() => history.push('/')}>BACK TO PRODUCTS</button>
            </div>
        )
    }

    render() {
        return <div> {this.renderCart()} </div>
    }
}


const mapStateToProps = (state) => {
    //console.log(Object.values(state.selected))
    return {
        search: state.search,
        selected: state.selected

    }
}


export default connect(mapStateToProps)(Cart)