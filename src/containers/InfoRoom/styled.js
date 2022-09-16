import styled from "styled-components";
import { Avatar as _Avatar } from "antd";
import { StyledModal as _StyledModal } from "containers/ReviewRoom/styled";
import { devices } from "themes/commonStyles";

const DivGap = styled.div`
  display: flex;
  align-items: center;
  gap: ${(props) => (props.gap ? props.gap * 1 : "15")}px;
  margin-bottom: ${(props) => (props.mgb ? props.mgb * 1 : "25")}px;

  @media ${devices.mobile} {
  }
  @media ${devices.mobileS} {
  }
  @media ${devices.tablet} {
    font-size: 14px;
  }
  @media ${devices.laptop} {
  }
`;

const TagP = styled.p`
  margin: 0;
  color: ${(props) => (props.txtColor ? "black" : "#717171")};
`;

const StyledDiv = styled.div`
  height: 170px;
`;

const TagH5 = styled.h5`
  font-weight: 550;
  margin: 0;
  font-size: 16px;
`;

const TagH3 = styled.h3`
  font-weight: 550;
  margin-bottom: 0;
`;

const Title = styled.h1`
  font-size: 28px;
  margin: 0;
  font-weight: 550;
`;

const BtnReadMoreText = styled.button`
  background-color: transparent;
  border: none;
  font-weight: bold;
  text-decoration: underline;
  padding: 0;
  cursor: pointer;
  color: black;
`;

const Avatar = styled(_Avatar)`
  color: #f56a00;
  background-color: #fde3cf;
  display: block;
  border-radius: 50%;
  .ant-avatar-string {
    left: 35%;
  }
`;

const StyledModal = styled(_StyledModal)`
  .ant-modal-content {
    border-radius: 10px;
    @media ${devices.mobile} {
      height: 600px;
    }
    @media ${devices.mobileS} {
      height: 600px;
    }
    @media ${devices.tablet} {
      height: 500px;
    }
    @media ${devices.laptop} {
      height: 500px;
    }
  }
`;

export {
  DivGap,
  TagP,
  StyledDiv,
  TagH5,
  TagH3,
  Title,
  BtnReadMoreText,
  Avatar,
  StyledModal,
};
