import Image from "next/image"
import styles from '../styles/Book.module.css'
import * as yup from 'yup';
import { useFormik } from "formik"
import Nav from "../components/nav";
import { useState } from "react";
import * as emailjs from 'emailjs-com';

const validationSchema = yup.object({
  'Full name': yup.string().required('Required field'),
  'Residential address': yup.string().required('Required field'),
  'Email': yup.string().email().required('Required field'),
  'Phone number': yup.number().required('Required field'),
  'Date': yup.string().required('Required field'),
  'Number of passengers': yup.number().required('Required field'),
  'First pick up location': yup.string().required('Required field'),
  'First pick up time': yup.string(),
  'First drop off location': yup.string().required('Required field'),
  'First drop off time': yup.string(),
  'Second pick up location': yup.string().required('Required field'),
  'Second pick up time': yup.string(),
  'Second drop off location': yup.string().required('Required field'),
  'Second drop off time': yup.string(),
  'Other details': yup.string(),
})

export default function BookNow() {
  const [submitted, setSubmitted] = useState(false);
  const formik = useFormik({
    initialValues: {
      'Full name': '',
      'Residential address': '',
      'Email': '',
      'Phone number': '',
      'Date': '',
      'Number of passengers': '',
      'First pick up location': '', 
      'First pick up time': '', 
      'First drop off location': '',
      'First drop off time': '',
      'Second pick up location': '', 
      'Second pick up time': '', 
      'Second drop off location': '',
      'Second drop off time': '',
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
    validationSchema
  });

  const renderFormType = (key) => {
    switch(true) {
      case key.includes('time'): 
        return 'time';
      case key === 'Date': 
        return 'date';
      case key === 'Number of passengers': 
        return 'number';
      default: 
        return 'text'
    }
  }

  const renderMin = (key) => {
    switch(true) {
      case key === 'Date': 
        return new Date().toISOString().split("T")[0];
      default: 
        return 0;
    }
  }

  return (
    <>
      <Nav />
      <div className={`${styles.container} ${styles.bookContainer}`}>
        <div className={styles.middle}>
          <Image src="/img/m-book.gif" width="300" height="300" alt="Book now" />
          <form onSubmit={formik.handleSubmit}>
            <div className={`${styles.form} ${styles.formDecoration}`}>
              {Object.entries(formik.values).map(([key, value]) => {
                const hasError = formik.errors[key] && formik.touched[key];
                return (
                  <div className={`${styles.twoCols} ${styles.fieldContainer}`} key={key} style={{
                    ...(key === 'Other details' && { width: '100%' })
                  }}>
                    <label className={styles.label} htmlFor={key}>{key}</label>
                    {{
                      'Other details': (
                        <textarea
                          id={key}
                          name={key}
                          type="text"
                          onChange={formik.handleChange}
                          value={value}
                          style={{
                            ...(hasError && {border: '1px solid red'})
                          }}
                          placeholder={`${key}...`}
                        />
                      ),
                    }[key] || (
                      <input
                        id={key}
                        name={key}
                        onChange={formik.handleChange}
                        type={renderFormType(key)}
                        min={renderMin(key)}
                        value={value}
                        style={{
                          ...(hasError && {border: '1px solid red'})
                        }}
                        placeholder={`${key}...`}
                      />
                    )}
                    {hasError && <div className={styles.errorBox}>{formik.errors[key]}</div>}
                  </div>
                )
              })}
            </div>
            <button className={styles.button} disabled={submitted} type="submit">Submit</button>
          </form> 
        </div>
      </div>
    </>
  )
}