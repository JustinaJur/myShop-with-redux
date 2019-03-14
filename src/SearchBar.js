import React, { Component } from 'react';

import { connect } from 'react-redux';
import { handleChangeValue } from './actions'



class SearchBar extends Component {
    render() {
        return (
            <div className="SearchBar">
                <form>
                    <label>Search products: </label>
                    <input
                        type="text"
                        value={this.props.value}
                        onChange={e => this.props.handleChangeValue(e)}
                        placeholder="Search products..."
                    />
                </form>
            </div>
        );
    }
}



const mapStateToProps = (state) => {
    return { search: state.search }
    console.log(state)
}

export default connect(mapStateToProps,
    { handleChangeValue })(SearchBar)