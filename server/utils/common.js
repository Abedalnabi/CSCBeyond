module.exports = {
	// Function to validate the email format
	getRoleById: (roleId) => {
		if (!roleId) {
			throw new Error('Role ID is required');
		}
		const role = roles.find((r) => r.id === roleId);
		if (!role) {
			throw new Error('Role not found');
		}
		return role;
	},
};
