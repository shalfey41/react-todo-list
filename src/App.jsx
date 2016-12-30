import React from 'react';
import ReactDOM from 'react-dom';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import todos from './todos';
import Header from './components/Header';
import Todo from './components/Todo';
import Form from './components/Form';

const App = React.createClass({
    propTypes: {
        title: React.PropTypes.string,
        initialData: React.PropTypes.arrayOf(React.PropTypes.shape({
            id: React.PropTypes.number.isRequired,
            title: React.PropTypes.string.isRequired,
            completed: React.PropTypes.bool.isRequired,
        })).isRequired,
    },

    // Значения по умолчанию
    getDefaultProps() {
        console.log('getDefaultProps');

        return {
            title: 'React Todo',
        };
    },

    // Получения состояния
    getInitialState() {
        console.log('getInitialState');
        return {
            todos: this.props.initialData,
        };
    },

    // Перед render
    componentWillMount() {
        console.log('componentWillMount');
    },

    // После render
    componentDidMount() {
        console.log('componentDidMount');
    },

    handleStatusChange(id) {
        const todos = this.state.todos.map(todo => {
            if (todo.id === id) todo.completed = !todo.completed;

            return todo;
        });

        this.setState({ todos });
    },

    handleDelete(id) {
        const todos = this.state.todos.filter(todo => todo.id !== id);

        this.setState({ todos });
    },

    nextId() {
        this._nextId = this._nextId || 4;

        return this._nextId++;
    },

    handleAdd(title) {
        const todo = {
            id: this.nextId(),
            title,
            completed: false,
        };

        const todos = [...this.state.todos, todo];

        this.setState({ todos });
    },

    handleEdit(id, title) {
        const todos = this.state.todos.map(todo => {
            if (todo.id === id) todo.title = title;

            return todo;
        });

        this.setState({ todos });
    },

    render() {
        console.log('render');
        return (
            <main>
                <Header title={this.props.title} todos={ this.state.todos } />

                <ReactCSSTransitionGroup
                    component="section"
                    className="todo-list"
                    transitionName="slide"
                    transitionAppear={ true }
                    transitionAppearTimeout={ 300 }
                    transitionEnterTimeout={ 300 }
                    transitionLeaveTimeout={ 300 }
                >
                    { this.state.todos.map(todo =>
                        <Todo
                            key={ todo.id }
                            id={ todo.id }
                            title={ todo.title }
                            completed={ todo.completed }
                            onStatusChange={ this.handleStatusChange }
                            onDelete={ this.handleDelete }
                            onEdit={ this.handleEdit }
                        />
                    ) }
                </ReactCSSTransitionGroup>

                <Form onAdd={ this.handleAdd } />
            </main>
        );
    },
});

// Рендер элементов
ReactDOM.render(<App initialData={ todos } />, document.getElementById('root'));
