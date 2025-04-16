// style.js
const loginStyles = {
	gridContainer: {
		justifyContent: 'center',
		alignItems: 'center',
		marginTop: '50px',
	},
	card: (theme) => ({
		borderRadius: '16px',
		boxShadow: `0 3px 5px ${theme.palette.grey[700]}`,
		padding: '16px',
	}),
	loginTitle: (theme) => ({
		color: theme.palette.secondary.main,
	}),
	alertBox: {
		marginBottom: 2,
	},
	forgotPasswordLink: {
		color: 'gray',
		textDecoration: 'none',
	},
	orDivider: {
		margin: '20px',
		width: '50%',
	},
	socialButtonsBox: {
		mt: 2,
		gap: 1,
		display: 'flex',
		justifyContent: 'center',
	},
};

export default loginStyles;
