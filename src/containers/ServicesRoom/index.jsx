import React, { useState } from "react";
import { Col, Row } from "antd";
import "antd/dist/antd.css";
import { DivGap, TagP } from "../InfoRoom/styled";
import { ButtonShowAll } from "../ReviewRoom/styled";
import Box from "@mui/material/Box";
import { DivMarginBottom } from "containers/ImageRoom/styled";
import { ListIcon, StyledModal, Title } from "./styled";
import { useSelector } from "react-redux";

export default function ServicesRoom() {
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

  const { detailRoom } = useSelector((state) => state.detailRoomReducer);

  const dataIcon = [
    {
      id: 1,
      icon: detailRoom?.kitchen,
      className: "fa-solid fa-kitchen-set",
      content: "Bếp",
    },
    {
      id: 2,
      icon: detailRoom?.cableTV,
      className: "fa-solid fa-tv",
      content: "Tivi với truyền hình cáp tiêu chuẩn",
    },
    {
      id: 3,
      icon: detailRoom?.heating,
      className: "fa-solid fa-temperature-arrow-up",
      content: "Lò vi sóng",
    },
    {
      id: 4,
      icon: detailRoom?.indoorFireplace,
      className: "fa-solid fa-fire-burner",
      content: "Lò sưởi trong nhà",
    },
    {
      id: 5,
      icon: detailRoom?.gym,
      className: "fa-solid fa-dumbbell",
      content: "Phòng gym",
    },

    {
      id: 6,
      icon: detailRoom?.wifi,
      className: "fa-solid fa-wifi",
      content: "Wifi",
    },
    {
      id: 7,
      icon: detailRoom?.elevator,
      className: "fa-solid fa-elevator",
      content: "Thang máy",
    },

    {
      id: 8,
      icon: detailRoom?.pool,
      className: "fa-solid fa-person-swimming",
      content: "Hồ bơi",
    },
    {
      id: 9,
      icon: detailRoom?.hotTub,
      className: "fa-solid fa-bath",
      content: "Bồn nước nóng",
    },
    {
      id: 10,
      icon: detailRoom?.dryer,
      className: "fa-solid fa-jar",
      content: "Máy sấy khô",
    },
  ];

  let servicesList = [];

  const createList = () => {
    return dataIcon?.map((item, index) => {
      if (dataIcon[index]?.icon) {
        return servicesList.push(item);
      }
    });
  };

  createList();

  const renderAllServices = () => {
    return servicesList?.map((item, index) => {
      return (
        <DivGap key={item.id}>
          <div>
            <i className={item.className}></i>
          </div>
          <div>
            <TagP txtColor>{item.content}</TagP>
          </div>
        </DivGap>
      );
    });
  };

  return (
    <DivMarginBottom bdb>
      <h3>Tiện nghi</h3>
      <div>
        <Box sx={{ display: { xs: "none", md: "block" }, height: "141px" }}>
          <Row justify="space-between">
            <Col span={12}>
              {servicesList?.slice(0, 3).map((item) => {
                return (
                  <DivGap key={item.id}>
                    <div>
                      <i className={item.className}></i>
                    </div>
                    <div>
                      <TagP txtColor>{item.content}</TagP>
                    </div>
                  </DivGap>
                );
              })}
              {}
            </Col>
            <Col span={10}>
              {servicesList?.slice(4, 7).map((item) => {
                return (
                  <DivGap key={item.id}>
                    <div>
                      <i className={item.className}></i>
                    </div>
                    <div>
                      <TagP txtColor>{item.content}</TagP>
                    </div>
                  </DivGap>
                );
              })}
            </Col>
          </Row>
        </Box>
        <Box sx={{ display: { xs: "block", md: "none" } }}>
          {renderAllServices()}
        </Box>

        <div>
          <ButtonShowAll mb onClick={showModal} id="btnShowAll">
            Hiển thị tất cả
          </ButtonShowAll>
        </div>
      </div>
      <StyledModal
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <div>
          <DivMarginBottom mgb bdb>
            <Title>Nơi này có những gì cho bạn</Title>
          </DivMarginBottom>

          <ListIcon>{renderAllServices()}</ListIcon>
        </div>
      </StyledModal>
    </DivMarginBottom>
  );
}
