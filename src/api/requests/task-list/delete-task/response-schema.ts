import Joi from 'joi';

export const responseSchema = Joi.object({
  data: Joi.object({
    task: Joi.object({
      name: Joi.string().required(),
      uuid: Joi.string().required(),
      description: Joi.string().required(),
      createdAt: Joi.string().required(),
    }).required(),
  }),
});
