import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Cards from './components/Cards';
import {Routes,Route} from "react-router-dom";
import CardDetails from './components/CardDetails';
import SignUp from './components/SignUp';
import Login from './components/Login';
import Tabs from './components/Tabs';



function App() {
  return (

    <>
    <Header/>
    <Routes>
     <Route path='/cards' element={<Cards/>}/> 
      <Route path='/' element={<SignUp/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/tabs' element={<Tabs/>}/>
      <Route path='/cart/:id' element={<CardDetails/>}/>
    </Routes>
    </>
  );
}

export default App;
