import Booking from "containers/BookingRoom";
import DescriptionRoom from "containers/DescriptionRoom";
import ImageRoom from "containers/ImageRoom";
import { Container } from "containers/ImageRoom/styled";
import InfoRoom from "containers/InfoRoom";
import ReviewRoom from "containers/ReviewRoom";
import ServicesRoom from "containers/ServicesRoom";
import React from "react";
import { Col, Row } from "antd";
import CssBaseline from "@mui/material/CssBaseline";
import { StyledDiv } from "./styled";
import Slider from "components/Slider";
import Box from "@mui/material/Box";
import { displayOnDesktop } from "themes/commonStyles";

export default function DetailRoomPage() {
  return (
    <>
      <CssBaseline />
      <Container>
        <StyledDiv>
          <Box sx={displayOnDesktop}>
            <ImageRoom />
          </Box>
          <Box sx={{ display: { xs: "block", md: "none" } }}>
            <Slider />
          </Box>
        </StyledDiv>
        <Box sx={{ display: { xs: "none", md: "block" }, marginTop: "15px" }}>
          <Row justify="space-between">
            <Col span={14}>
              <InfoRoom />
              <DescriptionRoom />
              <ServicesRoom />
            </Col>
            <Col span={8}>
              <Booking />
            </Col>
          </Row>
        </Box>

        <Box
          sx={{ display: { xs: "block", md: "none" }, marginBottom: "2rem" }}
        >
          <InfoRoom />
          <DescriptionRoom />
          <ServicesRoom />
          <Booking />
        </Box>
        <ReviewRoom />
      </Container>
    </>
  );
}
