import styled from "styled-components";
import { TagH3, TagP, Title } from "containers/InfoRoom/styled";

const BookingBox = styled.div`
  border: 1px solid #c5c2c2;
  padding: 1rem;
  border-radius: 10px;
  box-shadow: 5px 5px 5px #8888;
`;

const ButtonBooking = styled.button`
  padding: 15px 30px;
  border-radius: 10px;
  color: white;
  width: 100%;
  font-size: 16px;
  font-weight: bold;
  border: 1px solid #c73553;
  background-color: #f1204e;
  cursor: pointer;
  transition: all 0.5s;
  margin-bottom: 10px;
  &:hover {
    color: #f1204e;
    background-color: transparent;
    transition: all 0.5s;
  }
`;

const DashedDiv = styled.div`
  border: 1px dashed #c5c2c2;
  padding: 1rem;
  border-radius: 10px;
  margin-bottom: 15px;
`;

const StyledA = styled.a`
  text-align: center;
  display: block;
  margin-bottom: 15px;
`;

const StyledH6 = styled.h6`
  text-decoration: underline;
  text-align: ${(props) => (props.txtAlign ? "end" : "")};
  font-size: 15px;
`;

const StyledH5 = styled.h5`
  font-size: 15px;
  text-align: end;
`;

const JustifyDiv = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
`;

const StyledTagH3 = styled(TagH3)`
  margin-bottom: 18px;
`;

const StyledTagP = styled(TagP)`
  font-size: 16px;
  margin-bottom: 18px;
`;

const StyledTitle = styled(Title)`
  text-align: center;
  text-transform: uppercase;
`;

export {
  BookingBox,
  ButtonBooking,
  DashedDiv,
  StyledA,
  StyledH6,
  JustifyDiv,
  StyledH5,
  StyledTagH3,
  StyledTagP,
  StyledTitle,
};
