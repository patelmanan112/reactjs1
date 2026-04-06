import { useFormik } from 'formik';
import * as Yup from 'yup';

const LoginForm = () => {

  const initialValues = {
    email: '',
    password: ''
  };

  const validationSchema = Yup.object({
    email: Yup.string()
      .email('Invalid email format')
      .required('Email is required'),

    password: Yup.string()
      .min(6, 'Password must be at least 6 characters')
      .required('Password is required')
  });

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values) => {
      console.log(values);
    }
  });

  return (
    <form onSubmit={formik.handleSubmit} className='mt-40' >

      <div className='bg-green-300'>
          {formik.touched.email && formik.errors.email && (
          <p>{formik.errors.email}</p>
        )}
        <label>Email</label> 
        <input
          type="email"
          name="email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
          className='bg-yellow-200 border'
        />

      
      </div>

      <div>
        <label>Password</label>
        <input
          type="password"
          name="password"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.password}
             className='bg-yellow-200 border'
        />

        {formik.touched.password && formik.errors.password && (
          <p>{formik.errors.password}</p>
        )}
      </div>

      <button type="submit"    className='bg-blue-600/50 border'>Login</button>

    </form>
  );
};

export default LoginForm;