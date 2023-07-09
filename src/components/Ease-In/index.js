import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Grid,
  createTheme,
  ThemeProvider
} from "@mui/material";

const theme = createTheme({
  typography: {
    fontFamily: "Andale Mono, monospace",
    h5: {
      fontSize: "1.5rem",
      fontWeight: 600
    },
    h6: {
      fontSize: "1.2rem",
      fontWeight: 500
    },
    body1: {
      fontSize: "1rem",
      fontWeight: 400
    }
  },
  palette: {
    background: {
      default: "#0D47A1" // Dark grey color
    }
  }
});

const EaseIn = () => {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <Typography variant="h5" component="div" sx={{ ml: 2 }}>
          Ease-In Exercises
        </Typography>
        <Grid container spacing={2} sx={{ marginTop: 2 }}>
          <Grid item xs={12} sm={6} md={4}>
            <Card variant="outlined" sx={{ backgroundColor: "#0D47A1" }}>
              {/* Dark grey background color */}
              <CardContent>
                <Typography variant="h6" component="h3" sx={{ color: "white" }}>
                  Dynamic Warm Up
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  <ul>
                    <li>
                      <Typography variant="body1" sx={{ color: "white" }}>
                        3.5-4 mins on the Stair Machine at low level (2-4)
                        regular steps
                      </Typography>
                    </li>
                    <li>
                      <Typography variant="body1" sx={{ color: "white" }}>
                        1.5-2 mins on Stair Machine at higher level (5-7) lunge
                        steps
                      </Typography>
                    </li>
                    <li>
                      <Typography variant="body1" sx={{ color: "white" }}>
                        1-2 mins at 50% of full strength row machine. (On a
                        scale of 1-10, level 5)
                      </Typography>
                    </li>
                  </ul>
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card variant="outlined" sx={{ backgroundColor: "#0D47A1" }}>
              {/* Dark grey background color */}
              <CardContent>
                <Typography variant="h6" component="h3" sx={{ color: "white" }}>
                  Shoulder Exercises
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  <ul>
                    <Typography sx={{ color: "white" }}>
                      <b>
                        <u>A-Block</u>
                      </b>
                    </Typography>
                    <li>
                      <Typography variant="body1" sx={{ color: "white" }}>
                        Front/side Lat raises (using a 2.5-10 lb DB or plate){" "}
                        <b>
                          <i>4 sets, 8 reps each</i>
                        </b>
                      </Typography>
                    </li>
                    <li>
                      <Typography variant="body1" sx={{ color: "white" }}>
                        Pull-ups (use assistance as needed, whether that's a
                        band, machine, etc.){" "}
                        <b>
                          <i>4 sets, 8-10 reps</i>
                        </b>
                      </Typography>
                    </li>
                    <Typography sx={{ color: "white" }}>
                      <b>
                        <u>B-Block</u>
                      </b>
                    </Typography>
                    <li>
                      <Typography variant="body1" sx={{ color: "white" }}>
                        Landmine single-arm shoulder press from a knee.{" "}
                        <b>
                          <i>4 sets, 6-8 reps each arm</i>
                        </b>
                      </Typography>
                    </li>
                    <li>
                      <Typography variant="body1" sx={{ color: "white" }}>
                        Single-arm standing alternating shoulder press{" "}
                        <b>
                          <i>4 sets, 6 reps each arm</i>
                        </b>
                      </Typography>
                    </li>
                    <li>
                      <Typography variant="body1" sx={{ color: "white" }}>
                        TRX Curcuit 1 (Plank & Y's){" "}
                        <b>
                          <i>3 sets of 10 on the Y's, 30-45 sec plank</i>
                        </b>
                      </Typography>
                    </li>
                  </ul>
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card variant="outlined" sx={{ backgroundColor: "#0D47A1" }}>
              <CardContent>
                <Typography variant="h6" component="h3" sx={{ color: "white" }}>
                  Chest Exercises
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  <ul>
                    <Typography sx={{ color: "white" }}>
                      <b>
                        <u>A-Block</u>
                      </b>
                    </Typography>
                    <li>
                      <Typography variant="body1" sx={{ color: "white" }}>
                        Push ups (start on your knees if needed){" "}
                        <b>
                          <i>3 sets, 10-12 reps</i>
                        </b>
                      </Typography>
                    </li>
                    <li>
                      <Typography variant="body1" sx={{ color: "white" }}>
                        Cable six-inch Stabalizers{" "}
                        <b>
                          <i>3 sets, 10 reps</i>
                        </b>
                      </Typography>
                    </li>
                    <Typography sx={{ color: "white" }}>
                      <b>
                        <u>B-Block</u>
                      </b>
                    </Typography>
                    <li>
                      <Typography variant="body1" sx={{ color: "white" }}>
                        Single-arm Bench Press (using machine){" "}
                        <b>
                          <i>5 sets, reps are 10, 8, 6, 8, 10 each arm</i>
                        </b>
                      </Typography>
                    </li>
                    <li>
                      <Typography variant="body1" sx={{ color: "white" }}>
                        Explosive Bench Press (using machine){" "}
                        <b>
                          <i>Lighter weight, 4 sets, 10 reps</i>
                        </b>
                      </Typography>
                    </li>
                    <li>
                      <Typography variant="body1" sx={{ color: "white" }}>
                        Single-arm Incline Press (using machine){" "}
                        <b>
                          <i>5 sets, reps are 10, 8, 6, 8, 10 each arm</i>
                        </b>
                      </Typography>
                    </li>
                    <li>
                      <Typography variant="body1" sx={{ color: "white" }}>
                        Explosive Incline Press (using machine){" "}
                        <b>
                          <i>Lighter weight, 4 sets, 10 reps</i>
                        </b>
                      </Typography>
                    </li>
                  </ul>
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card variant="outlined" sx={{ backgroundColor: "#0D47A1" }}>
              {/* Dark grey background color */}
              <CardContent>
                <Typography variant="h6" component="h3" sx={{ color: "white" }}>
                  Back Exercises
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  <ul>
                    <Typography sx={{ color: "white" }}>
                      <b>
                        <u>A-Block</u>
                      </b>
                    </Typography>
                    <li>
                      <Typography variant="body1" sx={{ color: "white" }}>
                        Pull-ups (use assistance as needed, whether that's a
                        band, machine, etc.){" "}
                        <b>
                          <i>4 sets, 8-10 reps</i>
                        </b>
                      </Typography>
                    </li>
                    <li>
                      <Typography variant="body1" sx={{ color: "white" }}>
                        Cable Rip-through Flies{" "}
                        <b>
                          <i>3 sets, 8-10 reps</i>
                        </b>
                      </Typography>
                    </li>
                    <li>
                      <Typography variant="body1" sx={{ color: "white" }}>
                        Cable Face-pulls{" "}
                        <b>
                          <i>3 sets, 8-10 reps</i>
                        </b>
                      </Typography>
                    </li>
                    <li>
                      <Typography variant="body1" sx={{ color: "white" }}>
                        TRX Rows{" "}
                        <b>
                          <i>3 sets, 10 reps</i>
                        </b>
                      </Typography>
                    </li>
                    <Typography sx={{ color: "white" }}>
                      <b>
                        <u>B-Block</u>
                      </b>
                    </Typography>
                    <li>
                      <Typography variant="body1" sx={{ color: "white" }}>
                        Barbell Bent Row{" "}
                        <b>
                          <i>4 sets, 10 reps</i>
                        </b>
                      </Typography>
                    </li>
                    <li>
                      <Typography variant="body1" sx={{ color: "white" }}>
                        Single-arm assisted DB Bent Row{" "}
                        <b>
                          <i>4 sets, 8 reps each arm</i>
                        </b>
                      </Typography>
                    </li>
                  </ul>
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card variant="outlined" sx={{ backgroundColor: "#0D47A1" }}>
              {/* Dark grey background color */}
              <CardContent>
                <Typography variant="h6" component="h3" sx={{ color: "white" }}>
                  Lower Body Exercises
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  <ul>
                    <Typography sx={{ color: "white" }}>
                      <b>
                        <u>A-Block</u>
                      </b>
                    </Typography>
                    <li>
                      <Typography variant="body1" sx={{ color: "white" }}>
                        Body-weight Hip Bridge{" "}
                        <b>
                          <i>4 sets, 10 reps</i>
                        </b>
                      </Typography>
                    </li>
                    <li>
                      <Typography variant="body1" sx={{ color: "white" }}>
                        Single Leg Hip Bridge{" "}
                        <b>
                          <i>3 sets, 8 reps each leg</i>
                        </b>
                      </Typography>
                    </li>
                    <li>
                      <Typography variant="body1" sx={{ color: "white" }}>
                        Cable Face-pulls{" "}
                        <b>
                          <i>3 sets, 8-10 reps</i>
                        </b>
                      </Typography>
                    </li>
                    <li>
                      <Typography variant="body1" sx={{ color: "white" }}>
                        TRX Rows{" "}
                        <b>
                          <i>3 sets, 10 reps</i>
                        </b>
                      </Typography>
                    </li>
                    <Typography sx={{ color: "white" }}>
                      <b>
                        <u>B-Block</u>
                      </b>
                    </Typography>
                    <li>
                      <Typography variant="body1" sx={{ color: "white" }}>
                        Walking Lunges{" "}
                        <b>
                          <i>4 sets, 6 each leg</i>
                        </b>
                      </Typography>
                    </li>
                    <li>
                      <Typography variant="body1" sx={{ color: "white" }}>
                        Step Ups{" "}
                        <b>
                          <i>4 sets, 6 reps each leg</i>
                        </b>
                      </Typography>
                    </li>
                    <li>
                      <Typography variant="body1" sx={{ color: "white" }}>
                        TRX Squats{" "}
                        <b>
                          <i>4 sets, 10 reps</i>
                        </b>
                      </Typography>
                    </li>
                  </ul>
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </div>
    </ThemeProvider>
  );
};

export default EaseIn;
