import React, { useState } from 'react';
import { Table, Form, Button, Modal } from 'react-bootstrap';

const TableControl = (props) => {
  const { todos, setTodos } = props;
  const [showModal, setShowModal] = useState(false);
  const [currentTodo, setCurrentTodo] = useState(null);

  const handleDelete = (id) => {
    const currentTodo = todos.filter((todo) => todo.id !== id);
    setTodos(currentTodo);
    localStorage.setItem('todos', JSON.stringify(currentTodo));
  };

  const handleStatusChange = (id) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, status: !todo.status } : todo
    );
    setTodos(updatedTodos);
    localStorage.setItem('todos', JSON.stringify(updatedTodos));
  };

  const handleEdit = (todo) => {
    setCurrentTodo(todo);
    setShowModal(true);
  };

  const handleUpdate = () => {
    const updatedTodos = todos.map((todo) =>
      todo.id === currentTodo.id ? currentTodo : todo
    );
    setTodos(updatedTodos);
    localStorage.setItem('todos', JSON.stringify(updatedTodos));
    setShowModal(false);
  };

  return (
    <>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Todo name</th>
            <th>Created date</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {todos.map((todo) => (
            <tr key={todo.id}>
              <td>{todo.todoName}</td>
              <td>{todo.start}</td>
              <td>
                <Form.Check
                  type="switch"
                  id={`custom-switch-${todo.id}`}
                  label={todo.status ? 'Finish' : 'Doing'}
                  checked={todo.status}
                  onChange={() => handleStatusChange(todo.id)}
                />
              </td>
              <td>
                <Button variant="info" onClick={() => handleEdit(todo)}>Edit</Button>
                <Button variant="danger" onClick={() => handleDelete(todo.id)}>Delete</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Todo</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formTodoName">
              <Form.Label>Todo name</Form.Label>
              <Form.Control
                type="text"
                value={currentTodo ? currentTodo.todoName : ''}
                onChange={(e) => setCurrentTodo({ ...currentTodo, todoName: e.target.value })}
              />
            </Form.Group>
            <Form.Group controlId="formCreatedDate">
              <Form.Label>Created date</Form.Label>
              <Form.Control
                type="date"
                value={currentTodo ? currentTodo.start : ''}
                onChange={(e) => setCurrentTodo({ ...currentTodo, start: e.target.value })}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Close
          </Button>
          <Button variant="primary" onClick={handleUpdate}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default TableControl;
