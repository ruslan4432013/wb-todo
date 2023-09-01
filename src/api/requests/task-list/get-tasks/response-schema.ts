import Joi from 'joi';

export const responseSchema = Joi.object({
  data: Joi.object({
    tasks: Joi.array()
      .items(
        Joi.object({
          uuid: Joi.string().required(),
          name: Joi.string().required(),
          createdAt: Joi.string().required(),
          description: Joi.string().required(),
        }),
      )
      .required(),
  }),
});
