import logo from './logo.svg'

//SiteViews
import Home from './Views/Home'

//UserViews
import Login from './Views/Login'
import Register from './Views/Register'
import UserView from './Views/UserView'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom' 

//CSS
import './styles/App.css'
import './styles/Login.css'

function App() {
  return (
    <div>
      <Router>
      <Routes>
        <Route path='/home' element={<Home />} />
      </Routes>
    </Router>

    <Router>
      <Routes>
        <Route path="/user/login/" element={<Login />} />
        <Route path="/user/register/" element={<Register />} />
        <Route path="/user/:id" element={<UserView />} />
      </Routes>
    </Router>
    </div>
    
  );
}

export default App;
