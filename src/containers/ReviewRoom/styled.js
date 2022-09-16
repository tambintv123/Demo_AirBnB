import styled from "styled-components";
import { Modal } from "antd";
import { Progress as _Progress } from "antd";
import { devices } from "themes/commonStyles";
import { FlexDiv as _FlexDiv } from "../ImageRoom/styled";

const ButtonShowAll = styled.button`
  border: 1px solid black;
  border-radius: 10px;
  padding: 5px 20px;
  background-color: transparent;
  color: black;
  font-size: 16px;
  transition: all 0.5s;
  font-weight: 500;
  outline: none !important;
  cursor: pointer;
  &:hover {
    color: white;
    background-color: #f1204e;
    transition: all 0.5s;
    border: 1px solid #c73553;
  }
  margin-bottom: ${(props) => (props.mb ? "2rem" : "")};
`;

const StyledModal = styled(Modal)`
  width: 900px !important;
  padding-bottom: 24px;
  top: 50% !important;
  left: 50%;
  transform: translate(-50%, -50%) !important;
  margin: unset !important;
  .ant-modal-content {
    border-radius: 10px;

    @media ${devices.mobile} {
      height: 600px;
    }
    @media ${devices.mobileS} {
      height: 600px;
    }
    @media ${devices.tablet} {
      height: 700px;
    }
    @media ${devices.laptop} {
      height: 700px;
    }
    .ant-modal-header {
      border-radius: 10px !important;
      border: none;
    }
    .ant-modal-footer {
      display: none;
    }
  }
`;

const Rate = styled.span`
  margin-left: 10px;
`;

const MarginTopDiv = styled.div`
  margin-top: 3rem;
`;

const Progress = styled(_Progress)``;

const DivRate = styled.div`
  width: 100%;
  .rate {
    @media ${devices.mobile} {
    }
    @media ${devices.mobileS} {
      flex-direction: row;
    }
    @media ${devices.tablet} {
      flex-direction: row;
    }
    @media ${devices.laptop} {
    }
    ${Progress} {
      @media ${devices.mobile} {
      }
      @media ${devices.mobileS} {
      }
      @media ${devices.tablet} {
        width: 100px;
      }
      @media ${devices.laptop} {
        width: 250px;
      }
    }
  }
  .rateSmallScreen {
    @media ${devices.mobile} {
      flex-direction: row;
      margin-bottom: 2px;
    }
    @media ${devices.mobileS} {
      flex-direction: row;
      margin-bottom: 2px;
    }
    @media ${devices.tablet} {
      flex-direction: row;
      margin-bottom: 15px;
    }
    @media ${devices.laptop} {
    }
    ${Progress} {
      @media ${devices.mobile} {
        width: 150px;
      }
      @media ${devices.mobileS} {
        width: 180px;
      }
      @media ${devices.tablet} {
        width: 100px;
      }
      @media ${devices.laptop} {
        width: 240px;
      }
    }
  }
`;

const ListComments = styled.div`
  display: flex;
  gap: 10px;
  align-items: start;
  flex-direction: column;
  overflow: scroll;
  justify-content: start;
  margin-top: 20px;
  width: 100%;
  @media ${devices.mobile} {
    height: 290px;
    margin-top: 25px;
  }
  @media ${devices.mobileS} {
    height: 295px;
  }
  @media ${devices.tablet} {
    height: 590px;
  }
  @media ${devices.laptop} {
    height: 590px;
  }
`;

const StyledFlexDiv = styled(_FlexDiv)`
  align-items: start;
`;

const ListCommentsDiv = styled.div`
  display: flex;
  gap: 15px;
  align-items: center;
  width: 97%;
  overflow: scroll;
`;

export {
  ButtonShowAll,
  StyledModal,
  Rate,
  MarginTopDiv,
  Progress,
  DivRate,
  ListComments,
  StyledFlexDiv,
  ListCommentsDiv,
};
