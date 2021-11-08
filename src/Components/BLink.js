// 뒤로가기
import styled from "styled-components";
import { Link } from "react-router-dom";

const Blink = styled(Link)`
  font-size: 14px;
  margin: 0 10px;
  color: rgba(100, 100, 100, 0.3);
  transition: all 0.2s ease-in-out;
  &:hover {
    color: rgba(0, 60, 0, 1);
    transform: scale(1.05);
  }
`;

export default ({ text = "err", path = "/" }) => (
  <Blink to={path}>{text}</Blink>
);
