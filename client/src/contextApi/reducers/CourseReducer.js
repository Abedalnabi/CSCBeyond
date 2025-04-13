import ACTIONS from '../actions/CourseAction';

export const initialState = {
	courses: [],
	isLoading: false,
	error: null,
};

const Reducer = (state, { type, payload }) => {
	switch (type) {
		case ACTIONS.SET_COURSES:
			return { ...state, courses: payload, isLoading: false };

		case ACTIONS.UPDATE_COURSE:
			return {
				...state,
				courses: state.courses.map((courseElement) =>
					courseElement._id === payload.course_id ? { ...courseElement, ...payload.updatedValue } : courseElement
				),
				isLoading: false,
			};

		case ACTIONS.ADD_COURSE:
			return {
				...state,
				courses: [...state.courses, payload.newAddedValue],
				isLoading: false,
			};

		case ACTIONS.SET_LOADING:
			return { ...state, isLoading: payload };

		case ACTIONS.SET_ERROR:
			return { ...state, error: payload, isLoading: false };

		default:
			throw new Error(`No case for this type ==> ${type}`);
	}
};

export default Reducer;
