import React from 'react';
import ReactDOM from 'react-dom/client';

import { UserProvider } from './contextApi/contexts/UserContext';
import { CourseProvider } from './contextApi/contexts/CourseContext';
import { PlanProvider } from './contextApi/contexts/PlanContext';

import App from './app/App';
import './App.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<UserProvider>
		<CourseProvider>
			<PlanProvider>
				<App />
			</PlanProvider>
		</CourseProvider>
	</UserProvider>
);
