import 'react-app-polyfill/ie11';
import * as React from 'react';
import {Formik, Field, FormikHelpers, Form} from 'formik';

interface Values {
  userText: string;
}

export const Formula = () => (
  <section style={{margin: '0 auto', textAlign: 'center'}}>
    <h1>Form for Tom Jones</h1>
    <Formik
      initialValues={{
        userText: '',
      }}
      onSubmit={(
        values: Values,
        {setSubmitting}: FormikHelpers<Values>,
      ) => {
        setTimeout(() => {
          // eslint-disable-next-line no-alert
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 500);
      }}
    >
      <Form style={{width: '200px', display: 'flex', flexWrap: 'wrap', justifyContent: 'center', margin: '0 auto'}}>
        <label htmlFor="userText">Your text</label>
        <textarea id="userText" name="text" placeholder="Your text here" required/>

        <label htmlFor="USD">USD</label>
        <Field id="USD" name="USD"/>
        <label htmlFor="RUB">RUB</label>
        <Field id="RUB" name="RUB"/>
        <label htmlFor="EUR">EUR</label>
        <Field id="EUR" name="EUR"/>

        <button type="submit">Save</button>
      </Form>
    </Formik>
  </section>
);

