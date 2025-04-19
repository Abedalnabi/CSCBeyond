import ACTIONS from '../actions/ProductAction';

export const initialState = {
	products: [],
};

const Reducer = (state, { type, payload }) => {
	switch (type) {
		case ACTIONS.SET_PRODUCTS:
			return { ...state, products: [...state.products, ...payload] };

		case ACTIONS.UPDATE_PRODUCT:
			return {
				...state,
				products: state.products.map((productElement) =>
					productElement._id === payload.product_id ? { ...productElement, ...payload.updatedValue } : productElement
				),
			};

		case ACTIONS.ADD_PRODUCT:
			return {
				...state,
				products: [...state.products, payload.newAddedValue],
			};

		case ACTIONS.ADD_PRODUCTS:
			return {
				...state,
				products: [...state.products, ...payload.newAddedValues],
			};

		default:
			throw new Error(`No case for this type ==> ${type}`);
	}
};

export default Reducer;
