import React from "react";
import {
  MDBFooter,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
} from "mdb-react-ui-kit";
import "./Footer.css";

function Footer() {
  return (
    <MDBFooter bgColor="dark" className="text-center text-lg-start text-muted">
      <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
        <div className="me-5 d-none d-lg-block text-white">
          <span>Get connected with us on social networks:</span>
        </div>

        <div>
          <a href="/" className="me-4 text-reset">
            <MDBIcon fab icon="instagram" />
          </a>
          <a
            href="https://www.linkedin.com/in/harshankrishna-k-v/"
            className="me-4 text-reset"
            target="blank"
          >
            <MDBIcon fab icon="linkedin" />
          </a>
          <a
            href="https://github.com/Harshankrishna/ecom-iplanet"
            className="me-4 text-reset"
            target="blank"
          >
            <MDBIcon fab icon="github" />
          </a>
        </div>
      </section>

      <section className="">
        <MDBContainer className="text-center text-md-start mt-5 text-white">
          <MDBRow className="mt-3">
            <MDBCol md="3" lg="4" xl="3" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">
                <MDBIcon className="me-1" />
                Food Kart
              </h6>
              <p>
                A Gastronomic Adventure Awaits! Indulge in Delectable Creations
                and Unparalleled Ambiance. Join Us for a Memorable Culinary
                Experience Today!
              </p>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-6">MENU</h6>
              <p>
                <a href="/category/iwatch" className="text-reset">
                  iWatch
                </a>
              </p>
              <p>
                <a href="/category/iphones" className="text-reset">
                  iPhones
                </a>
              </p>
              <p>
                <a href="/category/imac" className="text-reset">
                  iMac
                </a>
              </p>
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Useful links</h6>
              <p>
                <a href="/cart" className="text-reset">
                  Home
                </a>
              </p>
              <p>
                <a href="/orders" className="text-reset">
                  About
                </a>
              </p>
              <p>
                <a href="/category/all" className="text-reset">
                  Cart
                </a>
              </p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className="mx-auto mb-md-0 mb-4 ">
              <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
              <p>
                <MDBIcon icon="home" className="me-1" />
                TamilNadu, India.
              </p>
              <p>
                <MDBIcon icon="envelope" className="me-1" />
                harshankrishdev003@gmail.com
              </p>
              <p>
                <MDBIcon icon="phone" className="me-1" /> +91 80566 19487
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div
        className="text-center p-4 text-white"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
      >
        © 2023 Copyright:
        <a
          className="text-reset fw-bold"
          href="https://harshankrishna.netlify.app/"
        >
          Harshankrishna
        </a>
      </div>
    </MDBFooter>
  );
}

export default Footer;
