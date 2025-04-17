import { createContext, useContext, useReducer } from 'react';
import Reducer, { initialState } from '../reducers/CartReducer';
import ACTIONS from '../actions/CartAction';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
	const [state, dispatch] = useReducer(Reducer, initialState);

	const setCart = (cart) => {
		dispatch({
			type: ACTIONS.SET_CART,
			payload: cart,
		});
	};

	const clearCart = () => {
		dispatch({
			type: ACTIONS.DELETE_CART,
			payload: [],
		});
	};

	const value = {
		cart: state.cart,
		setCart,
		clearCart,
	};

	return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

const useCartContext = () => {
	const context = useContext(CartContext);

	if (!context) {
		throw new Error('useCartContext must be used within Parent and his child');
	}

	return context;
};

export default useCartContext;
