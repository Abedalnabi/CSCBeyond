import React, { createContext, useContext, useReducer, useEffect, useCallback } from 'react';
import userReducer, { initialState } from '../reducers/UserReducer';
import USER_ACTIONS from '../actions/UserActions';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
	const [state, dispatch] = useReducer(userReducer, initialState);

	const validateToken = useCallback(
		(token) => {
			try {
				const decodedToken = JSON.parse(atob(token.split('.')[1]));
				if (decodedToken.exp * 1000 > Date.now()) {
					dispatch({
						type: USER_ACTIONS.SET_AUTHENTICATED,
						payload: { isAuthenticated: true },
					});
					dispatch({
						type: USER_ACTIONS.SET_USER_INFO,
						payload: { userInfo: decodedToken },
					});
					dispatch({
						type: USER_ACTIONS.SET_ADMIN_STATUS,
						payload: { isAdmin: decodedToken.roleName === 'admin' }, // TODO: set enums insted admin
					});
				} else {
					logout();
				}
			} catch (error) {
				console.error('Error validating token:', error);
				logout();
			}
		},
		[dispatch]
	);

	useEffect(() => {
		const token = localStorage.getItem('token');
		if (token) {
			validateToken(token);
		}
	}, [validateToken]);

	const login = async (userToken) => {
		console.log('userToken', userToken);
		try {
			const decodedToken = JSON.parse(atob(userToken.split('.')[1]));
			localStorage.setItem('token', userToken);
			dispatch({
				type: USER_ACTIONS.SET_AUTHENTICATED,
				payload: { isAuthenticated: true },
			});
			dispatch({
				type: USER_ACTIONS.SET_USER_INFO,
				payload: { userInfo: decodedToken },
			});
		} catch (error) {
			console.log('Error decoding token', error);
			setError('An error occurred during login');
		}
	};

	const logout = () => {
		localStorage.removeItem('token');
		dispatch({
			type: USER_ACTIONS.SET_AUTHENTICATED,
			payload: { isAuthenticated: false },
		});
		dispatch({
			type: USER_ACTIONS.SET_USER_INFO,
			payload: { userInfo: null },
		});
	};

	const setError = (error) => {
		dispatch({
			type: USER_ACTIONS.SET_ERROR,
			payload: error,
		});
	};

	const setUserInfo = (userInfo) => {
		dispatch({
			type: USER_ACTIONS.SET_USER_INFO,
			payload: { userInfo },
		});
	};

	const value = {
		setError,
		setUserInfo,
		login,
		logout,
		validateToken,
		userInfo: state.userInfo,
		isAuthenticated: state.isAuthenticated,
		isAdmin: state.isAdmin,
		isLoading: state.isLoading,
		error: state.error,
	};

	return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

const useUserContext = () => {
	const context = useContext(UserContext);
	if (!context) {
		throw new Error('useUserContext must be used within a UserProvider');
	}
	return context;
};

export default useUserContext;
