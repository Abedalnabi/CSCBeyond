// HomePage.js
import React from 'react';
import BannerSection from './BannerSection';
import FeaturedProducts from './FeaturedProducts';
import ScrollToTopButton from '../../Utilities/ScrollToTopButton/ScrollToTopButton';

const HomePage = () => {
	return (
		<>
			<BannerSection />
			<FeaturedProducts />
			<ScrollToTopButton />
		</>
	);
};

export default HomePage;
