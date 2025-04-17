export const navbarStyles = {
	appBar: {
		backgroundColor: '#6a4cfc',
	},
	toolbar: {
		display: 'flex',
		justifyContent: 'space-between',
	},
	contactBox: {
		display: 'flex',
		alignItems: 'center',
	},
	contactText: {
		color: 'white',
	},
	rightBox: {
		display: 'flex',
		alignItems: 'center',
	},
	select: {
		color: 'white',
		fontSize: '14px',
		marginRight: 2,
		border: 'none',
		boxShadow: 'none',
		'& .MuiOutlinedInput-notchedOutline': {
			border: 'none',
		},
	},
	buttonStyle: (route, activeButton) => ({
		color: activeButton === route ? '#6a4cfc' : 'gray',
	}),
	drawerBox: {
		width: 250,
		padding: 2,
	},
	buttonFullWidth: {
		width: '100%',
		textAlign: 'left',
		marginBottom: 2,
	},
	inputBox: {
		display: 'flex',
		gap: 3,
	},
	iconButtonStyle: {
		backgroundColor: '#f50057',
		color: 'white',
		borderRadius: '0%',
		padding: '8px',
	},
};
