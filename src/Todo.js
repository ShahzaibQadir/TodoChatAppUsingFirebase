import React from "react";
import { List, ListItem, ListItemText,ListItemAvatar,Button } from "@material-ui/core";
import './Todo.css';
import db from "./firebase";
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';

const Todo = (props) => {
  return (
    <List >
      <ListItem>
          <ListItemAvatar>
          </ListItemAvatar>
        <ListItemText primary={props.todos.todos} secondary="Must Todo Today" />
      </ListItem>
      <DeleteForeverIcon onClick={e=> 
          db.collection('todos').doc(props.todos.id).delete()
          }/>
    </List>
  );
};

export default Todo;
