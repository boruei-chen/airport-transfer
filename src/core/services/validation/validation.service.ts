import * as Yup from 'yup';

const flightNoSchema = Yup.string()
  .matches(/^[a-zA-Z0-9]+$/, { message: '僅能接受英文字母大小寫與數字' });

const nameSchema = Yup.string()
  .matches(/^[a-zA-Z\s]+$/, { message: '僅能接受英文字母大小寫與空格' });

const telNoSchema = Yup.string()
  .matches(/^[0-9]+$/, { message: '僅能接受數字' });

const idOrPassportNoSchema = Yup.string()
  .matches(/^[a-zA-Z0-9]+$/, { message: '僅能接受英文字母與數字' });

export default {
  flightNoSchema,
  nameSchema,
  telNoSchema,
  idOrPassportNoSchema
};
