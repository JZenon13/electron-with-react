import React from "react";
import TourCard from "../components/TourCard";
import { Container } from "@mui/system";
import { Grid, Typography } from "@mui/material";
import cities from "../components/data.json";

function Home() {
  return (
    <div className="App">
      <Container sx={{ marginY: 5 }}>
        {cities.map((city) => {
          return (
            <>
              <Typography
                variant="h4"
                component="h2"
                marginTop={5}
                marginBottom={3}
              >
                {city.name} Tours
              </Typography>
              <Grid container spacing={5}>
                {city.tours.map((tour, index) => {
                  return (
                    <>
                      <TourCard tour={tour} key={index} />
                    </>
                  );
                })}
              </Grid>
            </>
          );
        })}
      </Container>
    </div>
  );
}

export default Home;
