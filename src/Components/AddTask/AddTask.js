import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { add_task } from '../../JS/Actions'

const AddTask = () => {

  const [text, setText] = useState('')

  const dispatch = useDispatch()

  const handleAdd = (e) =>{
    e.preventDefault()
    if (text) {
      dispatch(add_task({id: Math.random(), text, isDone: false}))
    }
    else{
      alert('Cannot add an empty text')
    }
  }
  return (
    <div>
        <Form onSubmit={handleAdd}>
            <Form.Control value={text} onChange={(e) => setText(e.target.value)} placeholder='Add new task'></Form.Control>
            <Button onClick={handleAdd}>Add</Button>
        </Form>
    </div>
  )
}

export default AddTask