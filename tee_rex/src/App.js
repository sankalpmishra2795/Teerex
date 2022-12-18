import './App.css';
import NavBar  from './components/Header';
import ScreenView from './components/ScreenView';
import NotFound from './components/NotFound/NotFound';
import { Provider } from 'react-redux'
import store from './redux/store';
import CartScreen from './components/ShoppingCart';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
   
  return (
    <Provider store={store} >
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route exact path="/" element={<ScreenView/>}/>
          <Route exact path="/cart" element={<CartScreen/>}/>
          <Route path="*" element={<NotFound/>}/>
        </Routes>
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
      />
      </BrowserRouter>
      
    </Provider>
  );
}

export default App;
