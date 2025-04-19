import { createContext, useContext, useReducer } from 'react';
import Reducer, { initialState } from '../reducers/ProductReducer';
import ACTIONS from '../actions/ProductAction';

const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
	const [state, dispatch] = useReducer(Reducer, initialState);

	const setProducts = (products) => {
		dispatch({
			type: ACTIONS.SET_PRODUCTS,
			payload: products,
		});
	};

	const updateProduct = (course_id, updatedValue) => {
		dispatch({
			type: ACTIONS.UPDATE_PRODUCT,
			payload: { course_id, updatedValue },
		});
	};

	const addProduct = (newAddedValue) => {
		dispatch({
			type: ACTIONS.ADD_PRODUCT,
			payload: { newAddedValue },
		});
	};

	const addProducts = (newAddedValues) => {
		dispatch({
			type: ACTIONS.ADD_PRODUCTS,
			payload: newAddedValues,
		});
	};

	const value = {
		products: state.products,
		setProducts,
		updateProduct,
		addProduct,
		addProducts,
	};

	return <ProductContext.Provider value={value}>{children}</ProductContext.Provider>;
};

const useProductContext = () => {
	const context = useContext(ProductContext);

	if (!context) {
		throw new Error('useProductContext must be used within a CourseProvider');
	}

	return context;
};

export default useProductContext;
