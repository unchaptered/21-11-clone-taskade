import styled from "styled-components";

import Logo from "../../Components/Logo";
import Form from "../../Components/Form";
import Alink from "../../Components/Alink";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f9faff;
`;
const Content = styled.div`
  padding: 30px;
  position: absolute;
  width: 844px;
  height: 455px;
  left: calc(50%-844px / 2);
  top: calc(50%-455px / 2 + 0.5px);
  mix-blend-mode: normal;
  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.25);
  background-color: white;

  display: flex;
  align-items: center;
  justify-content: space-around;
  & > form {
    text-align: left;
    & > h3 {
      font-size: 20px;
      line-height: 25px;
      color: rgba(234, 188, 90, 0.91);
      margin-bottom: 30px;
    }
    & > div {
      & > h5 {
        width: 100%;
        font-size: 12px;
        margin-bottom: 12px;
      }
      & > div {
        width: 100%;
        display: flex;
        align-items: center;
        margin-bottom: 10px;
        & > input {
          color: rgba(100, 100, 100, 0.5);
        }
        & > label {
          height: auto;
          font-size: 20px;
          color: rgba(100, 100, 100, 0.5);
        }
      }
    }
  }
`;

export default () => {
  return (
    <Container>
      <Content>
        <Logo width="278px" height="278px" borderRaduis="176.5px" />
        <Form>
          <h3>Welcome! Let's personalized your experience 😀</h3>
          <div>
            <h5> New Tap default </h5>
            <div>
              <input id="default" type="checkbox" />
              <label htmlFor="default">Default settings</label>
            </div>
            <div>
              <input id="taskade" type="checkbox" />
              <label htmlFor="taskade">Taskade (Reccomendtaion)</label>
            </div>
          </div>
          <Alink
            path="/account"
            text="Launch"
            width="238px"
            height="35px"
            colour="white"
            fsize="20px"
            backcolor="rgba(234, 188, 90, 1)"
          />
        </Form>
      </Content>
    </Container>
  );
};
