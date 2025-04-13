import '../App.css';
import Footer from './shared/footer/Footer';

import { Routes, Route } from 'react-router-dom';
import RegisterPage from './shared/register/RegisterPage';
import LoginPage from './shared/login/LoginPage';
// login
// nav
// coursesPage
// coursePage
// about us
// contact us
// FAQ
// Homepage
// 404

function CscApp() {
	return (
		<>
			<div className="App">
				<Routes>
					<Route path="/register" element={<RegisterPage />} />
					<Route path="/login" element={<LoginPage />} />
				</Routes>
			</div>
			<div className="footer">
				<Footer />
			</div>
		</>
	);
}

export default CscApp;
