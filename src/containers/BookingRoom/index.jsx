import { StarFilled } from "@ant-design/icons";
import { DatePicker, Input } from "antd";
import { DivGap, TagH3 } from "containers/InfoRoom/styled";
import React, { useCallback, useEffect, useRef, useState } from "react";
import {
  BillDiv,
  DivMarginBottom,
  FlexDiv,
  TagSpan,
} from "../ImageRoom/styled";
import { useSelector, useDispatch } from "react-redux";
import {
  BookingBox,
  ButtonBooking,
  DashedDiv,
  StyledH5,
  StyledH6,
  StyledTagH3,
  StyledTagP,
  StyledTitle,
} from "./styled";
import { Col, Row } from "antd";
import { useParams } from "react-router";
import { actFetchData } from "store/actions/bookingRoom";
import { StyledModal } from "containers/ServicesRoom/styled";
import { useNavigate } from "react-router-dom";

export default function Booking() {
  const stylePosition = useRef(0);
  const { listReviews } = useSelector((state) => state.listReviewsReducer);
  const navigate = useNavigate();

  const eventScroll = useCallback(() => {
    window.addEventListener("scroll", () => {
      let sclX = window.innerWidth;
      let sclY = window.scrollY;
      // console.log(sclY);
      // console.log(sclX);
      if (768 < sclX && sclX <= 1440) {
        if (0 < sclY && sclY < 870) {
          stylePosition.current.style.position = "relative";
          stylePosition.current.style.top = "unset";
          stylePosition.current.style.transform = "none";
        } else if (870 <= sclY && sclY <= 1305) {
          stylePosition.current.style.position = "sticky";
          stylePosition.current.style.top = "0";
          stylePosition.current.style.transform = "none";
        } else if (sclY > 1310) {
          stylePosition.current.style.position = "relative";
          stylePosition.current.style.transform =
            "translate3d(0px, 420px, 0px)";
          stylePosition.current.style.top = "unset";
        }
      } else if (417 < sclX && sclX <= 768) {
        if (0 < sclY && sclY < 980) {
          stylePosition.current.style.position = "relative";
          stylePosition.current.style.top = "unset";
          stylePosition.current.style.transform = "none";
        } else if (980 <= sclY && sclY <= 1970) {
          stylePosition.current.style.position = "sticky";
          stylePosition.current.style.top = "0";
          stylePosition.current.style.transform = "none";
        } else if (sclY > 1975) {
          stylePosition.current.style.position = "relative";
          stylePosition.current.style.transform =
            "translate3d(0px, 880px, 0px)";
          stylePosition.current.style.top = "unset";
        }
      } else if (375 <= sclX && sclX <= 417) {
        stylePosition.current.style.position = "relative";
        stylePosition.current.style.top = "unset";
        stylePosition.current.style.transform = "none";
      }
    });
  }, []);

  useEffect(() => {
    eventScroll();
  }, []);

  const { id } = useParams();

  const ref = useRef({
    roomId: id,
    checkIn: "",
    checkOut: "",
    number: 0,
  });

  const { bookingRoom } = useSelector((state) => state.bookingRoomReducer);

  const { detailTicket } = useSelector((state) => state.detailTicketReducer);

  const dispatch = useDispatch();

  const handleOnChangeDatePicker = (val) => {
    ref.current = {
      roomId: id,
      checkIn: val[0]?._d,
      checkOut: val[1]?._d,
      number: 0,
    };
  };

  const handleOnChange = (e) => {
    const { value } = e.target;
    ref.current = {
      roomId: id,
      checkIn: ref.current.checkIn,
      checkOut: ref.current.checkOut,
      number: value,
    };
  };
  const handleBookingRoom = () => {
    if (!localStorage.getItem("UserCustomer")) {
      navigate("/login");
    } else {
      setIsModalVisible(true);
      dispatch(actFetchData(ref.current));
    }
  };

  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const newListReviews = () => {
    return listReviews
      ?.map((item) => item)
      .filter((e) => e.userId?.name !== undefined);
  };

  const newLists = newListReviews();

  const { detailRoom } = useSelector((state) => state.detailRoomReducer);

  const formatMoney = (money) => {
    const result = money?.toLocaleString("en-US", {
      style: "currency",
      currency: "VND",
    });
    return result;
  };

  const renderDaysAndToTal = () => {
    const day =
      detailTicket?.checkOut?.substring(8, 10) -
      detailTicket?.checkIn?.substring(8, 10);
    if (Object.keys(detailTicket).length === 0) {
      return (
        <>
          <>
            <FlexDiv bdb className="billAndService">
              <DivMarginBottom mgb>
                <StyledH6>{formatMoney(detailRoom?.price)} x 1 đêm</StyledH6>
                <StyledH6>Phí dịch vụ</StyledH6>
              </DivMarginBottom>
              <div>
                <StyledH5>{formatMoney(detailRoom?.price)}</StyledH5>
                <StyledH5>{formatMoney(100000)}</StyledH5>
              </div>
            </FlexDiv>
            <FlexDiv className="total">
              <div>
                <StyledH5>Tổng</StyledH5>
              </div>
              <div>
                <StyledH5>{formatMoney(detailRoom?.price + 100000)}</StyledH5>
              </div>
            </FlexDiv>
          </>
        </>
      );
    } else {
      if (day === 0) {
        return (
          <>
            <FlexDiv bdb className="billAndService">
              <DivMarginBottom mgb>
                <StyledH6>{formatMoney(detailRoom?.price)} x 1 đêm</StyledH6>
                <StyledH6>Phí dịch vụ</StyledH6>
              </DivMarginBottom>
              <div>
                <StyledH5>{formatMoney(detailRoom?.price)}</StyledH5>
                <StyledH5>{formatMoney(100000)}</StyledH5>
              </div>
            </FlexDiv>
            <FlexDiv className="total">
              <div>
                <StyledH5>Tổng</StyledH5>
              </div>
              <div>
                <StyledH5>{formatMoney(detailRoom?.price + 100000)}</StyledH5>
              </div>
            </FlexDiv>
          </>
        );
      } else {
        return (
          <>
            <FlexDiv bdb className="billAndService">
              <DivMarginBottom mgb>
                <StyledH6>
                  {formatMoney(detailRoom?.price)} x
                  {detailTicket?.checkOut?.substring(8, 10) -
                    detailTicket?.checkIn?.substring(8, 10)}{" "}
                  đêm
                </StyledH6>
                <StyledH6>Phí dịch vụ</StyledH6>
              </DivMarginBottom>
              <div>
                <StyledH5>{formatMoney(detailRoom?.price * day)}</StyledH5>
                <StyledH5>{formatMoney(100000)}</StyledH5>
              </div>
            </FlexDiv>
            <FlexDiv className="total">
              <div>
                <StyledH5>Tổng</StyledH5>
              </div>
              <div>
                <StyledH5>
                  {formatMoney(detailRoom?.price * day + 100000)}
                </StyledH5>
              </div>
            </FlexDiv>
          </>
        );
      }
    }
  };

  return (
    <div ref={stylePosition}>
      <BookingBox>
        <FlexDiv>
          <div>
            <TagH3>{formatMoney(detailRoom?.price)} / đêm</TagH3>
          </div>
          <div>
            <DivGap gap={5} mgb={1}>
              <StarFilled />
              <span>
                4,83 <TagSpan>({newLists.length} đánh giá)</TagSpan>
              </span>
            </DivGap>
          </div>
        </FlexDiv>
        <DashedDiv>
          <h6>Ngày nhận và trả phòng</h6>
          <Input.Group compact style={{ marginBottom: "10px" }}>
            <DatePicker.RangePicker
              onChange={handleOnChangeDatePicker}
              style={{ width: "100%" }}
            />
          </Input.Group>

          <Input.Group compact>
            <Input
              style={{ width: "20%" }}
              disabled
              defaultValue="Khách hàng"
            />
            <Input
              onChange={handleOnChange}
              style={{ width: "80%" }}
              placeholder="Số lượng khách"
            ></Input>
          </Input.Group>
        </DashedDiv>
        <ButtonBooking onClick={handleBookingRoom}>Đặt phòng</ButtonBooking>
        <BillDiv>{renderDaysAndToTal()}</BillDiv>
      </BookingBox>
      {/* <JustifyDiv>
        <FlagOutlined />
        <span>Báo cáo phòng cho thuê này</span>
      </JustifyDiv> */}
      <StyledModal
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <DivMarginBottom mgb bdb>
          <StyledTitle>{bookingRoom?.message}</StyledTitle>
        </DivMarginBottom>
        <Row justify="space-between">
          <Col span={10}>
            <StyledTagH3>Tên người đặt phòng</StyledTagH3>
            <StyledTagH3>Email</StyledTagH3>
            <StyledTagH3>Số điện thoại</StyledTagH3>
            <StyledTagH3>Giới tính</StyledTagH3>
            <StyledTagH3>Số lượng khách</StyledTagH3>
            <StyledTagH3>Ngày Check In</StyledTagH3>
            <StyledTagH3>Ngày Check Out</StyledTagH3>
          </Col>
          <Col span={12}>
            <StyledTagP txtColor>{bookingRoom?.userDetail?.name}</StyledTagP>
            <StyledTagP txtColor>{bookingRoom?.userDetail?.email}</StyledTagP>
            <StyledTagP txtColor>{bookingRoom?.userDetail?.phone}</StyledTagP>
            <StyledTagP txtColor>
              {bookingRoom?.userDetail?.gender ? "Nam" : "Nữ"}
            </StyledTagP>
            <StyledTagP txtColor>{ref.current.number}</StyledTagP>
            <StyledTagP txtColor>
              {detailTicket?.checkIn?.substring(0, 10)}
            </StyledTagP>
            <StyledTagP txtColor>
              {detailTicket?.checkOut?.substring(0, 10)}
            </StyledTagP>
          </Col>
        </Row>
      </StyledModal>
    </div>
  );
}
