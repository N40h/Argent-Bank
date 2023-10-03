import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Home from './pages/Home';
import SignIn from './pages/SignIn';

function App() {
	return (
		<BrowserRouter>
			<Navbar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/sign-in" element={<SignIn />} />
				{/* <Route path="/user" element={<User />} /> */}
			</Routes>
			<Footer />
		</BrowserRouter>
	);
}

export default App;
