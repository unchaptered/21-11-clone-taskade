import styled from "styled-components";

const Logo = styled.div`
  display: flex;
  width: ${({ width }) => (width !== null ? width : "278px")};
  height: ${({ height }) => (height !== null ? height : "278px")};
  border-radius: ${({ boderRadius }) =>
    boderRadius !== null ? boderRadius : "176.5px"};
  background-image: url("https://images.unsplash.com/photo-1596854372407-baba7fef6e51?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=880&q=80");
  background-position: center;
  background-size: 100%;
  transition: all 0.2s ease-in-out;
  &:hover {
    opacity: 0.8;
  }
`;

export default ({ text, width = null, height = null, boderRadius = null }) => {
  return <Logo width={width} height={height} boderRadius={boderRadius} />;
};
