import { StarFilled } from "@ant-design/icons";
import React, { useEffect, useState } from "react";
import { Col, Row } from "antd";
import "antd/dist/antd.css";
import { FlexDiv, TagH1 } from "../ImageRoom/styled";
import CommentRoom from "../CommentRoom";
import {
  ButtonShowAll,
  MarginTopDiv,
  Rate,
  StyledModal,
  Progress,
  DivRate,
  ListComments,
  StyledFlexDiv,
  ListCommentsDiv,
} from "./styled";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { actFetchData } from "store/actions/listReviews";
import { DivGap, TagP } from "containers/InfoRoom/styled";
import Box from "@mui/material/Box";

export default function ReviewRoom() {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const dataRate = [
    { id: 1, title: "Mức độ sạch sẽ", percent: 90, rate: 4.8 },
    { id: 2, title: "Liên lạc", percent: 95, rate: 4.9 },
    { id: 3, title: "Nhận phòng", percent: 85, rate: 4.7 },
    { id: 4, title: "Độ chính xác", percent: 95, rate: 4.9 },
    { id: 5, title: "Vị trí", percent: 90, rate: 4.8 },
    { id: 6, title: "Giá trị", percent: 85, rate: 4.7 },
  ];

  const renderListRate = () => {
    return dataRate.map((item) => {
      return (
        <FlexDiv className="rateSmallScreen" key={item.id}>
          <TagP txtColor>{item.title}</TagP>
          <div>
            <Progress
              percent={item.percent}
              showInfo={false}
              strokeColor={{
                "0%": "#090909",
                "100%": "#232422",
              }}
            />
            <Rate>{item.rate}</Rate>
          </div>
        </FlexDiv>
      );
    });
  };

  const { listReviews } = useSelector((state) => state.listReviewsReducer);
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(actFetchData(id));
  }, []);

  const newListReviews = () => {
    return listReviews
      ?.map((item) => item)
      .filter((e) => e.userId?.name !== undefined);
  };

  const renderListComment = () => {
    const newLists = newListReviews();

    return newLists.map((item, index) => {
      return <CommentRoom key={index} review={item} />;
    });
  };
  const newLists = newListReviews();

  return (
    <div>
      <DivGap gap={5} mgb={16}>
        <StarFilled style={{ color: "#f1204e" }} />
        <span>
          4,83 <span>({newLists.length} đánh giá)</span>
        </span>
      </DivGap>
      <DivRate>
        <Box sx={{ display: { xs: "none", md: "block" } }}>
          <Row justify="space-between">
            <Col xs={24} sm={24} md={10}>
              {dataRate.slice(0, 3).map((item) => {
                return (
                  <FlexDiv className="rate" key={item.id}>
                    <TagP txtColor>{item.title}</TagP>
                    <div>
                      <Progress
                        percent={item.percent}
                        showInfo={false}
                        strokeColor={{
                          "0%": "#090909",
                          "100%": "#232422",
                        }}
                      />
                      <Rate>{item.rate}</Rate>
                    </div>
                  </FlexDiv>
                );
              })}
            </Col>
            <Col xs={24} sm={24} md={10}>
              {dataRate.slice(3, 6).map((item) => {
                return (
                  <FlexDiv className="rate" key={item.id}>
                    <TagP txtColor>{item.title}</TagP>
                    <div>
                      <Progress
                        percent={item.percent}
                        showInfo={false}
                        strokeColor={{
                          "0%": "#090909",
                          "100%": "#232422",
                        }}
                      />
                      <Rate>{item.rate}</Rate>
                    </div>
                  </FlexDiv>
                );
              })}
            </Col>
          </Row>
        </Box>
        <Box sx={{ display: { xs: "block", md: "none" } }}></Box>
      </DivRate>
      <MarginTopDiv>
        <Box sx={{ display: { xs: "none", md: "block" } }}>
          <Row justify="space-between">
            <Col xs={24} sm={24} md={10}>
              {newLists?.slice(12, 14)?.map((item, index) => {
                return <CommentRoom key={index} review={item} />;
              })}
            </Col>
            <Col xs={24} sm={24} md={10}>
              {newLists?.slice(19, 21)?.map((item, index) => {
                return <CommentRoom key={index} review={item} />;
              })}
            </Col>
          </Row>
        </Box>
        <Box sx={{ display: { xs: "block", md: "none" } }}>
          <ListCommentsDiv>
            {newLists?.slice(0, 4)?.map((item, index) => {
              return <CommentRoom key={index} review={item} />;
            })}
          </ListCommentsDiv>
        </Box>
      </MarginTopDiv>
      <ButtonShowAll mb className="btnShowAll" onClick={showModal}>
        Hiển thị tất cả
      </ButtonShowAll>
      <StyledModal
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        className="newStyle"
      >
        <DivGap gap={5} mgb={16}>
          <StarFilled style={{ color: "#f1204e" }} />
          <TagH1 size={31}>4,83 - ({newLists.length} đánh giá)</TagH1>
        </DivGap>
        <Box sx={{ display: { xs: "none", md: "block" } }}>
          <Row justify="space-between">
            <Col md={11}>
              <DivRate>{renderListRate()}</DivRate>
            </Col>
            <Col
              style={{
                overflow: "scroll",
                height: "570px",
              }}
              md={12}
            >
              {renderListComment()}
            </Col>
          </Row>
        </Box>
        <Box sx={{ display: { xs: "block", md: "none" } }}>
          <StyledFlexDiv>
            <DivRate>
              <DivRate>{renderListRate()}</DivRate>
            </DivRate>
            <ListComments>{renderListComment()}</ListComments>
          </StyledFlexDiv>
        </Box>
      </StyledModal>
    </div>
  );
}
