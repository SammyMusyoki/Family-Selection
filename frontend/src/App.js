import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements} from 'react-router-dom'
import BaseLayout from './Layouts/BaseLayout';
import Home from './Pages/Home';
import PrivateRoute from './Routes/PrivateRoute';
import Login from './components/Authentication/Login';
import { AuthContextProvider } from './Contexts/AuthContext';
import Registration from './components/Authentication/Registration';
import CreateProduct from './Pages/CreateProduct';

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<BaseLayout/>}>
        <Route index element={<Login/>}/>
        <Route path='family-selection-home/*' element={<PrivateRoute />}>
          <Route index element={<Home/>} />
          <Route path='customer-registration/' element={<Registration />}/>
          <Route path='create-product/' element={<CreateProduct />}/>
        </Route>
      </Route>
    )
  )
  return ( 
    <AuthContextProvider>
      <RouterProvider  router={router}/>
    </AuthContextProvider>
  );
}

export default App;
