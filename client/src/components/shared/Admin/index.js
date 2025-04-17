import React from 'react';
import AdminSection from './section/adminSection';
import CustomHeader from '../Utilities/CustomHeader/CustomHeader';

const AdminPage = () => {
	return (
		<div>
			<CustomHeader
				title="Admin Page"
				breadcrumbLinks={[
					{ label: 'Home', href: '/' },
					{ label: 'Admin Page', href: '#' },
				]}
			/>
			<AdminSection />
		</div>
	);
};

export default AdminPage;
