import React from 'react';
import { TextField } from '@mui/material';

const CustomTextField = ({ label, name, type, value, onChange, error, helperText }) => (
	<TextField
		label={label}
		name={name}
		type={type}
		variant="outlined"
		fullWidth
		margin="normal"
		value={value}
		onChange={onChange}
		error={!!error}
		helperText={helperText}
	/>
);

export default CustomTextField;
