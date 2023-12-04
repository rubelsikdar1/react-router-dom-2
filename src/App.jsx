
import { RouterProvider } from 'react-router-dom';
import MainLayout from './Layout/MainLayout';
import Routs from './routers/Routs';

const App = () => {
  return (
    <RouterProvider router={Routs}>
       <MainLayout/>
    </RouterProvider>
  );
};

export default App;