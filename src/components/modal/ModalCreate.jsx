import { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import { v4 as uuid } from 'uuid';
import { ToastContainer, toast, Bounce } from 'react-toastify';

const ModalCreate = (props) => {
  const { isOpen, setIsOpen, addTodo } = props;

  const [todoName, setTodoName] = useState('');
  const [date, setDate] = useState(new Date().toISOString().split('T')[0]);

  const handleClose = () => setIsOpen(false);
  const handleAdd = () => {
    const newTodo = {
      id: uuid(),
      todoName,
      start: date,
      status: false,
    };
    addTodo(newTodo);
    <ToastContainer />;
    toast.success('✅Successful', {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'light',
      transition: Bounce,
    });
    handleClose();
    setTodoName('');
  };

  return (
    <Modal show={isOpen} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Add new todo</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Todo Name</Form.Label>
            <Form.Control
              type="text"
              onChange={(e) => setTodoName(e.target.value)}
              value={todoName}
              placeholder="Todo name"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
            <Form.Label>Created Date</Form.Label>
            <Form.Control type="date" value={date} onChange={(e) => setDate(e.target.value)} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
            <Form.Label>Status</Form.Label>
            <Form.Check type="switch" id="custom-switch" defaultValue={false} label="Doing" checked={false} />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Cancel
        </Button>
        <Button variant="primary" onClick={handleAdd}>
          Done
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalCreate;
