import React from 'react'
import { TodoListItem } from './TodoListItem'

export const TodoList = ({todos,handleDelete,handleToggle}) => {
  return (
    <ul className='list-group list-group-flush'>
        { todos.map(
            (t,i) => <TodoListItem key={ i } todo={ t } index={ i } handleDelete={ handleDelete } handleToggle={ handleToggle } />
            )
        }
    </ul>
  )
}
