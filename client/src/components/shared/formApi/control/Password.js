import { getInputValue } from '../FormHelper';

const Password = ({ stateName, label, eventInputValue, formStates }) => {
  const handleChange = (e) => {
    eventInputValue(stateName, e.target.value);
  };

  return (
    <>
      <label htmlFor={stateName}>{label}</label>
      <input
        id={stateName}
        type="password"
        placeholder={label}
        onChange={handleChange}
        value={getInputValue(stateName, formStates)}
      />
    </>
  );
};

export default Password;
