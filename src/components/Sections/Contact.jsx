import React from "react";
import styled from "styled-components";
// Assets

export default function Contact() {
  return (
    <Wrapper id="contact">
      <div className="lightBg">
        <div className="container">
          <HeaderInfo>
            <h5 className="">Having issues with your purchase?</h5>
            <h1 className="font40 extraBold">Contact Us</h1>
            <p className="font13">
              Bundle Bonga REsponds as quickly as they can. We try to deliver to
              our customers
              <br />
              Amazing customer services
            </p>
          </HeaderInfo>
          <div className="row" style={{ paddingBottom: "30px" }}>
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
              <Form>
                <label className="font13">First name:</label>
                <input
                  type="text"
                  id="fname"
                  name="fname"
                  className="font20 extraBold"
                />
                <label className="font13">Email:</label>
                <input
                  type="text"
                  id="email"
                  name="email"
                  className="font20 extraBold"
                />
                <label className="font13">Subject:</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className="font13 extraBold"
                />
                <textarea
                  rows="4"
                  cols="50"
                  type="text"
                  id="message"
                  name="message"
                  className="font20 extraBold"
                />
              </Form>
              <SumbitWrapper className="flex">
                <a
                  href="mailto:bundlebongo@gmail.com"
                  className="btn bg-primary text-light"
                >
                  Send Message
                </a>
              </SumbitWrapper>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 flex">
              <img
                src="https://images.unsplash.com/photo-1567473030492-533b30c5494c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
                alt=""
                width="100%"
                height="100%"
                className="rounded-5 shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%;
`;
const HeaderInfo = styled.div`
  padding: 70px 0 30px 0;
  @media (max-width: 860px) {
    text-align: center;
  }
`;
const Form = styled.form`
  padding: 70px 0 0px 0;
  input,
  textarea {
    width: 100%;
    background-color: transparent;
    border: 0px;
    outline: none;
    box-shadow: none;
    border-bottom: 1px solid #707070;
    height: 30px;
    margin-bottom: 30px;
  }
  textarea {
    min-height: 100px;
  }
  @media (max-width: 860px) {
    padding: 30px 0;
  }
`;
const ButtonInput = styled.input`
  border: 1px solid #7620ff;
  background-color: #7620ff;
  width: 100%;
  padding: 15px;
  outline: none;
  color: #fff;
  :hover {
    background-color: #580cd2;
    border: 1px solid #7620ff;
    color: #fff;
  }
  @media (max-width: 991px) {
    margin: 0 auto;
  }
`;

const SumbitWrapper = styled.div`
  @media (max-width: 991px) {
    width: 100%;
    margin-bottom: 50px;
  }
`;
