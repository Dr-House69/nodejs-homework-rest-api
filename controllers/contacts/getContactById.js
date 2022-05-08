const contactsRegister = require('../../models/contacts');
const getContactById = async (req, res, next) => {
  const { contactId } = req.params;
  const contact = await contactsRegister.getContactById(contactId);

  if (!contact) {
    res.status(404).json({
      status: 'error',
      code: 404,
      message: `Contact with id = ${contactId} not found`,
    });
    return;
  }

  res.json({
    status: 'success',
    code: 200,
    data: {
      result: contact,
    },
  });
};

module.exports = getContactById;
