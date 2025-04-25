import React from 'react';
import CustomHeader from '../Utilities/CustomHeader/CustomHeader';
import CartSection from './section/cartSection';

const AppCartSection = ({ isUpdated, setIsUpdated }) => {
	return (
		<div>
			<CustomHeader
				title="Shopping Curt"
				breadcrumbLinks={[
					{ label: 'Home', href: '/' },
					{ label: 'Shopping Curt', href: '#' },
				]}
			/>
			<CartSection isUpdated={isUpdated} setIsUpdated={setIsUpdated} />
		</div>
	);
};

export default AppCartSection;
