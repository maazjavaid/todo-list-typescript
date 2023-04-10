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
import "./register.css";
import { IPropsFromRegister } from "state/ducks/users/types/redux";
import { UserRegisterSchema } from "state/utils/data";
import { IUser } from "state/ducks/users/types/utils";

const Register: React.FC<IPropsFromRegister> = ({
  loading,
  error,
  alert,
  registerRequest,
}) => {
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
    <div>
      <Grid>
        <Paper className="register-paper">
          <div className="register-avatar">
            <Avatar className="register-avatar-logo">
              <AddCircleOutlineRounded />
            </Avatar>
            <h2>Sign Up</h2>
            <Typography variant="caption" gutterBottom>
              Please fill this form to create an account !
            </Typography>
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <TextField
              className="register-textfield"
              fullWidth
              label="Name"
              placeholder="Enter your name"
              {...register("name")}
            />
            <TextField
              className="register-textfield"
              fullWidth
              type="email"
              label="Email"
              placeholder="Enter your email"
              {...register("email")}
            />

            <TextField
              className="register-textfield"
              type="password"
              fullWidth
              label="Password"
              placeholder="Enter your password"
              {...register("password")}
            />

            <Button
              className="register-button"
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
            >
              Sign up
            </Button>
            <Typography>
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
