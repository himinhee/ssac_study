import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import {
  AiOutlineSearch,
  AiOutlineBell,
  AiOutlineComment,
} from "react-icons/ai";

const NavbarWrap = styled.div`
  border-bottom: 1px solid #dbdbdb;
  position: fixed;
  width: 100%;
  background: #ffffff;
  height: 6.4rem;
`;

const NavContainer = styled.div`
  max-width: 99.2rem;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  padding: 0 0.8rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 0.8rem;
`;

const NavFrontWrap = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
`;

const NavLogo = styled.img`
  width: 9.4rem;
  height: 2.4rem;
  margin-right: 1.5rem;
  padding: 0.8rem;
`;

const NavLinkWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const NavStyledLink = styled(Link)`
  font-size: 1.4rem;
  font-weight: normal;
  text-decoration: none;
  color: #555;
  margin-right: 0.4rem;
  padding: 0.8rem;
  line-height: 1.5;
`;

const NavProfileWrap = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
`;

const NavIconsWrap = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
`;

const NavStyledIcon = styled.div`
  font-size: 2.5rem;
  display: flex;
  align-items: center;
  cursor: pointer;
  color: #555;
  padding: 0.8rem;
  margin-right: 0.4rem;
`;

const NavProfileImage = styled.img`
  width: 3.4rem;
  height: 3.4rem;
  padding: 0.8rem;
`;

const NavSearchRoundBox = styled.div`
  border: 1px solid black;
  padding: 0.2rem 0.5rem;
  border-radius: 1rem;
  display: flex;
  align-items: center;
`;

const NavSearchInput = styled.input`
  flex: 1;
  border: none;
  width: 13rem;

  &:focus {
    outline: none;
  }
`;

const SearchInputWrap = styled.div`
  position: relative;
  margin-right: 1rem;
`;

function NavbarComponent() {
  return (
    <>
      <NavbarWrap>
        <NavContainer>
          <NavFrontWrap>
            <Link to="/">
              <NavLogo src="https://careerly.co.kr/_next/static/images/img-logo-789fb5a9000960c8e86ed6e1a0f54a2f.png"></NavLogo>
            </Link>
            <NavLinkWrap>
              <>
                <NavStyledLink to="/discover-profile">
                  프로필 탐색
                </NavStyledLink>
                <NavStyledLink to="/jobs">인턴 채용공고</NavStyledLink>
              </>
            </NavLinkWrap>
          </NavFrontWrap>
          <NavProfileWrap>
            <NavIconsWrap>
              <SearchInputWrap>
                <NavSearchRoundBox>
                  <NavSearchInput name="search" />
                  <NavStyledIcon>
                    <AiOutlineSearch style={{ fontSize: "2.7rem" }} />
                  </NavStyledIcon>
                </NavSearchRoundBox>
              </SearchInputWrap>
              <NavStyledIcon>
                <AiOutlineComment />
              </NavStyledIcon>
              <NavStyledIcon>
                <AiOutlineBell />
              </NavStyledIcon>
              <NavProfileImage src="https://careerly.co.kr/_next/static/images/img_profile-dummy-9e28d259cbf9e126af9c467a4bf0884f.png"></NavProfileImage>
            </NavIconsWrap>
          </NavProfileWrap>
        </NavContainer>
      </NavbarWrap>
    </>
  );
}

export default NavbarComponent;
