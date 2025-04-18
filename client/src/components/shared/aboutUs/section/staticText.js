import myIcon from '../../assets/img/Group1.png';
const STATIC_TEXT = {
	HEADER_TITLE: 'About Us',
	BREADCRUMBS: [
		{ label: 'Home', href: '/' },
		{ label: 'About Us', href: '#' },
	],
	ABOUT_TITLE: 'Know About Our Ecommerce Business, History',
	ABOUT_DESCRIPTION:
		'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec ultricies mauris. Morbi euismod odio neque, et gravida justo feugiat ac. Aliquam vehicula consequat nisl. Mauris eget faucibus cras justo, tortor sed donec tempus.',
	ABOUT_BUTTON: 'Contact Us',

	FEATURES_TITLE: 'Our Features',
	FEATURES: [
		{
			icon: myIcon,
			title: 'Free Delivery',
			description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.',
		},
		{
			icon: 'money_off',
			title: '100% Cash Back',
			description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.',
		},
		{
			icon: 'check_circle',
			title: 'Quality Product',
			description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.',
		},
		{
			icon: 'support_agent',
			title: '24/7 Support',
			description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.',
		},
	],
};

export default STATIC_TEXT;
