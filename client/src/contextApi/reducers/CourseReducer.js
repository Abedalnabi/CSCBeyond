import ACTIONS from '../actions/CourseAction';

export const initialState = {
	courses: [],
};

const Reducer = (state, { type, payload }) => {
	switch (type) {
		case ACTIONS.SET_COURSES:
			return { ...state, courses: payload };

		case ACTIONS.UPDATE_COURSE:
			return {
				courses: state.courses?.map((courseElement) => {
					if (courseElement.course_id === payload.course_id) return { ...courseElement, course: payload.updatedValue };
					return courseElement;
				}),
			};

		case ACTIONS.ADD_COURSE:
			return { ...state, courses: [...state.courses, payload.newAddedValue] };

		default:
			throw new Error(`No case for this type ==> ${type}`);
	}
};

export default Reducer;
