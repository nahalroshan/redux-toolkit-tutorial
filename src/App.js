import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Product from './components/Product';
import {createBrowserRouter,Route,createRoutesFromElements,RouterProvider} from 'react-router-dom'
import Dashboard from './components/Dashboard';
import Cart from './components/Cart';
import RootLayout from './components/RootLayout';
import SignIn from './components/SignIn';
import CartNew from './components/CartNew';

function App() {

  const router = createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={<RootLayout/>}>
      <Route index element={<Dashboard />} />
      <Route path='/cart' element={<Cart />} />
      <Route path='/signin' element={<SignIn />} />
    </Route>
  ))
  return (
    <div className="App">
    <RouterProvider router={router} />
    </div>
  );
}

export default App;
