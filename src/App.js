import { RouterProvider } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import './App.css';
import { router } from './components/Routes/Routes/Routes';
import 'react-toastify/dist/ReactToastify.css';
import 'react-photo-view/dist/react-photo-view.css';

function App() {
  return (
    <div className='max-w-screen-xl mx-auto'>
      <RouterProvider router={router} ></RouterProvider>
      <ToastContainer />
    </div>
  );
}

export default App;
