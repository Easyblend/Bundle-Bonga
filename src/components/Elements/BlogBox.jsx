import React from "react";
import styled from "styled-components";

export default function BlogBox({ tag, title, text, action, author }) {
  return (
    <WrapperBtn
      className="animate pointer"
      onClick={action ? () => action() : null}
    >
      <Wrapper className="whiteBg radius8 shadow-lg border-2 border border-secondary border-opacity-25">
        <h3 className="font20 extraBold">{title}</h3>
        <p className="font15 text-dark" style={{ padding: "30px 0" }}>
          {text}
        </p>
        <p className="font15 extraBold">{author}</p>
        <div className="flex">
          <p className="tag coralBg radius6 font13 extraBold">{tag}</p>
        </div>
      </Wrapper>
    </WrapperBtn>
  );
}

const Wrapper = styled.div`
  width: 100%;
  text-align: left;
  padding: 20px 30px;
  margin-top: 30px;
`;
const WrapperBtn = styled.button`
  border: 0px;
  outline: none;
  background-color: transparent;
  :hover {
    transform: scale(1.05);
  }

  @media (pointer: coarse) {
    :hover {
      transform: scale(1);
    }
  }
`;
