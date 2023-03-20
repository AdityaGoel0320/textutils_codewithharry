import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Todos from "./Components/Todos";
import Addtodo from "./Components/Addtodo";
import { useState, useEffect } from "react";


function App() {


  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];


  }
  else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }

  const ondelete = (todo) => {
    console.log("you are using ondelte on todo", todo)
    settodos(todos.filter((e) => {

      return e !== todo;
    }))
    localStorage.setItem("todos", JSON.stringify(todos));

  }

  let [todos, settodos] = useState(initTodo);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])



  let addTodo = (title, desc) => {
    console.log("hi welcome to addtodo your data is :- ", title, desc);

    let sno;
    if (todos.length === 0) {
      sno = 0;
    }
    else {

      sno = todos[todos.length - 1].sno + 1;
    }

    const myTodo = {
      sno: sno,
      title: title,
      desc: desc,
    }

    settodos([...todos, myTodo])
    console.log(myTodo);





  }

  return (

    <>


      
      {1+1}
      {console.log("hi welcomw to my todo app by react")}
      <Header title="My Todo List" searchBar={true} />


    

      <Addtodo addTodo={addTodo} />

      <Todos todos={todos} ondelete={ondelete} />


      <Footer />
    
    </>


  );
}

export default App;
