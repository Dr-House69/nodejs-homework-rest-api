const Joi = require('joi');

const contactSchema = Joi.object({
  name: Joi.string()
    .regex(/^[A-Z]+ [A-Z]+$/i)
    .min(3)
    .max(30)
    .required(),
  email: Joi.string()
    .email({
      minDomainSegments: 2,
      tlds: { allow: ['com', 'net', 'ua'] },
    })
    .required(),
  phone: Joi.string()
    .pattern(/^[0-9 -]+$/, 'numbers')
    .min(10)
    .max(16)
    .required(),
});

module.exports = contactSchema;
