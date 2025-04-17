import React from 'react';
import ReactDOM from 'react-dom/client';

import { UserProvider } from './contextApi/contexts/UserContext';
import { ProductProvider } from './contextApi/contexts/ProductContext';
import { CartProvider } from './contextApi/contexts/CartContext';

import App from './app/App';
import './App.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<UserProvider>
		<ProductProvider>
			<CartProvider>
				<App />
			</CartProvider>
		</ProductProvider>
	</UserProvider>
);
