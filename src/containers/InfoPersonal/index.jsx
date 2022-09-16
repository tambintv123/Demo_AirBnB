import { DivMarginBottom } from "containers/ImageRoom/styled";
import React from "react";
import { Col, Row } from "antd";
import { ContentInfoUser, TitleInfoUser } from "./styled";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { actFetchData } from "store/actions/detailUser";

export default function InfoPersonal() {
  const { detailUser } = useSelector((state) => state.detailUserReducer);
  const id = "6315d6f1fee2fc001c0e9cf0";
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actFetchData(id));
  }, []);
  return (
    <div>
      <DivMarginBottom bdb>
        <h1>Xin chào, tôi là {detailUser?.name}</h1>
        {/* <span>Bắt đầu tham gia vào 2021</span> */}
        {/* <DivMarginBottom mgb>
          <button>Chinh sửa</button>
        </DivMarginBottom> */}
        {/* <DivMarginBottom mgb>
          <StarFilled style={{ color: "#f1204e" }} />
          <span>
            4,83 <span>( đánh giá)</span>
          </span>
        </DivMarginBottom> */}
      </DivMarginBottom>
      <DivMarginBottom bdb>
        <DivMarginBottom>
          <h1>Thông tin cá nhân </h1>
          <Row>
            <Col span={8}>
              <TitleInfoUser>Tên</TitleInfoUser>
              <TitleInfoUser>Địa chỉ email</TitleInfoUser>
              <TitleInfoUser>Giới tính</TitleInfoUser>
              <TitleInfoUser>Ngày sinh</TitleInfoUser>
              <TitleInfoUser>Địa chỉ</TitleInfoUser>
            </Col>
            <Col span={12}>
              <ContentInfoUser>{detailUser?.name}</ContentInfoUser>
              <ContentInfoUser>{detailUser?.email}</ContentInfoUser>
              <ContentInfoUser>
                {detailUser?.gender ? "Nam" : "Nữ"}
              </ContentInfoUser>
              <ContentInfoUser>
                {detailUser?.birthday?.substring(0, 10)}
              </ContentInfoUser>
              <ContentInfoUser>{detailUser?.address}</ContentInfoUser>
            </Col>
          </Row>
        </DivMarginBottom>
      </DivMarginBottom>
    </div>
  );
}
