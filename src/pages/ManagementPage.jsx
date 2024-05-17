import { Container } from 'react-bootstrap';
import Header from '../components/header/Header';
import TodoControl from '../components/body/TodoControl';

const ManagementPage = () => {
  return (
    <>
      <Header />
      <Container>
        <TodoControl />
      </Container>
    </>
  );
};

export default ManagementPage;
