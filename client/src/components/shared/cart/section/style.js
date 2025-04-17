export const styles = {
	dialog: {
		title: {
			textAlign: 'center',
		},
		content: {
			padding: '20px',
		},
		button: {
			backgroundColor: '#19d16f',
			color: 'white',
		},
	},
	cartTotals: {
		container: {
			display: 'flex',
			flexDirection: 'column',
		},
		box: {
			padding: '16px',
			borderRadius: '8px',
			backgroundColor: '#f4f4fc',
		},
		subtotalBox: {
			display: 'flex',
			justifyContent: 'space-between',
		},
		totalBox: {
			display: 'flex',
			justifyContent: 'space-between',
			marginTop: '16px',
		},
		shippingText: {
			marginTop: '16px',
			color: '#19d16f',
		},
		checkoutButton: {
			marginTop: '16px',
			width: '100%',
		},
	},
	cartTable: {
		container: {
			boxShadow: 'none',
			border: 'none',
		},
		header: {
			color: '#1d3178',
			fontSize: '20px',
			fontWeight: 'bold',
		},
		quantityButton: {
			margin: '0 8px',
		},
		totalCell: {
			fontWeight: 'bold',
		},
	},
};
