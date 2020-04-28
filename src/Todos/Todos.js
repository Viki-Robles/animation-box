import React from "react";

export default function Todos(props) {
  return (
    <div
      style={{ textDecoration: props.todo.complete ? "line-through" : "" }}
      onClick={props.toggleComplete}
    >
      {props.todo.text}
    </div>
  );
}
