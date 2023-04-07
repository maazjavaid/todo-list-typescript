import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  Grid,
  Paper,
  Avatar,
  TextField,
  Button,
  Typography,
  Link,
} from "@mui/material";
import LockOutlined from "@mui/icons-material/LockOutlined";
import { IPropsFromLogin } from "state/ducks/users/types/redux";
import Loader from "components/Common/Loader";
import { IUser } from "state/ducks/users/types/utils";
import { UserLoginSchema } from "state/utils/data";
import AlertComponent from "components/Common/AlertComponent";
import { useNavigate } from "react-router-dom";

const Login: React.FC<IPropsFromLogin> = ({
  loading,
  error,
  alert,
  loginRequest,
}) => {
  const paperStyle = {
    padding: 20,
    height: "55vh",
    width: 300,
    margin: "0 auto",
  };
  const avatarStyle = { backgroundColor: "#1bbd7e", marginTop: "30px" };
  const btnstyle = { margin: "30px 0 30px 0" };

  const navigate = useNavigate();

  const { register, handleSubmit, reset } = useForm<IUser>({
    resolver: yupResolver(UserLoginSchema),
  });

  const onSubmit = async (data: IUser) => {
    loginRequest({
      _id: null,
      name: null,
      email: data.email,
      password: data.password,
      token: null,
    });
    setTimeout(() => {
      if (localStorage.getItem("token")) navigate("/todos");
    }, 1500);

    reset();
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <div style={{ margin: "0 auto" }}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid>
          <Paper style={paperStyle}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                marginBottom: "30px",
              }}
            >
              <Avatar style={avatarStyle}>
                <LockOutlined />
              </Avatar>
              <h2>Sign In</h2>
            </div>
            <TextField
              style={{ marginBottom: "30px" }}
              label="Email"
              {...register("email")}
              placeholder="Enter username"
              fullWidth
            />
            <TextField
              style={{ marginBottom: "30px" }}
              label="Password"
              {...register("password")}
              placeholder="Enter password"
              type="password"
              fullWidth
              required
            />

            <Button
              type="submit"
              color="primary"
              variant="contained"
              style={btnstyle}
              fullWidth
            >
              Sign in
            </Button>

            <Typography>
              {" "}
              Do you have an account ?<Link href="/register">Sign Up</Link>
            </Typography>
          </Paper>
        </Grid>
      </form>
      <AlertComponent {...alert} />
    </div>
  );
};

export default Login;
