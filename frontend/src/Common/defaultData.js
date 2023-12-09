import { Fragment } from "react"
import { MDBInput } from "mdb-react-ui-kit"

export const defaultLoginData = {
    "email": "",
    "password": ""
}

export const defaultRegisterData = {
    "name": "",
    ...defaultLoginData,
    "confirmPassword": "",
    "phoneNumber": "",
    "address1": "",
    "address2": "",
    "city": "",
    "state": "",
    "country": "",
    "zipCode": "",
}

export const loginInputValidations = {
    email: undefined,
    password: undefined,
}

export const registerInputValidations = {
    name: undefined,
    email: undefined,
    password: undefined,
    confirmPassword: undefined,
    phoneNumber: undefined,
    zipCode: undefined,
    address1: undefined,
    address2: false,
    city: undefined,
    state: undefined,
    country: undefined
}

export const inputValidationsRegexp = {
    name: /^[A-Za-z ]{2,}$/,
    firstName: /^[A-Za-z]{1,}$/,
    lastName: /^[A-Za-z]{1,}$/,
    email: /([\w\.]+)@([\w-]+\.)+[\w-]{2,4}/,
    password: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%#*?&]{8,}$/,
    confirmPassword: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%#*?&]{8,}$/,
    phoneNumber: /^\d{3}-?\d{3}-?\d{4}$/,
    zipCode: /\d{5}/,
    address1: /^[\w,./\- ]+$/,
    address2: /^[\w,./\- ]*$/,
    city: /^([A-Z][a-z]+\s?)+$/,
    state: /^[A-Z]{2}$/,
    country: /^([A-Z][a-z]+\s?)+$/
}

export const validateFields = (value, regexp) => !value.trim().match(regexp)

