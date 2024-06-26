import { useEffect, useState } from 'react';
import { Modal, Form, Button } from 'react-bootstrap';
import { Slide, toast } from 'react-toastify';

const ModalUpdate = (props) => {
  const { isOpen, setIsOpen, todoData, updateAction } = props;

  const initialTodoId = todoData?.id ?? '';
  const initialTodoName = todoData?.todoName ?? '';
  const initialDate = todoData?.start ?? '';
  const initialNote = todoData?.note ?? '';

  const [todoId, setTodoId] = useState(initialTodoId);
  const [todoName, setTodoName] = useState(initialTodoName);
  const [date, setDate] = useState(initialDate);
  const [note, setNote] = useState(initialNote);

  useEffect(() => {
    if (todoData) {
      setTodoId(todoData.id);
      setTodoName(todoData.todoName);
      setDate(todoData.start);
      setNote(todoData.note);
    }
  }, [todoData]);

  const handleClose = () => setIsOpen(false);

  const handleUpdate = () => {
    const updateTodo = {
      id: todoId,
      todoName,
      start: date,
      note: note,
    };
    toast.success('Update successful', {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      theme: 'light',
      transition: Slide,
    });
    updateAction(updateTodo);
    handleClose();
  };

  return (
    <Modal show={isOpen} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Update todo</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>ID</Form.Label>
            <Form.Control type="text" value={todoId} disabled />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Todo Name</Form.Label>
            <Form.Control
              type="text"
              value={todoName}
              placeholder="Todo name"
              onChange={(e) => setTodoName(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
            <Form.Label>Created Date</Form.Label>
            <Form.Control type="date" value={date} onChange={(e) => setDate(e.target.value)} />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Note</Form.Label>
            <Form.Control type="text" value={note} onChange={(e) => setNote(e.target.value)} />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Cancel
        </Button>
        <Button variant="primary" onClick={handleUpdate}>
          Update
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalUpdate;
