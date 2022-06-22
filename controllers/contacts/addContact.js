const contactsRegister = require('../../models/contacts');

const addContact = async (req, res, next) => {
  const { name, email, phone } = req.body;
  if (!name || !email || !phone) {
    res.status(400).json({
      status: 'error',
      code: 400,
      message: 'missing required name field',
    });
    return;
  }
  const result = await contactsRegister.addContact(req.body);
  res.status(201).json({
    status: 'created',
    code: 201,
    data: {
      result,
    },
  });
};

module.exports = addContact;
