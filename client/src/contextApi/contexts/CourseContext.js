import { createContext, useContext, useReducer } from 'react';
import Reducer, { initialState } from '../reducers/CourseReducer';
import ACTIONS from '../actions/CourseAction';

const CourseContext = createContext();

export const CourseProvider = ({ children }) => {
	const [state, dispatch] = useReducer(Reducer, initialState);

	const setCourses = (courses) => {
		dispatch({
			type: ACTIONS.SET_COURSES,
			payload: courses,
		});
	};

	const updateCourse = (post_id, updatedValue) => {
		dispatch({
			type: ACTIONS.UPDATE_COURSE,
			payload: { post_id, updatedValue },
		});
	};

	const addCourse = (newAddedValue) => {
		dispatch({
			type: ACTIONS.ADD_COURSE,
			payload: { newAddedValue },
		});
	};

	const value = {
		posts: state?.posts,
		setCourses,
		updateCourse,
		addCourse,
	};

	return <CourseContext.Provider value={value}>{children}</CourseContext.Provider>;
};

const useCourseContext = () => {
	const context = useContext(CourseContext);

	if (!context) {
		throw new Error('useCourseContext must be used within Parent and his child');
	}

	return context;
};

export default useCourseContext;
