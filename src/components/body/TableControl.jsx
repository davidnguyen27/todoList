import { useState } from 'react';
import { Table, Form, Button } from 'react-bootstrap';
import ModalUpdate from '../modal/ModalUpdate';
import { toast, Slide } from 'react-toastify';

const TableControl = (props) => {
  const { todos, setTodos } = props;

  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState({});

  const handleOpenSelected = (todo) => {
    setIsOpen(true);
    setSelected(todo);
  };

  const handleStatusChange = (id) => {
    const updatedTodos = todos.map((todo) => (todo.id === id ? { ...todo, status: !todo.status } : todo));
    setTodos(updatedTodos);
    localStorage.setItem('todos', JSON.stringify(updatedTodos));
  };

  const handleDelete = (id) => {
    const currentTodo = todos.filter((todo) => todo.id !== id);
    setTodos(currentTodo);
    localStorage.setItem('todos', JSON.stringify(currentTodo));
    toast.success('Delete successful', {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      theme: 'light',
      transition: Slide,
    });
  };

  const updateAction = (updatedTodo) => {
    const updatedTodos = todos.map((todo) => (todo.id === updatedTodo.id ? updatedTodo : todo));
    setTodos(updatedTodos);
    localStorage.setItem('todos', JSON.stringify(updatedTodos));
  };

  return (
    <>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Todo name</th>
            <th>Created date</th>
            <th>Status</th>
            <th>Note</th>
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
              <td>{todo.note}</td>
              <td>
                <Button className="me-2" variant="info" onClick={() => handleOpenSelected(todo)}>
                  <i class="fa-solid fa-eye"></i> Detail
                </Button>
                <Button variant="danger" onClick={() => handleDelete(todo.id)}>
                  <i class="fa-solid fa-trash"></i> Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <ModalUpdate isOpen={isOpen} setIsOpen={setIsOpen} todoData={selected} updateAction={updateAction} />
    </>
  );
};

export default TableControl;
