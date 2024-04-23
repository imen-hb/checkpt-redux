import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { delete_task, done_task, edit_task } from '../../JS/Actions'
import './TodoModel.css';
import Modal from 'react-bootstrap/Modal';

const TodoModel = ({task}) => {
  const dispatch = useDispatch()

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [newText, setNewText] = useState(task.text)
  const [newDescription, setNewDescription] = useState(task.description)

  const handleEdit = () =>{
    dispatch(edit_task(task.id, newText, newDescription))
    handleClose()
  }

  return (
    <div className='todoModel'>

<span>{task.text}</span>
<span>{task.description}</span>

<Button onClick={()=>dispatch(done_task(task.id))}>{task.isDone? 'unDone' : 'Done'}</Button>

<Button variant='success' onClick={handleShow}>Edit</Button>
<Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>EDIT TASK</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Control
          placeholder='Edit text....'
          value={newText}
          onChange={(e)=> setNewText(e.target.value)}
          />

        <Form.Control
          placeholder='Edit description....'
          value={newDescription}
          onChange={(e)=> setNewDescription(e.target.value)}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleEdit}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>

<Button onClick={()=> dispatch(delete_task(task.id))} variant='danger'>Delete</Button>
    </div>
  )
}

export default TodoModel