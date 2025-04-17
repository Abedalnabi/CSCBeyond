import '../App.css';
import Footer from './shared/footer/Footer';

import { Routes, Route } from 'react-router-dom';
import RegisterPage from './shared/register/index';
import LoginPage from './shared/login/index';
import NavBar from './shared/navBar/index';
import ProductsList from './shared/productsList/index';
import ProductDetails from './shared/productDetails/index';
import AboutUs from './shared/aboutUs';
import ContactUs from './shared/contacUs/index';
import Faq from './shared/faq/index';
import Cart from './shared/cart/index';
import Complete from './shared/complete/index';
import AppRoutes from '../config/appRoutes';
// Homepage
// 404

function CscApp() {
	return (
		<>
			<div className="App">
				<NavBar />
				<Routes>
					<Route path={AppRoutes.REGISTER} element={<RegisterPage />} />
					<Route path={AppRoutes.LOGIN} element={<LoginPage />} />
					<Route path={AppRoutes.PRODUCTS} element={<ProductsList />} />
					<Route path={AppRoutes.PRODUCT_DETAILS} element={<ProductDetails />} />
					<Route path={AppRoutes.ABOUT_US} element={<AboutUs />} />
					<Route path={AppRoutes.CONTACT_US} element={<ContactUs />} />
					<Route path={AppRoutes.FAQ} element={<Faq />} />
					<Route path={AppRoutes.CART} element={<Cart />} />
					<Route path={AppRoutes.COMPLETE} element={<Complete />} />
				</Routes>
			</div>
			<div className="footer">
				<Footer />
			</div>
		</>
	);
}

export default CscApp;
