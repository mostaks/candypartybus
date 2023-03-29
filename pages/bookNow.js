import Image from "next/image"
import styles from '../styles/Book.module.css'
import * as yup from 'yup';
import { useFormik } from "formik"
import Nav from "../components/nav";
import { useState } from "react";
import * as emailjs from 'emailjs-com';
import Breadcrumb from "../components/breadcrumb";

const validationSchema = yup.object({
  'Full name': yup.string().required('Required field'),
  'Residential address': yup.string().required('Required field'),
  'Email': yup.string().email().required('Required field'),
  'Phone number': yup.number().required('Required field'),
  'Date of trip': yup.string().required('Required field'),
  'Rough # of passengers': yup.number().required('Required field'),
  'First departure location': yup.string().when('Trip type', {
    is: (val) => val !== 'Drive around',
    then: yup.string().required('Required field'),
    otherwise: yup.string()
  }),
  'First departure time': yup.string(),
  'First arrival location': yup.string().when('Trip type', {
    is: (val) => val !== 'Drive around',
    then: yup.string().required('Required field'),
    otherwise: yup.string()
  }),
  'First arrival time': yup.string(),
  'Second departure location': yup.string().when('Trip type', {
    is: (val) => val === 'Return',
    then: yup.string().required('Required field'),
    otherwise: yup.string()
  }),
  'Second departure time': yup.string(),
  'Second arrival location': yup.string().when('Trip type', {
    is: (val) => val === 'Return',
    then: yup.string().required('Required field'),
    otherwise: yup.string()
  }),
  'Second arrival time': yup.string(),
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
      'Date of trip': '',
      'Rough # of passengers': '',
      'Trip type': 'Return',
      'First departure location': '', 
      'First departure time': '', 
      'First arrival location': '',
      'First arrival time': '',
      'Second departure location': '', 
      'Second departure time': '', 
      'Second arrival location': '',
      'Second arrival time': '',
      'Other details': '',
    },
    onSubmit: async (values) => {
      console.log('values:', values);
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
      case key.includes('Date'): 
        return 'date';
      case key.includes('passengers'): 
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
    <div className={styles.bookContainer}>
      <Nav />
      <Breadcrumb page="Book now" link="./bookNow" />
      <div className={styles.container}>
        <div className={styles.middle}>
          <Image className={styles.imgBorder} src="/img/m-bus-book.gif" width="450" height="300" alt="Book now" />
          <form onSubmit={formik.handleSubmit}>
            <div className={`${styles.form} ${styles.formDecoration} ${styles.bookDecoration}`}>
              {Object.entries(formik.values).map(([key, value]) => {
                const hasError = formik.errors[key] && formik.touched[key];
                return (
                  <div 
                    className={
                      `${styles.twoCols} ${styles.fieldContainer} ${key === 'Trip type' && styles.radioContainer}`
                    } 
                    key={key} 
                    style={{
                      ...(key === 'Other details' && { width: '100%' })
                    }}
                  >
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
                      'Trip type': (
                        <div className={styles.radioWrapper}>
                          {['One way', 'Return', 'Drive around'].map((trip) => (
                            <div key={trip} className={styles.radio}>
                              <label>{trip}</label>
                              <input 
                                id={trip}
                                type="radio"
                                name={key} 
                                onChange={formik.handleChange}
                                value={trip}
                                checked={formik.values['Trip type'] === trip}
                              />
                            </div>
                          ))}
                        </div>
                      )
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
            <button disabled={submitted} className={styles.button} type="submit">
              <svg viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M93.781 51.578C95 50.969 96 49.359 96 48c0-1.375-1-2.969-2.219-3.578 0 0-22.868-1.514-31.781-10.422-8.915-8.91-10.438-31.781-10.438-31.781C50.969 1 49.375 0 48 0s-2.969 1-3.594 2.219c0 0-1.5 22.87-10.406 31.781-8.908 8.913-31.781 10.422-31.781 10.422C1 45.031 0 46.625 0 48c0 1.359 1 2.969 2.219 3.578 0 0 22.873 1.51 31.781 10.422 8.906 8.911 10.406 31.781 10.406 31.781C45.031 95 46.625 96 48 96s2.969-1 3.562-2.219c0 0 1.523-22.871 10.438-31.781 8.913-8.908 31.781-10.422 31.781-10.422Z"
                  fill="#000"
                />
              </svg>
              <svg viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M93.781 51.578C95 50.969 96 49.359 96 48c0-1.375-1-2.969-2.219-3.578 0 0-22.868-1.514-31.781-10.422-8.915-8.91-10.438-31.781-10.438-31.781C50.969 1 49.375 0 48 0s-2.969 1-3.594 2.219c0 0-1.5 22.87-10.406 31.781-8.908 8.913-31.781 10.422-31.781 10.422C1 45.031 0 46.625 0 48c0 1.359 1 2.969 2.219 3.578 0 0 22.873 1.51 31.781 10.422 8.906 8.911 10.406 31.781 10.406 31.781C45.031 95 46.625 96 48 96s2.969-1 3.562-2.219c0 0 1.523-22.871 10.438-31.781 8.913-8.908 31.781-10.422 31.781-10.422Z"
                  fill="#000"
                />
              </svg>
              <svg viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M93.781 51.578C95 50.969 96 49.359 96 48c0-1.375-1-2.969-2.219-3.578 0 0-22.868-1.514-31.781-10.422-8.915-8.91-10.438-31.781-10.438-31.781C50.969 1 49.375 0 48 0s-2.969 1-3.594 2.219c0 0-1.5 22.87-10.406 31.781-8.908 8.913-31.781 10.422-31.781 10.422C1 45.031 0 46.625 0 48c0 1.359 1 2.969 2.219 3.578 0 0 22.873 1.51 31.781 10.422 8.906 8.911 10.406 31.781 10.406 31.781C45.031 95 46.625 96 48 96s2.969-1 3.562-2.219c0 0 1.523-22.871 10.438-31.781 8.913-8.908 31.781-10.422 31.781-10.422Z"
                  fill="#000"
                />
              </svg>
              <svg viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M93.781 51.578C95 50.969 96 49.359 96 48c0-1.375-1-2.969-2.219-3.578 0 0-22.868-1.514-31.781-10.422-8.915-8.91-10.438-31.781-10.438-31.781C50.969 1 49.375 0 48 0s-2.969 1-3.594 2.219c0 0-1.5 22.87-10.406 31.781-8.908 8.913-31.781 10.422-31.781 10.422C1 45.031 0 46.625 0 48c0 1.359 1 2.969 2.219 3.578 0 0 22.873 1.51 31.781 10.422 8.906 8.911 10.406 31.781 10.406 31.781C45.031 95 46.625 96 48 96s2.969-1 3.562-2.219c0 0 1.523-22.871 10.438-31.781 8.913-8.908 31.781-10.422 31.781-10.422Z"
                  fill="#000"
                />
              </svg>
              <svg viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M93.781 51.578C95 50.969 96 49.359 96 48c0-1.375-1-2.969-2.219-3.578 0 0-22.868-1.514-31.781-10.422-8.915-8.91-10.438-31.781-10.438-31.781C50.969 1 49.375 0 48 0s-2.969 1-3.594 2.219c0 0-1.5 22.87-10.406 31.781-8.908 8.913-31.781 10.422-31.781 10.422C1 45.031 0 46.625 0 48c0 1.359 1 2.969 2.219 3.578 0 0 22.873 1.51 31.781 10.422 8.906 8.911 10.406 31.781 10.406 31.781C45.031 95 46.625 96 48 96s2.969-1 3.562-2.219c0 0 1.523-22.871 10.438-31.781 8.913-8.908 31.781-10.422 31.781-10.422Z"
                  fill="#000"
                />
              </svg>
              <span className={styles.span}>Submit!</span>
              <span className={`${styles.span} ${styles.hidden}`} aria-hidden="true">Submit!</span>
            </button>
          </form> 
        </div>
      </div>
    </div>
  )
}