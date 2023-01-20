import { Box, Container, Typography } from "@mui/material";
import React from "react";
import ControlledAccordions from "../components/Accordian";
import QuiltedImageList from "../components/ImageCollage";

function Tour() {
  return (
    <Container>
      <Typography variant="h3" component="h1" marginTop={3}>
        Tour
      </Typography>
      <Box marginTop={3} sx={{ display: "flex" }}>
        <img
          src="https://i0.wp.com/thetowerinfo.com/wp-content/uploads/2018/01/lotte-world-tower-korea.jpg?resize=667%2C668&ssl=1"
          alt=""
          height={400}
          width={600}
        />
        <QuiltedImageList />
      </Box>
      <Box>
        <Typography>About</Typography>
        <Typography sx={{ marginBottom: 2 }}>
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum."
        </Typography>
        <ControlledAccordions />
      </Box>
    </Container>
  );
}

export default Tour;
