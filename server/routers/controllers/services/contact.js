const ContactModel = require('../../../config/module/contactus');

const addContact = async (name, email, message, type) => {
	try {
		const newContact = new ContactModel({
			name,
			email,
			message,
			type,
		});

		await newContact.save();
		return { success: true, message: 'Message added successfully', contact: newContact };
	} catch (error) {
		console.error('Error adding message:', error);
		return { success: false, message: 'Error adding message', error };
	}
};

const getAllContacts = async () => {
	try {
		const contacts = await ContactModel.find();
		return { success: true, contacts };
	} catch (error) {
		console.error('Error fetching contacts:', error);
		return { success: false, message: 'Error fetching contacts', error };
	}
};

module.exports = { addContact, getAllContacts };
