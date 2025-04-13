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

	const updateCourse = (course_id, updatedValue) => {
		dispatch({
			type: ACTIONS.UPDATE_COURSE,
			payload: { course_id, updatedValue },
		});
	};

	const addCourse = (newAddedValue) => {
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
		courses: state.courses,
		isLoading: state.isLoading,
		error: state.error,
		isAdmin: state.isAdmin,
		setCourses,
		updateCourse,
		addCourse,
		setLoading,
		setError,
	};

	return <CourseContext.Provider value={value}>{children}</CourseContext.Provider>;
};

const useCourseContext = () => {
	const context = useContext(CourseContext);

	if (!context) {
		throw new Error('useCourseContext must be used within a CourseProvider');
	}

	return context;
};

export default useCourseContext;
