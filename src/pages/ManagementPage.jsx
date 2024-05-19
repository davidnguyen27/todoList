import { Container } from 'react-bootstrap';
import Header from '../components/header/Header';
import TodoControl from '../components/body/TodoControl';

const ManagementPage = () => {
  return (
    <>
      <Header />
      <Container className="mt-4">
        <TodoControl />
      </Container>
    </>
  );
};

export default ManagementPage;
