import React from 'react';
import CustomHeader from '../Utilities/CustomHeader/CustomHeader';
import OrderCompleted from './section/complete';

const CompleteSection = () => {
	return (
		<div>
			<CustomHeader
				title="Order Completed"
				breadcrumbLinks={[
					{ label: 'Home', href: '/' },
					{ label: 'Order Completed', href: '#' },
				]}
			/>
			<OrderCompleted />
		</div>
	);
};

export default CompleteSection;
