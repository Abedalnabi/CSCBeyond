import { createContext, useContext, useReducer } from 'react';
import Reducer, { initialState } from '../reducers/ProductReducer';
import ACTIONS from '../actions/ProductAction';

const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
	const [state, dispatch] = useReducer(Reducer, initialState);

	const setProducts = (courses) => {
		dispatch({
			type: ACTIONS.SET_COURSES,
			payload: courses,
		});
	};

	const updateProduct = (course_id, updatedValue) => {
		dispatch({
			type: ACTIONS.UPDATE_COURSE,
			payload: { course_id, updatedValue },
		});
	};

	const addProduct = (newAddedValue) => {
		dispatch({
			type: ACTIONS.ADD_COURSE,
			payload: { newAddedValue },
		});
	};

	const setLoading = (loadingState) => {
		dispatch({
			type: ACTIONS.SET_LOADING,
			payload: loadingState,
		});
	};

	const setError = (errorMessage) => {
		dispatch({
			type: ACTIONS.SET_ERROR,
			payload: errorMessage,
		});
	};

	const value = {
		products: state.productss,
		isLoading: state.isLoading,
		error: state.error,
		isAdmin: state.isAdmin,
		setProducts,
		updateProduct,
		addProduct,
		setLoading,
		setError,
	};

	return <ProductContext.Provider value={value}>{children}</ProductContext.Provider>;
};

const useCourseContext = () => {
	const context = useContext(ProductContext);

	if (!context) {
		throw new Error('useProductContext must be used within a CourseProvider');
	}

	return context;
};

export default useCourseContext;
