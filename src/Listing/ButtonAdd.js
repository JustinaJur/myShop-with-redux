import React from 'react';

import { connect } from 'react-redux';
import { addItem } from '../actions'


class ButtonAdd extends React.Component {

    render() {
        let filteredSelected = this.props.selected.filter(item => item.name === this.props.item.name)
        let numberOfItems = filteredSelected.length;

        return (
            // <div>
            <td>
                <button
                    style={{ backgroundColor: 'greenyellow' }}
                    onClick={() => {
                        //send clicked item
                        this.props.addItem(this.props.item)
                        //console.log(this.props.item)

                    }}
                >
                    {this.props.name}
                    ({numberOfItems})

                </button>
            </td >
            // {/* </div > */ }
        )
    }
}


const mapStateToProps = (state, ownProps) => {
    console.log(ownProps)
    return { selected: state.selected }

}


export default connect(mapStateToProps,
    { addItem })(ButtonAdd)

