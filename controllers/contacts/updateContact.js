const { Contact } = require('../../models/contact');
const updateContact = async (req, res, next) => {
  const { contactId } = req.params;
  if (!req.body) {
    res.status(400).json({
      status: 'error',
      code: 400,
      message: 'missing fields',
    });
    return;
  }
  const result = await Contact.findByIdAndUpdate(contactId, req.body, {
    new: true,
  });
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
    data: {
      result,
    },
  });
};

module.exports = updateContact;
