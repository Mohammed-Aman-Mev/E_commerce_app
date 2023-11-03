import { Button, Card, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const Signup = () => {
  return (
    <div className="w-full h-full flex justify-center items-center pt-3.5">
      <Card className="p-5 h-auto w-auto mt-[70px]">
        <Box className="flex items-center justify-evenly flex-col h-[450px] w-[500px]">
          <Typography className="" variant="h4">
            Sign up
          </Typography>
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
          <TextField
            className=""
            label="password"
            variant="outlined"
            required
            type="password"
            name="password"
            fullWidth
          />
          <TextField
            className=""
            label="password confirm"
            variant="outlined"
            required
            type="password"
            name="password"
            fullWidth
          />
          <Button variant="contained" fullWidth>
            Sign up
          </Button>
          <Button variant="contained" fullWidth>
            Login
          </Button>
        </Box>
      </Card>
    </div>
  );
};

export default Signup;
