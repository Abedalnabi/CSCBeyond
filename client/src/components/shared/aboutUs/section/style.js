const styles = {
	mainContainer: {
		marginTop: 4,
	},
	aboutWrapper: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'space-between',
		padding: 2,
	},
	aboutImageBox: {
		flex: 1,
	},
	aboutImage: {
		width: '100%',
		borderRadius: '8px',
		maxHeight: '400px',
	},
	aboutTextBox: {
		flex: 1,
		paddingLeft: 3,
		textAlign: 'left',
	},
	aboutTitle: {
		fontWeight: 'bold',
		color: '#2c3e50',
	},
	aboutDescription: {
		marginTop: 2,
		color: 'text.secondary',
	},
	aboutButton: {
		marginTop: 3,
	},

	featuresContainer: {
		marginTop: 4,
	},
	featuresTitle: {
		fontWeight: 'bold',
		color: '#2c3e50',
		marginTop: 6,
		marginBottom: 4,
	},
	gridContainer: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		marginBottom: '150px',
	},
	featureCard: {
		padding: 3,
		width: '200px',
		textAlign: 'center',
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		borderRadius: 2,
		boxShadow: 3,
		transition: 'transform 0.3s ease-in-out',
		'&:hover': {
			transform: 'scale(1.05)',
		},
	},
	featureIcon: {
		fontSize: 40,
		color: 'primary.main',
	},
	featureTitle: {
		marginTop: 2,
		fontWeight: 'bold',
	},
	featureDescription: {
		marginTop: 1,
		color: 'text.secondary',
	},
};

export default styles;
