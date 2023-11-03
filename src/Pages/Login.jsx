import React from "react";
import { Button, TextField, Box, Typography, Card } from "@mui/material";
import { login } from "../redux/authSlice";
// import Box from "@mui/material";

const Login = () => {
  return (
    <div className="w-full h-full flex justify-center items-center pt-3.5">
      <Card className="mt-[140px] p-5 h-auto w-auto">
        <Box className="flex items-center justify-evenly flex-col h-[280px] w-[500px]">
          <Typography variant="h4">Log In</Typography>
          <TextField
            className=""
            label="username"
            variant="outlined"
            required
            name="name"
            fullWidth
          />
          <TextField
            className=""
            label="email"
            variant="outlined"
            required
            type="email"
            name="email"
            fullWidth
          />
          <Button variant="outlined" fullWidth onClick={()=>login}>
            Log In
          </Button>
        </Box>
      </Card>
    </div>
  );
};

export default Login;
