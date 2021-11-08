// Main Button
import styled from "styled-components";

const Button = styled.button`
  /* color: ${({ fcolor }) => (fcolor !== null ? fcolor : "black")};
  font-size: ${({ fsize }) => (fsize !== null ? fsize : "20px")};
  width: ${({ width }) => (width !== null ? width : "100%")};
  height: ${({ height }) => (height !== null ? height : "100px")};
  border-radius: ${({ height }) => (height !== null ? height : "15px")}; */
  position: relative;
  margin-bottom: 10px;
  width: 305px;
  height: 30px;
  display: flex;
  align-items: center;
  background-color: ${({ bgcolor }) => (bgcolor !== null ? bgcolor : "white")};
  transition: all 0.1s ease-in-out;

  &:hover {
    color: black;
    font-weight: 600;
    background-color: rgba(227, 171, 51, 1);
    @media screen and (max-width: 990px) {
      background-color: initial;
    }
  }
  & > div {
    width: 14px;
    height: 14px;
    border-radius: 7px;
    background-color: #c4c4c4;
  }
  & > div.unfolded {
    margin-left: 13px;
    @media screen and (max-width: 990px) {
      opacity: 0;
    }
  }
  & > div.folded {
    position: fixed;
    left: calc((100px - 35px) / 2);
    opacity: 0;
    transition: all 0.2s ease-in-out;
    @media screen and (max-width: 990px) {
      opacity: 1;
    }
    &:hover {
      background-color: rgba(227, 171, 51, 1);
    }
  }
  & > span {
    font-size: 15px;
    margin-left: 15px;
    @media screen and (max-width: 990px) {
      opacity: 0;
    }
  }
`;

export default ({
  text,
  width = null,
  height = null,
  fcolor = "white",
  fsize = "20px",
  bgcolor = "rgba(234, 188, 90, 1)",
}) => {
  return (
    <Button width={width} height={height} fcolor={fcolor} fsize={fsize}>
      <div className="unfolded" bgcolor={bgcolor}></div>
      <span>{text}</span>
      <div className="folded" bgcolor={bgcolor}></div>
    </Button>
  );
};
