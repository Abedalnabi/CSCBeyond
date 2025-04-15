import ACTIONS from '../actions/ProductAction';

export const initialState = {
	products: [],
};

const Reducer = (state, { type, payload }) => {
	switch (type) {
		case ACTIONS.SET_PRODUCTS:
			return { ...state, products: payload, isLoading: false };

		case ACTIONS.UPDATE_PRODUCT:
			return {
				...state,
				products: state.products.map((productElement) =>
					productElement._id === payload.product_id ? { ...productElement, ...payload.updatedValue } : productElement
				),
				isLoading: false,
			};

		case ACTIONS.ADD_product:
			return {
				...state,
				products: [...state.products, payload.newAddedValue],
				isLoading: false,
			};

		default:
			throw new Error(`No case for this type ==> ${type}`);
	}
};

export default Reducer;
