import { Col, Row } from "antd";
import BoxPersonal from "containers/BoxPersonal";
import { Container } from "containers/ImageRoom/styled";
import InfoPersonal from "containers/InfoPersonal";
import React from "react";
import Box from "@mui/material/Box";
import { displayOnDesktop } from "themes/commonStyles";

export default function PersonalPage() {
  return (
    <>
      <Container>
        <Box sx={displayOnDesktop}>
          <Row style={{ height: "81vh" }} justify="space-between">
            <Col style={{ marginTop: "1rem" }} span={8}>
              <BoxPersonal />
            </Col>
            <Col style={{ marginTop: "1rem" }} span={15}>
              <InfoPersonal />
            </Col>
          </Row>
        </Box>
        <Box sx={{ display: { xs: "block", md: "none" } }}>
          <Row>
            <Col style={{ marginTop: "1rem" }} span={24}>
              <BoxPersonal />
            </Col>
            <Col style={{ marginTop: "1rem" }} span={24}>
              <InfoPersonal />
            </Col>
          </Row>
        </Box>
      </Container>
    </>
  );
}
