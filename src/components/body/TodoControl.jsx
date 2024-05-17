import { Button, Form } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import TableControl from './TableControl';
import ModalCreate from '../modal/ModalCreate';

const TodoControl = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem('todos')) || [];
    setTodos(storedTodos);
  }, []);

  const handleOpen = () => setIsOpen(true);
  const addTodo = (newTodo) => {
    const currentTodos = [...todos, newTodo];
    setTodos(currentTodos);
    localStorage.setItem('todos', JSON.stringify(currentTodos));
  };

  return (
    <>
      <h3>Todo list</h3>
      <Form>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Control type="text" placeholder="Search..." />
        </Form.Group>
      </Form>
      <Button onClick={handleOpen} variant="primary">
        New todo
      </Button>
      <ModalCreate isOpen={isOpen} setIsOpen={setIsOpen} addTodo={addTodo} />
      <TableControl todos={todos} setTodos={setTodos} />
    </>
  );
};

export default TodoControl;
