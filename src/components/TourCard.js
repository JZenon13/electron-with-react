import React from "react";
import { Paper, Grid, Typography, Box } from "@mui/material";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import Rating from "@mui/material/Rating";
import { createTheme, ThemeProvider } from "@mui/material";

const theme = createTheme({
  components: {
    MuiTypography: {
      variants: [
        {
          props: {
            variant: "body2",
          },
          style: {
            fontSize: 11,
          },
        },
        {
          props: {
            variant: "body3",
          },
          style: {
            fontSize: 9,
          },
        },
      ],
    },
  },
});

function TourCard({ tour }) {
  return (
    <Grid item xs={3}>
      <ThemeProvider theme={theme}>
        <Paper>
          <img className="img" src={tour.image} alt="" />
          <Box paddingX={1}>
            <Typography variant="subtitle1" component="h2">
              {tour.name}
            </Typography>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <MusicNoteIcon sx={{ width: 12.5 }} />
            <Typography variant="body2" component="p" marginLeft={0.5}>
              {tour.duration}
            </Typography>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Rating
              name="read-only"
              value={4.5}
              defaultValue={4.5}
              readOnly
              precision={0.5}
              size="small"
            />
            <Typography variant="body2" component="p" marginLeft={0.5}>
              {tour.rating}
            </Typography>
            <Typography variant="body2" component="p" marginLeft={1.5}>
              {tour.reviews}
            </Typography>
          </Box>
          <Box>
            <Typography variant="h6" component="h3" marginLeft={0}>
              $100
            </Typography>
          </Box>
        </Paper>
      </ThemeProvider>
    </Grid>
  );
}

export default TourCard;
