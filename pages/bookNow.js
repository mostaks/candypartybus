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
          <Image className={styles.imgBorder} src="/img/m-bus-book.gif" width="500" height="300" alt="Book now" />
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
            <button disabled={submitted} type="submit" className={styles.glowingBtn}><span className={styles.glowingTxt}>S<span className={styles.faultyLetter}>U</span>BMIT</span></button>
          </form> 
        </div>
      </div>
    </div>
  )
}