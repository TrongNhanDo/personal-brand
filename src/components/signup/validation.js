import * as Yup from 'yup';

export const validationSchema = () => {
   return Yup.object().shape({
      name: Yup.string().required('This field cannot be left blank'),
      email: Yup.string().email().required('This field cannot be left blank'),
      phone: Yup.string()
         .required('This field cannot be left blank')
         .matches(
            /(((\+|)84)|0)(3|5|7|8|9)+([0-9]{8})\b/,
            'Your phone is not in the correct format'
         ),
      message: Yup.string().required('This field cannot be left blank'),
   });
};
