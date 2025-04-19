import '../App.css';
import Footer from './shared/footer/Footer';

import { Routes, Route } from 'react-router-dom';
import ProtectedRoute from './shared/Utilities/ProtectedRoute/ProtectedRoute';
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
import Account from './shared/account/index';
import Admin from './shared/Admin/index';
import HomePage from './shared/home/index';
import toast, { Toaster } from 'react-hot-toast';
import AppRoutes from '../config/appRoutes';

import { messaging, requestNotificationPermission } from './firebase';
import { useEffect } from 'react';
import { onMessage } from 'firebase/messaging';
import { useNavigate } from 'react-router-dom';
import useUserContext from './../contextApi/contexts/UserContext';
// Homepage
// 404

function CscApp() {
	const { userInfo } = useUserContext();
	console.log('userInfo', userInfo);
	const navigate = useNavigate();
	useEffect(() => {
		requestNotificationPermission();
		onMessage(messaging, (payload) => {
			toast.custom((t) => (
				<div
					className={`toast ${t.visible ? 'toast-visible' : 'toast-hidden'}`}
					style={{
						backgroundColor: '#333',
						color: '#fff',
						padding: '16px',
						flexDirection: 'column',
						borderRadius: '8px',
						display: 'flex',
						justifyContent: 'space-between',
						alignItems: 'center',
					}}
				>
					<div>{payload.notification.title}</div>
					{userInfo?.roleName === 'admin' && (
						<button
							style={{
								backgroundColor: '#f39c12',
								border: 'none',
								padding: '8px 16px',
								color: 'white',
								fontSize: '14px',
								borderRadius: '5px',
								cursor: 'pointer',
							}}
							onClick={() => {
								navigate('/admin');
								toast.dismiss(t.id);
							}}
						>
							Go to Admin
						</button>
					)}
				</div>
			));
		});
	}, [userInfo]);

	return (
		<>
			<div className="App">
				<Toaster />
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
					<Route path={AppRoutes.ACCOUNT} element={<Account />} />
					<Route path={AppRoutes.HOME} element={<HomePage />} />

					<Route path={AppRoutes.ADMIN} element={<ProtectedRoute element={<Admin />} />} />
				</Routes>
			</div>
			<div className="footer">
				<Footer />
			</div>
		</>
	);
}

export default CscApp;
