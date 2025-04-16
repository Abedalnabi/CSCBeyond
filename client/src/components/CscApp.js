import '../App.css';
import Footer from './shared/footer/Footer';

import { Routes, Route } from 'react-router-dom';
import RegisterPage from './shared/register/RegisterPage';
import LoginPage from './shared/login/LoginPage';
import NavBar from './shared/navBar/NavBar';
import ProductsList from './shared/productsList/index';
import ProductDetails from './shared/productDetails/index';
import AboutUs from './shared/aboutUs';
import ContactUs from './shared/contacUs/index';

// Cart
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
					<Route path="/product/:id" element={<ProductDetails />} />
					<Route path="/about-us" element={<AboutUs />} />
					<Route path="/contac-us" element={<ContactUs />} />
				</Routes>
			</div>
			<div className="footer">
				<Footer />
			</div>
		</>
	);
}

export default CscApp;
