import { getInputValue } from '../FormHelper';

const Text = ({ stateName, label, eventInputValue, formStates }) => {
	const handleChange = (e) => {
		eventInputValue(stateName, e.target.value);
	};

	return (
		<>
			<label htmlFor={stateName}>{label}</label>
			<input
				id={stateName}
				type={stateName === 'email' ? 'email' : 'text'}
				placeholder={`Add ${stateName}`}
				onChange={handleChange}
				value={getInputValue(stateName, formStates)}
			/>
		</>
	);
};

export default Text;
