import React from 'react';

export default function States(props) {
    const total = props.todos.length;
    const completed = props.todos.filter(todo => todo.completed).length;
    const notCompleted = total - completed;

    return (
        <table>
            <tbody>
            <tr>
                <th>Всего задач</th>
                <td>{ total }</td>
            </tr>
            <tr>
                <th>Выполнено</th>
                <td>{ completed }</td>
            </tr>
            <tr>
                <th>Осталось</th>
                <td>{ notCompleted }</td>
            </tr>
            </tbody>
        </table>
    );
}

States.propTypes = {
    todos: React.PropTypes.array.isRequired,
};
