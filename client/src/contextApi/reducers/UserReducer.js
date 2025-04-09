import USER_ACTIONS from '../actions/UserActions';

export const initialState = {
	token: '',
	userInfo: {},
};

const UserReducer = (state, { type, payload }) => {
	switch (type) {
		case USER_ACTIONS.SET_USER_TOKEN:
			return { ...state, token: payload };

		case USER_ACTIONS.SET_USER_INFO:
			return { ...state, userInfo: payload.userInfo };

		default:
			throw new Error(`No case for this type ==> ${type}`);
	}
};

export default UserReducer;
