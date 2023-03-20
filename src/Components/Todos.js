import React from 'react'
import TodoItem from './TodoItem'

export default function Todos(props) {

  let  todosstyle = {
    minHeight : "100vh" ,
  }

  return (
    <div className='container my-3' style={todosstyle}>
      <h3 className=' my-3'>Todos List</h3>
      {props.todos.length === 0 ? "no data to display" :

        props.todos.map((todo) => {
          return <TodoItem todo={todo} key={todo.sno} ondelete={props.ondelete} />
        })

      }


      {/* <TodoItem todo = {props.todos[2]}/> */}

    </div>
  )
}
