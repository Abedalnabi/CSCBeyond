import React from 'react';
import CustomHeader from '../Utilities/CustomHeader/CustomHeader';
import Account from './section/AccountSection';

const AccountSection = () => {
	return (
		<div>
			<CustomHeader
				title="My Account"
				breadcrumbLinks={[
					{ label: 'Home', href: '/' },
					{ label: 'My Account', href: '#' },
				]}
			/>
			<Account />
		</div>
	);
};

export default AccountSection;
