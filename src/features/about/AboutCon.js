import { Button, Container, Typography, useMediaQuery } from "@mui/material";
import aboutImg from "../../img/about-1.jpg";
import { Link } from "react-router-dom";

const AboutCon = ({ row }) => {
  const isScreenBellow900px = useMediaQuery("(max-width:920px)");
  const isScreenBellow600px = useMediaQuery("(max-width:600px)");

  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: isScreenBellow900px ? "column-reverse" : row,
        alignItems: "center",
        justifyContent: "center",
        paddingY: "9.6rem",
        gap: 3,
      }}
    >
      <div>
        <img src={aboutImg} alt="imgabout" />
      </div>
      <div className="max-w-[573px]">
        <Typography
          variant="h4"
          sx={{
            color: "#ED4E53",
            fontWeight: 700,
            fontSize: isScreenBellow600px ? "15px" : "21px",
            lineHeight: "29px",
          }}
        >
          Enjoy Best Pizza
        </Typography>
        <Typography
          variant="h2"
          sx={{
            fontWeight: 700,
            fontSize: isScreenBellow600px ? "30px" : "40px",
            lineHeight: isScreenBellow600px ? "40px" : "54px",
          }}
        >
          Serving perfect Italian pizza since 1950
        </Typography>
        <div>
          <Typography
            variant="subtitle1"
            sx={{
              fontWeight: 300,
              fontSize: isScreenBellow600px ? "15px" : "20px",
              lineHeight: isScreenBellow600px ? "20px" : "27px",
            }}
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </Typography>
          <Typography
            variant="subtitle1"
            sx={{
              fontWeight: 300,
              fontSize: isScreenBellow600px ? "15px" : "20px",
              lineHeight: isScreenBellow600px ? "20px" : "27px",
              marginY: "20px",
            }}
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.Lorem Ipsum has been the industry's standard dummy text
          </Typography>
        </div>
        <Link to="/menu">
          <Button
            variant="contained"
            sx={{
              fontSize: isScreenBellow600px ? "10px" : "16px",
              bgcolor: "#ED4E53",
              "&:hover": {
                bgcolor: "#d5464b",
              },
            }}
          >
            CHECK OUR MENU
          </Button>
        </Link>
      </div>
    </Container>
  );
};

export default AboutCon;
