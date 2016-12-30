import React from 'react';

export default React.createClass({
    propTypes: {
        checked: React.PropTypes.bool.isRequired,
        onChange: React.PropTypes.func.isRequired,
    },

    render() {
        return (
            <button className="checkbox icon" onClick={ this.props.onChange }>
                <i className="material-icons">{ this.props.checked ? 'check_box' : 'check_box_outline_blank'}</i>
            </button>
        );
    },
});
