import Image from "next/image"
import styles from '../styles/Book.module.css'
import { useFormik } from "formik"
import * as yup from 'yup';
import Nav from "../components/nav";
import { useState } from "react";
import * as emailjs from 'emailjs-com';
import Breadcrumb from "../components/breadcrumb";

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
    validationSchema
  });

  return (
    <div className={styles.careerContainer}>
      <Nav />
      <Breadcrumb page="Careers" link="./careers" />
      <div className={styles.container}>
        <div className={styles.middle}>
          <Image src="/img/m-behind.gif" width="300" height="300" alt="Enquire within" />
          <form onSubmit={formik.handleSubmit}>
            <div className={`${styles.formCol} ${styles.formDecoration}`}>
              {Object.entries(formik.values).map(([key, value]) => {
                const hasError = formik.errors[key] && formik.touched[key];
                return (
                <div className={`${styles.singleCol} ${styles.fieldContainer}`} style={{ flexBasis: key === 'Other details' ? '100%' : 'initial' }} key={key}>
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
                          ...(hasError && {border: '1px solid red'}),
                          flex: 1
                        }}
                        placeholder={`${key}...`}
                      />
                    ),
                  }[key] || (
                    <input
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
    </div>
  )
}