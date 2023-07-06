import './App.css';
import { Routes, Route } from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar'
import NoMatch from './Components/NoMatch/NoMatch'
import SignUp from './Components/SignUp/SignUp';
import Login from './Components/Login/Login';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/signup' element={<SignUp />} />
        {/* <Route path='/login' element={<Login />} /> */}
        <Route path='*' element={<NoMatch />} />
      </Routes>
    </div>
  );
}

export default App;
