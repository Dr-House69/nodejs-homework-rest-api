const contactsRegister = require('../../models/contacts');
const removeContact = async (req, res, next) => {
  const { contactId } = req.params;
  const result = await contactsRegister.removeContact(contactId);
  if (!result) {
    res.status(404).json({
      status: 'error',
      code: 404,
      message: `Contact with id = ${contactId} not found`,
    });
    return;
  }
  res.status(200).json({
    status: 'success',
    code: 200,
    message: 'contact deleted',
    data: {
      result,
    },
  });
};

module.exports = removeContact;
