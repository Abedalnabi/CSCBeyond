// ProtectedRoute.js
import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import useUserContext from '../context/UserContext';

const ProtectedRoute = ({ element, ...rest }) => {
	const { isAuthenticated, isAdmin } = useUserContext();

	return (
		<Route
			{...rest}
			render={({ location }) =>
				isAuthenticated && isAdmin ? (
					element
				) : (
					<Redirect
						to={{
							pathname: '/login',
							state: { from: location },
						}}
					/>
				)
			}
		/>
	);
};

export default ProtectedRoute;
