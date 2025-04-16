import React from 'react';
import CustomHeader from '../Utilities/CustomHeader/CustomHeader';
import FaqSections from './section/FaqSections';

const FAQ = () => {
	return (
		<div>
			<CustomHeader
				title="FAQ"
				breadcrumbLinks={[
					{ label: 'Home', href: '/' },
					{ label: 'Faq', href: '#' },
				]}
			/>
			<FaqSections />
		</div>
	);
};

export default FAQ;
