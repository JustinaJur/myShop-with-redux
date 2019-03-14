import React from 'react';

import { connect } from 'react-redux';
import { removeItem } from '../actions'


class ButtonRemove extends React.Component {
    render() {
        return (
            <td>
                <button
                    style={{ backgroundColor: 'tomato' }}
                    onClick={() => {
                        this.props.removeItem(this.props.item);
                    }}
                >
                    {this.props.name}
                </button>
            </td>


        )
    }
}

const mapStateToProps = (state) => {
    // console.log(state.selected)
    return { selected: state.selected }
}

export default
    connect(mapStateToProps,
        { removeItem })(ButtonRemove)
