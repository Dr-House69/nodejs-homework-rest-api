const { Contact } = require('../../models/contact');

const addContact = async (req, res, next) => {
  const result = await Contact.create(req.body);
  res.status(201).json({
    status: 'created',
    code: 201,
    data: {
      result,
    },
  });
};

module.exports = addContact;
