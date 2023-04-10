import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  Grid,
  Paper,
  Avatar,
  Typography,
  TextField,
  Button,
  Link,
} from "@mui/material";
import AddCircleOutlineRounded from "@mui/icons-material/AddCircleOutlineRounded";
import Loader from "components/Common/Loader";
import AlertComponent from "components/Common/AlertComponent";
import { IPropsFromRegister } from "state/ducks/users/types/redux";
import { UserRegisterSchema } from "state/utils/data";
import { IUser } from "state/ducks/users/types/utils";

const Register: React.FC<IPropsFromRegister> = ({
  loading,
  error,
  alert,
  registerRequest,
}) => {
  const paperStyle = {
    padding: 20,
    width: 300,
    margin: "0 auto",
    height: "55vh",
  };
  const headerStyle = { margin: 0 };
  const avatarStyle = { backgroundColor: "#1bbd7e" };

  const { register, handleSubmit, reset } = useForm<IUser>({
    resolver: yupResolver(UserRegisterSchema),
  });

  const onSubmit = (data: IUser) => {
    registerRequest({
      _id: null,
      name: data.name,
      email: data.email,
      password: data.password,
      token: null,
    });
    reset();
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <div style={{ margin: "0 auto" }}>
      <Grid>
        <Paper className="register-paper" style={paperStyle}>
          <div
            className="register-header"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              marginBottom: "30px",
            }}
          >
            <Avatar style={avatarStyle}>
              <AddCircleOutlineRounded />
            </Avatar>
            <h2 style={headerStyle}>Sign Up</h2>
            <Typography variant="caption" gutterBottom>
              Please fill this form to create an account !
            </Typography>
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <TextField
              className="register-textfield"
              style={{
                marginBottom: "30px",
              }}
              fullWidth
              label="Name"
              placeholder="Enter your name"
              {...register("name")}
            />
            <TextField
              style={{
                marginBottom: "30px",
              }}
              fullWidth
              type="email"
              label="Email"
              placeholder="Enter your email"
              {...register("email")}
            />

            <TextField
              style={{
                marginBottom: "30px",
              }}
              type="password"
              fullWidth
              label="Password"
              placeholder="Enter your password"
              {...register("password")}
            />

            <Button type="submit" variant="contained" color="primary" fullWidth>
              Sign up
            </Button>
            <Typography style={{ marginTop: "30px" }}>
              {" "}
              Already have an account ?<Link href="/">Login</Link>
            </Typography>
          </form>
        </Paper>
      </Grid>
      <AlertComponent {...alert} />
    </div>
  );
};

export default Register;
