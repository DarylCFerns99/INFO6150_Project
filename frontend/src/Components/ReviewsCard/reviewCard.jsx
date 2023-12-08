import React from 'react'
import { three } from '../../Common/imageImports'
import { 
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
} from 'mdb-react-ui-kit'

const ReviewCard = () => {
  return (
    <MDBContainer
      fluid
      className="p-4 p-md-5 text-center text-lg-start shadow-1-strong rounded"
      style={{
        backgroundImage:
          "url(https://mdbcdn.b-cdn.net/img/Photos/Others/background2.webp)",
      }}
    >
      <MDBRow className="d-flex justify-content-center">
        <MDBCol md="10">
          <MDBCard>
            <MDBCardBody className="m-3">
              <MDBRow>
                <MDBCol
                  lg="4"
                  className="d-flex justify-content-center align-items-start mb-4 mb-lg-0"
                >
                  <img
                    src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
                    className="rounded-circle img-fluid shadow-1"
                    alt="woman avatar"
                    width="65px"
                    height="65px"
                  />
                </MDBCol>
                <MDBCol lg="8">
                  <p className="fw-bold lead mb-2">
                    <strong>Anna Smith</strong>
                  </p>
                  <span className="fw-bold text-muted mb-0">rating</span> ||
                  <span className="fw-bold text-muted mb-0"> timestamp </span>
                  <p className="text-muted fw-light mt-4">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id
                    quam sapiente molestiae numquam quas, voluptates omnis nulla
                    ea odio quia similique corrupti magnam.
                  </p>
                </MDBCol>
              </MDBRow>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}
export default ReviewCard