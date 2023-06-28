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
            OUR STORY
          </Typography>
          <Typography variant="body1" gutterBottom>
            I wanted to start Like an Athlete Fitness for those who love integrating an athletic component into their workouts. 
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
