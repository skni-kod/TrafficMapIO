import styles from '../assets/App.css'
import Home from './Home';
import Login from './Login';
import Navbar from './Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import UserProvider from '../UserContext';

function App() {
	return (
		<UserProvider>
			<BrowserRouter>
				<Navbar />
				<Routes>
					<Route path='/' element={<Home />}/>
					<Route path='/login' element={<Login />}/>
				</Routes>
			</BrowserRouter>
		</UserProvider>
	);
}

export default App;
