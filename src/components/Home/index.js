import React from "react";
import { Box, Typography, Button, Popover, ImageListItem, ImageList } from "@mui/material";

import dracsZoom from '../../assets/Dracs Zoom.png';
import flag from '../../assets/Flag.png';
import benchPic from '../../assets/benchPic.png';
import leaders from '../../assets/Leaders.jpeg';
import photoshoot from '../../assets/Photoshoot.png';
import photoshoot2 from '../../assets/Photoshoot2.png';
import sanJuanCoaching from '../../assets/SanJuanCoaching.PNG';
import TVPic from '../../assets/TVPic.png';


const HomePage = () => {
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
      <Typography variant="h4" gutterBottom>
        LIKE AN ATHLETE FITNESS
      </Typography>
      <Typography variant="body1" gutterBottom>
        When you train with Like an Athlete Fitness, you incorprate various different exercises and workouts stemming from the workouts of sport specific athletes based on your goals and workout preferences. We don't want anyone feeling like their boxed into a cornder when it comes to getting a good workout. Whether you go to a gym, at your house, or enjoy an outdoor workout, our vision is to bring you a dynamic and enjoyable workout that allows for freedom and tangible results.
      </Typography>
      <Button aria-describedby={id} variant="contained" onClick={handleClick}>
        Get Started
      </Button>
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
      <Box sx={{ width: 500, height: 450, overflowY: "scroll", margin: "0 auto" }}>
        <ImageList variant="masonry" cols={3} gap={8} sx={{ justifyContent: "center" }}>
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
    img: dracsZoom,
  },
  {
    img: flag,
  },
  {
    img: benchPic,
  },
  {
    img: leaders,
  },
  {
    img: photoshoot,
  },
  {
    img: photoshoot2,
  },
  {
    img: TVPic,
  },
  {
    img: sanJuanCoaching
  }
];

export default HomePage;
