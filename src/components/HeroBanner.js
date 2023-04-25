/** @format */

import React from "react";
import { Box, Typography, Button } from "@mui/material";

const HeroBanner = () => {
  return (
    <Box
      sx={{
        mt: { lg: "212px", xs: "70px" },
        ml: { s: "50px" },
      }}
      position="relative"
      p="20px"
    >
      <Typography color="#FFFFFF" fontWeight="600" fontSize="26px">
        Work Harder App
      </Typography>
      <Typography
        fontWeight={700}
        sx={{ fontSize: { lg: "44px", xs: "40px" } }}
        mb="23px"
        mt="30px"
        color="#FFFFFF"
      >
        If It Doesn't Challenge You <br /> It Doesn't Change You
      </Typography>
      <Typography fontSize="22px" lineHeight="35px" mb={4} color="#FFFFFF">
        Check out the most effective exercises{" "}
      </Typography>
      <Button
        variant="contained"
        color="error"
        href="#exercises"
        sx={{ backgroundColor: "#ff2625", padding: "10px" }}
      >
        Explore Exercises
      </Button>
      <Typography
        fontWeight={600}
        fontSize="200px"
        color="#FFFFFF"
        sx={{ opacity: 0.1, display: { lg: "block", xs: "none" } }}
      >
        Exercise
      </Typography>
    </Box>
  );
};

export default HeroBanner;
