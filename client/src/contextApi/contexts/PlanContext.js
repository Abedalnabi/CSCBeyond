import { createContext, useContext, useReducer } from 'react';
import Reducer, { initialState } from '../reducers/PlanReducer';
import ACTIONS from '../actions/PlanAction';

const PlanContext = createContext();

export const PlanProvider = ({ children }) => {
	const [state, dispatch] = useReducer(Reducer, initialState);

	const setPlans = (plans) => {
		dispatch({
			type: ACTIONS.SET_PLANS,
			payload: plans,
		});
	};

	const value = {
		sports: state.sports,
		setPlans,
	};

	return <PlanContext.Provider value={value}>{children}</PlanContext.Provider>;
};

const usePlanContext = () => {
	const context = useContext(PlanContext);

	if (!context) {
		throw new Error('usePlanContext must be used within Parent and his child');
	}

	return context;
};

export default usePlanContext;
