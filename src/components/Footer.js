/** @format */

import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import Logo from "../assets/icons/equipment.png";

const Footer = () => {
  return (
    <Box mt="80px" bgcolor="none">
      <Stack gap="40px" alignItems="center" px="40px" pt="24px">
        <img src={Logo} alt="logo" height="40px" />
        <Typography pb="10px" mt="10px" color="#ffffff">
          © 2022 - 2023. All rights reserved. Designed by Nick Kim
        </Typography>
      </Stack>
    </Box>
  );
};

export default Footer;
