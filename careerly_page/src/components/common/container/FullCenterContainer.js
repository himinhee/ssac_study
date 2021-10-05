import React from "react";
import styled from "styled-components";

const ContainerWrap = styled.div`
  width: 100%;
  //height: 100vh;
  //브라우저의 높이-60px 자동 계산. 띄어쓰기 필수!
  height: calc(100vh - 6rem);
  background: rgb(230, 240, 245);
  padding-top: 6rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function FullCenterContainer({ children }) {
  return (
    <>
      <ContainerWrap>{children}</ContainerWrap>
    </>
  );
}

export default FullCenterContainer;
