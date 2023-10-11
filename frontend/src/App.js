import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Profile from './pages/Profile/Profile';

function App() {
	const token = useSelector((state) => state.auth.token);

	return (
		<BrowserRouter>
			<Navbar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/login" element={<Login />} />
				<Route
					path="/profile"
					element={token ? <Profile /> : <Navigate to="/login" />}
				/>
			</Routes>
			<Footer />
		</BrowserRouter>
	);
}

export default App;
