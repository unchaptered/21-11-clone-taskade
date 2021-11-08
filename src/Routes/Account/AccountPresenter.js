import styled from "styled-components";

import Logo from "../../Components/Logo";
import Alink from "../../Components/Alink";
import BLink from "../../Components/BLink";
const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f8f8f8;
`;
const Content = styled.div`
  padding: 30px;
  position: absolute;
  width: 455px;
  height: 455px;
  left: calc(50% - 455px / 2 - 0.5px);
  top: calc(50% - 455px / 2 - 0.5px);
  mix-blend-mode: normal;
  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.25);
  background-color: white;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  & > main {
    width: 100%;
    & > div > .contentSubs {
      font-size: 14px;
      color: rgba(234, 188, 90, 0.5);
      margin-bottom: 8px;
    }
    & > .contentTitle {
      font-size: 20px;
      color: rgba(0, 0, 0, 0.91);
      margin-bottom: 30px;
    }
    & > .contentEtc {
      font-size: 14px;
      color: rgba(100, 100, 100, 0.3);
      margin-bottom: 10px;
      transform: translateX(11px);
    }
  }
`;
const Linkdiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Subdiv = styled.div`
  height: 18px;
  display: flex;
`;

export default () => {
  return (
    <Container>
      <Content>
        <Logo width="139px" height="139px" borderRaduis="176.5px" />
        <main>
          <Subdiv>
            <h5>Sign up</h5>
            <BLink paht="/" text="Back" />
          </Subdiv>
          <h3 className="contentTitle">Create Your Free Acocunt</h3>

          <Linkdiv>
            <Alink
              path="/main"
              text="Sign with "
              strong="Google"
              width="370px"
              height="46px"
              colour="rgba(100, 100, 100, 0.4)"
              border="2px solid rgba(100, 100, 100, 0.4)"
              fsize="14px"
              backcolor="white"
              margin="0 0 10px 0"
            />
            <Alink
              path="/main"
              text="Sign with a "
              strong="Email"
              width="370px"
              height="36px"
              colour="white"
              fsize="14px"
              backcolor="rgba(234, 188, 90, 1)"
              margin="0 0 30px 0"
            />
          </Linkdiv>
          <h3 className="contentEtc">
            If you don't want create account click this!
          </h3>
          <Linkdiv>
            <Alink
              path="/main"
              text="Sign with a "
              strong="Email"
              width="370px"
              height="36px"
              colour="white"
              fsize="14px"
              backcolor="rgba(234, 188, 90, 1)"
            />
          </Linkdiv>
        </main>
      </Content>
    </Container>
  );
};
