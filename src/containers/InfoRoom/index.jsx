import { Col, Row } from "antd";
import React, { useState } from "react";
import { DivMarginBottom, FlexDiv, TagH1, TagImg } from "../ImageRoom/styled";
import {
  BtnReadMoreText,
  DivGap,
  StyledDiv,
  TagH3,
  TagH5,
  TagP,
  Title,
  Avatar,
  StyledModal,
} from "./styled";
import {
  CalendarOutlined,
  FireOutlined,
  HomeOutlined,
  SkinOutlined,
} from "@ant-design/icons";

import { useSelector } from "react-redux";

export default function InfoRoom() {
  const { detailRoom } = useSelector((state) => state.detailRoomReducer);

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

  const dataReadMore = [
    {
      id: 1,
      title: "Bảo đảm bảo vệ đặt phòng",
      content:
        "Trong trường hợp hãn hữu khi Chủ nhà cần hủy đặt phòng của bạn trong vòng 30 ngày trước ngày nhận phòng, chúng tôi sẽ tìm cho bạn một chỗ ở tương tự hoặc tốt hơn, hoặc sẽ hoàn tiền cho bạn.",
    },
    {
      id: 2,
      title: "Bảo đảm nhận phòng",
      content:
        "Nếu bạn không thể nhận phòng và Chủ nhà không thể giải quyết vấn đề này, chúng tôi sẽ tìm cho bạn một chỗ ở tương tự hoặc tốt hơn có thời gian ở tương đương, hoặc chúng tôi sẽ hoàn tiền cho bạn.",
    },
    {
      id: 3,
      title: "Bảo đảm chi phí tương xứng",
      content:
        "Trong thời gian ở, nếu bạn nhận thấy chỗ ở không đúng như quảng cáo, ví dụ như tủ lạnh ngừng hoạt động và Chủ nhà không thể dễ dàng khắc phục vấn đề này. Khi đó, chúng tôi sẽ tìm cho bạn một chỗ ở tương tự hoặc tốt hơn, hoặc chúng tôi sẽ hoàn tiền cho bạn.",
    },
    {
      id: 4,
      title: "Đường dây an toàn 24 giờ",
      content:
        "Nếu cảm thấy không an toàn, bạn sẽ được ưu tiên liên hệ với nhân viên hỗ trợ an toàn được đào tạo đặc biệt của chúng tôi, bất kể ngày đêm.",
    },
  ];

  return (
    <DivMarginBottom bdb>
      <FlexDiv className="infoRoom" mgb={32} bdb>
        <DivMarginBottom mgb>
          <Title className="nameMasterRoom">
            Toàn bộ căn hộ, chủ nhà Phong
          </Title>
          <TagH1 className="numberOfRoom" size={16}>
            {detailRoom?.guests} khách-{detailRoom?.bedRoom} phòng ngủ -{" "}
            {detailRoom?.bath} phòng tắm
          </TagH1>
        </DivMarginBottom>
        <div>
          <div>
            <Avatar size={50}>
              <TagImg
                w
                bdr
                src="https://joeschmoe.io/api/v1/random"
                alt="https://joeschmoe.io/api/v1/random"
              />
            </Avatar>
          </div>
          <div style={{ position: "relative" }}>
            <svg
              viewBox="0 0 14 24"
              role="presentation"
              aria-hidden="true"
              focusable="false"
              style={{
                height: "1em",
                width: "1em",
                display: "block",
                fill: "currentcolor",
                position: "absolute",
                right: "0",
                top: "-20px",
                fontSize: "25px",
              }}
            >
              <path
                d="m10.5 20.0005065c0 1.9326761-1.56704361 3.4994935-3.5 3.4994935s-3.5-1.5668174-3.5-3.4994935c0-1.9326762 1.5670426-3.5005065 3.5-3.5005065s3.5 1.5678303 3.5 3.5005065m-9.99486248-18.58757644-.00513752 8.13836018c0 .45796416.21682079.88992936.58880718 1.17090736l5.07730539 3.831699c.4870761.367971 1.16836618.367971 1.65647028.0009994l5.08141685-3.8266984c.3719859-.2789784.5898342-.7109444.5908612-1.16790827.0010271-1.75186288.0041101-6.21051146.0051391-8.14035983 0-.50396002-.4202834-.91292822-.9392158-.91292822l-11.11643181-.00699945c-.51790391-.00099942-.93818728.40796878-.93921487.91292823"
                fill="#fff"
              ></path>
              <path
                d="m12 9.5-5-3.70124468 5-3.79875532zm-6.1292309 9.187485c-.52182677.3180834-.8707691.8762459-.8707691 1.5144379 0 .9937534.83703449 1.7980771 1.870162 1.7980771.81806646 0 1.50434636-.5065007 1.75946763-1.2095239z"
                fill="#ffb400"
              ></path>
              <path d="m12 9.5-5 3.75-5-3.75v-7.5z" fill="#ff5a5f"></path>
              <path
                d="m7 24c-2.2060547 0-4-1.7939453-4-3.9990234 0-2.2060547 1.7939453-4.0009766 4-4.0009766s4 1.7949219 4 4.0009766c0 2.2050781-1.7939453 3.9990234-4 3.9990234zm0-7c-1.6542969 0-3 1.3466797-3 3.0009766 0 1.6533203 1.3457031 2.9990234 3 2.9990234s3-1.3457031 3-2.9990234c0-1.6542969-1.3457031-3.0009766-3-3.0009766zm.0039062-1.8242188c-.4560547 0-.9121094-.1064453-1.2617188-.3164062l-5.0458984-3.8642578c-.4697265-.3642578-.696289-.8525391-.696289-1.4951172v-8c.0009766-.3730469.1679688-.7529297.4580078-1.0429688.2900391-.2905273.6689453-.4570312 1.0410156-.4570312h.0019531 10.9990235c.7851562 0 1.5.7148438 1.5 1.5v7.9277344c-.0009766.6762695-.2421875 1.2177734-.6953125 1.5668945l-5.0009766 3.8325195c-.3505859.2333985-.8251953.3486328-1.2998047.3486328zm-5.5058593-14.1757812c-.1044922 0-.2324219.0625-.3330078.1635742-.1015625.1020508-.1650391.230957-.1650391.3374024v7.9990234c0 .3305664.0888672.5341797.3066406.703125l4.9970703 3.8310547c.3330078.1953125 1.0859375.2001953 1.4208984-.0205078l4.9716797-3.8125c.2001954-.1542969.3027344-.4155274.303711-.7749024v-7.9267578c0-.2285156-.2714844-.4995117-.5-.4995117h-11-.0009766s0 0-.0009765 0z"
                fill="#484848"
              ></path>
            </svg>
          </div>
        </div>
      </FlexDiv>

      <div>
        <DivGap>
          <div>
            <HomeOutlined style={{ fontSize: "30px" }} />
          </div>
          <div>
            <TagH5>Toàn bộ nhà</TagH5>
            <TagP>Bạn sẽ có chung cư cao cấp của riêng mình.</TagP>
          </div>
        </DivGap>
        <DivGap>
          <div>
            <SkinOutlined style={{ fontSize: "30px" }} />
          </div>
          <div>
            <TagH5>Vệ sinh tăng cường</TagH5>
            <TagP>
              Chủ nhà này cam kết thực hiện vệ sinh tăng cường theo quy định của
              AirBnB. <span></span>
              <BtnReadMoreText id="btnReadMore" onClick={showModal}>
                Hiển thị thêm
              </BtnReadMoreText>
            </TagP>
          </div>
        </DivGap>
        <DivGap>
          <div>
            <FireOutlined style={{ fontSize: "30px" }} />
          </div>
          <div>
            <TagH5>Phong là chủ nhà siêu cấp</TagH5>
            <TagP>
              Chủ nhà siêu cấp là chủ nhà có kinh nghiệm, được đánh giá cao và
              là những người cam kết mang lại thời gian ở tuyệt vời cho khách
              hàng.
            </TagP>
          </div>
        </DivGap>
        <DivGap>
          <div>
            <CalendarOutlined style={{ fontSize: "30px" }} />
          </div>
          <div>
            <TagH5>Miễn phí hủy trong 48 giờ.</TagH5>
          </div>
        </DivGap>
      </div>
      <StyledModal
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <DivMarginBottom bdb>
          <TagH1 size={32}>Vệ sinh tăng cường</TagH1>
        </DivMarginBottom>
        <div>
          <Row
            justify="space-between"
            style={{ marginTop: "10px", height: "450px", overflow: "scroll" }}
          >
            <Col md={11}>
              {dataReadMore.slice(0, 2).map((item, id) => {
                return (
                  <StyledDiv key={item.id}>
                    <TagH3>{item.title}</TagH3>
                    <TagP>{item.content}</TagP>
                  </StyledDiv>
                );
              })}
            </Col>
            <Col md={11}>
              {dataReadMore.slice(2, 4).map((item, id) => {
                return (
                  <StyledDiv key={item.id}>
                    <TagH3>{item.title}</TagH3>
                    <TagP>{item.content}</TagP>
                  </StyledDiv>
                );
              })}
            </Col>
          </Row>
        </div>
      </StyledModal>
    </DivMarginBottom>
  );
}
