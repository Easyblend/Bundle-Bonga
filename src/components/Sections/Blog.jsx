import React from "react";
import styled from "styled-components";
// Components
import BlogBox from "../Elements/BlogBox";
import FullButton from "../Buttons/FullButton";
import TestimonialSlider from "../Elements/TestimonialSlider";

import { useNavigate } from "react-router-dom";

export default function Blog() {
  const navigate = useNavigate();
  return (
    <Wrapper id="blog">
      <div className="whiteBg">
        <div className="container">
          <HeaderInfo>
            <h1 className="font40 extraBold">
              <span className="text-danger">Vodafone</span> Bonga Offers!!
            </h1>
            <p className="fs-5">
              Need a special <span className="text-danger">Vodafone</span>{" "}
              Package?{" "}
              <a href="mailto:bundlebongo@gmail.com" className="text-primary">
                Contact us
              </a>
              <br />
              Bundle Bonga dey for U!!
            </p>
          </HeaderInfo>
          <div className="row textCenter">
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <BlogBox
                title="2 days Package 3.5GB "
                text="Get 3.5 GB worth of data. Lasts for maximun of 2 days "
                tag="5.00 GHC"
                author="Duration 2 days"
                action={() => navigate("/purchase")}
              />
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <BlogBox
                title="2 days Package 7.0GB"
                text="Get 7 GB worth of data. Lasts for maximun of 2 days "
                tag="9.00 GHC"
                author="Duration 2 days"
                action={() => navigate("/purchase")}
              />
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <BlogBox
                title="2 Days Package 9.0GB"
                text="Get 9 GB worth of data. Lasts for maximun of 2 days "
                tag="10.00 GHC"
                author="Duration 2 days"
                action={() => navigate("/purchase")}
              />
            </div>
          </div>
          <div className="row textCenter">
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <BlogBox
                title="Weekly package 10.5GB"
                text="Get 10.5 GB worth of data. 3.5GB two days each. Lasts for maximun of 6 days"
                tag="15.00 GHC"
                author="Duration 6 days"
                action={() => navigate("/purchase")}
              />
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <BlogBox
                title="Weekly package 27.0GB"
                text="Get 27 GB worth of data. 9GB for 3 days in a week. Lasts for maximun of 6 days"
                tag="21.00 GHC"
                author="Duration 6 days"
                action={() => navigate("/purchase")}
              />
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <BlogBox
                title="Super Monthly 105.0GB"
                text="You get 3.5GB worth of data each day for a month. Lasts for a maximum of 1 month"
                tag="100.00 GHC"
                author="Duration 30 days"
                action={() => navigate("/purchase")}
              />
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <BlogBox
                title="Super Monthly 270.0GB"
                text="You get 9GB worth of data each day for a month. Lasts for a maximum of 1 month"
                tag="150.00 GHC"
                author="Duration 30 days"
                action={() => navigate("/purchase")}
              />
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <BlogBox
                title="Downloading Bundle 90.0GB"
                text="You get 90GB worth of data for 2 day.Lasts for a maximum of 2 days"
                tag="50.00 GHC"
                author="Duration 2 days"
                action={() => navigate("/purchase")}
              />
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <BlogBox
                title="Downloading Bundle 27.0GB"
                text="You get 27GB worth of data for 2 day.Lasts for a maximum of 2 days"
                tag="20.00 GHC"
                author="Duration 2 days"
                action={() => navigate("/purchase")}
              />
            </div>
          </div>
          <div className="row flexCenter">
            <div style={{ margin: "20px 0", width: "fit-content" }}>
              <FullButton
                title="Purchase a Package "
                action={() => navigate("/purchase")}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="lightBg" style={{ padding: "50px 0" }}>
        <div className="container">
          <HeaderInfo>
            <h1 className="font40 extraBold">Loving Customs</h1>
            <p className="font13">
              Bundle Bongo gives users the chance to make a comment and leave a
              feed back. Here are a few
              <br />
              Want to leave a feedback too?.{" "}
              <a href="mailto:bundlebongo@gmail.com" className="text-primary">
                Click here
              </a>
            </p>
          </HeaderInfo>
          <TestimonialSlider />
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%;
  padding-top: 20px;
`;
const HeaderInfo = styled.div`
  margin-bottom: 30px;
  @media (max-width: 860px) {
    text-align: center;
  }
`;
