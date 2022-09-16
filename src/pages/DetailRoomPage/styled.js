import styled from "styled-components";
import { devices } from "themes/commonStyles";

export const StyledDiv = styled.div`
  @media ${devices.mobile} {
  }
  @media ${devices.tablet} {
    height: 100vh;
  }
  @media ${devices.laptop} {
    height: 95vh;
  }
`;
