const styles = {
	// InformationAboutUs
	aboutContainer: {
		flex: 1,
		paddingRight: '20px',
	},
	aboutTitle: {
		fontWeight: 'bold',
		color: '#1A237E',
	},
	aboutText: {
		color: 'gray',
		marginTop: '10px',
	},
	colorBoxContainer: {
		display: 'flex',
		marginTop: '20px',
	},
	colorBox: {
		width: '22px',
		height: '22px',
		borderRadius: '50%',
		marginRight: '10px',
		marginBottom: '30px',
	},

	// ContactWay
	contactContainer: {
		flex: 1,
		paddingLeft: '0',
	},
	sectionTitle: {
		fontWeight: 'bold',
		color: '#1A237E',
	},
	contactRow: {
		display: 'flex',
		marginTop: '10px',
		alignItems: 'center',
		marginBottom: '20px',
		gap: '19px',
	},
	iconCircle: {
		width: '40px',
		height: '40px',
		borderRadius: '50%',
	},
	contactTextBox: {
		display: 'flex',
		flexDirection: 'column',
	},
	contactText: {
		color: '#1A237E',
	},

	// ContactWay
	container: {
		flex: 1,
		paddingLeft: '0',
	},
	title: {
		fontWeight: 'bold',
		color: '#1A237E',
	},
	rowGroup: {
		display: 'flex',
		gap: '50px',
		marginBottom: '20px',
	},
	row: {
		display: 'flex',
		marginTop: '10px',
		alignItems: 'center',
	},
	circle: {
		width: '40px',
		height: '40px',
		borderRadius: '50%',
		marginRight: '19px',
	},
	textGroup: {
		display: 'flex',
		flexDirection: 'column',
	},
	text: {
		color: '#1A237E',
	},

	// GetInTouchForm
	formContainer: {
		display: 'flex',
		flexDirection: { xs: 'column', md: 'row' },
		justifyContent: 'space-between',
		marginTop: '40px',
		marginBottom: '100px',
	},
	formLeft: {
		flex: 1,
	},
	formTitle: {
		fontWeight: 'bold',
		color: '#1A237E',
	},
	formDescription: {
		color: 'gray',
		marginTop: '10px',
	},
	input: {
		marginBottom: '20px',
	},
	submitButton: {
		padding: '10px 20px',
	},
	imageBox: {
		flex: 1,
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
	},

	// InfoAndContactSection
	sectionWrapper: {
		display: 'flex',
		justifyContent: 'space-between',
		gap: '60px',
		marginTop: '50px',
		flexDirection: { xs: 'column', sm: 'row' },
	},
};

export default styles;
