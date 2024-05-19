import { ToastContainer } from 'react-toastify';
import ManagementPage from './pages/ManagementPage';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
      <ManagementPage />
      <ToastContainer />
    </>
  );
}

export default App;
