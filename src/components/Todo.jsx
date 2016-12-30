import React from 'react';

import Checkbox from './Checkbox';
import Button from './Button';

export default React.createClass({
    propTypes: {
        title: React.PropTypes.string.isRequired,
        completed: React.PropTypes.bool.isRequired,
        onStatusChange: React.PropTypes.func.isRequired,
        onDelete: React.PropTypes.func.isRequired,
        onEdit: React.PropTypes.func.isRequired,
    },

    getInitialState() {
        return {
            editing: false,
        }
    },

    // Перед получением новых свойств (nextProps - новые свойства)
    // Не сработает при первом выводе компонентов в DOM
    componentWillReceiveProps(nextProps) {
        console.log('componentWillReceiveProps');
        console.log('nextProps', nextProps);
    },

    // Перед вызовом render. nextProps - новые свойства, nextState - новые состояния
    // Не сработает при первом выводе компонентов в DOM
    componentWillUpdate(nextProps, nextState) {
        console.log('componentWillUpdate');
        console.log('nextProps', nextProps);
        console.log('nextState', nextState);
    },

    // Перед вызовом render. false - нельзя обновлять, true - можно
    // Не сработает при первом выводе компонентов в DOM
    shouldComponentUpdate(nextProps, nextState) {
        console.log('shouldComponentUpdate');
        console.log('nextProps', nextProps);
        console.log('nextState', nextState);

        return true;
    },

    // После render. prevProps - пред. значения свойств. prevState - пред. значения состояния
    componentDidUpdate(prevProps, prevState) {
        console.log('componentDidUpdate');
        console.log('prevProps', prevProps);
        console.log('prevState', prevState);
    },

    // После удаления
    componentWillUnmount() {
        console.log('componentWillUnmount');
    },

    handleChange() {
        this.props.onStatusChange(this.props.id);
    },

    handleSubmit(event) {
        event.preventDefault();
        const title = this.refs.title.value;

        this.props.onEdit(this.props.id, title);
        this.setState({ editing: false });
    },

    renderDisplay() {
        return (
            <div className={ `todo${this.props.completed ? ' completed' : ''}` }>
                <Checkbox checked={ this.props.completed } onChange={ this.handleChange } />

                <span className="todo-title">{ this.props.title }</span>

                <Button className="edit icon" icon="edit" onClick={ () => this.setState({ editing: true }) } />
                <Button className="delete icon" icon="delete" onClick={ () => { this.props.onDelete(this.props.id) } } />
            </div>
        );
    },

    renderForm() {
        return (
            <form className="todo-edit-form" onSubmit={ this.handleSubmit }>
                <input type="text" ref="title" defaultValue={ this.props.title }/>
                <Button className="save icon" icon="save" type="submit" />
            </form>
        );
    },

    render() {
        console.log('render');
        return this.state.editing ? this.renderForm() : this.renderDisplay();
    },
});
