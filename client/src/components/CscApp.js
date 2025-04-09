import '../App.css';
import Footer from './shared/footer/Footer';

import { Routes, Route } from 'react-router-dom';
import RegisterPage from './shared/register/RegisterPage';
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
		<div>
			<div className="App">
				<Routes>
					<Route path="/register" element={<RegisterPage />} />
				</Routes>
			</div>
			<div className="footer">
				<Footer />
			</div>
		</div>
	);
}

export default CscApp;
