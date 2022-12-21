import Image from "next/image"
import styles from '../styles/Book.module.css'
import { useFormik } from "formik"
import * as yup from 'yup';
import Nav from "../components/nav";
import { useState } from "react";
import * as emailjs from 'emailjs-com';

const validationSchema = yup.object({
  'Full name': yup.string().required('Required field'),
  'Email': yup.string().email().required('Required field'),
  'Phone number': yup.number().required('Required field'),
  'Other details': yup.string(),
})

export default function Careers() {
  const [submitted, setSubmitted] = useState(false);
  const formik = useFormik({
    initialValues: {
      'Full name': '',
      'Email': '',
      'Phone number': '',
      'Other details': '',
    },
    onSubmit: async values => {
      const templateParams = {
        from_name: values['Full name'],
        to_name: 'Someone',
        subject: `${values['Full name']}-${values['Date']}}`,
        message: `New booking:
         ${Object.entries(values).map(([key, val]) => `${key} ${val} 
         `)}
        `,
      };

      const { text } = await emailjs.send(
        'service_dudseb6',
        'template_1y1kyme',
        templateParams,
        '0mNp1V1YnHseBlSf6'
      );

      setSubmitted(text === 'OK');
      console.log(text);
    },
    validationSchema,
    validateOnBlur: true
  });

  return (
    <>
      <Nav />
      <div className={styles.container}>
        <div className={styles.middle}>
          <Image src="/img/m-behind.gif" width="300" height="300" alt="Enquire within" />
          <form onSubmit={formik.handleSubmit}>
            <div className={styles.formCol}>
              {Object.entries(formik.values).map(([key, value]) => (
                <div className={styles.fieldContainer} style={{ flexBasis: key === 'Other details' ? '100%' : 'initial' }} key={key}>
                  <label className={styles.label} htmlFor={key}>{key}</label>
                  {{
                    'Other details': (
                      <textarea
                        id={key}
                        name={key}
                        type="text"
                        onChange={formik.handleChange}
                        value={value}
                        style={{flex: 1}}
                      />
                    ),
                  }[key] || (
                    <input
                      id={key}
                      name={key}
                      type="text"
                      onChange={formik.handleChange}
                      value={value}
                    />
                  )}
                </div>
              ))}
            </div>
            <button className={styles.button} disabled={Object.keys(formik.errors).length || submitted} type="submit">Submit</button>
          </form> 
        </div>
      </div>
    </>
  )
}