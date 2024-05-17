import { Table, Form, Button } from 'react-bootstrap';

const TableControl = (props) => {
  const { todos, setTodos } = props;

  const handleDelete = (id) => {
    const currentTodo = todos.filter((todo) => todo.id !== id);
    setTodos(currentTodo);
    localStorage.setItem('todos', JSON.stringify(currentTodo));
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
                  onChange={() => {}}
                />
              </td>
              <td>
                <Button variant="info">Detail</Button>
                <Button variant="danger" onClick={() => handleDelete(todo.id)}>
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
};

export default TableControl;
