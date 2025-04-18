// HomePage.js
import React from 'react';
import BannerSection from './BannerSection';
import FeaturedProducts from './FeaturedProducts';
import LatestProducts from './LatestProducts';
import Shopext from './Shopex';
import UniqueFeatures from './UniqueFeatures';
import TrendingProducts from './TrendingProducts';

import ScrollToTopButton from '../../Utilities/ScrollToTopButton/ScrollToTopButton';

const HomePage = () => {
	return (
		<>
			<BannerSection />
			<FeaturedProducts />
			<LatestProducts />
			<Shopext />
			<UniqueFeatures />
			<TrendingProducts />
			<ScrollToTopButton />
		</>
	);
};

export default HomePage;
