import { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import { Slide, toast } from 'react-toastify';
import { v4 as uuid } from 'uuid';

const ModalCreate = (props) => {
  const { isOpen, setIsOpen, addTodo } = props;

  const [todoName, setTodoName] = useState('');
  const [note, setNote] = useState('');
  const [date, setDate] = useState(new Date().toISOString().split('T')[0]);

  const handleClose = () => setIsOpen(false);

  const handleAdd = () => {
    const newTodo = {
      id: uuid(),
      todoName,
      start: date,
      status: false,
      note,
    };
    addTodo(newTodo);
    handleClose();
    toast.success('Create successful', {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      theme: 'light',
      transition: Slide,
    });
    setTodoName('');
    setDate(new Date().toISOString().split('T')[0]);
    setNote('');
  };

  return (
    <>
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
                placeholder="Todo name"
                value={todoName}
                onChange={(e) => setTodoName(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
              <Form.Label>Created Date</Form.Label>
              <Form.Control type="date" value={date} onChange={(e) => setDate(e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
              <Form.Label>Status</Form.Label>
              <Form.Check
                type="switch"
                id="custom-switch"
                label="Doing"
                defaultValue={false}
                checked={false}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Note</Form.Label>
              <Form.Control
                type="text"
                placeholder="Note"
                value={note}
                onChange={(e) => setNote(e.target.value)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="success" onClick={handleAdd}>
            Done
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalCreate;
