import React, { useEffect, useState } from "react";
import { Button, FormControl, Input, InputLabel } from "@material-ui/core";
import "./App.css";
import Todo from "./Todo";
import db from './firebase';
import firebase from "firebase";

function App() {
  const [todos, setTodos] = useState([]);
    // "Complete ReactJs Project Tutorials",
    // "Revise Javascript Concepts",
    // "Dont Distract On Other Activities Just Do Coding",

  const [input, setInput] = useState("");


  //when are app load we need to listen to the database and fetch new todos as they get added/removed
  useEffect(() => {
    //this code here. fires when the app.js loads
    db.collection('todos').orderBy('timestamp','desc').onSnapshot(snapshot =>{
      // console.log(snapshot.docs.map(doc=>doc.data()));
      setTodos(snapshot.docs.map(doc=>({id: doc.id ,todos: doc.data().todo})))
    })
  }, []);

  const addTodo = (e) => {
    e.preventDefault();
    //this is fireoff when we click the button

    db.collection('todos').add({
      todo: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })

    // setTodos([...todos, input]);
    setInput("");
  };

  return (
    <div className="App">
      <h2>Todo List</h2>
      <form>
        <FormControl>
          <InputLabel>Write a Todo</InputLabel>
          <Input value={input} onChange={(e) => setInput(e.target.value)} />
        </FormControl>

        <Button
          disabled={!input}
          type="submit"
          onClick={addTodo}
          variant="contained"
          color="primary"
        >
          Add Todo
        </Button>
        {/* <button type="submit" onClick={addTodo}>Add Todo</button> */}
      </form>
      <ul>
        {todos.map((todos) => (
          <Todo todos={todos}/>
        ))}
      </ul>
    </div>
  );
}

export default App;
