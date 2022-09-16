import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import LocationCards from "components/LocationCards";
import React from "react";
import "./../../App.css";
import MobileFooter from "components/MobileFooter";
import OptionsTab from "components/OptionsTab";

export default function HomePage() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          height: "100vh",
        }}
      >
        <OptionsTab />

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            flexGrow: 1,
            height: 100,
            overflowY: "scroll",
          }}
        >
          <Container maxWidth="xl" sx={{ mb: 3 }}>
            <LocationCards />
            <Box
              sx={{
                display: { xs: "flex", md: "none" },
              }}
            >
              <MobileFooter />
            </Box>
          </Container>
        </Box>
      </Box>
    </React.Fragment>
  );
}
