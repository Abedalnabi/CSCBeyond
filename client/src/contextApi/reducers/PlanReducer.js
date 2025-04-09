import ACTIONS from '../actions/PlanAction';

export const initialState = {
	plans: [],
};

const Reducer = (state, { type, payload }) => {
	switch (type) {
		case ACTIONS.SET_PLANS:
			return { ...state, plans: payload };

		default:
			throw new Error(`No case for this type ==> ${type}`);
	}
};

export default Reducer;
