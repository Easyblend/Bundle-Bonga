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
                title="Regular Daily 6.0GB "
                text="Get 6 GB worth of data. Lasts for maximun of 2 days and minimum of 1 day"
                tag="5.00 GHC"
                author="Duration 1-2 days"
                action={() => navigate("/purchase")}
              />
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <BlogBox
                title="VIP Daily 12.0GB"
                text="Get 12 GB worth of data. Lasts for maximun of 2 days and minimum of 1 day"
                tag="10.00 GHC"
                author="Duration 1-2 days"
                action={() => navigate("/purchase")}
              />
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <BlogBox
                title="3-Days Package 18.0GB"
                text="Get 6 GB worth of data. Each day for 3 days. Lasts for maximun of 5 days and minimum of 3 day"
                tag="15.00 GHC"
                author="Duration 3-4 days"
                action={() => navigate("/purchase")}
              />
            </div>
          </div>
          <div className="row textCenter">
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <BlogBox
                title="VVIP Daily 9.0GB"
                text="Get 9 GB worth of data. Lasts for maximun of 2 days and minimum of 1 day"
                tag="7.00 GHC"
                author="Duration 1-2 days"
                action={() => navigate("/purchase")}
              />
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <BlogBox
                title="VIP Weekly 27.0GB"
                text="you get 9GB each day for three days in a week. Bundle does not role over. LAsts for a week"
                tag="25.00 GHC"
                author="Duration Exactly 1 week"
                action={() => navigate("/purchase")}
              />
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <BlogBox
                title="Super Monthly 36.0GB"
                text="You get 9GB worth of data each week for a month. Lasts for a maximum of 1 month"
                tag="50.00 GHC"
                author="Duration 1 month "
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
