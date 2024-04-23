import React, { useState } from "react";
import { Dropdown } from "react-bootstrap";
import { useSelector } from "react-redux";
import TodoModel from "../TodoModel/TodoModel";

const TodoList = () => {
  const list = useSelector((state) => state.listTasks);

  const [status, setStatus] = useState('ALL');

  return (
    <div>
      <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          {status}
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item value='ALL' onClick={()=> setStatus('ALL')}>All</Dropdown.Item>
          <Dropdown.Item value='DONE' onClick={()=> setStatus('DONE')}>Done</Dropdown.Item>
          <Dropdown.Item value='UNDONE' onClick={()=> setStatus('UNDONE')}>UnDone</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>

      {status === 'DONE'?
      list.filter((el) => el.isDone === true).map((el) => (<TodoModel task={el} key={el.id} />))
      :
      status === 'UNDONE'?
      list.filter((el) => el.isDone === false).map((el) => (<TodoModel task={el} key={el.id} />))
      :
      list.map((el) => (
        <TodoModel task={el} key={el.id} />
      ))}
    </div>
  );
};

export default TodoList;
