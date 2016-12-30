import React from 'react';

import Button from './Button';

export default React.createClass({
    propTypes: {
        onAdd: React.PropTypes.func.isRequired,
    },

    getInitialState() {
        return {
            title: '',
        }
    },

    handleSubmit(event) {
        event.preventDefault();

        const title = this.state.title;

        if (!title) return;

        this.props.onAdd(title);
        this.setState({ title: '' });
    },

    handleChange(event) {
        const title = event.target.value;

        this.setState({ title });
    },

    render() {
        return (
            <form className="todo-form" onSubmit={ this.handleSubmit }>
                <input
                    type="text"
                    value={ this.state.title }
                    placeholder="Что нужно сделать?"
                    onChange={ this.handleChange }
                />

                <Button type="submit">Добавить</Button>
            </form>
        );
    },
});
