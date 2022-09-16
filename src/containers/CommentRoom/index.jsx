import React from "react";
import { FlexDiv } from "../ImageRoom/styled";
import { DivGap } from "../InfoRoom/styled";
import {
  BoxComment,
  ContentComment,
  StyledSpan,
  TagH4,
  TagImg,
} from "./styled";

export default function CommentRoom(props) {
  const { review } = props;

  return (
    <BoxComment>
      <FlexDiv className="comment">
        <div>
          <DivGap mgb={1}>
            <div>
              <TagImg src={review.userId?.avatar} alt="img" />
            </div>
            <div>
              <TagH4>{review?.userId?.name}</TagH4>
              <StyledSpan>{review.created_at.substring(0, 10)}</StyledSpan>
            </div>
          </DivGap>
        </div>
      </FlexDiv>
      <div>
        <ContentComment>{review.content}</ContentComment>
      </div>
    </BoxComment>
  );
}
