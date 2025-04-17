// ProtectedRoute.js
import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ element, ...rest }) => {
	const token = localStorage.getItem('token');
	const decdToken = token ? JSON.parse(atob(token.split('.')[1])) : null;
	const roleName = decdToken.roleName;
	// TODO: set enums instead of admin and use redux insted of localStorage (isAdmin var)
	if (roleName !== 'admin') {
		return <Navigate to="/" replace />;
	}

	return element;
};

export default ProtectedRoute;
