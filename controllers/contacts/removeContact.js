const { Contact } = require('../../models/contact');
const removeContact = async (req, res, next) => {
  const { contactId } = req.params;
  const result = await Contact.findByIdAndRemove(contactId);
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
