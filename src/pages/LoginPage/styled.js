import styled from "styled-components";
import { Link } from "react-router-dom";

const DivLog = styled.div`
  display: ${(props) => (props.active ? "block" : "none")};
  border: 1px solid #9e9a9a38;
  padding: 10px 0;
  position: absolute;
  top: 80px;
  right: 26px;
  border-radius: 10px;
  box-shadow: 5px 5px 5px #a29d9d54;
  background-color: white;
  z-index: 10;
`;

const ButtonLog = styled.button`
  border: none;
  background-color: transparent;
  padding: 1rem;
  .login {
    font-weight: 550;
  }
  .register {
  }
  &:hover {
    background-color: #7e767633;
    transition: all 0.4s;
  }
`;

const LinkRouter = styled(Link)`
  color: black;
  display: block;
  width: 150px;
  text-align: start;
  &:hover {
    color: black;
  }
`;

export { DivLog, ButtonLog, LinkRouter };
