import React from 'react'
import { useForm, ValidationError } from '@formspree/react';
import {
    MDBInput,
    MDBCheckbox,
    MDBBtn
  } from 'mdb-react-ui-kit';

const ContactUs = () => {
    const [state, handleSubmit] = useForm("xpzgvjkp");

  if (state.succeeded) {
    return <p>Thanks for joining!</p>;
  }
  return (
    <div className="d-flex justify-content-center align-items-center h-75 ">
      <form onSubmit={handleSubmit} className="w-50">
        <MDBInput id="form4Example1" wrapperClass="mb-4" label="Name" />
        <MDBInput
          type="email"
          id="email"
          name="email"
          wrapperClass="mb-4"
          label="email"
        />

        <ValidationError prefix="Email" field="email" errors={state.errors} />

        <MDBInput
          wrapperClass="mb-4"
          textarea
          id="message"
          name="message"
          rows={6}
          column={4}
          label="message"
        />

        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />

        <MDBBtn type="submit" disabled={state.submitting} className="mb-4" block>
          Submit
        </MDBBtn>
      </form>
    </div>
  );
}

export default ContactUs