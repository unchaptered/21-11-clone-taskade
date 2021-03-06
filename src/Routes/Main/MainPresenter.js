import styled from "styled-components";

import NavLink from "../../Components/NavLink";
import MButton from "../../Components/MButton";

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  background-color: rgba(23, 25, 28, 1);
  padding: 386px 0 0 355px;
  color: white;
  transition: all 0.2s ease-in-out;
  @media screen and (max-width: 990px) {
    /* 63px 100px  + each 10px*/
    /* padding-top  + 313px */
    padding: 386px 0 0 90px;
  }
`;

const NavLeft = styled.nav`
  padding: 20px 10px;
  position: absolute;
  top: 0;
  left: 0;
  width: 345px;
  height: 100vh;
  background-color: rgba(28, 31, 34, 1);
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  transition: all 0.2s ease-in-out;
  @media screen and (max-width: 990px) {
    width: 80px;
  }
  & > div {
    margin-bottom: 30px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const NavTop = styled.nav`
  position: absolute;
  top: 0;
  left: 0;
  width: calc(100% - 345px);
  margin-left: 345px;
  height: 63px;
  background-color: rgba(23, 25, 28, 1);
  display: flex;
  align-items: center;
  justify-content: space-around;
  transition: all 0.2s ease-in-out;
  @media screen and (max-width: 990px) {
    width: calc(100% - 80px);
    margin-left: 80px;
  }
  & > div:nth-child(1) {
    width: 100%;
    display: flex;
    justify-content: flex-start;
    padding-left: 30px;
  }
  & > div:nth-child(2) {
    width: 100%;
    display: flex;
    justify-content: center;
  }
  & > div:nth-child(3) {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    padding-right: 30px;
  }
`;
const Banner = styled.div`
  position: absolute;
  opacity: 0.8;
  background-image: url("https://images.unsplash.com/photo-1503355292172-d861fcfa2228?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80");
  background-repeat: no-repeat;
  background-position: center;
  background-size: 100%;
  top: 63px;
  left: 0;
  width: calc(100% - 345px);
  margin-left: 345px;
  height: 313px;
  display: flex;
  transition: all 0.2s ease-in-out;
  @media screen and (max-width: 990px) {
    width: calc(100% - 80px);
    margin-left: 80px;
  }
`;
export default () => {
  return (
    <Container>
      <NavLeft>
        <div>
          <MButton text="??? ????????????" />
          <MButton text="????????????" />
        </div>
        <div>
          <MButton text="?????? ?????????" />
          <MButton text="?????? ??????" />
          <MButton text="?????? ?????????" />
          <MButton text="????????? ??????" />
          <MButton text="???????????? ??????" />
          <MButton text="???????????? ?????????" />
          <MButton text="?????? ???????????????" />
          <MButton text="????????? ???" />
          <MButton text="????????????" />
          <MButton text="?????????" />
          <MButton text="????????? ????????????" />
        </div>
      </NavLeft>
      <NavTop>
        <div>
          <NavLink
            path="/"
            text="????????????"
            colour="white"
            fsize="14px"
            width="auto"
            height="40px"
            backcolor="none"
          />
        </div>
        <div>
          <NavLink
            path="/"
            text="????????????"
            colour="white"
            fsize="14px"
            width="auto"
            height="40px"
            backcolor="none"
          />
        </div>
        <div>
          <NavLink
            path="/"
            text="?????????"
            colour="white"
            fsize="14px"
            width="auto"
            height="40px"
            backcolor="none"
          />
          <NavLink
            path="/"
            text="????????????"
            colour="white"
            fsize="14px"
            width="auto"
            height="40px"
            backcolor="none"
          />
        </div>
      </NavTop>
      <Banner />
    </Container>
  );
};
// colour
// fsize
// width
// height
// backcolor
// border
// margin
