// HomePage.js
import React from 'react';
import BannerSection from './BannerSection';
import FeaturedProducts from './FeaturedProducts';
import LatestProducts from './LatestProducts';

import ScrollToTopButton from '../../Utilities/ScrollToTopButton/ScrollToTopButton';

const HomePage = () => {
	return (
		<>
			<BannerSection />
			<FeaturedProducts />
			<LatestProducts />
			<ScrollToTopButton />
		</>
	);
};

export default HomePage;
