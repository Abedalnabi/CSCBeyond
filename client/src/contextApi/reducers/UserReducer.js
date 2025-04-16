import USER_ACTIONS from '../actions/UserActions';

export const initialState = {
	userInfo: null,
	isAuthenticated: false,
	isAdmin: false,
	error: null,
};

const userReducer = (state, action) => {
	switch (action.type) {
		case USER_ACTIONS.SET_USER_INFO:
			return { ...state, userInfo: action.payload.userInfo };
		case USER_ACTIONS.SET_AUTHENTICATED:
			return { ...state, isAuthenticated: action.payload.isAuthenticated };
		case USER_ACTIONS.SET_ADMIN_STATUS:
			return { ...state, isAdmin: action.payload?.isAdmin };
		default:
			return state;
	}
};

export default userReducer;
