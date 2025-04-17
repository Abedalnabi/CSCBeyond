const { addContact, getAllContacts } = require('./services/contact');

module.exports = {
	addToContactOrAsk: async (req, res) => {
		const { name, email, message, type } = req.body;

		const result = await addContact(name, email, message, type);

		if (result.success) {
			res.status(201).json({ message: result.message, contact: result.contact });
		} else {
			res.status(500).json({ message: result.message, error: result.error });
		}
	},

	getContactAndAsks: async (req, res) => {
		const result = await getAllContacts();

		if (result.success) {
			res.status(200).json(result.contacts);
		} else {
			res.status(500).json({ message: result.message, error: result.error });
		}
	},
};
