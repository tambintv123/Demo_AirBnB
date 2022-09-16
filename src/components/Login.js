import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import { actFetchData } from "store/actions/getAuth";
import { Alert, AlertTitle } from "@mui/material";

const theme = createTheme();

export default function SignInSide() {
  const dispatch = useDispatch();
  const { getAuth, error } = useSelector((state) => state.getAuthReducer);
  const navigate = useNavigate();
  console.log(error?.message);
  const ref = React.useRef({
    email: "",
    password: "",
  });

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    ref.current[name] = value;
  };

  const renderNoti = () => {
    return (
      error && (
        <div>
          <Alert severity="error">
            <AlertTitle>{error.response?.data.content}</AlertTitle>
          </Alert>
        </div>
      )
    );
  };

  if (localStorage.getItem("UserCustomer")) {
    return <Navigate replace to="/" />;
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(actFetchData(ref.current, navigate));
  };
  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: "100vh" }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage:
              "url(http://datphongresort.com/wp-content/uploads/2019/04/Evason-Ana-Mandara.jpg)",
            backgroundRepeat: "no-repeat",
            backgroundColor: (t) =>
              t.palette.mode === "light"
                ? t.palette.grey[50]
                : t.palette.grey[900],
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Đăng nhập
            </Typography>
            {renderNoti()}
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 1 }}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Địa chỉ email"
                name="email"
                autoComplete="email"
                autoFocus
                onChange={handleOnChange}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Mật khẩu"
                type="password"
                id="password"
                autoComplete="current-password"
                onChange={handleOnChange}
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Ghi nhớ mật khẩu"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Đăng nhập
              </Button>
              <Grid container>
                <Grid item>
                  <Link href="#" variant="body2">
                    {"Chưa có tài khoản? Đăng ký"}
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
