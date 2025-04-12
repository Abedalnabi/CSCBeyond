import * as FormHelper from './FormHelper';

const useForm = (formStates, setFormStates) => {
	// FormHelper functions

	const eventInputValue = (stateName, newValue) => {
		const updatedForm = FormHelper.updateValue(stateName, newValue, formStates);
		setFormStates(updatedForm);
	};

	const getCurrentFormValues = (e) => {
		e.preventDefault();
		FormHelper.getAllFormValues(formStates);
	};

	const eventResetForm = () => {
		const restFields = FormHelper.restForm(formStates);
		setFormStates(restFields);
	};

	const eventDateValue = (stateName, newValue) => {
		const updatedForm = FormHelper.updateDate(stateName, newValue, formStates);
		setFormStates(updatedForm);
	};

	return {
		eventInputValue,
		getCurrentFormValues,
		eventResetForm,
		eventDateValue,
	};
};

export default useForm;
