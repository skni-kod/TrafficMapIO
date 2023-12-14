import logo from './logo.svg'
import Login from './Login'
import Register from './Register'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom' 

//CSS
import './App.css'
import './Login.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/user/login/" element={<Login />} />
        <Route path="/user/register/" element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;
