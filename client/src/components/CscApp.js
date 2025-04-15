import '../App.css';
import Footer from './shared/footer/Footer';

import { Routes, Route } from 'react-router-dom';
import RegisterPage from './shared/register/RegisterPage';
import LoginPage from './shared/login/LoginPage';
import NavBar from './shared/navBar/NavBar';
import ProductsList from './shared/productsList/ProductsList';

// about us
// contact us
// FAQ
// Homepage
// 404

function CscApp() {
	return (
		<>
			<div className="App">
				<NavBar />
				<Routes>
					<Route path="/register" element={<RegisterPage />} />
					<Route path="/login" element={<LoginPage />} />
					<Route path="/products" element={<ProductsList />} />
				</Routes>
			</div>
			<div className="footer">
				<Footer />
			</div>
		</>
	);
}

export default CscApp;
