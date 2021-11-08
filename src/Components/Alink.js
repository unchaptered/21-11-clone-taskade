import styled from "styled-components";
import { Link } from "react-router-dom";

const ALink = styled(Link)`
  color: ${({ colour }) => (colour !== null ? colour : "black")};
  font-size: ${({ fsize }) => (fsize !== null ? fsize : "20px")};
  width: ${({ width }) => (width !== null ? width : "300px")};
  height: ${({ height }) => (height !== null ? height : "300px")};
  border-radius: ${({ height }) => (height !== null ? height : "15px")};
  background-color: ${({ backcolor }) =>
    backcolor !== null ? backcolor : "rgba(234, 188, 90, 1)"};
  border: ${({ border }) => (border !== "none" ? border : "none")};
  margin: ${({ margin }) => (margin !== "0 0 0 0" ? margin : "0 0 0 0")};
  display: flex;
  align-items: center;
  justify-content: center;
  & > strong {
    margin-left: 5px;
    font-weight: 600;
  }
  transition: all 0.2s ease-in-out;
  &:hover {
    opacity: 0.8;
    color: white;
    background-color: olivedrab;
    transform: scale(1.05);
  }
`;

export default ({
  path,
  text,
  strong,
  width = null,
  height = null,
  colour = "white",
  fsize = "20px",
  backcolor = "rgba(234, 188, 90, 1)",
  border = "none",
  margin = "0 0 0 0",
}) => {
  return (
    <ALink
      to={path}
      width={width}
      height={height}
      colour={colour}
      fsize={fsize}
      backcolor={backcolor}
      border={border}
      margin={margin}
    >
      {text}
      <strong>{strong}</strong>
    </ALink>
  );
};
