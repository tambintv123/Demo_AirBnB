import { Box } from "@mui/material";
import Footer from "components/Footer";
import FooterMenu from "components/FooterMenu";
import Header from "components/Header";
import React from "react";
import { displayOnDesktop } from "themes/commonStyles";

export default function Customer(props) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "100vh",
      }}
    >
      <Box>
        <Header />
      </Box>
      {props.children}
      <Box sx={{ display: { xs: "flex", md: "none" } }}>
        <FooterMenu />
      </Box>
      <Box sx={displayOnDesktop}>
        <Footer />
      </Box>
    </Box>
  );
}