export const inputComponents = {
    "name": (e) => (
        <Fragment key={e?.key}>
            <MDBInput wrapperClass={`${e?.valid && e?.valid !== undefined ? 'mb-0' : 'mb-4'}`} label='Name*' id='name' name='name' type='text' {...e} />
            <div className={`form-text text-danger text-start ${e?.valid && e?.valid !== undefined ? "d-block mb-4" : "d-none"}`}>Please enter a valid name</div>
        </Fragment>
    ),
    "firstName": (e) => (
        <Fragment key={e?.key}>
            <MDBInput wrapperClass={`${e?.valid && e?.valid !== undefined ? 'mb-0' : 'mb-4'}`} label='First Name*' id='firstName' name='firstName' type='text' {...e} />
            <div className={`form-text text-danger text-start ${e?.valid && e?.valid !== undefined ? "d-block mb-4" : "d-none"}`}>Please enter a valid first name</div>
        </Fragment>
    ),
    "lastName": (e) => (
        <Fragment key={e?.key}>
            <MDBInput wrapperClass={`${e?.valid && e?.valid !== undefined ? 'mb-0' : 'mb-4'}`} label='Last Name*' id='lastName' name='lastName' type='text' {...e} />
            <div className={`form-text text-danger text-start ${e?.valid && e?.valid !== undefined ? "d-block mb-4" : "d-none"}`}>Please enter a valid last name</div>
        </Fragment>
    ),
    "email": (e) => (
        <Fragment key={e?.key}>
            <MDBInput wrapperClass={`${e?.valid && e?.valid !== undefined ? 'mb-0' : 'mb-4'}`} label='Email*' id='email' name='email' type='email' {...e} />
            <div className={`form-text text-danger text-start ${e?.valid && e?.valid !== undefined ? "d-block mb-4" : "d-none"}`}>Please enter a valid email</div>
        </Fragment>
    ),
    "password": (e) => (
        <Fragment key={e?.key}>
            <MDBInput wrapperClass={`${e?.valid && e?.valid !== undefined ? 'mb-0' : 'mb-4'}`} label='Password*' id='password' name='password' type='password' {...e} />
            <div className={`form-text text-danger text-start ${e?.valid && e?.valid !== undefined ? "d-block mb-4" : "d-none"}`}>Please enter a valid password, password should contain at least 8 characters, upper case, lower case, number and a special character</div>
        </Fragment>
    ),
    "confirmPassword": (e) => (
        <Fragment key={e?.key}>
            <MDBInput wrapperClass={`${e?.valid && e?.valid !== undefined ? 'mb-0' : 'mb-4'}`} label='Confirm Password*' id='confirmPassword' name='confirmPassword' type='password' {...e} />
            <div className={`form-text text-danger text-start ${e?.valid && e?.valid !== undefined ? "d-block mb-4" : "d-none"}`}>Passwords do not match</div>
        </Fragment>
    ),
    "phoneNumber": (e) => (
        <Fragment key={e?.key}>
            <MDBInput wrapperClass={`${e?.valid && e?.valid !== undefined ? 'mb-0' : 'mb-4'}`} label='Phone Number*' id='phoneNumber' name='phoneNumber' type='tel' {...e} />
            <div className={`form-text text-danger text-start ${e?.valid && e?.valid !== undefined ? "d-block mb-4" : "d-none"}`}>Please enter a valid phone number</div>
        </Fragment>
    ),
    "address1": (e) => (
        <Fragment key={e?.key}>
            <MDBInput wrapperClass={`${e?.valid && e?.valid !== undefined ? 'mb-0' : 'mb-4'}`} label='Address Line 1*' id='address1' name='address1' type='text' {...e} />
            <div className={`form-text text-danger text-start ${e?.valid && e?.valid !== undefined ? "d-block mb-4" : "d-none"}`}>Please enter a valid address</div>
        </Fragment>
    ),
    "city": (e) => (
        <Fragment key={e?.key}>
            <MDBInput wrapperClass={`${e?.valid && e?.valid !== undefined ? 'mb-0' : 'mb-4'}`} label='City*' id='city' name='city' type='text' {...e} />
            <div className={`form-text text-danger text-start ${e?.valid && e?.valid !== undefined ? "d-block mb-4" : "d-none"}`}>Please enter a valid city</div>
        </Fragment>
    ),
    "state": (e) => (
        <Fragment key={e?.key}>
            <MDBInput wrapperClass={`${e?.valid && e?.valid !== undefined ? 'mb-0' : 'mb-4'}`} label='State Abbrevation*' id='state' name='state' type='text' {...e} />
            <div className={`form-text text-danger text-start ${e?.valid && e?.valid !== undefined ? "d-block mb-4" : "d-none"}`}>Please enter a valid city</div>
        </Fragment>
    ),
    "country": (e) => (
        <Fragment key={e?.key}>
            <MDBInput wrapperClass={`${e?.valid && e?.valid !== undefined ? 'mb-0' : 'mb-4'}`} label='Country*' id='country' name='country' type='text' {...e} />
            <div className={`form-text text-danger text-start ${e?.valid && e?.valid !== undefined ? "d-block mb-4" : "d-none"}`}>Please enter a valid country</div>
        </Fragment>
    ),
    "address2": (e) => (
        <Fragment key={e?.key}>
            <MDBInput wrapperClass={`${e?.valid && e?.valid !== undefined ? 'mb-0' : 'mb-4'}`} label='Address Line 2' id='address2' name='address2' type='text' {...e} />
            <div className={`form-text text-danger text-start ${e?.valid && e?.valid !== undefined ? "d-block mb-4" : "d-none"}`}>Please enter a valid address</div>
        </Fragment>
    ),
    "zipCode": (e) => (
        <Fragment key={e?.key}>
            <MDBInput wrapperClass={`${e?.valid && e?.valid !== undefined ? 'mb-0' : 'mb-4'}`} label='Zip Code*' id='zipCode' name='zipCode' type='text' {...e} />
            <div className={`form-text text-danger text-start ${e?.valid && e?.valid !== undefined ? "d-block mb-4" : "d-none"}`}>Please enter a valid zip code</div>
        </Fragment>
    ),
}