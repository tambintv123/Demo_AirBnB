import styled from "styled-components";
import { Title as _Title } from "containers/InfoRoom/styled";
import { TagP as _TagP } from "containers/InfoRoom/styled";

const BoxDiv = styled.div`
  border: 1px solid #c5c2c2;
  padding: 1rem;
  border-radius: 15px;
`;

const Avatar = styled.img`
  border-radius: 50%;
  width: 100px;
  height: 100px;
  margin-bottom: 10px;
`;

const CenterDiv = styled.div`
  text-align: center;
`;

const UpdateAvatar = styled.button`
  border: none;
  cursor: pointer;
  background-color: transparent;
  transition: all 0.4s;
  &:hover {
    font-weight: 600px;
    transition: all 0.4s;
    text-decoration: underline;
  }
`;

const Title = styled(_Title)`
  font-size: 17px;
`;

const TagP = styled(_TagP)`
  font-size: 15px;
  margin-bottom: 16px;
`;

const TagH3 = styled.h3`
  margin-bottom: 0;
`;

export { BoxDiv, Avatar, CenterDiv, UpdateAvatar, Title, TagP, TagH3 };
