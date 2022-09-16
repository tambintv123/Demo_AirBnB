import styled from "styled-components";
import { devices } from "themes/commonStyles";

const TagImg = styled.img`
  border-radius: 50%;
  width: 70px;
  height: 70px;
`;

const BoxComment = styled.div`
  background-color: transparent;
  border-radius: 10px;
  padding: 1rem;
  margin-bottom: 2rem;
  border: 1px solid #717171;
  @media ${devices.mobile} {
  }
  @media ${devices.mobileS} {
  }
  @media ${devices.tablet} {
  }
  @media ${devices.laptop} {
  }
  .comment {
    align-items: start;
    @media ${devices.mobile} {
      flex-direction: column;
    }
    @media ${devices.tablet} {
      font-size: 14px;
      flex-direction: column;
    }
    @media ${devices.laptop} {
      flex-direction: row;
    }
  }
`;

const TagH4 = styled.h4`
  margin-bottom: 0;
  font-weight: bold;
`;
const StyledSpan = styled.span`
  font-style: italic;
`;

const ContentComment = styled.p`
  @media ${devices.mobile} {
    width: 200px;
    height: 100px;
  }
  @media ${devices.mobileS} {
    width: 260px;
    height: 100px;
  }
  @media ${devices.tablet} {
    width: 230px;
  }
  @media ${devices.laptop} {
  }
`;

export { TagImg, BoxComment, TagH4, StyledSpan, ContentComment };
