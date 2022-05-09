const { Contact } = require('../../models/contact');
const updateStatusContact = async (req, res, next) => {
  const { contactId } = req.params;
  const { favorite } = req.body;
  if (req.body.favorite === undefined) {
    res.status(400).json({
      status: 'error',
      code: 400,
      message: 'missing field favorite',
    });
    return;
  }
  const result = await Contact.findByIdAndUpdate(
    contactId,
    { favorite },
    { new: true }
  );
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

module.exports = updateStatusContact;
