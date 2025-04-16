const createAccountStyles = {
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
	primaryText: (theme) => ({
		color: theme.palette.primary.main,
	}),
	alert: {
		mb: 2,
	},
	link: {
		color: 'gray',
		textDecoration: 'none',
	},
	divider: {
		margin: '20px',
		width: '50%',
	},
	socialButtons: {
		mt: 2,
		gap: 1,
		display: 'flex',
		justifyContent: 'center',
	},
};

export default createAccountStyles;
