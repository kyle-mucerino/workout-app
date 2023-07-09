import React from "react";
import {
  Box,
  Typography,
  Button,
  Popover,
  ImageListItem,
  ImageList,
  CardContent,
  Card
} from "@mui/material";

import dracsZoom from "../../assets/Dracs Zoom.png";
import flag from "../../assets/Flag.png";
import benchPic from "../../assets/benchPic.png";
import leaders from "../../assets/Leaders.jpeg";
import photoshoot from "../../assets/Photoshoot.png";
import photoshoot2 from "../../assets/Photoshoot2.png";
import sanJuanCoaching from "../../assets/SanJuanCoaching.PNG";
import TVPic from "../../assets/TVPic.png";

const AboutPage = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "popover" : undefined;

  return (
    <Box sx={{ textAlign: "center", padding: "2rem" }}>
      <Card variant="outlined">
        <CardContent>
          <Typography variant="h4" gutterBottom>
            <b><i>KYLE'S VISION FOR YOU</i></b>
          </Typography>
          <Typography variant="body1" gutterBottom>
            I've placed various exercises grouped by body part into three
            different levels of difficulty. Once you've mastered the exercises
            in the 'Ease-In' level you should move on to 'Step-Up', and so
            forth. I believe in building strength while maintaining flexibility
            and body mobility and the exercises reflect that. Becoming strong
            does not mean you should become stiff as a board. For myself, a key
            part of that are supersets and maintaining skeletal balance during
            workouts. What does that mean? Well, if I am doing a chest exercise,
            that means I am super setting with a back exercise (for every push
            exercise, you need a pull exercise).
          </Typography>
          <Typography variant="body1" gutterBottom>
            With all that said however, I was tempted to not group these
            exercises by body part because although every exercises is focused
            on a specific part of the body, they are all still full-body
            exercises. A big part of maintaing flexibility and a strong kinetic
            structure is utlizing every muscle on every exercise. Every exercise
            listed, whether it's Bench Press or Bulgarian Squat, is also a core
            exercise. Our ability to workout hard and feel well all starts with
            our core, and that paves the way for a strong kinetic skeletal
            structure.
          </Typography>
          <Typography variant="body1" gutterBottom>
            So what does that mean exactly? Well that means that the standard exercises here that you may recognize probably have a twist on them. For example, when we Bench Press, we're not digging our feet into the ground, throwing our hips into the air, and arching our backs to push as much weight as possible. Contrastly, we have our feet in the air, bent at the knee, and crossed in front. We activate our core, tuck our scaps into position, and use very concentrated and deliberate reps, maintaining our core strength and focused breathing.  
          </Typography>
          <Button
            aria-describedby={id}
            variant="contained"
            onClick={handleClick}
          >
            Get Started
          </Button>
        </CardContent>
      </Card>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left"
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
            padding: "1rem"
          }}
        >
          <Typography>First time? -> visit the Ease-In page</Typography>
          <Typography>More of a Vet? -> visit the Step-Up page</Typography>
          <Typography>Big-time athlete? -> visit the All-In page</Typography>
        </Box>
      </Popover>
      <Box
        sx={{ width: 500, height: 450, overflowY: "scroll", margin: "0 auto" }}
      >
        <ImageList
          variant="masonry"
          cols={3}
          gap={8}
          sx={{ justifyContent: "center" }}
        >
          {itemData.map((item) => (
            <ImageListItem key={item.img}>
              <img
                src={`${item.img}?w=248&fit=crop&auto=format`}
                srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                alt={item.title}
                loading="lazy"
              />
            </ImageListItem>
          ))}
        </ImageList>
      </Box>
    </Box>
  );
};

const itemData = [
  {
    img: dracsZoom
  },
  {
    img: flag
  },
  {
    img: benchPic
  },
  {
    img: leaders
  },
  {
    img: photoshoot
  },
  {
    img: photoshoot2
  },
  {
    img: TVPic
  },
  {
    img: sanJuanCoaching
  }
];

export default AboutPage;
