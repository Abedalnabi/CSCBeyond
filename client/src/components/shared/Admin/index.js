import React from 'react';
import AdminSection from './section/adminSection';
import CustomHeader from '../Utilities/CustomHeader/CustomHeader';

const AdminPage = ({ isUpdated, setIsUpdated }) => {
	return (
		<div>
			<CustomHeader
				title="Admin Page"
				breadcrumbLinks={[
					{ label: 'Home', href: '/' },
					{ label: 'Admin Page', href: '#' },
				]}
			/>
			<AdminSection isUpdated={isUpdated} setIsUpdated={setIsUpdated} />
		</div>
	);
};

export default AdminPage;
