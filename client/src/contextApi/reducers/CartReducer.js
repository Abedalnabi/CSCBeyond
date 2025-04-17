import ACTIONS from '../actions/CartAction';

export const initialState = {
	cart: [],
};

const Reducer = (state, { type, payload }) => {
	switch (type) {
		case ACTIONS.SET_CART:
			return { ...state, cart: payload };

		default:
			throw new Error(`No case for this type ==> ${type}`);
	}
};

export default Reducer;
