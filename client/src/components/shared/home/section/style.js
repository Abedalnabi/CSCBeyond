export const bannerStyles = {
	container: {
		backgroundColor: '#f8f6ff',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		flexDirection: { xs: 'column-reverse', md: 'row' },
		padding: { xs: 4, md: 10 },
		height: '100vh',
		gap: 10,
		position: 'relative',
		textAlign: 'left',
		maxWidth: 'auto',
		maxHeight: '600px',
	},
	lamp: {
		position: 'absolute',
		top: 0,
		left: { xs: 10, sm: 30, md: 40 },
		width: { xs: 100, sm: 180, md: 250, lg: 300 },
		height: { xs: '150px', sm: '150px', md: '200px', lg: 'auto' },
		display: { xs: 'none', sm: 'block' },
	},
	heading: {
		my: 2,
		fontSize: {
			xs: '1.6rem',
			sm: '2rem',
			md: '2.5rem',
		},
	},
	button: {
		backgroundColor: '#f54291',
	},
	chair: {
		width: { xs: 200, sm: 250, md: 400 },
		height: 'auto',
	},
	discountBox: {
		position: 'absolute',
		top: 0,
		right: -30,
		backgroundColor: '#00c2ff',
		color: 'white',
		borderRadius: '50%',
		width: 70,
		height: 70,
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		fontWeight: 'bold',
		fontSize: '0.9rem',
	},
};

export const productCardStyles = {
	container: {
		position: 'relative',
		maxWidth: 345,
		borderRadius: '5px',
		boxShadow: 3,
		minHeight: '413px',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'space-between',
	},
	image: {
		position: 'relative',
		cursor: 'pointer',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
	},
	img: {
		borderRadius: '0 0 0 0',
		width: '100%',
	},
	button: {
		width: '150px',
		height: '40px',
		backgroundColor: '#08d15f',
		borderRadius: '2px',
		'&:hover': {
			backgroundColor: '#00c2ff',
		},
	},
	infoContainer: {
		padding: 2,
		textAlign: 'center',
		backgroundColor: (active) => (active ? '#2f1ac4' : 'transparent'),
	},
	infoText: {
		fontWeight: 'bold',
		marginBottom: 1,
		color: (active) => (active ? 'white' : 'black'),
	},
	priceText: {
		fontWeight: 'bold',
		marginBottom: 2,
		color: (active) => (active ? 'white' : 'black'),
	},
	discountBox: {
		position: 'absolute',
		top: '10px',
		right: '10px',
		backgroundColor: '#f54291',
		color: 'white',
		borderRadius: '50%',
		width: 70,
		height: 70,
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		fontWeight: 'bold',
		fontSize: '0.9rem',
	},
};

export const featuredProductsStyle = {
	container: {
		padding: '40px 10%',
		textAlign: 'center',
	},
	heading: {
		marginBottom: '40px',
		fontWeight: 'bold',
	},
	paginationBox: {
		margin: 'auto',
		display: 'flex',
	},
	gridContainer: {
		justifyContent: 'center',
	},
};

export const LatestProductsStyle = {
	title: {
		marginTop: '4rem',
		marginBottom: '4rem',
		color: '#151875',
	},
	productBox: {
		display: 'flex',
		flexWrap: 'wrap',
		gap: 0,
		padding: '50px 12%',
		textAlign: 'center',
		justifyContent: 'center',
		cursor: 'pointer',
	},
	productItem: {
		width: { xs: '100%', sm: '100%', md: 'calc(33.33% - 16px)' },
		overflow: 'hidden',
		padding: { sm: 0, md: 2 },
	},
	productImage: {
		objectFit: 'cover',
		height: 350,
		width: '100%',
		backgroundColor: '#f7f7f7',
	},
	productDetails: {
		padding: 2,
	},
	productName: {
		textAlign: 'right',
	},
	productPrice: {
		textAlign: 'left',
	},
};

export const uniqueStyles = {
	container: {
		display: 'flex',
		flexDirection: { xs: 'column', sm: 'row' },
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#f1f0ff',
		padding: 4,
		textAlign: 'left',
		margin: 'auto',
		minHeight: '500px',
		marginTop: { xs: '20px', sm: '0' },
	},
	image: {
		width: 500,
		height: 350,
		objectFit: 'cover',
		borderRadius: 1,
		marginBottom: { xs: 3, sm: 0 },
	},
	textContainer: {
		marginLeft: { sm: 3 },
		width: '530px',
		textAlign: { xs: 'center', sm: 'left' },
	},
	heading: {
		fontWeight: 'bold',
		color: '#151875',
	},
	featureBox: {
		display: 'flex',
		alignItems: 'center',
		marginTop: 2,
	},
	circle: {
		width: '10px',
		height: '10px',
		borderRadius: '50%',
		marginRight: '10px',
	},
	button: {
		marginTop: 3,
		backgroundColor: '#ff5f5f',
		'&:hover': {
			backgroundColor: '#ff4444',
		},
	},
};
