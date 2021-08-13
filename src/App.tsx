import React from 'react';
import TodoList from './components/TodoList';
import NewTodo from './components/NewTodo';

const App: React.FC = () =>{

  const AddTodo = (text:string) => {
      console.log(text);
  }

  const todos = [
    {id:"t1",text:"Completar el curso"},
    {id:"t2",text:"Completar las evaluaciones"}
  ];

  return(<div className="App">
    <NewTodo onAddTodo={AddTodo}/>
    <TodoList items={todos} />
  </div>);
}

export default App;