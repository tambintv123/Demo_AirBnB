import React, { useState } from "react";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

// react icons
import { BsGlobe } from "react-icons/bs";
import { AiOutlineMenu } from "react-icons/ai";
import { FaRegUserCircle } from "react-icons/fa";
import { flexCenter } from "themes/commonStyles";
import { ButtonLog, DivLog, LinkRouter } from "pages/LoginPage/styled";
import { useNavigate } from "react-router-dom";

const ProfileSettings = () => {
  const [display, setDisplay] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => {
    setDisplay(!display);
  };
  const renderUser = () => {
    if (localStorage.getItem("UserCustomer")) {
      return (
        <>
          <div>
            <ButtonLog
              onClick={() => {
                setDisplay(false);
              }}
            >
              <LinkRouter to={`/personal-page`}>Trang cá nhân</LinkRouter>
            </ButtonLog>
          </div>
          <div>
            <ButtonLog
              onClick={() => {
                localStorage.removeItem("UserCustomer");
                navigate("/");
                setDisplay(false);
              }}
            >
              <LinkRouter to={``}>Đăng xuất</LinkRouter>
            </ButtonLog>
          </div>
        </>
      );
    } else {
      return (
        <>
          <div>
            <ButtonLog>
              <LinkRouter className="login" to={`/login`}>
                Đăng nhập
              </LinkRouter>
            </ButtonLog>
          </div>
          <div>
            <ButtonLog>
              <LinkRouter className="register" to={``}>
                Đăng ký
              </LinkRouter>
            </ButtonLog>
          </div>
        </>
      );
    }
  };

  return (
    <Box sx={flexCenter}>
      <Link href="#"> Become A Host</Link>
      <Stack direction="row" sx={{ position: "relative" }}>
        <Button>
          <BsGlobe size={24} />
        </Button>
        <Button
          sx={{
            borderRadius: 10,
            border: "1px solid #ddd",
          }}
          onClick={handleClick}
        >
          <Stack direction="row">
            <AiOutlineMenu size={24} />
            <FaRegUserCircle size={24} />
          </Stack>
        </Button>
      </Stack>
      <DivLog active={display}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "start",
          }}
        >
          {renderUser()}
        </Box>
      </DivLog>
    </Box>
  );
};

export default ProfileSettings;
