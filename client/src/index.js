import React from 'react';
import ReactDOM from 'react-dom/client';

import { UserProvider } from './contextApi/contexts/UserContext';
import { ProductProvider } from './contextApi/contexts/ProductContext';
import { PlanProvider } from './contextApi/contexts/PlanContext';

import App from './app/App';
import './App.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<UserProvider>
		<ProductProvider>
			<PlanProvider>
				<App />
			</PlanProvider>
		</ProductProvider>
	</UserProvider>
);
