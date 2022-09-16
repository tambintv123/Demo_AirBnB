import { StyledModal as _StyledModal } from "containers/ReviewRoom/styled";
import styled from "styled-components";
import { devices } from "themes/commonStyles";
import { Title as _Title } from "containers/InfoRoom/styled";

const ListIcon = styled.div`
  height: 275px;
  overflow: scroll;
  @media ${devices.mobile} {
    height: 280px;
  }
  @media ${devices.mobileS} {
    height: 270px;
  }
  @media ${devices.tablet} {
    height: 275px;
  }
  @media ${devices.laptop} {
    height: 275px;
  }
`;

const StyledModal = styled(_StyledModal)`
  width: 500px !important;
  .ant-modal-content {
    border-radius: 10px;

    @media ${devices.mobile} {
      height: 400px;
    }
    @media ${devices.mobileS} {
      height: 400px;
    }
    @media ${devices.tablet} {
      height: 400px;
    }
    @media ${devices.laptop} {
      height: 400px;
    }
  }
`;

const Title = styled(_Title)`
  @media ${devices.mobile} {
    font-size: 24px;
  }
  @media ${devices.mobileS} {
    font-size: 28px;
  }
  @media ${devices.tablet} {
    font-size: 28px;
  }
  @media ${devices.laptop} {
    font-size: 28px;
  }
`;

export { ListIcon, StyledModal, Title };
