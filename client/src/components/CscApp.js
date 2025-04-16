import '../App.css';
import Footer from './shared/footer/Footer';

import { Routes, Route } from 'react-router-dom';
import RegisterPage from './shared/register/index';
import LoginPage from './shared/login/index';
import NavBar from './shared/navBar/NavBar';
import ProductsList from './shared/productsList/index';
import ProductDetails from './shared/productDetails/index';
import AboutUs from './shared/aboutUs';
import ContactUs from './shared/contacUs/index';
import Faq from './shared/faq/index';
import Cart from './shared/cart/index';
import Complete from './shared/complete/index';

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
					<Route path="/contact-us" element={<ContactUs />} />
					<Route path="/faq" element={<Faq />} />
					<Route path="/cart" element={<Cart />} />
					<Route path="/complete" element={<Complete />} />
				</Routes>
			</div>
			<div className="footer">
				<Footer />
			</div>
		</>
	);
}

export default CscApp;
