const styles = {
	// ===== ProductDetails =====
	container: {
		marginTop: 4,
	},
	card: {
		display: 'flex',
		padding: 2,
		borderRadius: 0,
		width: 'auto',
		boxShadow: 1,
		textAlign: 'left',
		justifyContent: 'space-between',
	},
	imageBox: {
		display: 'flex',
		justifyContent: 'center',
	},
	image: {
		width: '100%',
		height: 500,
		objectFit: 'cover',
		borderRadius: 2,
	},
	productName: {
		color: '#2c3e50',
		fontWeight: 'bold',
	},
	price: {
		fontSize: '28px',
		color: 'red',
	},
	description: {
		marginTop: 2,
	},
	productInfo: {
		marginTop: 2,
	},
	button: {
		marginTop: 2,
	},
	productDetails: {
		marginTop: 2,
	},
	iconButton: {
		marginTop: 2,
	},
	ratingBox: {
		marginTop: 2,
	},
	errorMessage: {
		textAlign: 'center',
		color: 'red',
		marginTop: 20,
	},
	noProduct: {
		textAlign: 'center',
		marginTop: 20,
	},

	// ===== RelatedProducts =====
	relatedProductsContainer: {
		marginTop: 5,
		cursor: 'pointer',
	},
	relatedProductsTitle: {
		color: '#2c3e50',
		marginBottom: 5,
		fontWeight: 'bold',
	},
	relatedProductCard: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		borderRadius: 2,
		boxShadow: 3,
	},
	relatedProductImage: {
		width: '100%',
		height: 200,
		objectFit: 'cover',
		borderRadius: 2,
	},
	relatedCardContent: {
		textAlign: 'center',
	},

	// ===== ProductTabs =====
	tabsWrapper: {
		backgroundColor: '#f9f8fe',
	},
	tabsContainer: {
		marginTop: 4,
		textAlign: 'left',
		bgcolor: '#f9f8fe',
		paddingTop: '50px',
		paddingBottom: '50px',
	},
	tabBorder: {
		borderBottom: 2,
		borderColor: 'divider',
	},
	tabContent: {
		padding: '20px 0',
	},
	descriptionList: {
		marginTop: 2,
	},
	descriptionTitle: {
		fontWeight: 'bold',
		marginBottom: 1,
	},
};

export default styles;
