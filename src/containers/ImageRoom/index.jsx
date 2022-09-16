import { HeartFilled, StarFilled, UploadOutlined } from "@ant-design/icons";
import React, { useEffect, useState } from "react";
import {
  GridDiv,
  GridItem,
  FlexDiv,
  TagImg,
  DivIcon,
  DivSocial,
  DivHover,
  DivShare,
  TagA,
  DivHeart,
  IconHeart,
  TagSpan,
  DivMarginBottom,
  TagH1,
  ButtonSave,
} from "./styled";
import { DivGap } from "../InfoRoom/styled";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router";
import { actFetchData } from "store/actions/detailRoom?";

export default function ImageRoom() {
  const { detailRoom } = useSelector((state) => state.detailRoomReducer);
  const dispatch = useDispatch();
  const { id } = useParams();
  const { listReviews } = useSelector((state) => state.listReviewsReducer);

  const newListReviews = () => {
    return listReviews
      ?.map((item) => item)
      .filter((e) => e.userId?.name !== undefined);
  };

  const newLists = newListReviews();

  useEffect(() => {
    dispatch(actFetchData(id));
  }, []);
  const [toggle, setToggle] = useState(false);

  return (
    <DivMarginBottom>
      <TagH1>{detailRoom?.name}</TagH1>
      <FlexDiv className="titleRoom" mgb={1}>
        <DivGap gap={10} mgb={1}>
          <DivGap gap={5} mgb={1}>
            <StarFilled style={{ color: "#f1204e" }} />
            <span>
              4,83 <TagSpan>({newLists.length} đánh giá)</TagSpan>
            </span>
          </DivGap>
          <DivGap gap={5} mgb={1}>
            <HeartFilled style={{ color: "#f1204e" }} />
            <span>Chủ nhà siêu cấp</span>
          </DivGap>
          <div>
            <TagSpan>Thành phố Vũng Tàu, Việt Nam</TagSpan>
          </div>
        </DivGap>
        <DivGap gap={15} mgb={1}>
          <DivHover>
            <DivShare>
              <UploadOutlined />
              <TagSpan>Chia sẻ</TagSpan>
            </DivShare>
            <DivSocial id="divSocial">
              <DivIcon>
                <TagA href="https://www.facebook.com/" target="blank">
                  <i className="fa-brands fa-facebook-f"></i>
                </TagA>
              </DivIcon>
              <DivIcon>
                <TagA href="https://www.linkedin.com/" target="blank">
                  <i className="fa-brands fa-linkedin-in"></i>
                </TagA>
              </DivIcon>
              <DivIcon>
                <TagA
                  href="https://www.linkedin.com/uas/login?session_redirect=https%3A%2F%2Fwww.linkedin.com%2FshareArticle%3Fmini%3Dtrue%26url%3Dhttps%3A%2F%2Fmaisonoffice.vn%2Fho-chi-minh%2Fquan-10%2Fviettel-complex-building%2Ftitle%3DViettel%2520Complex%2520Tower%26summary%3D%26source%3DMaison%2520Office"
                  target="blank"
                >
                  <i className="fa-regular fa-copy"></i>
                </TagA>
              </DivIcon>
            </DivSocial>
          </DivHover>
          <DivHeart>
            <IconHeart className="fa-solid fa-heart" active={toggle} />
            <ButtonSave
              onClick={() => {
                setToggle(!toggle);
              }}
            >
              Lưu
            </ButtonSave>
          </DivHeart>
        </DivGap>
      </FlexDiv>
      <GridDiv>
        <GridItem className="grid-item">
          <TagImg src={detailRoom?.image} alt="img1" />
        </GridItem>
        <GridItem className="grid-item">
          <TagImg src={detailRoom?.image} alt="img1" />
        </GridItem>
        <GridItem className="grid-item">
          <TagImg src={detailRoom?.image} alt="img1" />
        </GridItem>
        <GridItem className="grid-item">
          <TagImg src={detailRoom?.image} alt="img1" />
        </GridItem>
        <GridItem className="grid-item">
          <TagImg src={detailRoom?.image} alt="img1" />
        </GridItem>
      </GridDiv>
    </DivMarginBottom>
  );
}
