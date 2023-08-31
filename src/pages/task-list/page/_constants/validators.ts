import i18next from 'i18next';
import {
  composeValidators,
  SimpleValidator,
  Validator,
} from '@mihanizm56/validators';
import { TASK_LIST_PAGE_TRANSLATES } from './translations';

const simpleValidator = new SimpleValidator();
export const TASK_FORM_VALIDATIONS = {
  name: composeValidators([
    simpleValidator.requiredValidator(
      i18next.t(TASK_LIST_PAGE_TRANSLATES.nameRequired),
    ) as Validator,
    simpleValidator.minLenghtValidate(
      5,
      i18next.t(TASK_LIST_PAGE_TRANSLATES.tooShort),
    ) as Validator,
    simpleValidator.maxLenghtValidate(
      100,
      i18next.t(TASK_LIST_PAGE_TRANSLATES.tooLong),
    ) as Validator,
  ]),
  description: composeValidators([
    simpleValidator.requiredValidator(
      i18next.t(TASK_LIST_PAGE_TRANSLATES.descriptionRequired),
    ) as Validator,
    simpleValidator.minLenghtValidate(
      5,
      i18next.t(TASK_LIST_PAGE_TRANSLATES.tooShort),
    ) as Validator,
    simpleValidator.maxLenghtValidate(
      100,
      i18next.t(TASK_LIST_PAGE_TRANSLATES.tooLong),
    ) as Validator,
  ]),
};
